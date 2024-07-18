document.addEventListener('DOMContentLoaded', () => {
    const bullets = document.querySelectorAll('.bullet');
    const descriptions = document.querySelectorAll('.header__desc');
    let currentIndex = 0;

    const updateActiveDescription = (index) => {
        descriptions.forEach((desc, i) => {
            if (i === index) {
                desc.classList.add('active');
                desc.style.transform = i % 2 === 0 ? 'translate(-150%, -50%)' : 'translate(150%, -50%)';
                setTimeout(() => {
                    desc.style.transform = 'translate(-50%, -50%)';
                }, 10);
            } else {
                desc.classList.remove('active');
            }
        });

        bullets.forEach((bullet, i) => {
            bullet.classList.toggle('active', i === index);
        });
    };

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            updateActiveDescription(index);
            currentIndex = index;
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % descriptions.length;
        updateActiveDescription(currentIndex);
    }, 5000);
});

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}