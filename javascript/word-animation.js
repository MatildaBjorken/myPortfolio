
  // Wrap every letter in a span
var textWrapper = document.querySelector('.about-text');


textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.about-text .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.about-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

  
  var textWrapper = document.querySelector('.portfolio-text');


  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.portfolio-text .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.portfolio-text',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });


    anime.timeline({loop: true})
    .add({
      targets: '.word-animation .word ' ,
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.word-animation',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    anime.timeline({loop: true})
    .add({
      targets: '.word-animation2 .word2 ' ,
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.word-animation2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    anime.timeline({loop: true})
    .add({
      targets: '.word-animation3 .word3 ' ,
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.word-animation3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    anime.timeline({loop: true})
    .add({
      targets: '.word-animation4 .word4 ' ,
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.word-animation4',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    anime.timeline({loop: true})
    .add({
      targets: '.word-animation5 .word5 ' ,
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.word-animation5',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    anime.timeline({loop: true})
    .add({
      targets: '.word-animation6 .word6 ' ,
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.word-animation6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });