export function renderMainMenu() {
    const selectMainText = document.getElementById('main-text');
    function menuItemComponent(id, name, text) {
        const selectMenuItem = document.createElement('div');
        selectMenuItem.setAttribute('class', 'menu-item')
        
        selectMainText.appendChild(selectMenuItem)

        const selectImg = document.createElement('div');
        selectImg.id = id;

        const selectH3 = document.createElement('h3');
        selectH3.innerText = name;

        const selectDesc = document.createElement('div');
        selectDesc.setAttribute('class', 'menu-desc')
        selectDesc.innerText = text;

        selectMenuItem.append(selectImg, selectH3, selectDesc)
    }
    menuItemComponent('iced', 'Iced Americano', '1 doubleshot espresso, 1/2 cup ice, Cold water');
    menuItemComponent('lungo', 'Lungo', "1/4 oz (7 g) ground espresso coffee, Hot water");
    menuItemComponent('crema', 'Caffe Crema', "1/4 cup strong coffee, 2-4 teaspoons granulated sugar, 1 1/4 cups whole/whipping/heavy cream");
    menuItemComponent('red-eye', 'Red Eye', "10 ounces (1 ¼ cup) drip coffee, 1, 2 or 3 espresso shots");
    //iced americano, lungo, caffe crema, red eye
}