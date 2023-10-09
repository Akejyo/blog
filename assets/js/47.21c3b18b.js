(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{712:function(t,s,a){"use strict";a.r(s);var n=a(5),i=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Tarjan，无向简单图的割点，割边，极大点双连通分量，极大点双连通分量包含边数的最大值")]),t._v(" "),a("h1",{attrs:{id:"j-tarjan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#j-tarjan"}},[t._v("#")]),t._v(" J. tarjan")]),t._v(" "),a("p",[a("strong",[t._v("题意")]),t._v("：求无向简单图的割点，割边，极大点双连通分量，极大点双连通分量包含边数的最大值")]),t._v(" "),a("h3",{attrs:{id:"论tarjan的一百种用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#论tarjan的一百种用法"}},[t._v("#")]),t._v(" "),a("s",[t._v("论tarjan的一百种用法")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[t._v("先解决点双的问题")]),t._v(" "),a("p",[t._v("跑"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dfs")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v("确定"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dfn")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("w")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("low")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v("("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("I")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("I")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("I")])])])]),t._v("题里有)，对于节点"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")])])])]),t._v("，在跑它的邻居的时候，只要这个邻居"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("没跑过就把"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")]),a("mo",[t._v("−")]),a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u-v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.58333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("这条边压入栈内，当遇到"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("w")]),a("mo",[t._v("[")]),a("mi",[t._v("v")]),a("mo",[t._v("]")]),a("mo",[t._v(">")]),a("mo",[t._v("=")]),a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("n")]),a("mo",[t._v("[")]),a("mi",[t._v("u")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("low[v] >= dfn[u]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v(">")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("时（这不一定是割点），把栈内的边一直弹出到"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")]),a("mo",[t._v("−")]),a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u-v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.58333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("u")]),a("mo",[t._v("−")]),a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u-v")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.58333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("不弹)，弹出的这些点构成了一个点双。把这些点存到一个"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("e")]),a("mi",[t._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("set")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("t")])])])]),t._v("里，针对"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("e")]),a("mi",[t._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("set")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("t")])])])]),t._v("里的这些点跑"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dfs")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v("来确定这个点双的边数，同时更新最大边数。")])]),t._v(" "),a("li",[a("p",[t._v("然后是割点和割边，上面已经跑完了"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dfs")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dfn")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("n")])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("w")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("low")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v("都确定好了，再来一次"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dfs")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("s")])])])]),t._v("就行。对于割点，根节点的判断要注意一下，根必须要有至少两个子树才能作为割点（1 2; 2 3; 3 1.根只有一个子树，不是割点），非根节点只要有"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("w")]),a("mo",[t._v("[")]),a("mi",[t._v("v")]),a("mo",[t._v("]")]),a("mo",[t._v(">")]),a("mo",[t._v("=")]),a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("n")]),a("mo",[t._v("[")]),a("mi",[t._v("u")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("low[v]>=dfn[u]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v(">")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("就可确定u是割点，v可以回溯到比u还远的位置（或者就是），那显然u就是割点。对于割边"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("w")]),a("mo",[t._v("[")]),a("mi",[t._v("v")]),a("mo",[t._v("]")]),a("mo",[t._v(">")]),a("mi",[t._v("d")]),a("mi",[t._v("f")]),a("mi",[t._v("n")]),a("mo",[t._v("[")]),a("mi",[t._v("u")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("low[v]>dfn[u]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v(">")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("就行。")])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <stdio.h>\n#include <stdlib.h>\n#include <vector>\n#include <set>\n#include <map>\n#include <string>\n#include <stack>\n#include <queue>\n#include <malloc.h>\n#include <string.h>\n#include <math.h>\n#include <algorithm>\n#define si(a) scanf("%d",&a)\n#define sii(a,b) scanf("%d%d",&a,&b)\n#define siii(a,b,c) scanf("%d%d%d",&a,&b,&c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint mmm(int a, int b) { if (a < b) return a; else return b; }\nint bbb(int a, int b) { if (a > b) return a; else return b; }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nvector<int> e[500000];\nint dfn[1010], low[1010];\nint vis[1010];\nint cut;\nint gedian, gebian;//割点割边数量\nint re[1010];//记录割点\nint ge_cut, ge_max = 0, gege ;//极大点双数量，最多边，cut\nint flag;\nstack<int> fir;\nstack<int> sec;\nset<int> mer;\nint vis_s[1010];\nvoid dfs_s(int u) {\n\tif (!vis_s[u])\n\t\tvis_s[u] = 1;\n\tfor (auto v : e[u]) {\n\t\tif (mer.find(v) != mer.end()) {\n\t\t\tgege++;\n\t\t\tif (!vis_s[v])\n\t\t\t\tdfs_s(v);\n\t\t}\n\t}\n}\nvoid tarjan(int u, int fa) {\n\tdfn[u] = ++cut;\n\tlow[u] = cut;\n\tfor (auto v : e[u]) {\n\t\tif (!dfn[v]) {\n\t\t\tfir.push(u);\n\t\t\tsec.push(v);\n\t\t\ttarjan(v, u);\n\t\t\tlow[u] = min(low[u], low[v]);\n\t\t\tif (low[v] >= dfn[u]) {//遇到割点\n\t\t\t\tmer.clear();\n\t\t\t\tge_cut++;\n\t\t\t\tgege = 0;\n\t\t\t\tint temx, temy;\n\t\t\t\tdo {\n\t\t\t\t\ttemx = fir.top();\n\t\t\t\t\ttemy = sec.top();\n\t\t\t\t\tmer.insert(temx);\n\t\t\t\t\tmer.insert(temy);\n\t\t\t\t\tfir.pop();\n\t\t\t\t\tsec.pop();\n\t\t\t\t} while (temx != u || temy != v);\n\t\t\t\tmemset(vis_s, 0, sizeof(vis_s));\n\t\t\t\tdfs_s(u);\n\t\t\t\tgege /= 2;\n\t\t\t\tge_max = max(ge_max, gege);\n\t\t\t}\n\t\t}\n\t\telse if (v != fa)//判断是否是它爸，不能是爸（\n\t\t\tlow[u] = min(dfn[v], low[u]);\n\t}\n}\nvoid gegege(int u, int root) {\n\tvis[u] = 1;\n\tint s_tree = 0;//子树数量\n\tfor (auto v : e[u]) {\n\t\tif (!vis[v]) {\n\t\t\ts_tree++;\n\t\t\tif (low[v] >= dfn[u]) {\n\t\t\t\tif (u != root) {// 要特判一下根处\n\t\t\t\t\tif (!re[u]) {\n\t\t\t\t\t\tgedian++;\n\t\t\t\t\t\tre[u] = 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse if (s_tree >= 2) {\n\t\t\t\t\tif (!re[u]) {\n\t\t\t\t\t\tgedian++;\n\t\t\t\t\t\tre[u] = 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (low[v] > dfn[u])\n\t\t\t\tgebian++;\n\t\t\tgegege(v, root);\n\t\t}\n\t}\n}\nvoid solve() {\n\tint n, m;\n\tsii(n, m);\n\tfor (int i = 0; i < m; i++) {\n\t\tint u, v; sii(u, v);\n\t\te[u].push_back(v);\n\t\te[v].push_back(u);\n\t}\n\tfor (int i = 1; i <= n; i++) {\n\t\tif (!dfn[i]) {\n\t\t\ttarjan(i, i);\n\t\t\tgegege(i, i);\n\t\t}\n\t}\n\tprintf("%d %d %d %d", gedian, gebian, ge_cut, ge_max);\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br"),a("span",{staticClass:"line-number"},[t._v("75")]),a("br"),a("span",{staticClass:"line-number"},[t._v("76")]),a("br"),a("span",{staticClass:"line-number"},[t._v("77")]),a("br"),a("span",{staticClass:"line-number"},[t._v("78")]),a("br"),a("span",{staticClass:"line-number"},[t._v("79")]),a("br"),a("span",{staticClass:"line-number"},[t._v("80")]),a("br"),a("span",{staticClass:"line-number"},[t._v("81")]),a("br"),a("span",{staticClass:"line-number"},[t._v("82")]),a("br"),a("span",{staticClass:"line-number"},[t._v("83")]),a("br"),a("span",{staticClass:"line-number"},[t._v("84")]),a("br"),a("span",{staticClass:"line-number"},[t._v("85")]),a("br"),a("span",{staticClass:"line-number"},[t._v("86")]),a("br"),a("span",{staticClass:"line-number"},[t._v("87")]),a("br"),a("span",{staticClass:"line-number"},[t._v("88")]),a("br"),a("span",{staticClass:"line-number"},[t._v("89")]),a("br"),a("span",{staticClass:"line-number"},[t._v("90")]),a("br"),a("span",{staticClass:"line-number"},[t._v("91")]),a("br"),a("span",{staticClass:"line-number"},[t._v("92")]),a("br"),a("span",{staticClass:"line-number"},[t._v("93")]),a("br"),a("span",{staticClass:"line-number"},[t._v("94")]),a("br"),a("span",{staticClass:"line-number"},[t._v("95")]),a("br"),a("span",{staticClass:"line-number"},[t._v("96")]),a("br"),a("span",{staticClass:"line-number"},[t._v("97")]),a("br"),a("span",{staticClass:"line-number"},[t._v("98")]),a("br"),a("span",{staticClass:"line-number"},[t._v("99")]),a("br"),a("span",{staticClass:"line-number"},[t._v("100")]),a("br"),a("span",{staticClass:"line-number"},[t._v("101")]),a("br"),a("span",{staticClass:"line-number"},[t._v("102")]),a("br"),a("span",{staticClass:"line-number"},[t._v("103")]),a("br"),a("span",{staticClass:"line-number"},[t._v("104")]),a("br"),a("span",{staticClass:"line-number"},[t._v("105")]),a("br"),a("span",{staticClass:"line-number"},[t._v("106")]),a("br"),a("span",{staticClass:"line-number"},[t._v("107")]),a("br"),a("span",{staticClass:"line-number"},[t._v("108")]),a("br"),a("span",{staticClass:"line-number"},[t._v("109")]),a("br"),a("span",{staticClass:"line-number"},[t._v("110")]),a("br"),a("span",{staticClass:"line-number"},[t._v("111")]),a("br"),a("span",{staticClass:"line-number"},[t._v("112")]),a("br"),a("span",{staticClass:"line-number"},[t._v("113")]),a("br"),a("span",{staticClass:"line-number"},[t._v("114")]),a("br"),a("span",{staticClass:"line-number"},[t._v("115")]),a("br"),a("span",{staticClass:"line-number"},[t._v("116")]),a("br"),a("span",{staticClass:"line-number"},[t._v("117")]),a("br"),a("span",{staticClass:"line-number"},[t._v("118")]),a("br"),a("span",{staticClass:"line-number"},[t._v("119")]),a("br"),a("span",{staticClass:"line-number"},[t._v("120")]),a("br"),a("span",{staticClass:"line-number"},[t._v("121")]),a("br"),a("span",{staticClass:"line-number"},[t._v("122")]),a("br"),a("span",{staticClass:"line-number"},[t._v("123")]),a("br"),a("span",{staticClass:"line-number"},[t._v("124")]),a("br"),a("span",{staticClass:"line-number"},[t._v("125")]),a("br"),a("span",{staticClass:"line-number"},[t._v("126")]),a("br"),a("span",{staticClass:"line-number"},[t._v("127")]),a("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);