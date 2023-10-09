(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{706:function(t,s,a){"use strict";a.r(s);var n=a(5),i=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("矩形图上Dijkstra")]),t._v(" "),a("h1",{attrs:{id:"c-魔法少女"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-魔法少女"}},[t._v("#")]),t._v(" C .魔法少女")]),t._v(" "),a("p",[a("strong",[t._v("题意")]),t._v(": 矩形网格里，只能沿对角线移动，每个格子只有一个对角线是通路（通过的代价是0），另一个对角线通过需要"),a("strong",[t._v("1")]),t._v("代价。求从左上角移动到右下角最少花费（或不能做到）。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("很容易就能想到用最短路的方法去解，可以直接建图：以网格图上的点为节点，每个点至多能连4个边（与左上、左下，右上，右下相连），权值为1或0，然后跑一遍"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("D")]),a("mi",[t._v("i")]),a("mi",[t._v("j")]),a("mi",[t._v("k")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Dijkstra")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("a")])])])]),t._v("就行。")]),t._v(" "),a("p",[a("strong",[t._v("BUT")]),t._v("这种矩形网格图建图属实是没必要，每个点的邻居都是确定的，联想到走迷宫类的题，我们可以用两个数组来操控"),a("strong",[t._v("魔法少女")]),t._v("的x,y坐标。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int dx[4] = { 1,1,-1,-1 };\nint dy[4] = { 1,-1,-1,1 };\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("这样遍历"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("x")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("d")]),a("mi",[t._v("y")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dx,dy")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),t._v(","),a("strong",[t._v("魔法少女")]),t._v("的下一个坐标就为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("x")]),a("mo",[t._v("+")]),a("mi",[t._v("d")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("y")]),a("mo",[t._v("+")]),a("mi",[t._v("d")]),a("mo",[t._v("[")]),a("mi",[t._v("y")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x+dx[i],y+d[y]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("。同时再用两个数组来表示一个点所连的格子的坐标。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int dor_x[4] = { 0,0,-1,-1 };\nint dor_y[4] = { 0,-1,-1,0 };\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("x")]),a("mo",[t._v("+")]),a("mi",[t._v("d")]),a("mi",[t._v("o")]),a("mi",[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("_")]),a("mi",[t._v("x")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x+dor\\_x[i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.06em","vertical-align":"-0.31em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.02778em"}},[t._v("_")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("和"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("y")]),a("mo",[t._v("−")]),a("mi",[t._v("d")]),a("mi",[t._v("o")]),a("mi",[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("_")]),a("mi",[t._v("y")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y-dor\\_y[i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.06em","vertical-align":"-0.31em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.02778em"}},[t._v("_")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("即为四个格子的坐标。"),a("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CDesktop%5C7791A9221CE1A6950161460C82233CB6.png",alt:"7791A9221CE1A6950161460C82233CB6"}})]),t._v(" "),a("p",[t._v("其余的就是稍微改改"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("D")]),a("mi",[t._v("i")]),a("mi",[t._v("j")]),a("mi",[t._v("k")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Dijkstra")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("a")])])])]),t._v("的板子就行。")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <stdio.h>\n#include <stdlib.h>\n#include <vector>\n#include <set>\n#include <map>\n#include <string>\n#include <stack>\n#include <queue>\n#include <malloc.h>\n#include <string.h>\n#include <math.h>\n#include <algorithm>\n#define si(a) scanf("%d",&a)\n#define sii(a,b) scanf("%d%d",&a,&b)\n#define siii(a,b,c) scanf("%d%d%d",&a,&b,&c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint mmm(int a, int b) { if (a < b) return a; else return b; }\nint bbb(int a, int b) { if (a > b) return a; else return b; }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nint dis[510][510];//到起点距离\nint dx[4] = { 1,1,-1,-1 };\nint dy[4] = { 1,-1,-1,1 };\nint dor_x[4] = { 0,0,-1,-1 };\nint dor_y[4] = { 0,-1,-1,0 };\nbool vis[510][510];\nchar door[510][510];\nint cut, n, m;\nstruct edge {\n\tint x, y, dis;\n\tfriend bool operator < (edge a, edge b) { return a.dis > b.dis; }\n};\npriority_queue <edge> e;\nvoid dfs(int n, int m) {//l记录长度\n\tint i;\n\twhile (!e.empty()) {\n\t\tint x = e.top().x, y = e.top().y;\n\t\te.pop();\n\t\tif (!vis[x][y]) {\n\t\t\tvis[x][y] = true;\n\t\t\tfor (i = 0; i < 4; i++) {//这里是邻居们 (\n\t\t\t\tint tx = x + dx[i], ty = y + dy[i];\n\t\t\t\tif (tx >= 0 && tx <= n && ty >= 0 && ty <= m) {\n\t\t\t\t\tif (!vis[tx][ty]) {\n\t\t\t\t\t\tint len;\n\t\t\t\t\t\tif ((dx[i] == dy[i] && door[x + dor_x[i]][y + dor_y[i]] == \'/\') || (dx[i] != dy[i] && door[x + dor_x[i]][y + dor_y[i]] == 92))\n\t\t\t\t\t\t\tlen = 1;\n\t\t\t\t\t\telse\n\t\t\t\t\t\t\tlen = 0;\n\t\t\t\t\t\tif (dis[x][y] + len < dis[tx][ty]) {\n\t\t\t\t\t\t\tdis[tx][ty] = dis[x][y] + len;\n\t\t\t\t\t\t\te.push({ tx,ty,dis[tx][ty] });\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\nvoid solve() {\n\tsii(n, m);\n\tmemset(dis, 63, sizeof(dis));\n\tdis[n][m] = 0;\n\tfor (int i = 0; i < n; i++)\n\t\tscanf("%s", door[i]);\n\tif (door[n - 1][m - 1] == \'/\')\n\t\tcut++;\n\te.push({ n,m,0 });\n\tdfs(n, m);\n\tif (dis[0][0] > 1e9)\n\t\tprintf("NO SOLUTION");\n\telse\n\t\tprintf("%d", dis[0][0]);\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br"),a("span",{staticClass:"line-number"},[t._v("75")]),a("br"),a("span",{staticClass:"line-number"},[t._v("76")]),a("br"),a("span",{staticClass:"line-number"},[t._v("77")]),a("br"),a("span",{staticClass:"line-number"},[t._v("78")]),a("br"),a("span",{staticClass:"line-number"},[t._v("79")]),a("br"),a("span",{staticClass:"line-number"},[t._v("80")]),a("br"),a("span",{staticClass:"line-number"},[t._v("81")]),a("br"),a("span",{staticClass:"line-number"},[t._v("82")]),a("br"),a("span",{staticClass:"line-number"},[t._v("83")]),a("br"),a("span",{staticClass:"line-number"},[t._v("84")]),a("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);