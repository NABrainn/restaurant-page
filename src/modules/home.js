export function renderMainHome(selectMainText) {
    function logoComponent() {
        //create and append logo component
        const selectLogoMain = document.createElement('div');
        selectLogoMain.id = 'logo-main';
        selectMainText.appendChild(selectLogoMain)
        //create and append logo item left
        const selectLogoItemLeft = document.createElement('div');
        selectLogoItemLeft.id = 'logo-left';
        selectLogoItemLeft.innerText = '🤠';
        selectLogoMain.appendChild(selectLogoItemLeft)
        //create and append mid logo parent
        const selectLogoItemMid = document.createElement('div');
        selectLogoItemMid.id = 'logo-mid';
        selectLogoMain.appendChild(selectLogoItemMid)
            //create and append mid logo children
            const selectLogoItemMidOne = document.createElement('div');
            selectLogoItemMidOne.id = 'logo-mid-one';
            selectLogoItemMidOne.innerText = 'Coffee';
            selectLogoItemMid.appendChild(selectLogoItemMidOne)

            const selectLogoItemMidTwo = document.createElement('div');
            selectLogoItemMidTwo.id = 'logo-mid-two';
            selectLogoItemMidTwo.innerText = 'Pardner!';
            selectLogoItemMid.appendChild(selectLogoItemMidTwo)

        //create and append logo item right
        const selectLogoItemRight = document.createElement('div');
        selectLogoItemRight.id = 'logo-right';
        selectLogoItemRight.innerText = '☕';
        selectLogoMain.appendChild(selectLogoItemRight)
    }

    function descriptionComponent() {
        const selectDesc = document.createElement('div');
        selectDesc.id = 'description';
        selectDesc.innerText = "We've got the best coffeee in the west and all o' America. Like whatchya hear? Then hop on over to the Menu and see what we've got on offer 😎😌"
        selectMainText.appendChild(selectDesc)
    }

    function hoursComponent() {
        const selectHoursMain = document.createElement('div');
        selectHoursMain.id = 'hours-main';
        selectMainText.appendChild(selectHoursMain)

            const selectH3 = document.createElement('h3');
            selectH3.innerText = 'Hours⏱️';
            selectHoursMain.appendChild(selectH3);

            const selectTable = document.createElement('div');
            selectTable.id='hours-table'
            selectTable.innerHTML = 
            '<p>Monday: 10AM - 6PM</p><p>Tuesday: 10AM - 6PM</p><p>Wednesday: 10AM - 6PM</p><p>Thursday: 10AM - 6PM</p><p>Friday: 10AM - 6PM</p><p>Saturday: 10AM - 4PM</p><p>Sunday: 10AM - 4PM</p>'
            selectHoursMain.appendChild(selectTable);
    }

    logoComponent();
    descriptionComponent();
    hoursComponent();
}