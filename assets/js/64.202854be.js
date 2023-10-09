(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{728:function(t,s,a){"use strict";a.r(s);var i=a(5),n=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("KMP")]),t._v(" "),a("h1",{attrs:{id:"q-接头暗号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-接头暗号"}},[t._v("#")]),t._v(" Q. 接头暗号")]),t._v(" "),a("p",[a("strong",[t._v("题意")]),t._v("： 给定一个文本t和一个字符串s，求t中s的出现次数。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"kmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kmp"}},[t._v("#")]),t._v(" KMP")]),t._v(" "),a("p",[t._v("首先要了解"),a("strong",[t._v("前缀函数")]),t._v("：给定一个长度为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("的字符串 ，其前缀函数被定义为一个长度为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("的数组"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("π")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\pi")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")])])])]),t._v("。其中"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\pi[i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("是子串"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[0...i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("最长的相等的真前缀与真后缀的长度。")]),t._v(" "),a("p",[t._v("那么，计算π[i]的朴素算法显然就是不停的扫，时间复杂度为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",[t._v("(")]),a("msup",[a("mi",[t._v("n")]),a("mn",[t._v("3")])],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n^3)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("3")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("。可以发现，每次读入一个字符时，如果"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("=")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("+")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\pi[i+1]=\\pi[i]+1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("，那么就有"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("=")]),a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[i+1]=s[\\pi[i]]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("（数组从0开始），也就是说，会出现下面的情况：")]),t._v(" "),a("blockquote",[a("p",[t._v("图来自OI Wiki")])]),t._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1654948553854.png",alt:"1654948553854"}})]),t._v(" "),a("p",[t._v("那如果"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("≠")]),a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[i+1]\\neq s[\\pi[i]]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("≠")]),a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("如何去找呢？我们还会发现，对于子串"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[0...i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，首先有"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("]")]),a("mo",[t._v("=")]),a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[0...\\pi[i]]=s[i-\\pi[i]+1...i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，然后就会发现，这两个小子串完全一致就会导致前面那个小子串"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[0...\\pi[i]]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("的前缀性质会保留到后一个小子串"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[i-\\pi[i]+1..i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，也就是"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[0...\\pi[i]]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("又会有一个前缀和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s[i-\\pi[i]+1..i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("的后缀相等，而这个前缀/后缀的长度显然就是"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("π")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\pi[\\pi[i]]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，就是下面图所示：")]),t._v(" "),a("blockquote",[a("p",[t._v("图还是来自OI Wiki")])]),t._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1654948993596.png",alt:"1654948993596"}})]),t._v(" "),a("p",[t._v("所以在失配的时候就可以不停的跳π[i]来找相等的前缀，时间复杂度为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),a("p",[t._v("回到"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("K")]),a("mi",[t._v("M")]),a("mi",[t._v("P")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("KMP")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")])])])]),t._v("，将字符串"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v("和文本"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("t")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("t")])])])]),t._v("拼接起来，中间用一个两者都没有的字符（如'#'）隔开，然后跑前缀函数即可。")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <bits/stdc++.h>\ntemplate<typename T>\ninline void read(T& x) { x = 0; char c = getchar(); while (!isdigit(c))c = getchar(); while (isdigit(c)) { x = x * 10 + c - \'0\'; c = getchar(); } }\n#define si(a) read(a)\n#define sii(a,b) read(a),read(b)\n#define siii(a,b,c) read(a),read(b),read(c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\n//const ll MOD = 924844033;\nconst int N = 5e5 + 10;\nint n, m;\nchar s[5000000];\nchar t[5000010];\nint ans;\nint pi[5000010];\nvoid solve() {\n\tscanf("%s", s);\n\tscanf("%s", t);\n\tint cao = strlen(t);\n\tt[cao] = \'#\';\n\tstrcat(t, s);\n\tint len = strlen(t);\n\tfor (int x = 1; x < len; x++) {\n\t\tint y = pi[x - 1];\n\t\twhile (y > 0 && t[x] != t[y])\n\t\t\ty = pi[y - 1];\n\t\tif (t[x] == t[y])\n\t\t\ty++;\n\t\tpi[x] = y;\n\t\tif (pi[x] == cao)\n\t\t\tans++;\n\t}\n\tprintf("%d", ans);\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n/*\n3\nwhat\nis\nmind\nthisisnotmind\n*/\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);