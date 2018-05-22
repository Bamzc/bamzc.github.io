webpackJsonp([5],{446:function(s,a,e){s.exports={default:e(447),__esModule:!0}},447:function(s,a,e){var r=e(0),t=r.JSON||(r.JSON={stringify:JSON.stringify});s.exports=function(s){return t.stringify.apply(t,arguments)}},69:function(s,a,e){function r(s){e(816)}var t=e(18)(e(785),e(852),r,null,null);s.exports=t.exports},785:function(s,a,e){"use strict";function r(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var t=e(446),i=r(t),n=e(36),o=(r(n),e(19));r(o),e(72);a.default={data:function(){return{name:"",password:"",loading:!1,login_error:!1,error_str:"用户名或者密码不正确！"}},watch:{password:function(){this.login_error=!1},name:function(){this.login_error=!1}},mounted:function(){},methods:{submit:function(){var s=this;this.$validator.validateAll().then(function(a){a&&(s.loading=!0,setTimeout(function(){var a={userName:s.name};s.$store.commit("setUserInfo",a),window.localStorage.user=(0,i.default)(a),s.$router.push({path:"/main"},function(){s.loading=!1})},1e3))})}}}},816:function(s,a){},852:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"main_container"},[e("a",{staticClass:"hiddenanchor",attrs:{id:"signup"}}),s._v(" "),e("a",{staticClass:"hiddenanchor",attrs:{id:"signin"}}),s._v(" "),e("div",{staticClass:"login_wrapper"},[e("div",{staticClass:"animate form login_form"},[e("section",{staticClass:"login_content"},[e("form",{staticClass:"form-horizontal form-label-left"},[e("h1",[s._v("登录")]),s._v(" "),e("div",{staticClass:"item form-group"},[s._m(0),s._v(" "),e("div",{staticClass:"col-md-9 col-sm-9 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:4|login_pass",expression:"'required|alpha_num|min:4|login_pass'"}],staticClass:"form-control col-md-7 col-xs-12",class:{input:!0,"is-danger":s.errors.has("用户名")},attrs:{name:"loginName","data-vv-name":"用户名",maxLength:"10",type:"text"},domProps:{value:s.name},on:{input:function(a){a.target.composing||(s.name=a.target.value)}}}),s._v(" "),e("div",{staticClass:"errorsTips"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("用户名"),expression:"errors.has('用户名')"}],staticClass:"help is-danger"},[e("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("用户名"),expression:"errors.has('用户名')"}],staticClass:"fa fa-warning"}),s._v(s._s(s.errors.first("用户名")))]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!s.errors.has("用户名")&&s.login_error,expression:"!errors.has('用户名') && login_error"}],staticClass:"help is-danger"},[e("i",{staticClass:"fa fa-warning"},[s._v(s._s(s.error_str))])])])])]),s._v(" "),e("div",{staticClass:"item form-group"},[s._m(1),s._v(" "),e("div",{staticClass:"col-md-9 col-sm-9 col-xs-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:4|login_pass",expression:"'required|alpha_num|min:4|login_pass'"}],staticClass:"form-control col-md-7 col-xs-12",class:{input:!0,"is-danger":s.errors.has("密码")},attrs:{name:"loginPassword","data-vv-name":"密码",maxLength:"16",type:"password"},domProps:{value:s.password},on:{keyup:function(a){if(!("button"in a)&&s._k(a.keyCode,"enter",13))return null;s.submit()},input:function(a){a.target.composing||(s.password=a.target.value)}}}),s._v(" "),e("div",{staticClass:"errorsTips"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("密码"),expression:"errors.has('密码')"}],staticClass:"help is-danger"},[e("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("密码"),expression:"errors.has('密码')"}],staticClass:"fa fa-warning"}),s._v(s._s(s.errors.first("密码")))]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!s.errors.has("密码")&&s.login_error,expression:"!errors.has('密码') && login_error"}],staticClass:"help is-danger"},[e("i",{staticClass:"fa fa-warning"},[s._v(s._s(s.error_str))])])])])]),s._v(" "),e("div",{staticClass:"item form-group"},[e("a",{ref:"login",staticClass:"btn btn-default submit",attrs:{href:"javascript:;"},on:{click:function(a){s.submit(a)},keyup:function(a){if(!("button"in a)&&s._k(a.keyCode,"enter",13))return null;s.submit()}}},[s._v("登录")])]),s._v(" "),e("div",{staticClass:"clearfix"}),s._v(" "),s._m(2)])])])]),s._v(" "),e("nv-loading",{attrs:{loading:s.loading,loadingText:"登录中"}})],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("label",{staticClass:"control-label col-md-3 col-sm-3 col-xs-12",attrs:{for:""}},[s._v("用户名 "),e("span",{staticClass:"required"},[s._v(":")])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("label",{staticClass:"control-label col-md-3 col-sm-3 col-xs-12",attrs:{for:""}},[s._v("密码 "),e("span",{staticClass:"required"},[s._v(":")])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"separator item form-group"},[e("div",{staticClass:"clearfix"}),s._v(" "),e("br"),s._v(" "),e("div",{staticClass:"item form-group"},[e("h1",[s._v(" 商品云管理信息系统")])])])}]}}});