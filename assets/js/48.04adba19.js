(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{713:function(t,s,a){"use strict";a.r(s);var i=a(5),n=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("LCA，无向连通图求任意两点之间的最近距离")]),t._v(" "),a("h1",{attrs:{id:"k-居民们都住在房屋里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k-居民们都住在房屋里"}},[t._v("#")]),t._v(" K. 居民们都住在房屋里")]),t._v(" "),a("p",[a("strong",[t._v("题意")]),t._v("：一个无向连通图，求任意两点之间的最近距离。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("因为询问距离的次数会很多，肯定不能它问一次你跑一次最短路，需要对图进行预处理。")]),t._v(" "),a("p",[t._v("先随便弄给点当根节点，如果我们能知道所有点的深度"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("e")]),a("mi",[t._v("p")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("deep[i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，那么两个点"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("之间的距离即为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("e")]),a("mi",[t._v("p")]),a("mo",[t._v("[")]),a("mi",[t._v("u")]),a("mo",[t._v("]")]),a("mo",[t._v("+")]),a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("e")]),a("mi",[t._v("p")]),a("mo",[t._v("[")]),a("mi",[t._v("v")]),a("mo",[t._v("]")]),a("mo",[t._v("−")]),a("mn",[t._v("2")]),a("mo",[t._v("∗")]),a("mi",[t._v("d")]),a("mi",[t._v("e")]),a("mi",[t._v("e")]),a("mi",[t._v("p")]),a("mo",[t._v("[")]),a("mi",[t._v("L")]),a("mi",[t._v("C")]),a("mi",[t._v("A")]),a("mo",[t._v("(")]),a("mi",[t._v("u")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("v")]),a("mo",[t._v(")")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("deep[u]+deep[v]-2*deep[LCA(u,v)]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mbin"},[t._v("∗")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("L")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mord mathit"},[t._v("A")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，其中"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("L")]),a("mi",[t._v("C")]),a("mi",[t._v("A")]),a("mo",[t._v("(")]),a("mi",[t._v("u")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("v")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("LCA(u,v)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("L")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mord mathit"},[t._v("A")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("的公共祖先。")]),t._v(" "),a("h3",{attrs:{id:"lca"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lca"}},[t._v("#")]),t._v(" LCA")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("深度可以用"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("f")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("bfs")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v("求，每求一层深度加一。")])]),t._v(" "),a("li",[a("p",[t._v("可以选择暴力求公共祖先，对于"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("两个点，每次更新更深的那一个")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int getlca(int a, int b) {\n\twhile (a != b) {\n\t\tif (deep[a] > deep[b])\n\t\t\ta = fa[a];\n\t\telse\n\t\t\tb = fa[b];\n\t}\n\treturn a;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("该题的数据似乎没卡这种暴力，如果卡的话可以利用倍增算法：")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://oi-wiki.org/graph/lca/",target:"_blank",rel:"noopener noreferrer"}},[t._v("最近公共祖先 - OI Wiki (oi-wiki.org)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("用"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("msub",[a("mi",[t._v("a")]),a("mrow",[a("mi",[t._v("x")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("i")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("fa_{x,i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.980548em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("表示x的第"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.824664em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.824664em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("个祖先。先将u，v调整到同一深度得到u，v的深度差"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("y")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),t._v("，将"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("y")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),t._v("二进制拆分，第y次游标跳转优化成y的二进制中1的个数。之后，从最大的i开始循环尝试，一直尝试到0，若"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("msub",[a("mi",[t._v("a")]),a("mrow",[a("mi",[t._v("u")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("i")])],1)],1),a("mo",[t._v("≠")]),a("mi",[t._v("f")]),a("msub",[a("mi",[t._v("a")]),a("mrow",[a("mi",[t._v("v")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("i")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("fa_{u,i}\\neq fa_{v,i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.716em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.002108em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("≠")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("，更新u为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("msub",[a("mi",[t._v("a")]),a("mrow",[a("mi",[t._v("u")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("i")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("fa_{u,i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.980548em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("，v为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("msub",[a("mi",[t._v("a")]),a("mrow",[a("mi",[t._v("v")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("i")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("fa_{v,i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.980548em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("，最后得到LCA为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("msub",[a("mi",[t._v("a")]),a("mrow",[a("mi",[t._v("u")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("0")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("fa_{u,0}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.980548em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("。")])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <stdio.h>\n#include <stdlib.h>\n#include <vector>\n#include <set>\n#include <map>\n#include <string>\n#include <stack>\n#include <queue>\n#include <malloc.h>\n#include <string.h>\n#include <math.h>\n#include <algorithm>\n#define si(a) scanf("%d",&a)\n#define sii(a,b) scanf("%d%d",&a,&b)\n#define siii(a,b,c) scanf("%d%d%d",&a,&b,&c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint mmm(int a, int b) { if (a < b) return a; else return b; }\nint bbb(int a, int b) { if (a > b) return a; else return b; }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nstruct edge {\n\tint v;\n\tint val;\n};\n//vector<edge> e[5010];\nint deep[500010];\nint fa[500010];\nbool vis[500010];\nvector <int> T[500010];\nqueue<int> Q;\nint getlca(int a, int b) {\n\twhile (a != b) {\n\t\tif (deep[a] > deep[b])\n\t\t\ta = fa[a];\n\t\telse\n\t\t\tb = fa[b];\n\t}\n\treturn a;\n}\nvoid ask() {\n\tint a, b;\n\tsii(a, b);\n\tint lca = getlca(a, b);\n\tprintf("%d\\n", deep[a] + deep[b] - 2 * deep[lca]);\n}\nvoid bfs(int u) {\n\twhile (!Q.empty()) Q.pop();\n\tQ.push(u);\n\tvis[u] = true;\n\tdeep[u] = 0;\n\twhile (!Q.empty()) {\n\t\tu = Q.front();\n\t\tQ.pop();\n\t\tfor (auto it : T[u]) {\n\t\t\tif (!vis[it]) {\n\t\t\t\tQ.push(it);\n\t\t\t\tvis[it] = true;\n\t\t\t\tdeep[it] = deep[u] + 1;\n\t\t\t\tfa[it] = u;\n\t\t\t}\n\t\t}\n\t}\n}\nvoid solve() {\n\tint i, j;\n\tint n, m, s;\n\tsii(n, m);\n\tfor (i = 1; i <= n - 1; i++) {\n\t\tint a, b;\n\t\tsii(a, b);\n\t\tT[a].push_back(b);\n\t\tT[b].push_back(a);\n\t}\n\tfa[1] = fa[1];\n\tbfs(1);\n\twhile (m--)\n\t\task();\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br"),a("span",{staticClass:"line-number"},[t._v("75")]),a("br"),a("span",{staticClass:"line-number"},[t._v("76")]),a("br"),a("span",{staticClass:"line-number"},[t._v("77")]),a("br"),a("span",{staticClass:"line-number"},[t._v("78")]),a("br"),a("span",{staticClass:"line-number"},[t._v("79")]),a("br"),a("span",{staticClass:"line-number"},[t._v("80")]),a("br"),a("span",{staticClass:"line-number"},[t._v("81")]),a("br"),a("span",{staticClass:"line-number"},[t._v("82")]),a("br"),a("span",{staticClass:"line-number"},[t._v("83")]),a("br"),a("span",{staticClass:"line-number"},[t._v("84")]),a("br"),a("span",{staticClass:"line-number"},[t._v("85")]),a("br"),a("span",{staticClass:"line-number"},[t._v("86")]),a("br"),a("span",{staticClass:"line-number"},[t._v("87")]),a("br"),a("span",{staticClass:"line-number"},[t._v("88")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);