
         gsap.fromTo('.boxx',{
            x:'random(10,420)',
            y:'random(10,420)',
            rotate: 'random(0,360)',
            backgroundColor:'random(["purple","red","yellow","pink"])',
            borderRadius:'random(5%,50%)',
            transform:'scale(random(0,10))',
            autoAlpha:0
        },{
            x:'random(10,420)',
            y:'random(10,420)',
            rotate: 'random(0,360)',
            backgroundColor:'random(["purple","red","yellow","pink"])',
            borderRadius:'random(5%,50%)',
            transform:'scale(random(0,10))',
            autoAlpha:0.5,
            duration:2,
            // delay:0.5,
            repeat:-1,
            ease:'linear',
            yoyo:true,
            stagger: 0.1,
            repeatRefresh:true
        });



   