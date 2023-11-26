var MobileNavMenu = MobileNavMenu || {};

MobileNavMenu.OpenCloseMenu = (function () {
  function OpenCloseMenu() {
      this.navMenuMobile = $('.dropstart');
  }

  OpenCloseMenu.prototype.init = function () {
      this.navMenuMobile.ready(e => {
          this.navMenuMobile.on('shown.bs.dropdown', onOpenNavMenuMobile);
          this.navMenuMobile.on('hidden.bs.dropdown', onCloseNavMenuMobile);
      });
  }

  function onOpenNavMenuMobile() {
      let btnMobileMenu = $('#btn-mobile-menu > span');
      btnMobileMenu.removeAttr('class');
      btnMobileMenu.addClass('fa fa-close');
  }

  function onCloseNavMenuMobile() {
      let btnMobileMenu = $('#btn-mobile-menu > span');
      btnMobileMenu.removeAttr('class');
      btnMobileMenu.addClass('fa fa-bars');
  }

  return OpenCloseMenu;
}());