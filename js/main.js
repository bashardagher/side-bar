const body = document.querySelector(`body`);
const sideBar = document.querySelector(`.sidebar`);
const toggle = document.querySelector(`.toggle`);
const searchBtn = document.querySelector(`.searchIcon`);
const searchFocus = document.querySelector(`.searchInput`);
const modeSwitch = document.querySelector(`.toggle-switch`);
const modeText = document.querySelector(`.mode-text`);

modeSwitch.addEventListener(`click` , () => {
    body.classList.toggle(`dark`);

    if(body.classList.contains(`dark`)){
        modeText.innerHTML = `light mode`;
    }else{
        modeText.innerHTML = `dark mode`;
    }
});

toggle.addEventListener(`click` , () => {
    sideBar.classList.toggle(`close`);
});

searchBtn.addEventListener(`click` , () => {
    sideBar.classList.remove(`close`);
    searchFocus.focus();
});

