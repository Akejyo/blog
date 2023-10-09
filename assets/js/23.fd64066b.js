(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{687:function(n,s,t){"use strict";t.r(s);var a=t(5),i=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("刚体（图暂时寄了")]),n._v(" "),t("h1",{attrs:{id:"g-魔法少女2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g-魔法少女2"}},[n._v("#")]),n._v(" G.魔法少女2")]),n._v(" "),t("p",[t("strong",[n._v("题意")]),n._v(": 添加对角线使一个n*m的矩阵变成"),t("strong",[n._v("刚体")]),n._v("，求加对角线的方案数。")]),n._v(" "),t("p",[n._v("刚体的定义：如果该图无法只改变其中一部分的形状，而使得余下的部分的形状保持不变。比如：对于一个2*3的矩阵，没加对角线的时候可以随意变化形状（各边的长度都没变，线也没变弯）。")]),n._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045719747.png",alt:"1653045719747"}})]),n._v(" "),t("p",[n._v("加对角线后：下面的几种图都是一种刚体")]),n._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045737202.png",alt:"1653045737202"}})]),n._v(" "),t("hr"),n._v(" "),t("p",[t("strong",[n._v("分析")]),n._v(": 发现每加一个对角线，会确定一系列边的垂直/平行关系。 如：对于一个1*2的矩阵")]),n._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045788242.png",alt:"1653045788242"}}),n._v("可以随意变换"),t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045816023.png",alt:"1653045816023"}})]),n._v(" "),t("p",[n._v("添加一条对角线后，其变换能力受到了部分约束，且"),t("strong",[n._v("红色边")]),n._v("与"),t("strong",[n._v("蓝色边")]),n._v("将永远保持垂直关系")]),n._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045883724.png",alt:"1653045883724"}})]),n._v(" "),t("p",[n._v("对应到原矩阵即为"),t("strong",[n._v("第一列的横边与第一行的竖边保持垂直")]),n._v("。")]),n._v(" "),t("p",[n._v("我们发现刚体其实就是所有的横边与竖边都垂直，我们已经连了一条对角线使得一行的竖边与一列的横边垂直，再连一条就能让所有横边都垂直竖边")]),n._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045906226.png",alt:"1653045906226"}})]),n._v(" "),t("p",[n._v("我们已经知道了连一条对角线的效果是让某一行的竖边与某一列的横边互相垂直，那么就可以转化成二分图问题。二分图左边是行，右边是列，"),t("strong",[n._v("矩阵变为刚体的情况即为二分图联通的情况")]),n._v("。")]),n._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045943045.png",alt:"1653045943045"}})]),n._v(" "),t("p",[n._v("都是二分图联通情况")]),n._v(" "),t("p",[n._v("现在我们就把问题转化成了：")]),n._v(" "),t("p",[t("strong",[n._v("一个左边n个点，右边m个点的二分图")]),n._v("，"),t("strong",[n._v("使其联通的连线方案数有多少")])]),n._v(" "),t("p",[n._v("直接去算联通数：容易出现算重复的情况，所以采用算出"),t("strong",[n._v("所有的连线情况减去不连通的连线方案")]),n._v("的方式")]),n._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5C%E5%BC%A0%E5%B0%91%E7%A6%B9%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1653045993063.png",alt:"1653045993063"}})]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("for(n = 0;n<=N;n++)\n\t\tfor (m = 0; m <= M; m++) {//求左边n个点右边m个点的二分图的联通方案数量\n\t\t\tdp[n][m] = three_mi[n * m];//这是所有连接情况，后面穷举不连通的减去\n\t\t\tfor (int i = 0; i <= n - 1; i++) {\n\t\t\t\tfor (int j = 0; j <= m; j++)\n\t\t\t\t\tif (i != n - 1 || j != m) {//i和j不能同时取到最大值\n\t\t\t\t\t\tdp[n][m] -= (C[n - 1][i] * C[m][j] % MOD * three_mi[(n - i - 1) * (m - j)] % MOD * dp[i + 1][j]) % MOD;\n\t\t\t\t\t\tdp[n][m] %= MOD;\n\t\t\t\t\t}\n\t\t\t}\n\t\t\tdp[n][m] = (dp[n][m] + MOD) % MOD;\n\t\t}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br")])]),t("hr"),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("#include <bits/stdc++.h>\ntemplate<typename T>\ninline void read(T& x) { x = 0; char c = getchar(); while (!isdigit(c))c = getchar(); while (isdigit(c)) { x = x * 10 + c - '0'; c = getchar(); } }\n#define si(a) read(a)\n#define sii(a,b) read(a),read(b)\n#define siii(a,b,c) read(a),read(b),read(c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nconst ll MOD = 924844033;\n//const int N = 1e5 + 10;\nint n, m;\nint N, M;\nll C[110][110];//C(i,j)排列数\nll dp[110][110];\nll three_mi[11000];\nvoid C_i_j() {//预处理C(i,j)\n\tfor (int i = 0; i <= 105; i++) {\n\t\tC[i][0] = 1, C[i][i] = 1;\n\t\tfor (int j = 1; j < i; j++)\n\t\t\tC[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;\n\t}\n}\nvoid three_x() {//预处理3^x\n\tthree_mi[0] = 1;\n\tfor (int i = 1; i <= 10100; i++) three_mi[i] = (three_mi[i - 1]) * 3 % MOD;\n}\nvoid solve() {\n\tsii(N, M);\n\tC_i_j(); three_x();\n\tfor(n = 0;n<=N;n++)\n\t\tfor (m = 0; m <= M; m++) {//求左边n个点右边m个点的二分图的联通方案数量（该题里每个点的情况有3种\n\t\t\tdp[n][m] = three_mi[n * m];//这是所有连接情况，后面穷举不连通的减去\n\t\t\tfor (int i = 0; i <= n - 1; i++) {\n\t\t\t\tfor (int j = 0; j <= m; j++)\n\t\t\t\t\tif (i != n - 1 || j != m) {//i和j不能同时取到最大值\n\t\t\t\t\t\tdp[n][m] -= (C[n - 1][i] * C[m][j] % MOD * three_mi[(n - i - 1) * (m - j)] % MOD * dp[i + 1][j]) % MOD;\n\t\t\t\t\t\tdp[n][m] %= MOD;\n\t\t\t\t\t}\n\t\t\t}\n\t\t\tdp[n][m] = (dp[n][m] + MOD) % MOD;//取余，不然会寄\n\t\t}\n\tprintf(\"%lld\", dp[N][M]);\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);