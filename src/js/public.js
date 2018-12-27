require('!style-loader!css-loader!../css/public.min.css');
/*语言栏切换页面*/
$('.lang').hover(function(){
	$('.lang').css('color','#ffb81c');
},function(){
	$('.lang').css('color','#000');
	$('.language').css('display','none');
})
$('.lang').click(function(){
	$('.language').css('display','block');
})

$('.language span').each(function(){
	$(this).hover(function(){
	$(this).css('background','lightgray');
},function(){
	$(this).css('background','#fff');
});
	
});

//登录注册按钮变色
$('.user a').each(function(){
	$(this).hover(function(){
		$(this).css('color','#ffb81c');
	},function(){
		$(this).css('color','#000');
	});
})
$('#login').hover(function(){
	$('#login').css('text-decoration','underline');
},function(){
	$('#login').css('text-decoration','none');
})

$('#register').hover(function(){
	$('#register').css('text-decoration','underline');
},function(){
	$('#register').css('text-decoration','none');
})
/*二级导航栏的ajax动态生成*/
$.get('../json/public.json?t='+new Date().getTime(),function(str){
			//操作str数据
			console.log(str);
})




/*导航部分*/
$('#list li').each(function(){
		$(this).hover(function(){
			$(this).children().css('color','#fff');;
			//$(this).children().css('display','block');
				
		},function(){
			$(this).children().css('color','#ffb81c');
			//$(this)[0].lastChild.style.display ='none';
			//$('#first').css('display','block');
		})
})
