(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2532:function(t,e,a){"use strict";var n=a("23e7"),s=a("5a34"),r=a("1d80"),c=a("ab13");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(r(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"38cf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container-max"},[a("d-header",{attrs:{title:"Add Streak"}}),a("div",{staticClass:"grid"},[a("d-input",{attrs:{label:"Title"}}),a("d-tag-list",{attrs:{tags:t.repeats,selectedTag:t.selectedRepeat},on:{onselectionchange:function(e){return t.repeatsChange(e)}}}),a("d-tag-list",{attrs:{tags:t.days,selectedTags:t.selectedDays},on:{onselectionchange:function(e){return t.daysChange(e)}}})],1),a("div",{staticClass:"ctrls container"},[a("d-button",{attrs:{label:"Add"}})],1)],1)},s=[],r=(a("4de4"),a("caad"),a("2532"),{name:"AddStreak",data:function(){return{repeats:["daily","weekly","monthly"],days:["mon","tus","wed","thu","fri","sat","sun"],selectedRepeat:"",selectedDays:[]}},methods:{repeatsChange:function(t){this.selectedDays=[],this.selectedRepeat=t},daysChange:function(t){this.selectedRepeat="",this.selectedDays.includes(t)?this.selectedDays=this.selectedDays.filter((function(e){return e!==t})):this.selectedDays.push(t)}}}),c=r,i=(a("ac50"),a("2877")),u=Object(i["a"])(c,n,s,!1,null,"1cd22427",null);e["default"]=u.exports},"44e7":function(t,e,a){var n=a("861d"),s=a("c6b6"),r=a("b622"),c=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==s(t))}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},ab13:function(t,e,a){var n=a("b622"),s=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,"/./"[t](e)}catch(n){}}return!1}},ac50:function(t,e,a){"use strict";var n=a("fb62"),s=a.n(n);s.a},af46:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"streak container"},[a("d-header",{attrs:{title:t.streak.title}}),a("p",[t._v(t._s(t.streak.text))])],1)},s=[],r=a("5530"),c=a("2f62"),i={name:"Streak",computed:Object(r["a"])({},Object(c["b"])(["getStreakById"])),mounted:function(){var t=parseInt(this.$route.params.id);this.streak=this.getStreakById(t)},data:function(){return{streak:{}}}},u=i,d=a("2877"),o=Object(d["a"])(u,n,s,!1,null,"032238d2",null);e["default"]=o.exports},caad:function(t,e,a){"use strict";var n=a("23e7"),s=a("4d64").includes,r=a("44d2"),c=a("ae40"),i=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!i},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],r=a("2877"),c={},i=Object(r["a"])(c,n,s,!1,null,null,null);e["default"]=i.exports},fb62:function(t,e,a){}}]);
//# sourceMappingURL=about.fa3bbee7.js.map