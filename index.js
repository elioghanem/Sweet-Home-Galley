function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

$(document).ready(function() {
    var currentIndex = 1;
    var totalDesc = $('.desc__list').length;

    function showDescription(index) {
        $('.desc__list').removeClass('active');
        $('.desc__list:nth-child(' + index + ')').addClass('active');
        $('.bullet').removeClass('active');
        $('.bullet[data-target="' + index + '"]').addClass('active');
    }

    function switchDescription() {
        currentIndex++;
        if (currentIndex > totalDesc) {
            currentIndex = 1;
        }
        showDescription(currentIndex);
    }

    // Initial setup
    showDescription(currentIndex);
    setInterval(switchDescription, 5000);

    // Click event for bullets navigation (optional, if you have navigation bullets)
    $('.bullet').click(function() {
        var target = $(this).attr('data-target');
        currentIndex = parseInt(target);
        showDescription(currentIndex);
    });
});