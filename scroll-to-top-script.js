window.onload = function () {
    var scrollBtn = document.getElementById('top');
    var timer;
    var height;
    scrollBtn.onclick = function () {
        height = window.pageYOffset;
        //window.scrollTo(0, 0);
        scrollToTop();
    }
    function scrollToTop () {
        if (height > 0) {
            window.scrollTo(0, height);
            height = height - 3; //скорость прокрутки
            timer = setTimeout(scrollToTop, 5);
        } else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}