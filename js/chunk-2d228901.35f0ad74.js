(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.image,width:"200",height:"200"}}),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")])])])},n=[],i=r("1da1"),s=r("5530"),o=(r("96cf"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("4cce")),c=r("2fa3"),u=r("2f62"),m={data:function(){return{id:0,image:"",name:"",email:"",isProcessing:!1}},computed:Object(s["a"])({},Object(u["b"])(["currentUser"])),beforeRouteUpdate:function(e,t,r){if(-1!==this.currentUser.id){var a=e.params.id;this.setUser(a),r()}},watch:{currentUser:function(e){if(-1!==e.id){var t=this.$route.params.id;this.setUser(t)}}},methods:{setUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:try{a=t.currentUser,n=a.id,i=a.image,s=a.name,o=a.email,n.toString()!==e.toString()&&(console.log("id=",n," userId=",e),t.$router.push({name:"not-found"})),t.id=n,t.name=s,t.image=i,t.email=o}catch(u){c["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"})}case 1:case"end":return r.stop()}}),r)})))()},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.image="";else{var r=window.URL.createObjectURL(t[0]);console.log(r),this.image=r}},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.name){r.next=4;break}return c["a"].fire({icon:"warning",title:"請填寫使用者名稱"}),r.abrupt("return");case 4:return t.isProcessing=!0,a=e.target,n=new FormData(a),r.next=9,o["a"].update({userId:t.id,formData:n});case 9:if(i=r.sent,s=i.data,"error"!==s.status){r.next=13;break}throw new Error(s.message);case 13:t.isProcessing=!1,t.$router.push({name:"users-profile",params:{id:t.id}}),r.next=21;break;case 17:r.prev=17,r.t0=r["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"無法編輯使用者資料，請稍後再試"});case 21:case"end":return r.stop()}}),r,null,[[0,17]])})))()}},created:function(){var e=this.$route.params.id;this.setUser(e)}},l=m,d=r("2877"),p=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d228901.35f0ad74.js.map