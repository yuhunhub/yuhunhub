(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-515df0f2"],{"14c3":function(e,t,r){"use strict";var a=r("bd2d"),n=r.n(a);t.a=function(e){return parseFloat(n.a.format(e,{precision:14}))}},"517a":function(e,t,r){"use strict";t.a={"暴击":.08,"攻击加成":.08,"生命加成":.08,"防御加成":.16,"效果命中":.08,"效果抵抗":.08}},5439:function(e,t,r){"use strict";var a,n={300002:"雪幽魂",300003:"地藏像",300004:"蝠翼",300006:"涅槃之火",300007:"三味",300008:"魍魉之匣",300009:"被服",300010:"招财猫",300011:"反枕",300012:"轮入道",300013:"日女巳时",300014:"镜姬",300015:"钟灵",300018:"狰",300019:"火灵",300020:"鸣屋",300021:"薙魂",300022:"心眼",300023:"木魅",300024:"树妖",300026:"网切",300027:"阴摩罗",300029:"伤魂鸟",300030:"破势",300031:"镇墓兽",300032:"珍珠",300033:"骰子鬼",300034:"蚌精",300035:"魅妖",300036:"针女",300039:"返魂香",300048:"狂骨",300049:"幽谷响",300050:"土蜘蛛",300051:"胧车",300052:"荒骷髅",300053:"地震鲶",300054:"蜃气楼",300073:"飞缘魔",300074:"兵主部",300075:"青女房",300076:"涂佛",300077:"鬼灵歌伎",300079:"遗念火",300080:"共潜",300081:"恶楼",300082:"贝吹坊",300083:"海月火玉",300084:"出世螺",300085:"火之车",300086:"隐念",300087:"叠叩",300088:"应声虫",300089:"元兴寺",300090:"钓瓶火"},o={};for(a in n)o[n[a]]=a;t.a={code2name:n,name2code:o}},"6c2a":function(e,t,r){"use strict";r.r(t);var a=r("1da1"),n=(r("96cf"),r("e175")),o=r("9d39"),i=r("f279"),s=r("91a2");n={mixins:[n.a,o.a,i.a,s.a],data:function(){return{hasUpload:!1,uploadCount:0}},methods:{upload:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function r(){var a,n,o,i,s,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.file,t.hasUpload=!1,a=t.$loading({lock:!0}),n=t.currentSet,o=n._id,r.prev=5,r.next=8,t.readYuhunFile(i);case 8:return i=r.sent,s=i.list,u=i.count15,r.next=12,t.$yuhunRemoveAll(o);case 12:return r.next=14,t.$yuhunSave(o,s);case 14:return n.updatedAt=new Date,n.setUpdatedAt=new Date,n.length=u,n.lengthNot15=s.length-u,t.$store.commit("changeCurrentSet",n),r.next=21,t.$yuhunset.update({_id:{$eq:o}},n);case 21:if(t.hasUpload=!0,t.uploadCount=s.length,a.close(),t.$canSetSync(o))return r.next=28,t.checkAndSync();r.next=28;break;case 28:r.next=33;break;case 30:r.prev=30,r.t0=r.catch(5),a.close();case 33:case"end":return r.stop()}}),r,null,[[5,30]])})))()}}},o=r("2877"),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticStyle:{"text-align":"center"}},[e._m(0),e._m(1),t("el-card",{staticStyle:{"margin-top":"10px"}},[t("el-upload",{attrs:{action:"#","before-upload":e.beforeUpload,"http-request":e.upload,"show-file-list":!1}},[t("el-button",{attrs:{type:"text"}},[e._v(" 点击导入新的御魂快照文件"),t("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),e.hasUpload?t("el-alert",{staticStyle:{"margin-top":"10px"},attrs:{title:"成功导入！目前共有"+e.uploadCount+"条新御魂数据。",type:"success"}}):e._e()],1)}),[function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("h2",[t("i",{staticClass:"el-icon-info"}),e._v(" 更新御魂数据 ")])},function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("p",[e._v(" 这里的导入用于"),t("b",[e._v("更新当前御魂集的御魂数据")]),e._v("，注意不要导入不同账号的御魂数据。 ")])}],!1,null,null,null);t.default=i.exports},a35a:function(e,t,r){"use strict";var a={1:{4:49,5:65,6:81},3:{4:8,5:11,6:14},5:{4:206,5:274,6:342}},n={1:{4:17,5:22,6:27},3:{4:4,5:5,6:6},5:{4:69,5:92,6:114}},o={4:6,5:8,6:10},i={"速度":{4:8,5:10,6:12},"暴击伤害":{4:9,5:11,6:14},"攻击加成":o,"防御加成":o,"生命加成":o,"效果命中":o,"效果抵抗":o,"暴击":o},s=(o={4:2,5:2,6:3},{"速度":{4:2,5:2,6:3},"暴击伤害":{4:3,5:4,6:5},"攻击加成":o,"防御加成":o,"生命加成":o,"效果命中":o,"效果抵抗":o,"暴击":o});t.a=function(e){var t=e["御魂等级"],r=e["御魂星级"],o=e["位置"];e=e.mainProp;return-1<[1,3,5].indexOf(o)?a[o][r]+n[o][r]*t:(o=i[e][r]+s[e][r]*t,"速度"!==e&&(o/=100),o)}},b668:function(e,t,r){"use strict";t.a=["荒骷髅","蜃气楼","土蜘蛛","地震鲶","胧车","鬼灵歌伎"]},d81d:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").map;a({target:"Array",proto:!0,forced:!r("1dde")("map")},{map:function(e){return n(this,e,1<arguments.length?arguments[1]:void 0)}})},e175:function(e,t,r){"use strict";r("d3b7"),r("b0c0"),r("fb6a");var a=r("b85c"),n=function(e,t){return t?(t<1&&(t*=100),-1<["速度","暴击","生命加成","攻击加成","防御加成"].indexOf(e)?(r=t)<3?1:r<6?2:r<9?3:r<12?4:r<15?5:r<18?6:r<21?7:r<24?8:r<27?9:r<30?10:void 0:-1<["暴击伤害","效果命中","效果抵抗"].indexOf(e)?(r=t)<4?1:r<8?2:r<12?3:r<16?4:r<20?5:r<24?6:r<28?7:r<32?8:r<36?9:r<40?10:void 0:0):0;var r},o=r("e1bd"),i=r("a35a"),s=r("517a"),u=r("b668"),c=r("14c3");function l(e){"string"==typeof e[0]&&e.shift();var t,r=[],l=0,f=Object(a.a)(e);try{for(f.s();!(t=f.n()).done;){var d,p=t.value,v=(15===p["御魂等级"]&&l++,p.mainProp),h=(v||(v=function(e){var t=e["位置"];if(1===t)return"攻击";if(3===t)return"防御";if(5===t)return"生命";if(2===t&&e["速度"]&&30<e["速度"])return"速度";if(4===t){if(e["效果命中"]&&.3<e["效果命中"])return"效果命中";if(e["效果抵抗"]&&.3<e["效果抵抗"])return"效果抵抗"}if(6===t){if(e["暴击"]&&.3<e["暴击"])return"暴击";if(e["暴击伤害"]&&.3<e["暴击伤害"])return"暴击伤害"}return e["攻击加成"]&&.3<e["攻击加成"]?"攻击加成":e["生命加成"]&&.3<e["生命加成"]?"生命加成":e["防御加成"]&&.3<e["防御加成"]?"防御加成":void 0}(p),p.mainProp=v),-1<u.a.indexOf(p["御魂类型"])&&(p.isBossYuhun=!0,p["固有属性"]&&(p.bossFixedProp=p["固有属性"],delete p["固有属性"])),y=k=R=d=x=_=m=g=b=h=void 0,p),b=v,g=0,m=[],_=null,x=Object(a.a)(o.a);try{for(x.s();!(d=x.n()).done;){var y,R=d.value,k=h[R];(k=k&&(R===b?Object(c.a)(k-Object(i.a)(h)):k))&&(h.isBossYuhun&&(k===s.a[R]?_=R:k>s.a[R]&&m.push(R)),(y=n(R,k))&&(g+=h[R+"score"]=y))}}catch(e){x.e(e)}finally{x.f()}h.isBossYuhun&&!h.bossFixedProp&&(_||1===m.length&&(_=m[0]),_&&(h.bossFixedProp=_)),0<g&&(h.score=g),r.push(p)}}catch(e){f.e(e)}finally{f.f()}return{list:r,count15:l}}r("d81d"),r("159b"),r("99af"),r("b64b");var f=r("5439"),d={Hp:"生命",Defense:"防御",Attack:"攻击",HpRate:"生命加成",DefenseRate:"防御加成",AttackRate:"攻击加成",Speed:"速度",CritRate:"暴击",CritPower:"暴击伤害",EffectHitRate:"效果命中",EffectResistRate:"效果抵抗"},p=f.a.code2name,v={1:"AttackRate",2:"HpRate",3:"DefenseRate",4:"CritRate",5:"EffectHitRate",6:"EffectResistRate"},h=function(e){return e&&(e.equip_data?e.equip_data.map((function(e){var t,r=p[String(e.suit_id)],a={"御魂ID":e.id,"御魂等级":e.level,"御魂星级":e.quality,"御魂类型":r,"位置":e.pos,born:e.born,lock:e.lock,garbage:e.garbage,weared:e.weared,mainProp:d[Object.keys(e.base_attr)[0]]},n=(e.single_attr&&(a.bossFixedProp=d[v[e.single_attr]]),[]);for(t in e.rand_attr)n.push(d[t]);a.props=n;var o,i,s,u={};for(o in e.rand_attr){var c=u[o]||0;u[o]=c+e.rand_attr[o]}for(i in e.base_attr){var l=u[i]||0;u[i]=l+e.base_attr[i]}return e.single_attr&&(r=v[e.single_attr],s=u[r]||0,u[r]=s+("DefenseRate"===r?.16:.08)),Object.keys(u).forEach((function(e){a[d[e]]=u[e]})),a})):e.data&&e.data.hero_equips?(t=e.data.hero_equips,r=function(e){var t,r=[],n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){var o=t.value.equips;o&&0<o.length&&(r=r.concat(o))}}catch(e){n.e(e)}finally{n.f()}return r}(e.data.heroes),t.map((function(e){for(var t={"御魂ID":e.id,"御魂等级":e.level,"御魂星级":e.quality,"御魂类型":p[String(e.suit_id)],"位置":e.pos+1,born:e.born,lock:e.lock,garbage:e.garbage,weared:-1<r.indexOf(e.id),mainProp:d[e.base_attr.type]},a=(e.single_attrs&&0<e.single_attrs.length&&(t.bossFixedProp=d[e.single_attrs[0].type]),{}),n=[],o=(e.attrs.forEach((function(e){return n.push(d[e.type])})),t.props=n,[e.base_attr].concat(e.attrs,e.single_attrs)),i=0;i<o.length;i++){var s=o[i],u=a[s.type]||0;a[s.type]=u+s.value}return Object.keys(a).forEach((function(e){t[d[e]]=a[e]})),t}))):e);var t,r};f={methods:{beforeUpload:function(e){return e="json"===this.getFileExt(e),e||this.$message.error("导入文件只能是 Json(.json) 格式的文件"),e},readYuhunFile:function(e){var t=this;return new Promise((function(r,a){var n=new FileReader;n.addEventListener("error",(function(e){"NotFoundError"===e.target.error.name?t.$message.error("导入出错，请把Json文件解压出来之后再拖入御魂Hub"):t.$message.error("导入出错：".concat(e.target.error.name)),a()})),n.readAsText(e),n.onload=function(){var e=JSON.parse(n.result);e=h(e);r(l(e))}}))},getFileExt:function(e){var t=e.name.lastIndexOf(".");return e.name.slice(t+1).toLowerCase()}}},r=r("2877"),r=Object(r.a)(f,void 0,void 0,!1,null,null,null);t.a=r.exports},e1bd:function(e,t,r){"use strict";t.a=["攻击加成","暴击伤害","暴击","速度","效果命中","效果抵抗","生命加成","防御加成","攻击","防御","生命"]}}]);