const buroBtn = document.querySelector('.buro-btn');
const btnSymbol = document.querySelector('.plus');
const extraDiv = document.querySelector('.extra-div');

buroBtn.addEventListener('click', function() {

    btnSymbol.classList.toggle('buro-minus');

    if (btnSymbol.classList.contains('buro-minus')) {
        extraDiv.style.display = 'block';
    } else {
        extraDiv.style.display = 'none';
    }

});