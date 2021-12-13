(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"album py-5 bg-light"},[r("div",{staticClass:"container"},[r("div",{staticClass:"card mb-3"},[r("UserProfileCard",{attrs:{user:t.profile,initialIsFollowed:t.isFollowed,isCurrentUser:t.isCurrentUser}})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{Followings:t.profile.Followings}}),r("br"),r("UserFollowersCard",{attrs:{Followers:t.profile.Followers}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{Comments:t.profile.Comments}}),r("br"),r("UserFavoritedRestaurantsCard",{attrs:{FavoritedRestaurants:t.profile.FavoritedRestaurants}})],1)])])])},a=[],i=r("1da1"),n=r("5530"),o=(r("96cf"),r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:t.user.image,width:"300px",height:"300px"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.user.name))]),r("p",{staticClass:"card-text"},[t._v(t._s(t.user.email))]),r("ul",{staticClass:"list-unstyled list-inline"},[r("li",[r("strong",[t._v(t._s(t.UserCommentedCount))]),t._v(" 已評論餐廳 ")]),r("li",[r("strong",[t._v(t._s(t.UserFavoritedCount))]),t._v(" 收藏的餐廳 ")]),r("li",[r("strong",[t._v(t._s(t.UserFollowingsCount))]),t._v(" followings (追蹤者) ")]),r("li",[r("strong",[t._v(t._s(t.UserFollowersCount))]),t._v(" followers (追隨者) ")])]),r("p"),t.isCurrentUser?[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"users-profile-edit",params:{id:t.user.id}}}},[t._v(" Edit ")])]:[t.isFollowed?r("button",{staticClass:"btn btn-danger btn-border",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFollowing(t.user.id)}}},[t._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary btn-border",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollowing(t.user.id)}}},[t._v(" 追蹤 ")])],r("p")],2)])])}),l=[],u=r("4cce"),c=r("2fa3"),d={props:{user:{type:Object,required:!0},initialIsFollowed:{type:Boolean,required:!0},isCurrentUser:{type:Boolean,require:!0}},data:function(){return{currentUser:{},isFollowed:this.initialIsFollowed,UserCommentedCount:0,UserFavoritedCount:0,UserFollowersCount:0,UserFollowingsCount:0}},watch:{initialIsFollowed:function(t){this.isFollowed=t}},methods:{fetchUser:function(){this.UserCommentedCount=this.user.Comments.length,this.UserFavoritedCount=this.user.FavoritedRestaurants.length,this.UserFollowersCount=this.user.Followers.length,this.UserFollowingsCount=this.user.Followings.length},addFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].addFollowing({userId:t});case 3:if(s=r.sent,a=s.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:e.isFollowed=!0,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"無法取消追蹤使用者，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].deleteFollowing({userId:t});case 3:if(s=r.sent,a=s.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:e.isFollowed=!1,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"無法取消追蹤使用者，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},m=d,v=r("2877"),p=Object(v["a"])(m,o,l,!1,null,null,null),w=p.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.Followings.length))]),t._v(" followings (追蹤者) ")]),r("div",{staticClass:"card-body"},t._l(t.Followings,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"users-profile",params:{id:t.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t.image,width:"60",height:"60"}})])})),1)])},h=[],g={props:{Followings:{type:Array,required:!0}}},f=g,F=Object(v["a"])(f,C,h,!1,null,null,null),b=F.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.Followers.length))]),t._v(" followers (追隨者)")]),r("div",{staticClass:"card-body"},t._l(t.Followers,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"users-profile",params:{id:t.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t.image,width:"60",height:"60"}})])})),1)])},U=[],y={props:{Followers:{type:Array,required:!0}}},k=y,x=Object(v["a"])(k,_,U,!1,null,null,null),R=x.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.Comments.length))]),t._v(" 已評論餐廳")]),r("div",{staticClass:"card-body"},t._l(t.Comments,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.Restaurant.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t.Restaurant.image,width:"60",height:"60"}})])})),1)])},O=[],E={props:{Comments:{type:Array,required:!0}}},q=E,I=Object(v["a"])(q,j,O,!1,null,null,null),$=I.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.FavoritedRestaurants.length))]),t._v(" 收藏的餐廳 ")]),r("div",{staticClass:"card-body"},t._l(t.FavoritedRestaurants,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t.image,width:"60",height:"60"}})])})),1)])},P=[],B={props:{FavoritedRestaurants:{type:Array,required:!0}}},D=B,J=Object(v["a"])(D,A,P,!1,null,null,null),z=J.exports,G=r("2f62"),H={components:{UserProfileCard:w,UserFollowingsCard:b,UserFollowersCard:R,UserCommentsCard:$,UserFavoritedRestaurantsCard:z},data:function(){return{profile:{id:"",name:"",email:"",image:"",Comments:[],FavoritedRestaurants:[],Followers:[],Followings:[]},isFollowed:!1,isCurrentUser:!1}},computed:Object(n["a"])({},Object(G["b"])(["currentUser","isAuthenticated"])),methods:{fetchUser:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a,i,n,o,l,d,m,v,p,w,C;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].get({userId:t});case 3:s=r.sent,a=s.data,i=a.profile,n=a.isFollowed,o=i.id,l=i.name,d=i.email,m=i.image,v=i.Comments,p=i.FavoritedRestaurants,w=i.Followers,C=i.Followings,e.profile={id:o,name:l,email:d,image:m,Comments:v,FavoritedRestaurants:p,Followers:w,Followings:C},e.isFollowed=n,e.profile.id===e.currentUser.id&&(e.isCurrentUser=!0),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()}},created:function(){var t=this.$route.params.id;this.fetchUser(t)},beforeRouteUpdate:function(t,e,r){var s=t.params.id;this.fetchUser(s),r()}},K=H,L=Object(v["a"])(K,s,a,!1,null,null,null);e["default"]=L.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.bdd59a9c.js.map