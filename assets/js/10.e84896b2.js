(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{679:function(t,a,e){"use strict";e.r(a);var s=e(5),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Ubuntu下固定ip")]),t._v(" "),e("h1",{attrs:{id:"linux固定ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux固定ip"}},[t._v("#")]),t._v(" Linux固定IP")]),t._v(" "),e("h3",{attrs:{id:"修改vmware虚拟网络编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改vmware虚拟网络编辑器"}},[t._v("#")]),t._v(" 修改VMware虚拟网络编辑器")]),t._v(" "),e("p",[t._v('打开VMware顶部导航栏“编辑”，打开“虚拟化网络编辑器”，选择“VMnet8”，去掉 "使用本地DHCP服务将 IP地址分配给虚拟机"  的勾，该步骤的目的是禁止动态给Ubuntu虚拟机分配IP地址.')]),t._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:t.$withBase("/Linux/ip1.png")}}),t._v(" "),e("h3",{attrs:{id:"记录vwware网关ip地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录vwware网关ip地址"}},[t._v("#")]),t._v(" 记录VWware网关IP地址")]),t._v(" "),e("p",[t._v("上图里点击“NAT设置”，记住下图里的网关IP，一个人一个样.")]),t._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:t.$withBase("/Linux/ip2.png")}}),t._v(" "),e("h3",{attrs:{id:"修改vmware网络适配器设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改vmware网络适配器设置"}},[t._v("#")]),t._v(" 修改VMware网络适配器设置")]),t._v(" "),e("p",[t._v("控制面板→网络与 Internet→网络和共享中心→更改适配器设置→右键Vmware，属性")]),t._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:t.$withBase("/Linux/ip3.png")}}),t._v(" "),e("p",[t._v("修改Internet协议版本4(TCP/Ipv4)的属性，这里的IP不能与上面那个VMware虚拟机网关IP相同")]),t._v(" "),e("p",[e("img",{staticStyle:{zoom:"50%"},attrs:{src:t.$withBase("/Linux/ip4.png")}}),e("img",{staticStyle:{zoom:"50%"},attrs:{src:"withBase('/Linux/ip5.png)"}})]),t._v(" "),e("h3",{attrs:{id:"设置ubuntu虚拟器网络适配器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置ubuntu虚拟器网络适配器"}},[t._v("#")]),t._v(" 设置Ubuntu虚拟器网络适配器")]),t._v(" "),e("p",[t._v("编辑虚拟器设置，左边网络适配器，右边选自定义特定虚拟网络为Vmnet8(NAT模式)")]),t._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:t.$withBase("/Linux/ip6.png")}}),t._v(" "),e("h3",{attrs:{id:"网络配置文件设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络配置文件设置"}},[t._v("#")]),t._v(" 网络配置文件设置")]),t._v(" "),e("p",[e("code",[t._v("ip addr")]),t._v("查看网卡名称，我的Ubuntu系统网卡名称即下图的ens33")]),t._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:t.$withBase("/Linux/ip7.png")}}),t._v(" "),e("p",[t._v("接下来要修改一个配置文件. 这里吃了亏，正在配置网络上不去网下不了vim之类的编辑器，只能直接找到文件去修改，打开/etc/netplan下的yaml文件 01-network-manager-all.yaml（需要授权才能编辑"),e("code",[t._v("sudo chmod 7 01-network-manager-all.yaml")]),t._v("），编辑内容如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("network:\n  version: 2\n  renderer: NetworkManager\n  ethernets:\n    ens33:\t\t\t\t\t\t\t\t\t\t#网卡名\n      dhcp4: no\n      dhcp6: no\n      addresses: [192.168.127.161/24] \t\t\t#本机ip设置一下\n      gateway4: 192.168.127.2 \t\t\t\t\t#VMware网关ip\n      nameservers:\t\t\t\t\t\t\t\t#DNS服务器\n        addresses: [114.114.114.114,8.8.8.8,1.1.1.1]\t\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("编译网络配置"),e("code",[t._v("sudo netplan apply")])]),t._v(" "),e("p",[t._v("重启一下系统"),e("code",[t._v("sudo reboot")])]),t._v(" "),e("p",[t._v("ping一下"),e("code",[t._v("ping www.baidu.com")])]),t._v(" "),e("img",{attrs:{src:t.$withBase("/Linux/ip8.png")}}),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("参考教程：")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/haojie_duan/article/details/117914260",target:"_blank",rel:"noopener noreferrer"}},[t._v("vmware虚拟机中 ubuntu 20.04通过nat设置静态ip（固定ip）_ubuntu虚拟机nat_杰之行的博客-CSDN博客"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/yyee/p/12899953.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vmware虚拟机配置ubuntu 18.04(20.04)静态IP地址 - 民工黑猫 - 博客园 (cnblogs.com)"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);