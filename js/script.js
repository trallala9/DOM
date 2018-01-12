document.addEventListener("DOMContentLoaded", function () {
    let btns = document.getElementsByClassName('button');

    for (let i = 0; i <= btns.length; i++) {
        alert(btns[i].innerText); //wypisuje dany przycisk

        //podpinam pod każdy przycisk zdarzenie click, które po kliknięciu pokaże text przycisku
        btns[i].addEventListener('click', function () {
            alert(this.innerText);
        });
    }
});
