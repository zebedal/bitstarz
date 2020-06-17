this.addEventListener('DOMContentLoaded', () => {

    //detect intersection of elements on viewport
    const observer = new IntersectionObserver(function(entries) { 
        for(const entry of entries) {
            if(entry.isIntersecting)entry.target.classList.add('intersect');
        }   
    },{threshold: 0.3});

    const elements = document.querySelectorAll('.anim');
    for(const el of elements) {
        observer.observe(el);
    }

    //open modal
    document.querySelector('.video').addEventListener('click', () => {
        document.querySelector('.modal').classList.add('open');
        document.querySelector('.wrapper').style.opacity = 0.2;
        document.body.style.overflow = 'hidden';
    });

    //close modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('open');
        document.querySelector('.wrapper').style.opacity = 1;
        document.body.style.overflow = 'auto';
    });



});


    /************solution using dynamic JS and HTML data atributes to get the transform type and values, this way we don't need to use additional CSS classes*******/
    /* const observer = new IntersectionObserver(function(entries) { 
        for(const entry of entries) {
            if(entry.isIntersecting){
               entry.target.style.transform = `${entry.target.dataset.anim}(${entry.target.dataset.end}px)`;
               entry.target.style.opacity = 1;
            } 
        }   
    },{threshold: 0});

    const elements = document.querySelectorAll('.intersect');
    for(const el of elements) {
        el.style.opacity = 0;
        el.style.transform = `${el.dataset.anim}(${el.dataset.initial}px)`;
        el.style.transition = `all 1.5s ease-out`; 
        observer.observe(el);
    } */

