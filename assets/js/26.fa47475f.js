(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{691:function(s,a,t){"use strict";t.r(a);var n=t(5),i=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v(", upper_bound的使用")]),s._v(" "),t("p",[s._v("最长不降子序列, upper_bound的使用")]),s._v(" "),t("h1",{attrs:{id:"l-强迫症患者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#l-强迫症患者"}},[s._v("#")]),s._v(" L. 强迫症患者")]),s._v(" "),t("p",[t("strong",[s._v("题意")]),s._v(": 给定一个整数数组，每次操作可以改变其中的一个数为"),t("strong",[s._v("另一个整数")]),s._v("，求使数组严格递增所需要的最少操作次数。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("分析：假如改变数时可以改变为任意数（包括小数），那么这个题就是求最长上升序列。")]),s._v(" "),t("p",[s._v("最长上升序列的求法：开一个新数组b，每次添加a[i]到b数组时，当遇到"),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",[t("semantics",[t("mrow",[t("mi",[s._v("a")]),t("mo",[s._v("[")]),t("mi",[s._v("i")]),t("mo",[s._v("]")]),t("mo",[s._v("<")]),t("mi",[s._v("a")]),t("mo",[s._v("[")]),t("mi",[s._v("i")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",[s._v("]")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("a[i]<a[i-1]")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),t("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"base textstyle uncramped"},[t("span",{staticClass:"mord mathit"},[s._v("a")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathit"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mrel"},[s._v("<")]),t("span",{staticClass:"mord mathit"},[s._v("a")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathit"},[s._v("i")]),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mord mathrm"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v("]")])])])]),s._v("，那么就用a[i]来"),t("strong",[s._v("替换")]),s._v("b里"),t("strong",[s._v("第一个")]),s._v("大于等于a[i]的b[j]，因为显然a[i]放到那个位置是最优的。")]),s._v(" "),t("p",[s._v("重新回到该题，该题多了限制条件：只能改变成整数。这个条件会导致如果直接按照最长上升序列去写的话，a[i]替换b[j]的步骤就会出现问题，因为i到j之间可能距离非常大，而a[i]和b[j]的差值又非常小，这时候去替换可能会使i到j之间的数被卡死了。")]),s._v(" "),t("p",[s._v("举一个例子：数组[1,2,4,3,5]，直接最长上升序列写得到的是[1,2,4,5]或[1,2,3,5]，但你会发现这显然是不合理的，无论是3还是4，都不能在只改变一个值的情况下使整个数组严格递增。因为在处理b数组时，本来那个3（或4）是可以变成一个小数插到前面去的，但实际上3只能变成整数。")]),s._v(" "),t("p",[s._v("那么a[i]去更新b数组时什么情况才是合理的呢？我们会发现只有满足"),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",[t("semantics",[t("mrow",[t("mi",[s._v("a")]),t("mo",[s._v("[")]),t("mi",[s._v("i")]),t("mo",[s._v("]")]),t("mo",[s._v("−")]),t("mi",[s._v("b")]),t("mo",[s._v("[")]),t("mi",[s._v("j")]),t("mo",[s._v("]")]),t("mo",[s._v(">")]),t("mo",[s._v("=")]),t("mi",[s._v("i")]),t("mo",[s._v("−")]),t("mi",[s._v("j")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("a[i]-b[j]>=i-j")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),t("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"base textstyle uncramped"},[t("span",{staticClass:"mord mathit"},[s._v("a")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathit"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mord mathit"},[s._v("b")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mrel"},[s._v(">")]),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mord mathit"},[s._v("i")]),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),s._v("时才能去替换，即要满足"),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",[t("semantics",[t("mrow",[t("mi",[s._v("a")]),t("mo",[s._v("[")]),t("mi",[s._v("i")]),t("mo",[s._v("]")]),t("mo",[s._v("−")]),t("mi",[s._v("i")]),t("mo",[s._v(">")]),t("mo",[s._v("=")]),t("mi",[s._v("b")]),t("mo",[s._v("[")]),t("mi",[s._v("j")]),t("mo",[s._v("]")]),t("mo",[s._v("−")]),t("mi",[s._v("j")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("a[i]-i>=b[j]-j")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),t("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"base textstyle uncramped"},[t("span",{staticClass:"mord mathit"},[s._v("a")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathit"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mord mathit"},[s._v("i")]),t("span",{staticClass:"mrel"},[s._v(">")]),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mord mathit"},[s._v("b")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),s._v("。所以这个问题就转换成了求"),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",[t("semantics",[t("mrow",[t("mi",[s._v("a")]),t("mo",[s._v("[")]),t("mi",[s._v("i")]),t("mo",[s._v("]")]),t("mo",[s._v("−")]),t("mi",[s._v("i")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("a[i]-i")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),t("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"base textstyle uncramped"},[t("span",{staticClass:"mord mathit"},[s._v("a")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathit"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mord mathit"},[s._v("i")])])])]),s._v("的最长不降子序列。用upper_bound优化时间。")]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#include <bits/stdc++.h>\ntemplate<typename T>\ninline void read(T& x) { x = 0; char c = getchar(); while (!isdigit(c))c = getchar(); while (isdigit(c)) { x = x * 10 + c - '0'; c = getchar(); } }\n#define si(a) read(a)\n#define sii(a,b) read(a),read(b)\n#define siii(a,b,c) read(a),read(b),read(c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nconst ll MOD = 998244353;\nconst int N = 1e5 + 10;\nint n, m;\nint w;\nint len = 1;\nint a[N], ins[N];//ins[i]是长度为i的最长子序列的最后一个元素\nvoid solve() {\n\tsii(n, w);\n\tfor (int i = 1; i <= n; i++) {\n\t\tint tem; si(tem);\n\t\ta[i] = tem - i;\n\t}\n\tins[1] = a[1];\n\tfor (int i = 2; i <= n; i++)\n\t\tif (ins[len] >= a[i]) {\n\t\t\tint tem = upper_bound(ins + 1, ins + len + 1, a[i]) - ins;\n\t\t\tins[tem] = a[i];\n\t\t\tlen = max(tem, len);\n\t\t}\n\t\telse if(a[i]>ins[len])\n\t\t\tins[++len] = a[i];\n\tprintf(\"%lld\\n\", (ll)(n - len) * (ll)w);\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}/*10 2\n1 2 3 3 3 4 5 3 4 5*/\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])])])}),[],!1,null,null,null);a.default=i.exports}}]);