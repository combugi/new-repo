$(function () {
var wave = new TimelineMax({paused:true ,repeat:-1});
wave.to("svg1 .wave1",1,{morphSVG:"svg1 .wave2",ease:Linear.easeNone}).to("svg1 .wave1",1,{morphSVG:"svg1 .wave3",ease:Linear.easeNone});
wave.to("svg1 .wave2",1,{morphSVG:"svg1 .wave3",ease:Linear.easeNone}).to("svg1 .wave2",1,{morphSVG:"svg1 .wave4",ease:Linear.easeNone});
wave.to("svg1 .wave3",1,{morphSVG:"svg1 .wave4",ease:Linear.easeNone}).to("svg1 .wave3",1,{morphSVG:"svg1 .wave5",ease:Linear.easeNone});
wave.to("svg1 .wave4",1,{morphSVG:"svg1 .wave5",ease:Linear.easeNone}).to("svg1 .wave4",1,{morphSVG:"svg1 .wave1",ease:Linear.easeNone});
wave.to("svg1 .wave5",1,{morphSVG:"svg1 .wave1",ease:Linear.easeNone}).to("svg1 .wave5",1,{morphSVG:"svg1 .wave2",ease:Linear.easeNone});
})//ready