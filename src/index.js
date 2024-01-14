import initializeWebsite from "./modules/core";
import { renderMainHome } from './modules/home.js';
import { renderMainMenu } from './modules/menu.js';
import { renderMainContact } from './modules/contact.js';
import "./style.css";

initializeWebsite();
function wipeContent() {
    const selectMainText = document.getElementById('main-text')
    while(selectMainText.firstChild) {
        selectMainText.removeChild(selectMainText.firstChild)
    }
}

const nav = (function navBarItems() {
    const selectHome = document.getElementById('home');
    const selectMenu = document.getElementById('menu');
    const selectContact = document.getElementById('contact');
    return { selectHome, selectMenu, selectContact }
})()

nav.selectHome.addEventListener('click', () => {
    wipeContent();
    renderMainHome();
})

nav.selectMenu.addEventListener('click', () => {
    wipeContent();
    renderMainMenu();
})

nav.selectContact.addEventListener('click', () => {
    wipeContent();
    renderMainContact();
})