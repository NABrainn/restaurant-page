import { renderMainHome } from './home.js';

function createNav() {
    const selectContent = document.getElementById('content');

    //create and append #nav
    const selectNav = document.createElement('div');
    selectNav.id='nav';
    selectContent.appendChild(selectNav);

    //create and append Nav elements
    createNavItem('home', 'Home', selectNav);
    createNavItem('menu', 'Menu', selectNav);
    createNavItem('contact', 'Contact', selectNav);
}

function createNavItem(id, text, selectNav) {
    const navItemComponent = document.createElement('div')
    const selectImg = document.createElement('div');
    const selectNavItem = document.createElement('div');
    selectImg.id = `${id}-img`;
    navItemComponent.id= id;
    selectNavItem.innerText = text;
    navItemComponent.append(selectImg, selectNavItem);
    selectNav.appendChild(navItemComponent);
}

function createMain() {
    const selectContent = document.getElementById('content');

    //create and append #main
    const selectMain = document.createElement('div');
    selectMain.id='main';
    selectContent.appendChild(selectMain);

    //create and append #main-text
    const selectMainText = document.createElement('div');
    selectMainText.id='main-text';
    selectMain.appendChild(selectMainText);
    //create and append default home page
    
}

function createFooter() {
    const selectContent = document.getElementById('content');

    //create and append #footer
    const selectFooter = document.createElement('div');
    selectFooter.id='footer';
    selectContent.appendChild(selectFooter);
    createFooterItem(selectFooter);
}

function createFooterItem(selectFooter) {
    const selectFooterItem = document.createElement('div');
    selectFooterItem.id='footer-item';
    selectFooterItem.innerText = 'All rights reserved.©️';
    selectFooter.appendChild(selectFooterItem);
}


export default function initializeWebsite() {
    createNav();
    createMain();
    createFooter(); 
    renderMainHome();        
}