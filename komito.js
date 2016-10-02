/* @license http://www.apache.org/licenses/LICENSE-2.0 */
(function(){
var f=document,h=window;function k(a,c,b){a.attachEvent?a.attachEvent("on"+c,b):a.addEventListener(c,b,!1)}function l(a,c,b){a.attachEvent?a.detachEvent("on"+c,b):a.removeEventListener(c,b,!1)}function m(a){a=a||h.event;return a.target||a.srcElement}
function n(a,c){var b=f.createElement("SCRIPT"),d=!1,e;b.src=a;b.onload=b.onreadystatechange=function(){e=b.readyState||"complete";d||"loaded"!==e&&"complete"!==e||(d=!0,b.onload=b.onreadystatechange=null,b.parentNode.removeChild(b),c&&c())};q.parentNode.appendChild(b)}var q,r=f&&f.getElementsByTagName("SCRIPT");q=r[r.length-1];var t=Array.prototype.slice;function u(a){return(h.JSON?JSON.parse(a):eval("("+a+")"))||null};var v={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:/[?&]debug=1/.test(location.search)},w=/\.([0-9a-z]+)(?:[\?#]|$)/i,x=h.GoogleAnalyticsObject||"ga";
function y(a){var c,b=c=arguments,d=Array.isArray;c=(d?d(b):"[object Array]"===Object.prototype.toString.call(b))?c:t.call(c);c[0]=c[0]?"social":"event";"function"===typeof h[x]&&(b=h[x].getAll&&h[x].getAll())&&z(b,"send",c);var b=c,e=h.TagLoader,d=h.s,g=[],p=1;if(e&&d&&d instanceof e){for(;p<b.length;p++)e="prop"+p,g.push(e),d[e]=b[p];d.linkTrackEvents="None";d.linkTrackVars=g.join(",");z([d],"tl",[d,"download"===b[1]?"d":"o",b[0]])}b=[].concat(c);"social"==b[0]&&(b[1]="social:"+b.splice(2,1,b[1])[0]);
b=b.slice(1);z([h],"ClickTaleEvent",[b.join(":")]);z([h],"__utmTrackEvent",b);h._hmt&&z([h._hmt],"push",[["_trackEvent"].concat(b)]);if(h._gat||h._gaq)b=h._gat&&h._gat._getTrackers&&h._gat._getTrackers(),c[0]={social:"_trackSocial",event:"_trackEvent"}[c[0]],b?z(b,c[0],c.slice(1)):h._gaq&&z([h._gaq],"push",[c])}function z(a,c,b){var d=a.length,e;for(A(c,b);d;)e=a[--d],"function"===typeof e[c]&&e[c].apply(e,b)}function A(a){var c=h.console;B.debugMode&&c&&c.log.apply(c,arguments)}
var B=h._komito||{};
setTimeout(function(){for(var a in v)a in B||(B[a]=v[a]);if(C&&B.trackForms){a=f.forms;for(var c=a.length;c;)k(a[--c],"submit",D)}if(E)for(a=f&&f.getElementsByTagName("A"),c=a.length;c;){var b=a[--c],d=/^https?:$/.test(b.protocol),e=((b.href||b.getAttribute("href")).match(w)||[""]).pop().toLowerCase();B.trackOutbound&&d&&!~b.hostname.indexOf(location.hostname)&&k(b,"mousedown",F);B.trackDownloads&&e&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,".indexOf(","+e+
",")&&k(b,"mousedown",G);B.trackActions&&!d&&k(b,"mousedown",H)}I&&J();K&&L();M.j();B.trackMedia&&(N&&O(),P&&Q(),R&&S())},1E3);function D(a){a=m(a);for(var c=a.elements,b=c.length,d=0,e;d<b;)e=c[d++],e.name&&y(0,"form",a.getAttribute("name")||a.getAttribute("id")||"form",e.name+":"+(e.type||e.tagName));l(a,"submit",D)}var C={};function F(a){a=T(a);var c="outbound",b=a.hostname,d=M&&M.i[b.replace(/^www\./,"")],e=a.pathname.split("/"),g=a.href||a.getAttribute("href");y(0,c,b,g);d&&("twitter.com"===b.substr(-11)&&"intent"===e[e.length-2]&&(c="intent-"+e.pop()),y(1,d,c,g));l(a,"mousedown",F)}function G(a){a=T(a);var c=a.href||a.getAttribute("href"),b=(c.match(w)||[""]).pop().toLowerCase();y(0,"download",b,c);l(a,"mousedown",G)}
function H(a){a=T(a);var c=a.protocol.slice(0,-1),b=a.href||a.getAttribute("href"),d=b.slice(c.length+1).split("?")[0];y(0,"cta:"+c,d,b);l(a,"mousedown",H)}function T(a){for(a=m(a);a&&"A"!==a.tagName;)a=a.parentNode;return a}var E={};function J(){if(B.trackPrint){var a=function(){y(0,"print",f.title,location.href);b&&b.removeListener(a);l(h,"afterprint",a);a=null},c=h.matchMedia,b=c&&c("print");b&&b.addListener(a);k(h,"afterprint",a)}}var I={};function L(){if(B.trackScroll){var a={25:0,50:0,75:0,100:0},c=f.documentElement,b;k(h,"scroll",function(){(b=25*~~((c.scrollTop+f.body.scrollTop)/(c.scrollHeight-c.clientHeight)*100/25))&&!a[b]&&(a[b]=1,y(0,"scroll","depth",b+"%"))})}}var K={};function O(){function a(a){e=m(a);g=a.type;~g.indexOf("fullscreen")&&(g=f.fullScreen||f.mozFullScreen||f.webkitIsFullScreen?"fullscreen":"");g&&y(0,e.tagName.toLowerCase()+":html5",g,e.currentSrc||e.src)}for(var c="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),b=U("AUDIO","VIDEO"),d=b.length,e,g,p;d--;)for(e=b[d],p=0;6>p;)k(e,c[p++],a)}
function U(a){for(var c=[],b=arguments.length,d,e;b;)for(d=arguments[--b],d=f&&f.getElementsByTagName(d),e=0;e<d.length;)c.push(d[e++]);return c}var N={};var V=/^(https?:)?\/\/player\.vimeo\.com\/video\/\d+/;function S(){for(var a=f&&f.getElementsByTagName("IFRAME"),c=a.length,b=[],d;c;)d=a[--c],V.test(d.src)&&b.push(d);b.length&&(h.Vimeo&&h.Vimeo.Player?W(b):n("https://player.vimeo.com/api/player.js",function(){W(b)}))}function W(a){var c=h.Vimeo&&h.Vimeo.Player;if(c)for(var b=a.length,d;b;)d=a[--b],X(new c(d),d.src.split("?")[0])}
function X(a,c){a.on("ended",function(){y(0,"video:vimeo","ended",c)});a.on("play",function(){y(0,"video:vimeo","play",c)});a.on("pause",function(){y(0,"video:vimeo","pause",c)})}var R={};var Y=/^(https?:)?\/\/(www\.)?youtube(\-nocookie)?\.com\/(embed|watch|v)/;function Q(){for(var a=f&&f.getElementsByTagName("IFRAME"),c=a.length,b=0,d=[],e,g;b<c;)e=a[b++],g=e.src,Y.test(g)&&(0>g.indexOf("enablejsapi")&&(e.src+=(~g.indexOf("?")?"&":"?")+"enablejsapi=1"),d.push(e));if(c=d.length)h.onYouTubeIframeAPIReady=function(){for(b=0;b<c;)k(new h.YT.Player(d[b++]),"onStateChange",Z)},h.YT||n("https://www.youtube.com/iframe_api")}
function Z(a){var c=["ended","play","pause"][a.data];c&&y(0,"video:youtube",c,a.target.getVideoUrl())}var P={};var M={i:{"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare",
"foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},f:{Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1","Google+":"https://plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",
Twitter:"https://twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"},j:function(){B.trackTwitter&&M.b&&M.b.track();B.trackFacebook&&M.a&&M.a.track();B.trackLinkedIn&&M.g&&M.g.track();B.trackUsers&&M.h&&M.h.track()}};M.a={track:function(){function a(a){y(1,"Facebook",a,location.href)}if(9>M.a.c++){var c=h.FB;if(c=c&&c.Event&&c.Event.subscribe)try{c("edge.create",function(){a("like")}),c("edge.remove",function(){a("unlike")}),c("message.send",function(){a("message")})}catch(b){}else setTimeout(M.a.track,5E3)}},c:0};M.g={track:function(){function a(a,c){var b=["cb_onsuccess",c,+new Date].join("_");a.onsuccess=(a.onsuccess?a.onsuccess+",":"")+b;h[b]=function(){y(1,"LinkedIn",c,location.href)}}for(var c=f&&f.getElementsByTagName("SCRIPT"),b=c.length,d=0,e,g;d<b;)e=c[d++],g=(e.getAttribute("type")||"").toLowerCase(),!g.indexOf("in/")&&a(e,g.substr(3))}};M.b={track:function(){var a={},c,b,d;9>M.b.c++&&(h.twttr&&h.twttr.ready?h.__twitterIntentHandler||(k(h,"message",function(e){try{"twitter.com"===e.origin.substr(-11)&&e.data&&(d=(b=u(e.data))&&b.params)&&"trigger"===b.method&&(c=d[0],"click"===c&&d[1]&&(c+="-"+d[1].region),a[c]||(a[c]=1,y(1,"Twitter",c,location.href)))}catch(g){}}),h.twttr.ready(function(a){a.events.bind("message",function(){})}),h.__twitterIntentHandler=!0):setTimeout(M.b.track,5E3))},c:0};M.h={track:function(){function a(a,c){k(a,"load",function(){y(1,c,"pageview",location.href)});a.src=M.f[c]}function c(a){a(function(a){a&&"unknown"!==a.status&&!d++&&y(1,"Facebook","pageview",location.href)})}function b(){var a=h.FB&&h.FB.getLoginStatus;a?(c(a),k(h,"message",function(b){try{"facebook.com"===b.origin.substr(-12)&&b.data&&~b.data.indexOf("xd_action=proxy_ready")&&c(a)}catch(aa){}})):--e&&setTimeout(b,2E3)}var d=0,e=5,g;for(g in M.f)a(new Image(1,1),g);b()}};
})();
