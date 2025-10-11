(function () {
  function getHeaderOffset() {
    const header = $('.wrap-HEADER');
    let offset = 0;
    if (header.length && header.css('position') === 'fixed') {
      offset += header.outerHeight();
    }
    return offset;
  }

  function aplicarStickyAds() {
    const headerOffset = getHeaderOffset();

    $('.art-cuerpo').find('div[id^="div-gpt-ad"]').each(function () {
      const adContainer = $(this);
      const stickyTarget = adContainer.find('div[id^="google_ads_iframe_"]').first();

      if (!stickyTarget.length) return;

      const targetHeight = stickyTarget.outerHeight();
      const parentHeight = adContainer.outerHeight();

      if (Math.abs(parentHeight - targetHeight) < 10) {
        if (!stickyTarget.hasClass('static')) {
          stickyTarget
            .removeClass('fixed_add stick-bottom')
            .css({ position: 'static', top: 'auto', bottom: 'auto' })
            .addClass('static');
        }
        return;
      }

      const targetRect = stickyTarget[0].getBoundingClientRect();
      const parentRect = adContainer[0].getBoundingClientRect();
      const espacioDisponible = parentRect.bottom - headerOffset;

      if (parentRect.top > headerOffset) {
        if (!stickyTarget.hasClass('static')) {
          stickyTarget
            .removeClass('fixed_add stick-bottom')
            .css({ position: 'static', top: 'auto', bottom: 'auto' })
            .addClass('static');
        }
        return;
      }

      stickyTarget.removeClass('static');

      if (targetRect.top <= headerOffset && espacioDisponible > targetHeight) {
        if (!stickyTarget.hasClass('fixed_add')) {
          stickyTarget
            .removeClass('stick-bottom')
            .addClass('fixed_add')
            .css({
              position: 'fixed',
              top: `${headerOffset}px`,
              bottom: 'unset',
              'max-width': '300px',
              width: '100%',
              'z-index': 9999,
              'box-sizing': 'border-box',
            });
        }
      } else if (espacioDisponible <= targetHeight) {
        if (!stickyTarget.hasClass('stick-bottom')) {
          stickyTarget
            .removeClass('fixed_add')
            .addClass('stick-bottom')
            .css({
              position: 'absolute',
              top: 'unset',
              bottom: 0,
              'max-width': '300px',
              width: '100%',
              'box-sizing': 'border-box',
            });
        }
      } else {
        // Si dejó de hacer falta el stick-bottom, volver a fixed
        if (!stickyTarget.hasClass('fixed_add')) {
          stickyTarget
            .removeClass('stick-bottom')
            .addClass('fixed_add')
            .css({
              position: 'fixed',
              top: `${headerOffset}px`,
              bottom: 'unset',
              'max-width': '300px',
              width: '100%',
              'z-index': 9999,
              'box-sizing': 'border-box',
            });
        }
      }
    });
  }

  $(document).ready(function () {
    aplicarStickyAds();
    $(window).on('scroll resize', aplicarStickyAds);
  });
})();