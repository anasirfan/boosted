const barSlide = () => {
    const burger = document.querySelector('.burger');
    const bar= document.querySelector('.bar');
    const barLinks = document.querySelectorAll('.bar-links li');

    burger.addEventListener('click', () => {
        bar.classList.toggle('bar-active');


        barLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '' ;
            } else{
            link.style.animation = `barLinkFade 0.5s ease forwards ${index / 7 + 2}s`;

        }

        })
    })
}

barSlide();