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
        cursor.style.background = '#0f0f0f';
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

    let parentEl = document.querySelector('.bg');
    let childEl = document.querySelectorAll('.first-project .first');

    childEl.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            let ids = item.getAttribute('data-id');
            let bgEl = document.querySelector(`.id-${ids}`);

            parentEl.querySelectorAll('video').forEach((video) => {
                video.style.display = 'none';
            });

            bgEl.style.display = 'block';

            gsap.to(cursor, {
                height: '120px',
                width: '120px',
                duration: 0.4,
                innerHTML: '<P>See Projects</P>',
                fontSize: '15px',
                fontWeight: 'bold',
                margin: '20px'
            });
        });

        item.addEventListener('mouseleave', () => {
            let ids = item.getAttribute('data-id');
            let bgEl = document.querySelector(`.id-${ids}`);

            parentEl.querySelectorAll('video').forEach((video) => {
                video.style.display = 'none';
            });

            bgEl.style.display = 'none';

            gsap.to(cursor, {
                height: '18px',
                width: '18px',
                duration: '0.1',
                innerHTML: '',
                margin: 0,
            });
        });
    });
 }
 section4();

 function section5(){
    let sectionFive = document.querySelector('.section5');
    let cursor = document.querySelector('.cursor');

    sectionFive.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            background: '#0f0f0f',
            duration: 0.1,
        });
    });

    gsap.from('.section5 .five .left h1, .section5 .five .left h5', {
        y:100,
        opacity: 0,
        stagger: 1,
        duration: 3,

        scrollTrigger: {
            trigger: '.section5 .five',
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
        }
    });
 } 
 section5();

 function section7() {
    let sectionSeven = document.querySelector('.section7');
    let cursor = document.querySelector('.cursor');
    let body = document.querySelector('body');

    gsap.to(body, {
        background: '#0f0f0f',
        color: 'white',
        scrollTrigger: {
            trigger: '.section6 .right',
            start: 'bottom 60%',
            end: 'bottom 40%',
            scrub: 1,
        },
    });

    sectionSeven.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            background: 'white',
            duration: 0.1,
            scrollTrigger: {
                trigger: '.section6 .right',
                start: 'bottom 60%',
                end: 'bottom 40%',
                scrub: 1,
            },

        });
    });

    sectionSeven.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            background: '#0f0f0f',
            duration: 0.1,
            scrollTrigger: {
                trigger: '.section6 .right',
                start: 'bottom 60%',
                end: 'bottom 40%',
                scrub: 1,
            },

        });
    });

 }
 section7();