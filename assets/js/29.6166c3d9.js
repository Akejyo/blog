(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{694:function(t,s,a){"use strict";a.r(s);var i=a(5),n=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("树上DP")]),t._v(" "),a("h1",{attrs:{id:"r-顶点游走"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-顶点游走"}},[t._v("#")]),t._v(" R.顶点游走")]),t._v(" "),a("p",[a("strong",[t._v("题意")]),t._v(": "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("个节点的树，每个节点"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),t._v("有权值"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("a")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a_i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("，从"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v("号节点出发求和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("a")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a_i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("，当"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mo",[t._v("<")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum<0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68354em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("时"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")])])])]),t._v("会自动变为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("，可以从树上任意节点结束。求"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("msub",[a("mi",[t._v("m")]),a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("x")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum_{max}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("x")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("分析")]),t._v(": 我们可以这样考虑每个节点：从该节点以后会存在"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")])])])]),t._v("归零情况或不会。分别设为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("F")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("F[i][0]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("F")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("F[i][1]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("若考虑"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")])])])]),t._v("不会归零，dfs里每一节点"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("F")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("F[i][1]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("都加上"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("x")]),a("mspace",{attrs:{width:"0.16667em"}}),a("mo",[t._v("{")]),a("mn",[t._v("0")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("F")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("}")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("max\\,\\{0,F[j][1]\\}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mord mspace thinspace"}),a("span",{staticClass:"mopen"},[t._v("{")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("}")])])])]),t._v(",(j取i儿子)；")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("F[u][1] += max(F[v][1], 0LL);//F[u][1]初始为w[u]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("若考虑"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")])])])]),t._v("会归零，我们可以先将该点的值"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("F")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("F[i][0]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("设为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("，用"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("把后面一堆负数全部提前解决了再处理。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("F[u][0] += max(F[v][0], F[v][1]);//F[u][0]初始为0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("p",[t._v("最后"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mi",[t._v("n")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("ans")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v("取"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("x")]),a("mspace",{attrs:{width:"0.16667em"}}),a("mo",[t._v("{")]),a("mi",[t._v("F")]),a("mo",[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mn",[t._v("0")]),a("mo",[t._v("]")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("F")]),a("mo",[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("}")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("max\\,\\{F[1][0],F[1][1]\\}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mord mspace thinspace"}),a("span",{staticClass:"mopen"},[t._v("{")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v("}")])])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <bits/stdc++.h>\ntemplate<typename T>\ninline void read(T& x) { x = 0; char c = getchar(); while (!isdigit(c))c = getchar(); while (isdigit(c)) { x = x * 10 + c - \'0\'; c = getchar(); } }\n#define si(a) read(a)\n#define sii(a,b) read(a),read(b)\n#define siii(a,b,c) read(a),read(b),read(c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\n//const ll MOD = 924844033;\nconst int N = 5e5 + 10;\nint n, m;\nint flag;\nint vis[N], vis2[N];\nll F[N][2], w[N];\nvector<int>e[N];\nvoid dfs(int u) {\n\tif (vis[u])\n\t\treturn;\n\tvis[u] = 1;\n\tF[u][1] = w[u];\n\tfor (auto v : e[u]) {\n\t\tif (!vis[v]) {\n\t\t\tdfs(v);\n\t\t\tF[u][1] += max(F[v][1], 0LL);//不会变成0，直接求和\n\t\t\tF[u][0] += max(F[v][0], F[v][1]);//假设后面会变成0，也就是会有一段负的，F[u][0]初始为0把所有负的干了\n\t\t}\n\t}\n}\nvoid solve() {\n\tsi(n);\n\tfor (int i = 1; i < n; i++) {\n\t\tint a; scanf("%d", &a);\n\t\te[a].push_back(i + 1);\n\t\te[i + 1].push_back(a);\n\t}\n\tfor (int i = 1; i <= n; i++) scanf("%lld", &w[i]);\n\tdfs(1);\n\tprintf("%lld", max(F[1][0],F[1][1]));\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);