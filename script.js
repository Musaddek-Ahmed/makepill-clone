 function cursor() {
    let cursor = document.querySelector('.cursor');
    let body = document.querySelector('body');

    body.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.x + 'px',
            y: e.y + 'px',
        })
    })
 }
 cursor();

 function section1() {
    let tl = gsap.timeline();
    tl.from('.header', {
        y:-50,
        opacity:0,
        duration:1,
    });
    tl.from('.text-content h1', {
        y:100,
        opacity:0,
        duration:0.8,
    });
    tl.from('.text-content p', {
        y:100,
        opacity:0,
        duration:0.6,
    });
 }
 section1();

 function section2 () {
    let sectionTwo =document.querySelector('.section2');
    let cursor = document.querySelector('.cursor');
    let body = document.querySelector('body');

    sectionTwo.addEventListener('mouseenter', ()=> {
        gsap.to(cursor, {
            height: '150px',
            width: '150px',
            innerHTML: "<i class='fa-solid fa-volume-high'></i>",
            fontSize: '25px',
            color: 'black',
            background:'white',
            
        });

        gsap.to(body, {
            background: '#0f0f0f',
            color: 'white',
        });
    });

        sectionTwo.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                height:'18px',
                width: '18px',
                innerHTML: "",
            });

            gsap.to(body, {
                background: 'white',
                color: '#0f0f0f', 
            });
        });

    
 }
 section2();

 function section3(){
    let sectionThree = document.querySelector('.section3');
    let cursor = document.querySelector('.cursor');
    

    sectionThree.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            background: '#0f0f0f',
        })
    })
 }
 section3();


 function section4(){
    let sectionFour = document.querySelector('.section4');
    let cursor = document.querySelector('.cursor');
    

    sectionFour.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            background: '#0f0f0f',
        });
    });

    gsap.to(sectionFour, {
        background: '#0f0f0f',
        color: 'white',

        scrollTrigger: {
            trigger: ".section4 .four .moving-text",
            start: "bottom center",
            end: "bottom center",
            scrub: 2,
        },
    });

    gsap.to(".services", {
        color: 'white',

        scrollTrigger: {
            trigger: '.section4 .four .moving-text',
            start: 'bottom center',
            end: 'bottom center',
            scrub: 2,
        },
    });

    sectionFour.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            background: 'white',
            scrollTrigger: {
                trigger: '.section4 .four .moving-text',
                start: 'top center',
                end: 'bottom center',
                scrub: 0.1,
            },

        });
    });
 }
 section4();