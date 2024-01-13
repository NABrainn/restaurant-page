function createNav() {
    const selectContent = document.getElementById('content');

    //create and add #nav
    const selectNav = document.createElement('div');
    selectNav.id='nav';
    selectContent.appendChild(selectNav);
    
    //create and add #main
    const selectMain = document.createElement('main');
    selectMain.id='main';
    selectContent.appendChild(selectMain);

    //create and add #main-text
    const selectMainText = document.createElement('main-text');
    selectMainText.id='main-text';
    selectMain.appendChild(selectMainText);

    //create and add #footer
    const selectFooter = document.createElement('footer');
    selectFooter.id='footer';
    selectContent.appendChild(selectFooter);
}
export default function initializeWebsite() {
    createNav();
}