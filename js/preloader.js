function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
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

$('.time-slow').on('click', function(e) {
    e.preventDefault();
    var 
       href = $(this).attr('href'),
       timeout = 500;
    setTimeout(function() {
       location.href = href;
    }, timeout);
});