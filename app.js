let tl = anime.timeline({
    easing: 'easeOutSine',
    duration: 750,
    loop:false
  });
tl.add({
    targets: ".an1",
    translateX:[ {value:"-20",duration:400},
                {value:"20",duration:200}],
    translateY: [ {value:"-20",duration:400},
                {value:"-13",duration:200}],
    rotate: "20"
})
  .add({
    targets: ".an2",
    translateX:[ {value:"80",duration:400},
                {value:"40",duration:200}],
    translateY: [ {value:"-20",duration:400},
                {value:"-20",duration:200}],
    rotate: "20"
  })
  .add({
    targets: ".an3",
    translateX:[ {value:"-20",duration:400},
    {value:"40",duration:200}],
translateY: [ {value:"20",duration:400},
    {value:"-20",duration:200}],
    rotate: 20
  });
