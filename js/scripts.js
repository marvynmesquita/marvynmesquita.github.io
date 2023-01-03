AOS.init({
    duration: 1000,
    easing: 'ease',
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const yt = document.querySelector('#yt-social');
document.addEventListener('scroll', function () {
    if (isInViewport(yt) === true) {
        yt.classList.add('active');
    }
    else {
        yt.classList.remove('active');
    }

}, {
    passive: true
});

const spotify = document.querySelector('#spotify-social');
document.addEventListener('scroll', function () {
    if (isInViewport(spotify) === true) {
        spotify.classList.add('active');
    }
    else {
        spotify.classList.remove('active');
    }

}, {
    passive: true
});

const dn = document.querySelector('#dn-social');
document.addEventListener('scroll', function () {
    if (isInViewport(dn) === true) {
        dn.classList.add('active');
    }
    else {
        dn.classList.remove('active');
    }

}, {
    passive: true
});

const fm = document.querySelector('#fm-social');
document.addEventListener('scroll', function () {
    if (isInViewport(fm) === true) {
        fm.classList.add('active');
    }
    else {
        fm.classList.remove('active');
    }

}, {
    passive: true
});

const cca = document.querySelector('#cca-social');
document.addEventListener('scroll', function () {
    if (isInViewport(cca) === true) {
        cca.classList.add('active');
    }
    else {
        cca.classList.remove('active');
    }

}, {
    passive: true
});

const nc = document.querySelector('#nc-social');
document.addEventListener('scroll', function () {
    if (isInViewport(nc) === true) {
        nc.classList.add('active');
    }
    else {
        nc.classList.remove('active');
    }

}, {
    passive: true
});

const kato = document.querySelector('#kato-social');
document.addEventListener('scroll', function () {
    if (isInViewport(kato) === true) {
        kato.classList.add('active');
    }
    else {
        kato.classList.remove('active');
    }

}, {
    passive: true
});

const gow = document.querySelector('#gow-social');
document.addEventListener('scroll', function () {
    if (isInViewport(gow) === true) {
        gow.classList.add('active');
    }
    else {
        gow.classList.remove('active');
    }

}, {
    passive: true
});

const blizz = document.querySelector('#blizz-social');
document.addEventListener('scroll', function () {
    if (isInViewport(blizz) === true) {
        blizz.classList.add('active');
    }
    else {
        blizz.classList.remove('active');
    }

}, {
    passive: true
});

const zelda = document.querySelector('#zelda-social');
document.addEventListener('scroll', function () {
    if (isInViewport(zelda) === true) {
        zelda.classList.add('active');
    }
    else {
        zelda.classList.remove('active');
    }

}, {
    passive: true
});