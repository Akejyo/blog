(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{692:function(t,s,a){"use strict";a.r(s);var i=a(5),n=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("( 图寄了")]),t._v(" "),a("h1",{attrs:{id:"i-故意找茬是吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-故意找茬是吧"}},[t._v("#")]),t._v(" I. 故意找茬是吧")]),t._v(" "),a("p",[a("strong",[t._v("题意")]),t._v("：给定一个数组，每次询问[l,r]区间里的最大"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("j")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(i,j)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mi",[t._v("i")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("j")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mi",[t._v("r")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("l<=i,j<=r")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])]),t._v("。其中"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("j")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(i,j)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("的计算满足下面式子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653048263083.png",alt:"1653048263083"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("分析：经过一波手动模拟可以"),a("s",[t._v("碰出")]),t._v("发现一个规律："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")]),a("mo",[t._v("=")]),a("mi",[t._v("f")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("∧")]),a("mi",[t._v("f")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f[i][j]=f[i][j-1]\\land f[i+1][j]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mbin"},[t._v("∧")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("。其中当i=j时"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f[i][j]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("的值是确定的为a[i]，所以就是斜着一行一行去更新f数组，最后再用同样的方法去更新区间里的最大"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")]),a("mo",[t._v("[")]),a("mi",[t._v("j")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f[i][j]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("for (int i = 1; i < n; i++) \n\t\tfor (int j = 1; j <= n; j++) \n\t\t\tdp[j][i+j] = dp[j][i + j - 1] ^ dp[j + 1][i + j];//斜着一行一行走\nfor (int i = 1; i < n; i++)\n\t\tfor (int j = 1; j <= n; j++) \n\t\t\tdp[j][i + j] = max(dp[j][i+j],max(dp[j][i + j - 1], dp[j + 1][i + j]));\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("hr"),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#include <bits/stdc++.h>\ntemplate<typename T>\ninline void read(T& x) { x = 0; char c = getchar(); while (!isdigit(c))c = getchar(); while (isdigit(c)) { x = x * 10 + c - '0'; c = getchar(); } }\n#define si(a) read(a)\n#define sii(a,b) read(a),read(b)\n#define siii(a,b,c) read(a),read(b),read(c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nconst ll MOD = 998244353;\nconst int N = 2e5 + 10;\nint n, m;\nll dp[5010][5010];\nll a[5010];\nvoid yuchuli() {\n\tfor (int i = 1; i <= n; i++)\n\t\tdp[i][i] = a[i];\n\tfor (int i = 1; i < n; i++) \n\t\tfor (int j = 1; j <= n; j++) \n\t\t\tdp[j][i+j] = dp[j][i + j - 1] ^ dp[j + 1][i + j];\n\tfor (int i = 1; i < n; i++)\n\t\tfor (int j = 1; j <= n; j++) \n\t\t\tdp[j][i + j] = max(dp[j][i+j],max(dp[j][i + j - 1], dp[j + 1][i + j]));\n}\nvoid solve() {\n\tsi(n);\n\tfor (int i = 1; i <= n; i++)si(a[i]);\n\tint q; si(q);\n\tyuchuli();\n\twhile (q--) {\n\t\tint l, r; sii(l, r);\n\t\tprintf(\"%lld\\n\", dp[l][r]);\n\t}\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}/*10 2\n1 2 3 3 3 4 5 3 4 5*/\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);