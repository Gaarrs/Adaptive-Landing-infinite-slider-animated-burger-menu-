document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector('#menu-button'),
        menu = document.querySelector('.header__nav'),
        examples = document.querySelectorAll('.examples__img'),
        leftArrow = document.querySelector('.left-arrow'),
        rightArrow = document.querySelector('.right-arrow'),
        counter = 0;

        btn.onclick = function(){
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            } else
            if (!(menu.classList.contains('active'))) {
                menu.classList.add('active');
            }
        };

        function hideAll(){
            for (let i=0; i<examples.length; i++) {
                examples[i].classList.remove('visible');
                examples[i].classList.add('hidden');
            }
            
        }

        rightArrow.onclick = function(){
            if (counter == examples.length) {
                counter = 0;
            }
            let i = counter+1;
            if (i == examples.length) {
                i = 0;
            }
            hideAll();
            examples[i].classList.remove('hidden');
            examples[i].classList.add('visible');
            counter++;
        };

        leftArrow.onclick = function(){
            if (counter == -1) {
                counter = examples.length-1;
            }
            counter--;
            let i = counter;
            if (i == -1) {
                i = examples.length-1;
            }
            hideAll();
            examples[i].classList.remove('hidden');
            examples[i].classList.add('visible');           
        };

        hideAll();
        examples[0].classList.add('visible');
});
