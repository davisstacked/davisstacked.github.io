
$(".fade").hide(0).fadeIn(850)

document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

window.sr = ScrollReveal({ reset: false });
sr.reveal(
    '.reveal', {
        duration: 1000,
        delay: 200,
        rotate: { x: 10, y: 0, z: 0 },
        distance: '50px',
        easing: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
        mobile: true,
        viewFactor: 0.4
    });

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});