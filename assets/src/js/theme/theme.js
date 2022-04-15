import Menu from "./menu/menu";
import MegaMenu from "./menu/mega-menu";
import Search from "./search/search";
import Footer from "./footer";

class Theme {
  constructor() {
    this.#start();
    this.#setupEventListeners();
  }

  #start = () => {
    this.menu = new Menu();
    this.megaMenu = new MegaMenu();
    this.search = new Search();
    this.footer = new Footer();
  };

  #setupEventListeners = () => {
    document.addEventListener(
      "keydown",
      this.#actionActive
    );
  };

  #actionActive = (event) => {
    document.querySelector('.skip-link').addEventListener('click', function(e) {
      event.preventDefault();
      const tabKey = event.keyCode === 9;
      if ( tabKey ) {
        var target = document.getElementById('main').querySelector( 'a' );
        target.focus();
      }
    });
  };

}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.theme = new Theme();
