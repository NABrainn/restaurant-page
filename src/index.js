import initializeWebsite from "./modules/core";
import { renderMainHome } from './modules/home.js';
import "./style.css";

const selectMainText = document.getElementById('main-text')
initializeWebsite();
function wipeContent() {
    const selectMainText = document.getElementById('main-text')
    while(selectMainText.firstChild) {
        selectMainText.removeChild(selectMainText.firstChild)
    }
}

const Nav = (function navBarItems() {
    const selectHome = document.getElementById('home');
    const selectMenu = document.getElementById('menu');
    const selectFind = document.getElementById('find-us');
    return { selectHome, selectMenu, selectFind }
})()

Nav.selectHome.addEventListener('click', () => {
    wipeContent();
    renderMainHome(selectMainText);
})