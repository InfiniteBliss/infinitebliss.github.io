(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{cjqQ:function(e,n,t){"use strict";t.r(n),t.d(n,"PrivacyPolicyModule",function(){return w});var o=t("7K4x"),r=t("wRzj"),c=t("7dfQ"),i=t("n6Np"),a=t("AytR"),v=t("l0jt"),s=t("XcrC"),l=t("z255"),p=t("zBoC"),u=t("2MiI"),m=t("LmEr");let d=(()=>{class e{constructor(e,n){this.db=e,this.metaService=n,this.content=""}ngOnInit(){this.getPrivacyContent()}getPrivacyContent(){return Object(i.a)(this,void 0,void 0,function*(){const e=this.db.collection("website-info").doc("admin"),n=yield e.get().toPromise();n.exists?this.content=n.data().privacyPolicy:console.log("No such document!")})}updateMetaTags(){let e=window.location.href,n=a.a.websiteTitle;this.metaService.setTitle("Privacy Policy"),this.metaService.updateMetaTags({description:`${n} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,keywords:`${n} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,ogUrl:e,ogtitle:`${n} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,ogDescription:`${n} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,twitterUrl:e,twitterTitle:`${n} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,twitterDescription:`${n} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`})}}return e.\u0275fac=function(n){return new(n||e)(v.Ob(s.a),v.Ob(l.a))},e.\u0275cmp=v.Ib({type:e,selectors:[["app-privacy-policy"]],decls:11,vars:1,consts:[["id","wrapper"],["id","content-wrapper",1,"d-flex","flex-column"],["id","content"],[1,"container-fluid",3,"innerHTML"],[1,"container-fluid","navigation-title","text-center"],["routerLink","/"]],template:function(e,n){1&e&&(v.Rb(0,"div",0),v.Pb(1,"app-sidebar"),v.Rb(2,"div",1),v.Rb(3,"div",2),v.Pb(4,"app-header"),v.Pb(5,"div",3),v.Rb(6,"div",4),v.Rb(7,"p"),v.Rb(8,"a",5),v.sc(9,"back to home "),v.Qb(),v.Qb(),v.Qb(),v.Qb(),v.Qb(),v.Qb(),v.Pb(10,"app-footer")),2&e&&(v.Cb(5),v.fc("innerHTML",n.content,v.nc))},directives:[p.a,u.a,c.g,m.a],styles:[""]}),e})();var g=t("j1ZV"),f=t("1i1J");let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=v.Mb({type:e}),e.\u0275inj=v.Lb({imports:[[o.c,r.b,g.a,c.h.forChild([{path:"",component:d}]),f.a.forRoot(a.a.ga),f.b]]}),e})()},vjQU:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t("l0jt");let r=(()=>{class e{constructor(){}sidebar(){var e;(e=jQuery)("#sidebarToggle, #sidebarToggleTop").on("click",function(n){e("body").toggleClass("sidebar-toggled"),e(".sidebar").toggleClass("toggled"),e(".sidebar").hasClass("toggled")&&e(".sidebar .collapse").collapse("hide")}),e(window).resize(function(){e(window).width()<768&&e(".sidebar .collapse").collapse("hide")}),e("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel",function(n){if(e(window).width()>768){var t=n.originalEvent;this.scrollTop+=30*((t.wheelDelta||-t.detail)<0?1:-1),n.preventDefault()}}),e(document).on("scroll",function(){e(this).scrollTop()>100?e(".scroll-to-top").fadeIn():e(".scroll-to-top").fadeOut()}),e(document).on("click","a.scroll-to-top",function(n){var t=e(this);e("html, body").stop().animate({scrollTop:e(t.attr("href")).offset().top},1e3,"easeInOutExpo"),n.preventDefault()})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);