(function () {
  //console.error('StickyRoba + AlturaExtendida v1.2');

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
    const contenidoIzq = $('.CONTENIDO-ARTICULO');
    const columnaDer = $('.COLUMNA-DER');
    if (contenidoIzq.length === 0 || columnaDer.length === 0) return;

    const robas = columnaDer.children('div[id^="roba_desktop_"]');
    if (robas.length === 0) return;

    const ultimoRoba = robas.last();
    const bottomIzq = contenidoIzq.offset().top + contenidoIzq.outerHeight() - 24;
    const bottomRoba = ultimoRoba.offset().top + ultimoRoba.outerHeight();

    const espacioExtra = bottomIzq - bottomRoba;

    if (espacioExtra > 0) {
      const nuevaAltura = ultimoRoba.outerHeight() + espacioExtra;

      // 🟢 Aplicamos estilos al último roba
      ultimoRoba.css({
        'max-height': `${nuevaAltura}px`,
        'height': `${nuevaAltura}px`,
      });

      // 🟢 También a sus primeros 2 hijos (si existen)
      const hijos = ultimoRoba.children('div');
      hijos.eq(0).css('height', '100%');
      hijos.eq(1).css('height', '100%');
    }
  }

  function iniciarStickyRobas() {
    if ($(window).width() <= 991) return;
    if (adsInitialized) return;
    adsInitialized = true;

    const columnaDer = $('.COLUMNA-DER');
    if (columnaDer.length === 0) return;

    const robas = columnaDer.children('div[id^="roba_desktop_"]');
    if (robas.length === 0) return;

    handleScroll = function () {
      const headerOffset = getHeaderOffset();

      robas.each(function () {
        const roba = $(this);
        const adWrapper = roba.find('div[id^="div-gpt-ad"]').first();
        const iframeTarget = adWrapper.find('div[id^="google_ads_iframe_"], iframe').first();

        if (adWrapper.length === 0 || iframeTarget.length === 0) return;

        const robaRect = roba[0].getBoundingClientRect();
        const wrapperHeight = adWrapper.outerHeight();
        const iframeHeight = iframeTarget.outerHeight();
        const topDistance = robaRect.top;
        const bottomDistance = robaRect.bottom;

        const containerHeight = roba[0].scrollHeight;
        const espacioScroll = containerHeight - iframeHeight;
        const diferenciaAltura = Math.abs(wrapperHeight - iframeHeight);

        // Limpiar estilos antes de aplicar
        iframeTarget.removeClass('fixed_add stick-bottom').css({
          position: 'static',
          top: 'auto',
          bottom: 'auto',
          'max-width': 'none',
          width: 'auto',
        });

        // No aplicar sticky si contenido casi igual que wrapper o no hay espacio suficiente
        if (espacioScroll < 80 && diferenciaAltura < 40) return;

        if (topDistance <= headerOffset && (bottomDistance - headerOffset) > iframeHeight) {
          iframeTarget.addClass('fixed_add').css({
            position: 'fixed',
            top: `${headerOffset}px`,
            'max-width': '300px',
            width: '100%',
            'box-sizing': 'border-box',
            'z-index': 9999,
            'display':'initial'
          });
        } else if ((bottomDistance - headerOffset) <= iframeHeight) {
          iframeTarget.addClass('stick-bottom').css({
            position: 'absolute',
            bottom: '0',
            'max-width': '300px',
            width: '100%',
            'box-sizing': 'border-box',
          });
        }
      });

      ajustarAlturaUltimoRoba();
    };

    // Esperar que los anuncios estén visibles
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

    // Fallback por si nunca carga
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