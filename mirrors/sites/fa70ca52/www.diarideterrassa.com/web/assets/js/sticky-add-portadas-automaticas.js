(function () {
    let handleScroll;
    let adsInitialized = false;
  
    function getHeaderOffset() {
      const header = $('.wrap-HEADER');
      const nav = $('.wrap-NAV');
  
      let offset = 0;
      if (header.length && header.css('position') === 'fixed') {
        offset += header.outerHeight();
      }
      if (nav.length && nav.css('position') === 'fixed') {
        offset += nav.outerHeight();
      }
  
      return offset;
    }
  
    function ajustarAlturaUltimoRoba() {
      const contenidoIzq = $('.CONTENIDO-IZQ');
      const columnaDer = $('.CONTENIDO-DER.wrap-SIMPLE');
      if (contenidoIzq.length === 0 || columnaDer.length === 0) return;
  
      const robas = columnaDer.children('div[id^="roba_desktop_"]');
      if (robas.length === 0) return;
  
      const ultimoRoba = robas.last();
      const bottomIzq = contenidoIzq.offset().top + contenidoIzq.outerHeight() - 24;
      const bottomRoba = ultimoRoba.offset().top + ultimoRoba.outerHeight();
  
      const espacioExtra = bottomIzq - bottomRoba;
  
      if (espacioExtra > 0) {
        const nuevaAltura = ultimoRoba.outerHeight() + espacioExtra;
  
        ultimoRoba.css({
          'max-height': `${nuevaAltura}px`,
          'height': '100%',
        });
  
        const hijos = ultimoRoba.children('div');
        hijos.eq(0).css('height', '100%');
        hijos.eq(1).css('height', '100%');
      }
    }
  
    function iniciarStickyRobas() {
      if ($(window).width() <= 991) return;
      if (adsInitialized) return;
      adsInitialized = true;
  
      const columnaDer = $('.CONTENIDO-DER.wrap-SIMPLE');
      if (columnaDer.length === 0) return;
  
      const robas = columnaDer.children('div[id^="roba_desktop_"]');
      if (robas.length === 0) return;
  
      handleScroll = function () {
        const headerOffset = getHeaderOffset();
        const ultimoRoba = robas.last();
  
        robas.each(function () {
          const roba = $(this);
  
          // Detectamos el iframe (si existe)
          const adIframe = roba.find('div[id^="google_ads_iframe_"]').first();
          const adContent = roba.find('div[id^="div-gpt-ad"]').first().length
            ? roba.find('div[id^="div-gpt-ad"]').first()
            : roba.children(':not(script)').first();
  
          // Para sticky usaremos el iframe si existe, si no, el adContent
          const target = adIframe.length ? adIframe : adContent;
          if (!target.length) return;
  
          const targetHeight = target.outerHeight();
          const parentHeight = roba.outerHeight();
  
          const robaRect = roba[0].getBoundingClientRect();
          const topDistance = robaRect.top;
          const bottomDistance = robaRect.bottom;
          const espacioScroll = roba[0].scrollHeight - targetHeight;
  
          // Si el espacio es muy chico, no aplicar sticky
          if (espacioScroll < 80) {
            target.removeClass('fixed_add stick-bottom').css({
              position: 'static',
              top: 'auto',
              bottom: 'auto',
            });
            return;
          }
  
          // Limpiar siempre antes de aplicar
          target.removeClass('fixed_add stick-bottom').css({
            position: 'static',
            top: 'auto',
            bottom: 'auto',
          });
  
          const isHeaderFixed = headerOffset > 0;
  
          if (isHeaderFixed && topDistance <= headerOffset && (bottomDistance - headerOffset) > targetHeight) {
            target.addClass('fixed_add').css({
              position: 'fixed',
              top: `${headerOffset}px`,
            });
          } else if ((bottomDistance - headerOffset) <= targetHeight) {
            target.addClass('stick-bottom').css({
              position: 'absolute',
              bottom: '0',
            });
          }
        });
  
        ajustarAlturaUltimoRoba();
      };
  
      // Esperar a que los ads estén cargados
      let attempts = 0;
      const maxAttempts = 10;
      const intervalTime = 150;
  
      const interval = setInterval(() => {
        const ready = robas.toArray().every(roba =>
          $(roba).children(':not(script)').first().outerHeight() > 0
        );
  
        if (ready || attempts >= maxAttempts) {
          clearInterval(interval);
          handleScroll();
          $(window).on('scroll resize', handleScroll);
        }
        attempts++;
      }, intervalTime);
  
      setTimeout(() => {
        clearInterval(interval);
        handleScroll();
        $(window).on('scroll resize', handleScroll);
      }, maxAttempts * intervalTime);
    }
  
    $(document).ready(function () {
      iniciarStickyRobas();
    });
  })();