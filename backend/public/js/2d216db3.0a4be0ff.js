(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d216db3"],{c3f3:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-toolbar",{staticClass:"bg-purple text-white"},[s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"assignment_ind"}}),s("q-toolbar-title",[t._v("\n      Toolbar "+t._s(t.task)+"\n    ")]),s("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"pie_chart"},on:{click:function(e){return t.$router.push("/chart")}}}),s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"more_vert"},on:{click:t.find}})],1),s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"row"},[s("q-btn",{staticClass:"col",on:{click:t.showTasks}},[t._v("mga gagawin")]),s("q-btn",{staticClass:"col",on:{click:t.showAccomplishedTasks}},[t._v("mga tapos na")])],1),s("div",{staticClass:"row items-center"},[s("q-input",{staticClass:"col",attrs:{value:"",label:"Task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)}},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}}),s("q-btn",{attrs:{disabled:!t.task,icon:"save",round:"",color:"primary",size:"sm"},on:{click:t.add}})],1),s("q-list",{attrs:{bordered:"",separator:""}},t._l(t.todos,function(e,n){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:n,attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:""}},[s("q-checkbox",{attrs:{value:e.isDone},nativeOn:{click:function(s){return t.update(e)}}})],1),s("q-item-section",{style:{"text-decoration":e.isDone?"line-through":""}},[t._v(t._s(e.desc))]),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{icon:"delete",color:"negative",round:"",size:"xs"},on:{click:function(s){return t.remove(e._id)}}})],1)],1)}),1)],1)],1)},o=[],i=s("967e"),a=s.n(i),r=(s("7514"),s("96cf"),s("fa84")),c=s.n(r),d={mounted:function(){var t=this,e="todos",s={query:{isDone:!1}},n={channels:[{prop:"isDone",value:!1}]},o=this.$dbCon.wingsService(e,s,n);this.todosService=o,o.on("dataChange",function(e){console.log("Hoy todos!",e),t.todos=e}).init()},data:function(){return{todosService:null,task:"",todos:[{desc:"add button function",isDone:!1,timestamp:Date.now()},{desc:"add delete function",isDone:!1,timestamp:Date.now()}]}},methods:{add:function(){this.$dbCon.services.todos.create({desc:this.task,isDone:!1,timestamp:Date.now()}),this.task=""},remove:function(t){this.$dbCon.services.todos.remove(t)},update:function(t){this.$dbCon.wingsService("todos"),this.$dbCon.service("todos"),this.$dbCon.services.todos.patch(t._id,{isDone:!t.isDone,"nestedPro.test1":"asdasd"})},find:function(){var t=c()(a.a.mark(function t(){var e;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dbCon.services.todos.find({query:{$search:"qwe"}});case 2:e=t.sent,console.log("RESULT of FIND()",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),showAccomplishedTasks:function(){var t={query:{isDone:!0}},e={channels:[{prop:"isDone",value:!0}]};this.todosService.reset(t,e)},showTasks:function(){var t={query:{isDone:!1}},e={channels:[{prop:"isDone",value:!1}]};this.todosService.reset(t,e)}}},l=d,u=s("2877"),v=Object(u["a"])(l,n,o,!1,null,null,null);e["default"]=v.exports}}]);