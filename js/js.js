// //阻止浏览器默认行为触发的通用方法
function stopDefault(e){
//防止浏览器默认行为(W3C)
if(e && e.preventDefault){
e.preventDefault();
}
//IE中组织浏览器行为
else{
window.event.returnValue=fale;
}
return false;
}
var gamestart=false;
var land=false;
var timer=null;
$('#wrap').mousemove(function(event) {
    var x=event.clientX-$('#wrap').offset().left;
    var y=event.clientY-$('#wrap').offset().top;
	$('.finger').css({left:x,top:y});
});
$('#play').click(function(event) {
	$('#start').animate({top:-$('#wrap').height(), opacity: 0}, 1000,function () {
		$('#start').css({display:'none'});
		$('#getready').css({display:'block'});
		$('#setout').animate({opacity: 0}, 1000,function () {
			$('#setout').animate({opacity: 1}, 500).removeClass('ready').addClass('go').animate({opacity: 0}, 1000,function(){
					$('#getready').css({display:'none'});
					$('#mycanvas').css({display:'block'});
					$('#mycanvas2').css({display:'block'});
					$('#mycanvas3').css({display:'block'});
					setTimeout(function() {
						gamestart=true;
						timer=setInterval(function() {
						    gameTime++;
						}, 1000);
					}, 500);
					
				});
			});
		});
	});
$('#setting').click(function(event) {
	$('#start').animate({top:$('#wrap').height(), opacity: 0}, 1000,function () {
		$('#help').css({display:'block'});
		$('#start').css({display:'none'});
	});
});

$('.back').click(function(event) {
	$('#help').animate({left:-$('#wrap').width(), opacity: 0}, 1000,function () {
		$('#start').css({display:'block',opacity:1,top:0});
		$('#help').css({display:'none',opacity:1,left:0});
	});
});

function resizeCanvas(){  
      var width = document.getElementById('wrap').offsetWidth;   
      $('#mycanvas').attr('width', width);  
      $('#mycanvas2').attr('width', width);  
      $('#mycanvas3').attr('width', width);  
}
resizeCanvas();
// 判断是否是移动端
var isMobile = false;//默认PC端
function mobile() {
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}
isMobile=mobile();

window.addEventListener("resize", function() {
    w = $('#wrap').width();
    h = $('#wrap').height();
    mycanvas2.width = w;
    mycanvas3.width = w;
    mycanvas2. height=w*0.05;
    mycanvas3. height=w*0.05;
    my.width = w;
    my.height = h;
    player.width= w*0.07,
    player.height=h*0.07,
    data.heart.width=w*0.03,
    data.heart.height=h*0.05,
    data.heart.heartx=w*0.007,
    data.heart.hearty=h*0.02,
    data.flytime.width= w*0.03,
    data.flytime.height= w*0.03,
    data.flytime.x=w*0.76,
    data.flytime.y=h*0.015,
    data.gameover.x=w*0.23,
    data.gameover.y=h*0.4,
    data.gameover.width=w*0.5,
    data.gameover.height=h*0.14,
    data.star.width=w*0.03,
    data.star.height=w*0.03,
    draw();
    // 加载图片

});


var my = document.getElementById('mycanvas');
var mycanvas2 = document.getElementById('mycanvas2');
var mycanvas3 = document.getElementById('mycanvas3');
var ctx = my.getContext('2d');
var ctx2 = mycanvas2.getContext('2d');
var ctx3 = mycanvas3.getContext('2d');
var w = $('#wrap').width();
var h = $('#wrap').height();
my.width = w;
mycanvas2.width = w;
mycanvas3.width = w;
mycanvas2. height=w*0.05;
mycanvas3. height=w*0.05;
my.height = h;
var key = {
    left: false,
    right: false,
    top: false,
    bottom: false,
    space: false
};
var useMotionPlay=true;
var gameTime = 0;
// 绘制图片
var letterImg=new Image();
data.sky.name.src = data.sky.src;
data.star.name.src = data.star.src;
data.boom.name.src = data.boom.src;
data.gameover.name.src = data.gameover.src;
data.red.name.src = data.red.src;
data.bule.name.src = data.bule.src;
data.green.name.src = data.green.src;
data.yellow.name.src = data.yellow.src;
data.player.name.src = data.player.src;
data.cd.name.src = data.cd.src;
data.cdRock.name.src = data.cdRock.src;
data.heart.name.src = data.heart.src;
data.flytime.name.src = data.flytime.src;
data.zd.name.src = data.zd.src;
var getfire=false;
var islightNum=0;//被点亮的字母个数
var startype = Object.keys(data);
var motionx = 0;
var motiony = 0;
var motionz = 0;
var starArr=[];



// 判断按键
document.onkeydown = function(event) {
    if (event.which == 68) {
        key.left = true;
    }
    if (event.which == 65) {
        key.right = true;
    }
    if (event.which == 83) {
        key.top = true;
    }
    if (event.which == 87) {
        key.bottom = true;
    }
    if (event.which == 32) {
        key.space = true;
    }

};
document.onkeyup = function(event) {
    if (event.which == 68) {
        key.left = false;
    }
    if (event.which == 65) {
        key.right = false;
    }
    if (event.which == 83) {
        key.top = false;
    }
    if (event.which == 87) {
        key.bottom = false;
    }
    if (event.which == 32) {
        key.space = false;
    }
};



// 重力感应按键---------------------------------------------------

window.addEventListener('devicemotion', function(e) {
    var motion = e.accelerationIncludingGravity;
    //重力加速，IOS下所有的数值 和 安卓都是相反的
    if(getIos()){
        motionx = Math.round(motion.x);
        motiony = Math.round(motion.y);
        motionz = Math.round(motion.z);
    }else{
        motionx = -Math.round(motion.x);
        motiony = -Math.round(motion.y);
        motionz = -Math.round(motion.z);
    }
});
// 判断ios
function getIos(){
      var u = navigator.userAgent;
      return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}



// 绘画函数区---------------------------------------------------------------------------------------
// 画椭圆
function EllipseOne(context, x, y, a, b) {
    var step = (a > b) ? 1 / a : 1 / b;
    context.beginPath();
    context.moveTo(x + a, y);
    for (var i = 0; i < 2 * Math.PI; i += step) {
        context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
    }
    context.closePath();
    ctx.stroke();
}
// 陨石在椭圆上运动
function ysEllipseMove(x, y, a, b) {
    var step = (a > b) ? 1 / a : 1 / b;
    var arr = [];
    for (var i = 0; i < 2 * Math.PI; i += step) {
        var x1 = parseInt(x + a * Math.cos(i));
        var y1 = parseInt(y + b * Math.sin(i));
        arr.push([x1, y1]);
    }
    return arr;
}
// 画文字
function drawText(date, l, t) {
    ctx3.save();
    ctx3.fillStyle = '#000';
    ctx3.font = w*0.02+'px 微软雅黑';
    ctx3.textAlign = 'left';
    ctx3.fillText(date, l, t);
    ctx3.restore();
}
// 封装的一个用于绘制圆角矩形的函数.
function roundedRect(ctx, x, y, width, height, radius,liW,color) {
	ctx.save();
	ctx.lineWidth=liW;
	ctx.fillStyle=color;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.fill();
    ctx.restore();
}
// var reload=true;
// 渲染区------------------------------------------------------------------
window.onload = function() {
    draw();
};
function render() {

    if(data.gameover.show){
    	drawBigBG();	
    }
    if(gamestart){
    	update();
    	draw();
    }
    if(isMobile){
        if($('#wrap').width()>768){
            $('#tipWrap').hide();
        }else{
            $('#tipWrap').show();
        }

        if(!gamestart){
            $('#tip').show(400,function () {
                $('#tip').animate({
                    opacity: 0,
                    },
                    400, function b() {
                    $('#tip').css({opacity:1});
                });
            });
        }
    }
    requestAnimationFrame(render);
}
requestAnimationFrame(render);