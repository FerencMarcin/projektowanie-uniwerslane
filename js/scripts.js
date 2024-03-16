/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 

const root = document.documentElement;

function increaseFont() {
    const currentFontSize = parseInt(window.getComputedStyle(root).getPropertyValue('font-size'));
    if (currentFontSize < 20) {
        const newFontSize = currentFontSize + 2;
        root.style.fontSize = `${newFontSize}px`;
        sessionStorage.setItem('fontSize', newFontSize);
    };
}

function resetFont() {
    root.style.fontSize = '';
    sessionStorage.removeItem('fontSize');
}

document.getElementById('increase-font').addEventListener('click', increaseFont);
document.getElementById('reset-font').addEventListener('click', resetFont);

function increaseLetterSpacing() {
    const newLetterSpacing = '4';
    root.style.letterSpacing = `${newLetterSpacing}px`;
    sessionStorage.setItem('letterSpacing', newLetterSpacing);
}

function resetLetterSpacing() {
    root.style.letterSpacing = 'normal';
    sessionStorage.removeItem('letterSpacing');
}

document.getElementById('increase-letter-spacing').addEventListener('click', increaseLetterSpacing);
document.getElementById('reset-letter-spacing').addEventListener('click', resetLetterSpacing);

window.addEventListener('DOMContentLoaded', event => {
    const savedFontSize = sessionStorage.getItem('fontSize');
    if (savedFontSize) {
        root.style.fontSize = `${savedFontSize}px`;
    }

    const savedLetterSpacing = sessionStorage.getItem('letterSpacing');
    if (savedLetterSpacing) {
        root.style.letterSpacing = `${savedLetterSpacing}px`;
    }

    const contrastMode = sessionStorage.getItem('contrastMode');
    if (contrastMode === 'high-contrast') {
        document.body.classList.add('high-contrast');
    }

    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.getElementById('high-contrast').addEventListener('click', function () {
    document.body.classList.add('high-contrast');
    sessionStorage.setItem('contrastMode', 'high-contrast');
});

document.getElementById('default-contrast').addEventListener('click', function () {
    document.body.classList.remove('high-contrast');
    sessionStorage.removeItem('contrastMode')
});

let inputField = document.querySelector('.form-control')
let searchBar = document.querySelector('.searchItems')
let dataList = document.getElementById('searchItems')

let searchResultsDiv = document.createElement('div')
searchResultsDiv.id = 'searchResults'
searchResultsDiv.classList.add('search-results')
searchResultsDiv.style.display = 'none'
searchBar.appendChild(searchResultsDiv)

inputField.addEventListener('input', function () {
    searchResultsDiv.innerHTML = ''

    searchResultsDiv.style.display = 'none'

    let inputValue = inputField.value.toLowerCase()

    if (inputValue === '') return

    let options = dataList.querySelectorAll('option')
    options.forEach(function (option) {
        if (option.value.toLowerCase().includes(inputValue)) {
            console.log(option.value)
            searchResultsDiv.style.display = 'block'
            let resultDiv = document.createElement('div')
            resultDiv.textContent = option.value
            resultDiv.addEventListener('click', function () {
                window.location.href = option.getAttribute('target')
            })
            searchResultsDiv.appendChild(resultDiv)
        }
    })
})

document.addEventListener('click', function (event) {
    if (!inputField.contains(event.target) || inputField.value === '') {
        searchResultsDiv.style.display = 'none'
    } else {
        searchResultsDiv.style.display = 'block'
    }
})