(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{388:function(t,e,n){"use strict";n.r(e);var a=n(42),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"彻底理解闭包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#彻底理解闭包"}},[t._v("#")]),t._v(" 彻底理解闭包")]),t._v(" "),n("p",[t._v("执行环境（execution context）：定义了变量或函数有权访问的其他数据。每个执行环境对应一个「变量对象」。")]),t._v(" "),n("p",[t._v("变量对象（variable object）：包含当前能够访问的所有变量、函数总和。即是 "),n("code",[t._v("this")]),t._v(" 所代指的内容。")]),t._v(" "),n("p",[t._v("作用域链：本质是一个指向变量对象的指针表，当代码被执行时就会被创建，包含有序的变量对象。（自己可以理解为一个数组[当前变量对象，上一级变量对象……全局变量对象]）")]),t._v(" "),n("p",[t._v("活动对象（activation object）：当代码进入一个环境，而此环境是一个函数时，则变量对象 = 活动变量，初始包含 arguments 对象，传入的参数变量。")]),t._v(" "),n("p",[t._v("闭包：有权访问另一个函数作用域中的变量的函数。")]),t._v(" "),n("p",[t._v("闭包的本质是什么？\n当某个函数被调用，创建一个执行环境（execution context）及作用域链，重点是，此时闭包的作用域链包含了外部函数的活动变量，由于存在引用，内存不会回收外部函数的活动变量，直到闭包被销毁。")])])}),[],!1,null,null,null);e.default=o.exports}}]);