(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{552:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" AJAX")]),t._v(" "),e("ol",{attrs:{start:"0"}},[e("li",[t._v("须调用 jquery_ujs\n可在application.erb里加")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  //= require jquery_ujs\n")])])]),e("ol",[e("li",[t._v("控制器")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("unless items.nil?\n  render json: {status: 'failed', alert: '查询数据为空'} and return\nend\n\nrender json: {status: 'success', value: items}\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("页面")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://talkcool.info/?p=19",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rails 开发：那些年，我们一起踩过的坑"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("pipiline")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$(document).on 'page:load', ->if page is scrollPage   # pseudo code\n    $(window).bind 'scroll', customScrollFunction$(document).one 'page:change', ->$(window).unbind 'scroll', customScrollFunction\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("解决了ajax必须刷新才能加载问题")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 删除此插件，或者 JS 使用 page_change\n//= require turbolinks\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("401 权限限制问题")])]),t._v(" "),e("ul",[e("li",[t._v("第一种方案")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 关闭此 action 的 frogery 功能\nprotect_from_forgery :except => [:create]\n")])])]),e("ul",[e("li",[t._v("第二种方案\n"),e("a",{attrs:{href:"http://stackoverflow.com/questions/731504/protect-from-forgery-unobtrusive-javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("protect_from_forgery & Unobtrusive Javascript"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<script>\n  function authToken() {\n    return '<%= form_authenticity_token if protect_against_forgery? -%>';\n  }\n\n\n$.ajax({\n    type: 'put',\n    url:  url,\n    data: { foo: bar,\n            authenticity_token: authtoken()\n          },\n    complete: function(data) {}\n})\n<\/script>\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("返回json")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("render json: '审批失败，检查您是否勾选职位', status: 403\n\n\n      render json: {\n        success: true,\n        info: '审批成功',\n        jobs: @jobs\n      }, status: 200\n")])])]),e("h2",{attrs:{id:"ajax-submit-form"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax-submit-form"}},[t._v("#")]),t._v(" ajax submit form")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// this is the id of the form\n$("#idForm").submit(function(e) {\n\n    var url = "path/to/your/script.php"; // the script where you handle the form input.\n\n    $.ajax({\n           type: "POST",\n           url: url,\n           data: $("#idForm").serialize(), // serializes the form\'s elements.\n           success: function(data)\n           {\n               alert(data); // show response from the php script.\n           }\n         });\n\n    e.preventDefault(); // avoid to execute the actual submit of the form.\n});\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);