final String filterPattern="[<>{}\\[\\];\\&]";
var bkee = {};//全局Object
bkee.mWidth = 769;/*切換手機尺寸*/
bkee.loadingTime = 300;//毫秒
bkee.simplebar = false;
//先以?字元取出目前不含參數的url,再以/字元拆解並存至LSA陣列
var  LSA = jQuery(location).attr('href').split("?")[0].split("/");
//取出陣列的最後一項即為目前檔名
bkee.CFN  =  LSA[LSA.length-1];//當前頁面檔案名稱
function getBroswer(){
	var broswer;
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;	
    (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
    if (sys.edge) return { broswer : "Edge", version : sys.edge };
    if (sys.ie) return { broswer : "IE", version : sys.ie };
    if (sys.firefox) return { broswer : "Firefox", version : sys.firefox };
    if (sys.chrome) return { broswer : "Chrome", version : sys.chrome };
    if (sys.opera) return { broswer : "Opera", version : sys.opera };
    if (sys.safari) return { broswer : "Safari", version : sys.safari };
    return { broswer : "", version : "0" };
}

function check_os() {
	var os_type;
	windows = (navigator.userAgent.indexOf("Windows",0) != -1)?1:0; 
	mac = (navigator.userAgent.indexOf("mac",0) != -1)?1:0; 
	linux = (navigator.userAgent.indexOf("Linux",0) != -1)?1:0; 
	unix = (navigator.userAgent.indexOf("X11",0) != -1)?1:0; 
	if (windows) os_type = "MS Windows"; 
	else if (mac) os_type = "Apple mac"; 
	else if (linux) os_type = "Lunix";
	else if (unix) os_type = "Unix"; 
	return os_type; 
}
//瀏覽器版本過低時顯示
function broswerPage(){
	$('.browser-page').show();
	$('body').css({'overflow':'hidden'});
	$('.wrap > .head .nav').css({'visibility':'hidden'});
	$('.wrap > .head .btn-topNav').css({'visibility':'hidden'});
	$('.browser-page .btn-enter').click(function(){
		$('body').css({'overflow':'visible'});
		$('.wrap > .head .nav').css({'visibility':'visible'});
		$('.wrap > .head .btn-topNav').css({'visibility':'visible'});
		$('.browser-page').hide();
		return false;
	});
}
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

function resize(){
	bkee.winW = $(window).width();
	if( bkee.winW > 1080){
		$('#fixed').css({'font-size':'42px'});
		$('.wrap').css({'font-size':'42px'});
	}else if( bkee.winW <= 1080 && bkee.winW >= bkee.mWidth){
		var scale = 42/1200;
		$('#fixed').css({'font-size':scale*bkee.winW + 'px'});
		$('.wrap').css({'font-size':scale*bkee.winW + 'px'});
	}else if( bkee.winW < bkee.mWidth){
		var scale = 42/1242;
		$('#fixed').css({'font-size':scale*bkee.winW + 'px'});
		$('.wrap').css({'font-size':scale*bkee.winW + 'px'});
	}
	//謹慎理財 信用無價 縮放
	if( bkee.winW > 1170){
		$('.honor').css({'font-size':'42px'});
	}else if( bkee.winW <= 1170 && bkee.winW >= bkee.mWidth){
		var scale2 = 42/1200;
		$('.honor').css({'font-size':scale2*bkee.winW + 'px'});
	}else if( bkee.winW < bkee.mWidth){
		var scale2 = 42/1242;
		$('.honor').css({'font-size':scale2*bkee.winW + 'px'});
	}
	//popup-contain-in 高度
	$('.popup-contain-in').css({ height:parseInt($(window).height()) - parseInt($('.wrap > .head').height()) });	
}

function inlineSVG(el){
	//Replace all SVG images with inline SVG
	jQuery(el).each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		var imgURL_encoded = encodeURIComponent(imgURL);

		jQuery.get(imgURL_encoded, function(data) {
			var $svg = jQuery(data).find('svg');
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			}
			$img.replaceWith($svg);
		}, 'xml');
	});
}

function random_item(items){  
	var seed = (new Date()).getTime();
	seed = (seed*9301+49297)%233280;	
	return items[Math.floor((seed/(233280.0))*items.length)];     
}
$(function(){
	
	bkee.templates = ["female", "male"];
	if( $.cookie('bkeeTemplate') == null ){	
		bkee.template = random_item(bkee.templates);
		$.cookie('bkeeTemplate', bkee.template );		
		if(bkee.template == "female"){
			trackEvent('女版');			
		}
		if(bkee.template == "male"){
			trackEvent('男版');
		}
		
	}else{
		bkee.template = $.cookie('bkeeTemplate');
	}
		
	$('body').addClass(bkee.template);	
	if(bkee.CFN == ""){ bkee.CFN = "index.html"; }
	
	//載入Banner
	var bannerPage = [
			"index.html", 
			"feedback.html", 
			"Bankee.html", 
			"story.html", 
			"act.html", 
			"act-1.html", 
			"news.html", 
			"qa.html", 
			"betterme.html"
		];
	if( bannerPage.indexOf(bkee.CFN) != -1 ){
		$('.banner').load('banner/' + bkee.template + '/' + bkee.CFN);	
	}
	//男女版圖像素材 .tempale-img
	if( $('.template-img').length ){
		$('.template-img').each(function(){
			if( $(this).attr(bkee.template) ){
				var img_src = $(this).attr(bkee.template);
				if( $(this).attr("img-class") ){var img_class = $(this).attr("img-class");}else{var img_class = "";}
				$(this).append('<img src="' + img_src + '"  class="' + img_class + '" />');
			}
			
			if( $(this).attr(bkee.template + "_m") ){
				var img_m_src = $(this).attr(bkee.template + "_m");
				if( $(this).attr("img_m-class") ){var img_m_class = $(this).attr("img_m-class");}else{var img_m_class = "";}
				$(this).append('<img src="' + img_m_src + '"  class="' + img_m_class + '" />');
			}		
					
		});
	}
	
	bkee.winW = $(window).width();
	bkee.body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	
	$('#header').load('block/header.html',function(){		
		inlineSVG('#header img.svg');
		if(navId < 10){			
			$('#header > .nav > ul > li:eq(' + navId + ')').addClass("current");
		}
		$('#header .btn-topNav').on("click", function(){
			if( !$(this).hasClass("active") ){
				$(this).addClass("active");
				$('.nav').animate({'right':'0'}, 300);
				$('#nav-overlay').show();
			}else{
				$(this).removeClass("active");
				$('.nav').animate({'right':'-11.66666666666667em'}, 300);
				$('#nav-overlay').hide();
			}
		});
		$('#nav-overlay').on("click", function(){
			$('#header .btn-topNav').removeClass("active");
			$('.nav').animate({'right':'-11.66666666666667em'}, 300);
			$(this).hide();
		});
	});
	$('#wrap-bottom').load('block/wrap-bottom.html', function(){		
		//判別瀏覽器版本
		if( $('body').hasClass("browser-chk") ){
			var borswerData = getBroswer();			
			$('.browser-page .browser-version').text(borswerData.broswer + " " + borswerData.version);
			if( borswerData.broswer == "Chrome" && parseFloat(borswerData.version) < 49){
				broswerPage();//瀏覽器版本過低時顯示
			}
			if( borswerData.broswer == "IE" && parseFloat(borswerData.version) < 11){
				broswerPage();
			}
			if( borswerData.broswer == "Firefox" && parseFloat(borswerData.version) < 40){
				broswerPage();
			}
			if( borswerData.broswer == "Safari" ){
				var checkOS = check_os();
				if( checkOS == "MS Windows" ){
					broswerPage();
				}else{
					if( parseFloat(borswerData.version) < 9.1){
						broswerPage();
					}
				}
			}
		}
		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if( isMobile ){			
			if( isiOS ){
				$('.community .App-Store').show();
				$('.community .Google-Play').hide();
			}
			if( isAndroid ){
				$('.community .App-Store').hide();
				$('.community .Google-Play').show();
			}
			$('.nav > ul > li > .a').on("click", function(){
				if( $(this).siblings('.sub-nav').length ){			
					$(this).parent("li").toggleClass("active").siblings().removeClass("active");
				}	
			});
			//手機版popup加入捲軸
			if( $('#wrap-bottom .popup-contain-in').length ){
				if( bkee.simplebar ){
					$('#wrap-bottom .popup-contain-in').attr("data-simplebar", "");
					$('#wrap-bottom .popup-contain-in').attr("data-simplebar-auto-hide", "true");
				}else{
					$.getScript( "js/libs/simplebar-master/simplebar.js", function( data, textStatus, jqxhr ) {
						bkee.simplebar = true;
						$('#wrap-bottom .popup-contain-in').attr("data-simplebar", "");
						$('#wrap-bottom .popup-contain-in').attr("data-simplebar-auto-hide", "true");
					});
				}								
			}
		}else{
			$('.community .App-Store').show();
			$('.community .Google-Play').show();
		}
		
		resize();
		
		setTimeout(function(){
			$('.wrap').fadeIn("fast", function(){
				//各頁面載入後運行項目代碼
				switch(bkee.CFN){
					case "index.html":						
							index();						
					break;					
					case "feedback.html":
						feedback();
					break;
					case "Bankee.html":
						Bankee();
					break;
					case "story.html":
						story();
					break;
					case "act.html":
						act();
					break;
					case "act-1.html":
						act1();
					break;
					case "news.html":
						news();
					break;
					case "qa.html":
						qa();
					break;
					case "betterme.html":
						betterme();	
						// $('.w-slider-mask').cycle({
							// fx: 'scrollHorz',
							// log: false, 
							// slides : '> div',
							// prev: '.w-slider-arrow-left',
							// next: '.w-slider-arrow-right',
							// speed: 1000,
							// timeout: 4000,
							// updateView: -1
						// });	
					break;
					// case "betterme-trip-jp.html":
						// $('.w-slider-mask').cycle({
							// fx: 'scrollHorz',
							// log: false, 
							// slides : '> div',
							// prev: '.w-slider-arrow-left',
							// next: '.w-slider-arrow-right',
							// speed: 1000,
							// timeout: 4000,
							// updateView: -1
						// });	
					// break;
					// case "betterme-trip-kr.html":
						// $('.w-slider-mask').cycle({
							// fx: 'scrollHorz',
							// log: false, 
							// slides : '> div',
							// prev: '.w-slider-arrow-left',
							// next: '.w-slider-arrow-right',
							// speed: 1000,
							// timeout: 4000,
							// updateView: -1
						// });	
					// break;
				}
				
				//betterme 輪播樣式
				if( $('.w-slider-mask').length ){
					$('.w-slider-mask').cycle({
						fx: 'scrollHorz',
						log: false, 
						slides : '> div',
						prev: '.w-slider-arrow-left',
						next: '.w-slider-arrow-right',
						speed: 1000,
						timeout: 4000,
						updateView: -1
					});
				}
			});	
		}, bkee.loadingTime);
		if( $('.popup-scrollbar').length ){	
			if( bkee.simplebar ){
				$('.popup-scrollbar  .popup-contain-in').each(function(){
					$(this).attr("data-simplebar", "");
					$(this).attr("data-simplebar-auto-hide", "true");
				});
			}else{
				$.getScript( "js/libs/simplebar-master/simplebar.js", function( data, textStatus, jqxhr ) {
					$('.popup-scrollbar  .popup-contain-in').each(function(){
						$(this).attr("data-simplebar", "");
						$(this).attr("data-simplebar-auto-hide", "true");
					});
				});	
			}
		}
		//for betterme
		if( $('.btn-popup').length ){
			$('.btn-popup').on("click", function(){
				$('body').css({'overflow':'hidden'});
				var targetData = $(this).attr("target-data");
				$('#overlay').fadeIn("fast");
				$(targetData).fadeIn("fast");				
				return false;
			});
		}
		if( $('.open-popup').length ){
			$('.open-popup').on("click", function(){
				$('.popup-contain').hide();
				$('body').css({'overflow':'hidden'});
				$('.popup').fadeOut("fast");//for betterme
				var ajaxURL = $(this).attr("href") + '?_=' + new Date().getTime();
				$('#wrap-bottom .popup-content').load(ajaxURL,function(){
					$('#wrap-bottom .popup-contain').fadeIn("fast");
					
					$('.popup-scrollbar  .popup-contain-in').each(function(){
						$(this).attr("data-simplebar", "");
						$(this).attr("data-simplebar-auto-hide", "true");
					});
				});
				return false;
			});
		}
		$('.btn-popup-close').on("click", function(){
			$('body').css({'overflow':'auto'});
			$('#overlay').fadeOut("fast");//for betterme
			$('.popup').fadeOut("fast");//for betterme
			$('.popup-contain').fadeOut("fast");
			return false;
		});	
		$('#overlay').on("click", function(){
			$('body').css({'overflow':'auto'});
			$('#overlay').fadeOut("fast");
			$('.popup').fadeOut("fast");
		});
		$('.popup-contain-close').on("click", function(){
			$('body').css({'overflow':'auto'});
			$('.popup-contain').fadeOut("fast");			
		});	
		//選單不啓用項目
		// $('.head .nav > ul > li:nth-child(2) .sub-nav ul > li:nth-child(2)').on("click", function(){
			// return false;
		// });
		$('.head .nav > ul > li:nth-child(2) .sub-nav ul > li:nth-child(4)').on("click", function(){
			return false;
		});		
	});//$('#wrap-bottom').load	
	if( $('.scroll-top').length ){
		$('.scroll-top').on("click", function(){
			bkee.body.animate({scrollTop: 0 }, 400);
			return false;
		});
	}
});
$(window).resize(function(){
	resize();
});
var elScrollTop = function(el){
	elOffset = $(el).offset();
	return elOffset.top;
}
var winScrollTop;
var fixedContain = '';//fixed容器
var fixedHtml = '';//來源HTML
$(window).scroll(function(){
	winScrollTop = $(this).scrollTop();	
	if( bkee.winW > bkee.mWidth ){
		if( $('.scroll-top').length ){
			if(winScrollTop > ($('body').height()/1.5)){
				$('.scroll-top').fadeIn("fast");
			}else{
				$('.scroll-top').fadeOut("fast");
			}
		}
	}else{
		$('.scroll-top').hide();
	}
});

function trackEvent(label, category, action){	
	if(category==undefined){
		category='Button';
	}
	if(action==undefined){
		action='Action';
	}	
	gtag('event', action, {
	  'event_category' : category,
	  'event_label' : label
	});
}
/*
 *UrlParam取得網址參數需帶入參數名稱
 *UrlParam(參數名稱)
 */
(function ($) {
  $.UrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
})(jQuery);
$(function(){
	switch(bkee.CFN){			
		case "betterme.html":
			if( $.cookie("bettermeTab") == null ){	
				$.cookie("bettermeTab", 0);
			}else{
				var i = $.cookie("bettermeTab");					
				$('.tab-btn').removeClass("tab-btn-active");
				$('.tab-txt').removeClass("tab-txt-active");
				$('.tab-txt').next("img").attr("class", "w-hidden");
				$('.tab-cols > div:eq(' + i + ') .tab-btn').addClass("tab-btn-active");
				$('.tab-cols > div:eq(' + i + ') .tab-txt').addClass("tab-txt-active");
				$('.tab-cols > div:eq(' + i + ') .tab-txt').next("img").attr("class", "tab-arrow");
				// hidden all
				$(".section-table").addClass("w-hidden");
				// show one
				$(".section-table-" + (parseInt(i)+1)).removeClass("w-hidden");
			}				
		break;
		case "betterme-diving.html":
		break;
		case "betterme-skateboard.html":
		break;
		case "betterme-taxi.html":
		break;
		case "betterme-trip-jp.html":
		break;
		case "betterme-trip-kr.html":
		break;
		case "betterme-vip.html":
		break;
		default:
			//$.cookie("bettermeTab", null);
		break;
	}
});
function setBettermeTabCookie(i){
	$.cookie("bettermeTab", i);
}
function clearBettermeTabCookie(){
	$.cookie("bettermeTab", null);
}

//取得並記錄立即辦卡 utm_source
function getUtmSource(){
	var param = $.UrlParam("utm_source");
	if( param ){
		$.cookie('cardUrlParam', param );
	}else{		
		if( !$.cookie('cardUrlParam') ){
			$.cookie('cardUrlParam', "Web" );//(預設)
		}	
	}	
}
$(function(){
	getUtmSource();
});