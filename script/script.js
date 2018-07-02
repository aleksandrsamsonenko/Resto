[].forEach.call(
    document.getElementsByClassName('slider-item__rating'),
    function (element) {
        element.addEventListener('click', function (event) {
            var parent = event.currentTarget;
            var el = event.target;

            if (parent === el) {
                return;
            }

            while (el.parentElement !== parent) {
                el = el.parentElement;
            }

            var index = [].indexOf.call(parent.children, el);

            parent.dataset.rating = index + 1;
        });
    });

