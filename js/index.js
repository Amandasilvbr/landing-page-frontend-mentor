function App() {
    // First float button
    const freaturesTitle = document.getElementById('freatures')
    const freaturesContainer = document.getElementById('freatures-container')

    freaturesTitle.addEventListener('click', () => {
        freaturesContainer.style.display = freaturesContainer.style.display == 'none' ? 'block' : 'none'
        companyContainer.style.display = 'none'
    })

    // Second float button
    const companyTitle = document.getElementById('company')
    const companyContainer = document.getElementById('company-container')

    companyTitle.addEventListener('click', () => {
        companyContainer.style.display = companyContainer.style.display == 'none' ? 'block' : 'none'
        freaturesContainer.style.display = 'none'

    })

    // Function that hidden the float button
    function hiddenBtnJs() {
        console.log('a')
        freaturesContainer.style.display = 'none'
        companyContainer.style.display = 'none'
    }

    // Click on the href of nav bar
    const menuNormal = document.querySelectorAll('.hidden-float-menu')

    for (let i = 0; i < menuNormal.length; i++) { menuNormal[i].addEventListener('click', hiddenBtnJs) }

    // Click on div
    const divDisplay = document.getElementById('div-display')

    divDisplay.addEventListener('click', hiddenBtnJs)
}

App()


