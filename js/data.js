var rem = 1;
var w = $('#wrap').width();
var h = $('#wrap').height();
// var rem = Math.floor(window.innerWidth/1366);
var data = {
	bule: {
	    name: new Image(),
	    src: 'css/image/bule.png'
	},
	green: {
	    name: new Image(),
	    src: 'css/image/green.png'
	},
	red: {
	    name: new Image(),
	    src: 'css/image/red.png'
	},
	yellow: {
	    name: new Image(),
	    src: 'css/image/yellow.png'
	},

    player: {
        name: new Image(),
        src: 'css/image/xfj.png',
        speed: 10
    },
    gameover: {
        name: new Image(),
        src: 'css/image/over.png',
        x:w*0.23,
        y:h*0.4, 
        width:w*0.5,
        height:h*0.14,
        show:false
    },
    sky: {
        name: new Image(),
        src: 'css/image/ICEbg.png'
    },
    zd: {
        name: new Image(),
        src: 'css/img/zd.png'
    },
    cd:{
    	name: new Image(),
    	src: 'css/image/rock.png',
    	height: 100*rem,
    },
    cdRock:{
    	name: new Image(),
    	src: 'css/image/cdRock.png',
    },
    heart:{
    	name: new Image(),
    	src: 'css/img/heart.png',
    	x:0,
    	y:0, 
    	width: w*0.03,
    	height:h*0.05,
    	heartshow:false,
    	heartx:w*0.007,
    	hearty:h*0.02,
    },
    star:{
    	name: new Image(),
    	src: 'css/image/star.png',
    	starshow:false,
    	x:0,
    	y:h*0.01,
    	width:w*0.03,
    	height:w*0.03,
    	starNum:0
    },
    flytime:{
    	name: new Image(),
    	src: 'css/img/flytime.png',
    	x: w*0.76,
    	y: h*0.015,
    	width: w*0.03,
    	height: w*0.03,
    },
    boom:{
    	name: new Image(),
    	src: 'css/image/boom.png',
    },
    letter:[{src:"css/image/H.png",tex:"H",islight:false},{src:"css/image/E.png",tex:"E",islight:false},{src:"css/image/L.png",tex:"L",islight:false},{src:"css/image/L.png",tex:"L",islight:false},{src:"css/image/O.png",tex:"O",islight:false},{src:"css/image/W.png",tex:"W",islight:false},{src:"css/image/O.png",tex:"O",islight:false},{src:"css/image/R.png",tex:"R",islight:false},{src:"css/image/L.png",tex:"L",islight:false},{src:"css/image/D.png",tex:"D",islight:false}],
    letterShow:false,//漂浮字母是否出现 
    fireShow:false,//漂浮火力是否出现 
    boardshow:false, //底部字母是否出现  
};
// 加载图片
for (var i = 0; i < data.letter.length; i++) {
    var preLoadImg = new Image();
    preLoadImg.src = data.letter[i].src;
}