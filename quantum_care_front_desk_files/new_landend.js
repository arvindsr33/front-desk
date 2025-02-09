function VideoBg(t){Object.defineProperty(this,"self",{get:function(){return t},set:function(t){this.parent=t},enumerable:!0,configurable:!0}),Object.defineProperty(this,"parent",{get:function(){return t.hasClass("body-iframe")?$(window):t.parent()},set:function(t){this.parent=t.parent()},enumerable:!0,configurable:!0}),this.getVideoRatio=function(){return 1.78},this.resize=function(){var t=this.parent.width(),e=this.parent.height();e/t>.5625?(this.self.height(e),this.self.width(e*this.getVideoRatio())):(this.self.width(t*this.getVideoRatio()),this.self.height(t/this.getVideoRatio())),this.self.css({left:"50%",top:"50%",transform:"translate(-50%, -50%)"})}}$('[class*="-iframe-enabled-"]:not(.iframe-mockup):visible').each((function(t,e){new VideoBg($(e)).resize(),$(window).width()<768&&($(e).attr("src",""),setTimeout((function(){$(e).attr("src","")}),200))}));
function saveUrlLeadIdToFormInput(){var t=getCookie("lndingActnAftrSbsLd");t&&Object.values(document.querySelectorAll('form input[name="_lead_uuid"]')).forEach((function(n){n.value=t}))}function checkUrlForActionAfterSubmission(){var t=getUrlVars();for(var n in t)if(t.hasOwnProperty("lndingActnAftrSbsLd")){var e=new Date,o=removeParamFromUrl(document.location.href,"lndingActnAftrSbsLd");e.setMinutes(e.getMinutes()+30),document.cookie="lndingActnAftrSbsLd="+t[n]+";expires="+e.toUTCString()+";path="+window.location.pathname,window.history.pushState({path:o},"",o)}}checkUrlForActionAfterSubmission(),saveUrlLeadIdToFormInput();
!function(t){const e=document.getElementsByTagName("html")[0].getAttribute("xml:lang")||document.documentElement.lang,n=[{name:"webview",callback:()=>window.addEventListener("DOMContentLoaded",(function(){const t=navigator.userAgent||navigator.vendor||window.opera,e=t.includes("FBAN")||t.includes("FBAV")||t.includes("wv"),n=t.match(/Instagram\ ([0-9\.]+)/),c=navigator.userAgent.toLowerCase().match("android");(e||n)&&c&&s({name:"webview",src:"https://scripts.assets-landingi.com/landend/280524/webview.js"})}))}];function s(t){const n=function(t){return t.replace("%lang%",e)},s=function(t){const e=t.split(".").pop();"js"!==e?"css"===e&&function(t){const e=document.createElement("link");e.href=n(t),e.rel="stylesheet",e.type="text/css",document.getElementsByTagName("head")[0].appendChild(e)}(t):function(t){const e=document.createElement("script");e.src=n(t),e.fetchPriority="high",e.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(e)}(t)};if("string"!=typeof t.src)for(let e in t.src)s(t.src[e]);else s(t.src)}!function(t){for(let e in t){const n=t[e];!1!==n.shouldBeInjected()&&s(n)}}([{name:"counter",src:"https://scripts.assets-landingi.com/landend/280524/counter.js",shouldBeInjected:()=>t(".widget-counterv2, .widget-counter").length>0},{name:"accordion",src:"https://scripts.assets-landingi.com/landend/110724-2/accordion.js",shouldBeInjected:()=>t(".widget-accordion").length>0},{name:"datepicker",src:["https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js","https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.standalone.min.css","https://scripts.assets-landingi.com/landend/280524/datepicker-init.js","https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/locales/bootstrap-datepicker.%lang%.min.js"],shouldBeInjected:()=>t('[subtype="date"]').length>0}]),function(t){for(let e in t){t[e].callback()}}(n)}(jQuery);
$((function(){var t=["utm_source","utm_campaign","utm_medium","utm_term","utm_content"],a=getUrlVars(),n={};$.each(a,(function(a,e){t.contains(a)&&(n[a]=e)})),$("form").each((function(){$(this).attr("action",(function(t,a){return addParamsToUrl(a,n)}))}))})),jQuery.fn.preventDoubleSubmission=function(){return $(this).on("submit.prevent",(function(t){var a=$(this);!0===a.data("submitted")?(t.preventDefault(),t.stopImmediatePropagation()):a.data("submitted",!0)})),this};var validateCallbacks=[];function registerValidateCallback(t){validateCallbacks.push(t)}
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}return r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),u=f.slice(1).join("=");'"'===u.charAt(0)&&(u=u.slice(1,-1));try{var l=f[0].replace(s,decodeURIComponent);if(u=o.read?o.read(u,l):o(u,l)||u.replace(s,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch(e){}if(n===l){c=u;break}n||(c[l]=u)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}((function(){}))}));
function createCookieForCreatio(){if(null!==document.querySelector('[data-integration="creatio"]')){let e=document.referrer;document.cookie="lp_referer_for_lead="+e}}createCookieForCreatio();
$(document).ready((function(){var t=$("#flash");t.length>0&&alert(t.html()),$("#branding").css({position:"static"})}));
!function(){"use strict";function t(t){t.css("transform","translate3d(0,0,0)")}function i(t){t.css("transform","")}function o(t){i(t),t.hide(300),"undefined"!=typeof youtubeVideos&&youtubeVideos.forEach((function(t){0!==$("#"+t.hash).closest(".landingi-popup").length&&youtubePlayers[t.hash].pauseVideo()}))}$('[subtype="popup"]').on("click",(function(i){i.preventDefault();var o=$(this).attr("href"),e=$(o);if(e.show(300,t.bind(null,e)),$('[class*="-iframe-enabled-"]:not(.iframe-mockup):visible').each((function(t,i){new VideoBg($(i)).resize(),$(window).width()<768&&($(i).attr("src",""),setTimeout((function(){$(i).attr("src","")}),200))})),"undefined"!=typeof youtubeVideos&&youtubeVideos[o.replace("#","")]){var n=youtubeVideos[o.replace("#","")];1===n.autoplay&&0!==$("#"+n.hash).closest(".landingi-popup").length&&youtubePlayers[n.hash].playVideo()}})),$(".landingi-popup-body").on("click","*",(function(t){t.stopPropagation()})),$(".landingi-popup").on("click",(function(){o($(this))})),$(".widget-popupcloser").on("click",(function(){o($(this).parents(".landingi-popup").first())})),$(document).on("keydown",(function(t){(function(t){return"Escape"===t.key||27===t.keyCode||27===t.which})(t)&&$(".landingi-popup").each((function(t,o){var e=$(o);i(e),e.hide(300)}))})),$("form").preventDoubleSubmission(),$("form.widget-form").on("submit.validate",(function(t){t.preventDefault();var i=$("body"),o=$(this),e=o.find(".widget-input-button"),n=e.find(".widget-overlay"),a=o.parents(".landingi-popup").first(),s=$(".form-error-tooltip"),r={"_landing-hash":o.attr("data-hash")},u="https://api.landingi.com/validate";window.location.href.indexOf("landingi.it")>0&&(u="https://api.landingi.it/validate");a.length&&(r._popup=a.attr("id").replace("#",""));n.css("color",e.css("color")),n.append('<i class="fa fa-spinner fa-spin"></i>'),e.css("color","transparent"),o.ajaxSubmit({url:u,data:r,method:"POST",processData:!1,contentType:!1,error:function(t,a,r){if(o.data("submitted",!1),s.remove(),e.css("color",""),n.empty(),400===t.status){var u=JSON.parse(t.responseText).html;validateCallbacks.forEach((function(t){var i=t(u);i&&(u=i)})),i.append(u),window.positionValidationTooltips(),window.scrollToFirstTooltip()}else alert(r||t.responseText)},success:function(){window.submitGAformTracking?(window.submitGAformTracking(),setTimeout((function(){o.data("submitted",!1),o.off(".validate"),o.submit(),n.remove(),e.removeAttr("style")}),300)):(o.data("submitted",!1),o.off(".validate"),o.submit())}})}))}();
function addParamsToUrl(n,r){for(var t in r)r.hasOwnProperty(t)&&(n+=(n.split("?")[1]?"&":"?")+encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return n}function removeParamFromUrl(n,r){var t=n.split("?");if(t.length>=2){for(var o=encodeURIComponent(r)+"=",e=t[1].split(/[&;]/g),i=e.length;i-- >0;)-1!==e[i].lastIndexOf(o,0)&&e.splice(i,1);return t[0]+(e.length>0?"?"+e.join("&"):"")}return n}function getCookie(n){var r=document.cookie.match("(^|;) ?"+n+"=([^;]*)(;|$)");return r?r[2]:null}function getUrlVars(){var n={};return(document.URL?document.URL:window.location.href).replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(r,t,o){n[t]=o})),n}Array.prototype.contains||(Array.prototype.contains=function(n){for(var r=this.length;r--;)if(this.hasOwnProperty(r)&&this[r]==n)return!0;return!1});
!function(t){function i(){var i=window.innerWidth;t(".form-error-tooltip").each((function(){var e=t(this),o=e.attr("data-uid"),r=t('[id="'+o+'"]:visible'),s=r.hasClass("widget-textarea")?"textarea":r.hasClass("widget-input-select")?"select":r.attr("type"),n=r.parents(".widget-container").first(),l=n.parents(".widget-form").first(),a=l&&l.attr("data-orientation")||"vertical",d=n.length?n:r;if(d.length){var f=d.offset(),p=r.offset(),c=l.find(".widget-regular-label"),h=c.length?c.css("display"):"none",g=r.parents(".landingi-popup").first(),u=0;if(d.hasClass("widget-container")&&(u=parseInt(d.css("padding-bottom"),10)),e.removeClass("left right under under-right"),e.attr("style",""),g.length){if(g.is(":visible")){var w=g.css("z-index");e.css("display","inline-block"),e.css("z-index",w),e.addClass("tooltip-lightbox")}}else e.css("display","inline-block");if("vertical"===a&&f.left>330&&"inline-block"!==h)e.addClass("left"),e.css({top:p.top+r.outerHeight()/2,left:f.left-e.outerWidth()-5,transform:"translateY(-50%)"});else if("vertical"===a&&i-(f.left+d.outerWidth())>330)e.addClass("right"),e.css({top:p.top+r.outerHeight()/2,left:f.left+d.outerWidth()+5,transform:"translateY(-50%)"});else if("horizontal"===a&&"checkbox"===s)e.addClass("under-right"),e.css({top:p.top+r.outerHeight()+2,left:p.left-5});else{var v=f.top+d.outerHeight()-u,b=null,m=window.innerWidth-(p.left+r.outerWidth());["checkbox","radio"].indexOf(s)>=0&&("checkbox"===s&&(v=p.top+r.outerHeight()+2,b=p.left-4),v+=2),e.addClass("under-right"),null!==b?e.css({top:v,left:b}):e.css({top:v,right:m})}}}))}t(document).ready((function(){var e=t("#"+t(".form-error-tooltip").attr("data-uid")).parents(".landingi-popup").first();e.length&&e.show(),i(),e.length||function(){var i=t(".form-error-tooltip").first().attr("data-uid");if(i){var e=t('[id="'+i+'"]:visible').parents(".widget-container").first(),o=t(".widget-section").first(),r=e.offset().top;"fixed"===o.css("position")&&(r-=o.outerHeight()),t("html, body").animate({scrollTop:r},500)}}()})),t(window).resize(i),t(window).scroll(i),t(".landingi-popup-body").scroll(i),t("body").on("click",".form-error-tooltip",(function(){t(this).remove()})),t(".widget-popupcloser, .landingi-popup-body").on("click",(function(){t(".form-error-tooltip").hide(300)})),window.positionValidationTooltips=i,window.scrollToFirstTooltip=function(){var i=t(".form-error-tooltip").first().attr("data-uid"),e=t('[id="'+i+'"]:visible').parents(".widget-container").first();0===e.length&&(e=t("#"+i));var o=t(".widget-section").first(),r=e.offset().top;"fixed"===o.css("position")&&(r-=o.outerHeight());t("html, body").animate({scrollTop:r},500)}}(jQuery);