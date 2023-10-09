(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{704:function(s,n,t){"use strict";t.r(n);var a=t(5),i=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("二维线段树")]),s._v(" "),t("h1",{attrs:{id:"k-云海蝴蝶螺"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k-云海蝴蝶螺"}},[s._v("#")]),s._v(" K. 云海蝴蝶螺")]),s._v(" "),t("p",[t("strong",[s._v("题意")]),s._v("：维护一个二维数据结构，支持单点修改和区间查询")]),s._v(" "),t("h3",{attrs:{id:"二维线段树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二维线段树"}},[s._v("#")]),s._v(" 二维线段树")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("建树")]),s._v("：先在第一维建线段树，在一维线段树的每个节点上再建一个线段树，即第二维。")]),s._v(" "),t("p",[s._v("我们先横向跑第一维，找到叶节点后向下跑第二维，最后逆着更新叶节点外层的。")]),s._v(" "),t("p",[s._v("如图是一个3*3矩阵建立的二维线段树，其中深红色为当前节点，浅红色为待确定值的节点，白色是还没跑过的节点。")]),s._v(" "),t("p",[s._v("![K2](C:\\Users\\张少禹\\Desktop\\暑假前\\Data Structures\\K.二维线段树\\讲题\\K2.png)")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("第一维，第二维皆为叶节点：直接取原矩阵的值，如下图的([1,1],[1,1])，其就是原矩阵的(1,1)。")]),s._v(" "),t("p",[s._v("![K6](C:\\Users\\张少禹\\Desktop\\暑假前\\Data Structures\\K.二维线段树\\讲题\\K6.png)")])]),s._v(" "),t("li",[t("p",[s._v("继续跑，非叶节点的值取其两个儿子(二维方向)的值，注意此时第一维还是叶节点。如下图([1,1],[1,2])取其二维方向的两个儿子([1,1],[1,1])和([1,1],[2,2])。")])])]),s._v(" "),t("p",[s._v("![K7（2）](C:\\Users\\张少禹\\Desktop\\暑假前\\Data Structures\\K.二维线段树\\讲题\\K7（2）.png)")]),s._v(" "),t("ul",[t("li",[s._v("对于第一维非叶节点的情况，更新第二维的叶节点时用其一维方向的两个儿子的值，如下图([1,2],[1,1])第一维不是叶节点，取其横向两个儿子的值。")])]),s._v(" "),t("p",[s._v("![K13](C:\\Users\\张少禹\\Desktop\\暑假前\\Data Structures\\K.二维线段树\\讲题\\K13.png)")]),s._v(" "),t("ul",[t("li",[s._v("继续跑就建完啦😊")])]),s._v(" "),t("p",[t("strong",[s._v("单点修改")]),s._v("：需要注意的细节是，每更新一个(叶节点，叶节点)，往回退出函数的时候要沿路把所有的关联节点都更新一下第二维，保证更新完全。")]),s._v(" "),t("p",[t("strong",[s._v("区间查询")]),s._v("：和一维线段树同理。")]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#include <bits/stdc++.h>\ntemplate<typename T>\ninline void read(T& x) {\n\tx = 0; char c = getchar();\n\twhile (!isdigit(c))c = getchar();\n\twhile (isdigit(c)) { x = x * 10 + c - '0'; c = getchar(); }\n}\n#define si(a) read(a)\n#define sii(a,b) read(a),read(b)\n#define siii(a,b,c) read(a),read(b),read(c)\n#define fl float\n#define ll long long int\n#define ull unsigned long long int\nusing namespace std;\nint gcd(int a, int b) { return a == 0 ? b : gcd(b % a, a); }\nint jd(int a) { return a < 0 ? (a * -1) : a; }\nconst ll MOD = 998244353;\nint n, m;\nint fa[5000100];\ninline signed gf(int x) { return fa[x] == x ? x : fa[x] = gf(fa[x]); }\nint mp[505][505];\nint M[4010][4010];\nint Mm[4010][4010];\nint ux, uy, uk;//修改的三个参数\nint aM, am;\nint x1, y11, x2, y2;//查询的四个参数 \nvoid buildy(int posx, int posy, int x, int y, int l, int r);\nvoid updatey(int posx, int posy, int l, int r, int k);\nvoid updatex(int posx, int l, int r) {\n\tif (l != r) {//更新从叶节点开始，找叶节点\n\t\tint mid = (l + r) / 2;\n\t\tif (ux > mid)\n\t\t\tupdatex(posx * 2 + 1, mid + 1, r);\n\t\telse\n\t\t\tupdatex(posx * 2, l, mid);\n\t\tupdatey(posx, 1, 1, n, -1);//它的第二维也要更新一波，直接跑一遍就行\n\t\treturn;\n\t}\n\t//找到叶节点了\n\tupdatey(posx, 1, 1, n, uk);\n}\nvoid updatey( int posx, int posy, int l,int r,int k) {\n\tif (l != r) {//不是叶节点，上下取\n\t\tint mid = (l + r) / 2;\n\t\tif (uy <= mid)\n\t\t\tupdatey(posx, posy * 2, l, mid, k);\n\t\telse\n\t\t\tupdatey(posx, posy * 2 + 1, mid + 1, r, k);\n\t\tM[posx][posy] = max(M[posx][posy * 2], M[posx][posy*2+1]);\n\t\tMm[posx][posy] = min(Mm[posx][posy * 2], Mm[posx][posy * 2 + 1]);\n\t\treturn;\n\t}\n\tif (k != -1) {\n\t\tM[posx][posy] = k;\n\t\tMm[posx][posy] = k;\n\t}\n\telse {\n\t\tM[posx][posy] = max(M[posx * 2][posy], M[posx * 2 + 1][posy]);\n\t\tMm[posx][posy] = min(Mm[posx * 2][posy], Mm[posx * 2 + 1][posy]);\n\t}\n}\nvoid findy(int l, int r, int posx, int posy);\nvoid findx(int l, int r, int posx) {\n\tif (l >= x1 && r <= x2)//一维到达范围，查对应二维\n\t\tfindy(1, n, posx, 1);\n\telse {//继续找\n\t\tint mid = (l + r) / 2;\n\t\tif (x1 <= mid)\n\t\t\tfindx(l, mid, posx * 2);\n\t\tif (x2 > mid)\n\t\t\tfindx(mid + 1, r, posx * 2 + 1);\n\t}\n}\nvoid findy(int l,int r,int posx, int posy) {\n\tif (l >= y11 && r <= y2) {\n\t\taM = max(aM, M[posx][posy]);\n\t\tam = min(am, Mm[posx][posy]);\n\t}\n\telse  {//继续找\n\t\tint mid = (l + r) / 2;\n\t\tif (y11 <= mid)\n\t\t\tfindy(l, mid, posx, posy * 2);\n\t\tif (y2 > mid)\n\t\t\tfindy(mid + 1, r, posx, posy * 2 + 1);\n\t}\n}\nvoid buildx(int posx, int l, int r) {\n\tif (l != r) {//第一维的线段树，一直找到叶节点，从叶节点倒着建\n\t\tint mid = (l + r) / 2;\n\t\tbuildx(posx * 2, l, mid);\n\t\tbuildx(posx * 2 + 1, mid + 1, r);\n\t}\n\tbuildy(posx, 1, l, r, 1, n);\n}\nvoid buildy(int posx, int posy, int x, int y, int l, int r) {//第一维节点的x + 第二维线段树的坐标(y) + 处理第二维时对应第一维的区间左右坐标 + 第二维的l和r\n\tif (l != r) {\n\t\tint mid = (l + r) / 2;\n\t\tbuildy(posx, posy * 2, x, y, l, mid);\n\t\tbuildy(posx, posy * 2 + 1, x, y, mid + 1, r);\n\t\tM[posx][posy] = max(M[posx][posy * 2], M[posx][posy * 2 + 1]);//取第二维左右儿子的最大值\n\t\tMm[posx][posy] = min(Mm[posx][posy * 2], Mm[posx][posy * 2 + 1]);\n\t\treturn;\n\t}\n\t//l==r说明第二维到叶节点了，更新当前posx的最大值\n\tif (x == y) {//如果对应的是第一维的叶节点x==y，那显然这个区间的就是个点，最大值确定\n\t\tM[posx][posy] = mp[x][l];\n\t\tMm[posx][posy] = mp[x][l];\n\t}\n\telse {//第二维到叶节点了，但第一维不是，所以找第一维左右儿子的最小值\n\t\tM[posx][posy] = max(M[posx * 2][posy], M[posx * 2 + 1][posy]);\n\t\tMm[posx][posy] = min(Mm[posx * 2][posy], Mm[posx * 2 + 1][posy]);\n\t}\n}\nvoid solve() {\n\tsi(n);\n\tfor (int i = 1; i <= n; i++)\n\t\tfor (int j = 1; j <= n; j++)\n\t\t\tsi(mp[i][j]);\n\tbuildx(1, 1, n);\n\tsi(m);\n\twhile (m--) {\n\t\tint op; si(op);\n\t\tif (op == 1) {//修改\n\t\t\tsiii(ux, uy, uk);\n\t\t\tupdatex(1, 1, n);\n\t\t}\n\t\telse {//查询\n\t\t\taM = 0;\n\t\t\tam = 1e9;\n\t\t\tsii(x1, y11); sii(x2, y2);\n\t\t\tfindx(1, n, 1);\n\t\t\tprintf(\"%d %d\\n\", aM, am);\n\t\t}\n\t}\n}\nint main() {\n\tint t;\n\t/*si(t);\n\twhile (t--)*/\n\tsolve();\n\treturn 0;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br"),t("span",{staticClass:"line-number"},[s._v("120")]),t("br"),t("span",{staticClass:"line-number"},[s._v("121")]),t("br"),t("span",{staticClass:"line-number"},[s._v("122")]),t("br"),t("span",{staticClass:"line-number"},[s._v("123")]),t("br"),t("span",{staticClass:"line-number"},[s._v("124")]),t("br"),t("span",{staticClass:"line-number"},[s._v("125")]),t("br"),t("span",{staticClass:"line-number"},[s._v("126")]),t("br"),t("span",{staticClass:"line-number"},[s._v("127")]),t("br"),t("span",{staticClass:"line-number"},[s._v("128")]),t("br"),t("span",{staticClass:"line-number"},[s._v("129")]),t("br"),t("span",{staticClass:"line-number"},[s._v("130")]),t("br"),t("span",{staticClass:"line-number"},[s._v("131")]),t("br"),t("span",{staticClass:"line-number"},[s._v("132")]),t("br"),t("span",{staticClass:"line-number"},[s._v("133")]),t("br"),t("span",{staticClass:"line-number"},[s._v("134")]),t("br"),t("span",{staticClass:"line-number"},[s._v("135")]),t("br"),t("span",{staticClass:"line-number"},[s._v("136")]),t("br"),t("span",{staticClass:"line-number"},[s._v("137")]),t("br"),t("span",{staticClass:"line-number"},[s._v("138")]),t("br"),t("span",{staticClass:"line-number"},[s._v("139")]),t("br"),t("span",{staticClass:"line-number"},[s._v("140")]),t("br"),t("span",{staticClass:"line-number"},[s._v("141")]),t("br"),t("span",{staticClass:"line-number"},[s._v("142")]),t("br")])])])}),[],!1,null,null,null);n.default=i.exports}}]);