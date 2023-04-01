if (document.documentElement.getAttribute('data-darkreader-scheme') == 'dark') {
    document.querySelector("#blasthk").src = "assets/icons/blasthack-icon-light.svg";
    document.querySelector("#ya-mus").src = "assets/icons/yandex_music-light.svg";
}

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    })
};

loadData().then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('preloader');
    let contentEl = document.getElementById('main');
    contentEl.classList.add('visible');
    contentEl.classList.remove('hidden');
    let particlesEl = document.getElementById('preload-particle');
    particlesEl.classList.add('visible');
    particlesEl.classList.remove('hidden');
});