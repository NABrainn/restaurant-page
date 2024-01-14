export function renderMainContact() {
    const selectMainText = document.getElementById('main-text');

    function contactComponent() {
        const selectContactMain = document.createElement('div');
        selectContactMain.id = 'contact-div';
        selectContactMain.innerText = '👋Contact details';
        selectMainText.append(selectContactMain)
        contactComponentItem(selectContactMain, '☎️ Phone Number: 213 742 069');
        contactComponentItem(selectContactMain, '📧 E-mail address: real.24@gmail.com');
        contactComponentItem(selectContactMain, '🌐 Address: some street 67/420');
        contactComponentItem(selectContactMain, '📯 Postal Code: 41-870 Town');
        contactComponentItem(selectContactMain, '🏜️ USA NV');
        
    }
    function contactComponentItem(selectContactMain, text) {
        const selectContactItem = document.createElement('div');
        selectContactItem.setAttribute('class', 'contact-item')
        selectContactMain.appendChild(selectContactItem);

        const selectContactPara = document.createElement('p');
        selectContactPara.setAttribute('class', 'contact-p');
        selectContactPara.innerText = text

        selectContactItem.append(selectContactPara)
    }
    contactComponent();
}