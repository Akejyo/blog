(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{702:function(n,s,t){"use strict";t.r(s);var a=t(5),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("并查集")]),n._v(" "),t("h1",{attrs:{id:"i-namesolo-拜师"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-namesolo-拜师"}},[n._v("#")]),n._v(" I. Namesolo 拜师")]),n._v(" "),t("p",[t("strong",[n._v("题意")]),n._v("：给定一个有n个点的无向图，有两个操作：")]),n._v(" "),t("ol",[t("li",[n._v("添加一条连接a,b的边")]),n._v(" "),t("li",[n._v("询问a,b是否在同一连通块")])]),n._v(" "),t("hr"),n._v(" "),t("h3",{attrs:{id:"并查集及其优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并查集及其优化"}},[n._v("#")]),n._v(" 并查集及其优化")]),n._v(" "),t("p",[t("strong",[n._v("普通并查集")]),n._v(":")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("int getfa(int x){ return fa[x] == x ? x : getfa(fa[x]); }\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br")])]),t("p",[n._v("​\t直接去递归查询，但是重复很多无用的操作，效率低。")]),n._v(" "),t("p",[t("strong",[n._v("优化1")]),n._v("："),t("strong",[n._v("路径压缩")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("int getfa(int x) { return fa[x] == x ? x : fa[x] = getfa(fa[x]); }\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br")])]),t("p",[n._v("​    查询路径上的每个节点都直接连到根上，就是边跑边连")]),n._v(" "),t("p",[t("strong",[n._v("优化2")]),n._v("："),t("strong",[n._v("启发式合并")]),n._v("（"),t("strong",[n._v("按秩合并")]),n._v("）")]),n._v(" "),t("blockquote",[t("p",[n._v("OI wiki:  具体来说，如果我们将一棵点数与深度都较小的集合树连接到一棵更大的集合树下，显然相比于另一种连接方案，接下来执行查找操作的用时更小（也会带来更优的最坏时间复杂度）。  "),t("a",{attrs:{href:"https://oi-wiki.org/ds/dsu/",target:"_blank",rel:"noopener noreferrer"}},[n._v("并查集 - OI Wiki (oi-wiki.org)"),t("OutboundLink")],1)])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("if (S[x] <= S[y]) //S[i]是子树i的大小\n\tfa[x] = y,S[y] += S[x];//把小的那个连到大的里去\nelse \n\tfa[y] = x,S[x] += S[y];\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#include <bits/stdc++.h>\n#define si(a) scanf("%d",&a)\n#define sii(a,b) scanf("%d%d",&a,&b)\n#define siii(a,b,c) scanf("%d%d%d",&a,&b,&c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nconst ll MOD = 1e9 + 7;\nint n, m, r;\nint fa[5000100];\ninline signed gf(int x) { return fa[x] == x ? x : fa[x] = gf(fa[x]); }\n//inline signed gf(int x) { return fa[x] == x ? x : gf(fa[x]); }\nvector<ll>S(5000100, 1);\nint mer[5000100];\nll an = 0;\n\n#define getchar() (frS==frT&&(frT=(frS=frBB)+fread(frBB,1,1<<15,stdin),frS==frT)?EOF:*frS++)\nchar frBB[1 << 15], * frS = frBB, * frT = frBB;\ntemplate<typename T>\ninline void read(T& x) {\n\tx = 0; char c = getchar();\n\twhile (!isdigit(c))c = getchar();\n\twhile (isdigit(c)) { x = x * 10 + c - \'0\'; c = getchar(); }\n}\n\nvoid solve() {\n\tsii(n, m);\n\tint cut = 0;\n\tfor (int i = 1; i <= n; i++)\n\t\tfa[i] = i;\n\tfor (int i = 1; i <= m; i++) {\n\t\tint op, u, v;\n\t\tread(op) ;\n\t\tread(u);\n\t\tread(v);\n\t\tint x, y;\n\t\tx = gf(u); y = gf(v);\n\t\tif (op == 1) {\n\t\t\tif (x != y) {\n\t\t\t\tif (S[x] <= S[y]) {\n\t\t\t\t\tfa[x] = y;\n\t\t\t\t\tS[y] += S[x];\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tfa[y] = x;\n\t\t\t\t\tS[x] += S[y];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tif (x == y) {\n\t\t\t\tan *= 2;\n\t\t\t\tan += 1;\n\t\t\t\tan %= MOD;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tan *= 2;\n\t\t\t\tan %= MOD;\n\t\t\t}\n\t\t}\n\t}\n\tprintf("%lld", an);\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br"),t("span",{staticClass:"line-number"},[n._v("57")]),t("br"),t("span",{staticClass:"line-number"},[n._v("58")]),t("br"),t("span",{staticClass:"line-number"},[n._v("59")]),t("br"),t("span",{staticClass:"line-number"},[n._v("60")]),t("br"),t("span",{staticClass:"line-number"},[n._v("61")]),t("br"),t("span",{staticClass:"line-number"},[n._v("62")]),t("br"),t("span",{staticClass:"line-number"},[n._v("63")]),t("br"),t("span",{staticClass:"line-number"},[n._v("64")]),t("br"),t("span",{staticClass:"line-number"},[n._v("65")]),t("br"),t("span",{staticClass:"line-number"},[n._v("66")]),t("br"),t("span",{staticClass:"line-number"},[n._v("67")]),t("br"),t("span",{staticClass:"line-number"},[n._v("68")]),t("br"),t("span",{staticClass:"line-number"},[n._v("69")]),t("br"),t("span",{staticClass:"line-number"},[n._v("70")]),t("br"),t("span",{staticClass:"line-number"},[n._v("71")]),t("br"),t("span",{staticClass:"line-number"},[n._v("72")]),t("br"),t("span",{staticClass:"line-number"},[n._v("73")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);