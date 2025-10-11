(function () {
    //console.error('SA-v.1.0.8 - Tiempo de espera reducido');
  
    let handleScroll;
    let adsInitialized = false;
  
    function iniciarStickyAds() {
      if ($(window).width() <= 991) return;
      if (adsInitialized) return;
      adsInitialized = true;
  
      const wrapHeader = $('.wrap-HEADER');
      if (wrapHeader.length === 0) return;
  
      /*function getHeaderHeight() {
        return wrapHeader.outerHeight();
      }*/

    function getHeaderHeight() {
        let totalHeight = 0;
        
        const header = $('.wrap-HEADER');
        const nav = $('.wrap-NAV');
        
        if (header.length && header.is(':visible') && header.css('position') === 'fixed') {
            totalHeight += header.outerHeight();
        }
        
        if (nav.length && nav.is(':visible') && nav.css('position') === 'fixed') {
            totalHeight += nav.outerHeight();
        }
        
        return totalHeight;
        }
  
      const modulos = $('.MODULO');
  
      handleScroll = function () {
        const headerHeight = getHeaderHeight();
  
        modulos.each(function () {
          const modulo = $(this);
          const adWrap = modulo.find('.sec-wrap, .third-wrap');
          if (adWrap.length === 0) return;
  
          const bn = adWrap.find('.BN');
          if (bn.length === 0) return;
  
          let adContent = bn.find('div[id^="div-gpt-ad"]').first();
          if (adContent.length === 0) {
            adContent = bn.children(':not(script)').first();
          }
          if (adContent.length === 0) return;
  
          const bnRect = bn[0].getBoundingClientRect();
          const contentHeight = adContent.outerHeight();
          const topDistance = bnRect.top;
          const bottomDistance = bnRect.bottom;
  
          const containerHeight = bn[0].scrollHeight;
          const espacioScroll = containerHeight - contentHeight;
  
          if (espacioScroll < 80) {
            adContent.removeClass('fixed_add stick-bottom').css({
              position: 'static',
              top: 'auto',
              bottom: 'auto',
            });
            return;
          }
  
          adContent.removeClass('fixed_add stick-bottom').css({
            position: 'static',
            top: 'auto',
            bottom: 'auto',
          });
  
          const isHeaderFixed = wrapHeader.css('position') === 'fixed';
  
          if (isHeaderFixed && topDistance <= headerHeight && (bottomDistance - headerHeight) > contentHeight) {
            adContent.addClass('fixed_add').css({
              position: 'fixed',
              top: `${headerHeight}px`,
            });
          } else if ((bottomDistance - headerHeight) <= contentHeight) {
            adContent.addClass('stick-bottom').css({
              position: 'absolute',
              bottom: '0',
            });
          }
        });
      };
  
      // 🕒 Configuración de tiempo de espera optimizada
      let attempts = 0;
      const maxAttempts = 10;     // Antes: 50
      const intervalTime = 150;   // Antes: 300
  
      const interval = setInterval(() => {
        const ready = $('.BN').toArray().every(bn =>
          $(bn).children(':not(script)').first().outerHeight() > 0
        );
  
        if (ready || attempts >= maxAttempts) {
          clearInterval(interval);
          handleScroll();
          $(window).on('scroll resize', handleScroll);
        }
        attempts++;
      }, intervalTime);
  
      // Backup por si no se resuelve
      setTimeout(() => {
        clearInterval(interval);
        handleScroll();
        $(window).on('scroll resize', handleScroll);
      }, maxAttempts * intervalTime);
    }
  
    $(document).ready(function () {
      iniciarStickyAds();
    });
  })();