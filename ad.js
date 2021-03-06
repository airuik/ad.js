/*
     ::::::::   :::::::::    ::::::::   ::::::::::        ::::::::   :::::::::: 
    :+:    :+:  :+:    :+:  :+:    :+:  :+:              :+:    :+:  :+:        
    +:+         +:+    +:+  +:+         +:+              +:+         +:+        
    +#+         +#+    +:+  +#+         +#++:++#         +#+         :#::+::#   
    +#+         +#+    +#+  +#+         +#+              +#+         +#+        
    #+#    #+#  #+#    #+#  #+#    #+#  #+#         #+#  #+#    #+#  #+#        
     ########   #########    ########   ##########  ###   ########   ###        
*/

function FindProxyForURL(url, host){

    /********************************************
    *                                           *
    *            关于 “mode = ” 的说明            *
    *                                           *
    *  0: 不使用代理 (仅屏蔽广告)                  *
    *  1: 使用http代理 (请在下方设置服务器和端口)    *
    *  2: 使用pac规则代理 (使用方法请看文件底部注释)  *
    *                                           *
    ********************************************/

    var mode = 0;

    //【以下http代理设置仅在 “mode = 1” 时有效】
    var domain = "127.0.0.1";
    var port = "8080";

    var hosts = [
//=========域名Start=========
//<ad.js_test>
"sc.cdce.cf",
//<youku>
"ad.api.3g.youku.com",
"statis.api.3g.youku.com",
"atm.youku.com",
"stat.youku.com",
//<sohu>
"agn.aty.sohu.com",
"mmg.aty.sohu.com",
//<letv>
"n.mark.letv.com",
"ark.letv.com",
"irs01.com",
//<baofeng>
"xs.houyi.baofeng.net",
//<hunantv>
"da.hunantv.com",
"miaozhen.com",
//<qq>
"lives.l.qq.com",
"vqq.admaster.com.cn",
//<tudou>
"ad.api.3g.tudou.com",
//<pptv>
"de.as.pptv.com",
"pp2.pptv.com",
"stat.pptv.com",
"afp.pplive.com",
//<iqiyi>
"cm.passport.iqiyi.com",
"cupid.iqiyi.com",
"paopao.iqiyi.com",
"ckm.iqiyi.com",
"msg.71.am",
"pingma.qq.com",
//<google>
"2mdn.net",
"admob.com",
"doubleclick.com",
"doubleclick.net",
"googleadsserving.cn",
"googlecommerce.com",
"googletagmanager.com",
"ads.google.com",
"afd.l.google.com",
"pagead-tpc.l.google.com",
"pagead.google.com",
"pagead.l.google.com",
"partnerad.l.google.com",
//<baidu>
"hm.baidu.com",
"eiv.baidu.com",
"pos.baidu.com",
"cpro.baidu.com",
"cpro.baidustatic.com",
"dup.baidustatic.com",
"cbjs.baidu.com",
//<taobao>
"tanx.com",
"alimama.com",
//<360>
"lianmeng.360.cn",
//<others>
"keydot.net",
"mengmob.com",
"zzzkxx.com",
"miaozhen.com",
"adsage.com",
"cocounion.com",
"admaster.com.cn",
"ipinyou.com",
"admin5.com",
"csbew.com",
"jusha.com",
"vsoon.com",
"soquair.com",
"guohead.com",
"live.chartboost.com",
"appodeal.com",
"fastapi.net",
"adsmogo.com",
"adsmogo.org",
"adsmogo.net",
"adsmogo.mobi",
"adlive.cn",
"sstc360.com",
"ad-brix.com",
"leadboltads.net",
"joyingmobi.com",
"dm.jb51.net",
"bdjs.jb51.net",
"yokaunion.com",
"adpro.cn",
"pro.cn",
"51vipedu.com"
//=========域名End=========
//【在分界线上面可以追加域名，两边加上双引号，使用逗号分隔。】
    ]
    var ips = [
//=========IP地址Start=========
//<iqiyi>
"101.227.14.80",
"101.227.14.81",
"101.227.14.82",
"101.227.14.83",
"101.227.14.84",
"101.227.14.85",
"101.227.14.86",
"101.227.200.11",
//=========IP地址End=========
//【在分界线上面可以追加IP地址，两边加上双引号，使用逗号分隔。】
    ]
    var rules = [
//【iOS 9.3.2 以上的系统由于系统限制，无法享受URL规则功能。】
//=========URL规则Start=========
"*pg.dmclock.com:8011/ec54.html*",
"*pg.dmclock.com/ec54.html*",
"http://x.jd.com/exsites?spread_type=*",
"http://ope.tanx.com/wap?i=*",
"http://mjs.sinaimg.cn/wap/cms/ad/*.js",
"*sdkapp.mobile.sina.cn/interface/sdk/sdkad.php",
"http://lives.l.qq.com/*&live=*",
"*/advert-sdk/*",
"*/?op=adv&*",
"*?adslot=*",
"*&product=adpublish&*",
"*/ad/getAd.*",
"*/AdvertList.xml",
"*/getads?*",
"*/getadsmetadata?*",
"*/ashx/Ad/*",
"*/MobileAdServer/*",
"*.adsense.*.js",
"*/advertise/*",
"*/adsense/*",
"*/baidustatic/cpro/ui/cm.js*",
"*/advertclient/*",
"*/api/advertising/*",
"*/resource/advert/*",
"*/advertisements?*",
"*/ad?service=getad&*",
"*/advert/list?*",
"*/json/ad/*",
"*/adv/list/*",
"*/mobileads/adsconf?*",
"*/ad_list.php?*",
"*.com/advert/*",
"*/api/advert/*",
"*.com/ad-bucket/*",
"*/get_ads.json?*",
"*/pushad/html/*",
"*/api/getNewAdInfo?*",
"*.com/i.js",
"*/ad_footer.js*",
"*.com/ad.js",
"*/stickyad.js",
"*/js/ad.*.js",
"*/js/ads_*.js",
"*.popunder.js",
"*/popunder/*.js",
"*.js?advertid=*",
"*/ad_show.js",
"*/cache/ad_js/*.js",
"http://guanggao.*.js",
"*/advert/*.js",
"*/advert.js",
"*/adv3.js",
"*/adv2.js",
"*/adv1.js",
"*/ads1.js",
"*/ads2.js",
"*/ads3.js",
"*/ads4.js",
"*/ads_images/*.js",
"*_advert.js",
"*.com/ads.js",
"*.com/advt/*.js",
"*/google_ads.js",
"*/doubleclick.js",
"*/js/tc.js",
"*/showad.js",
"*/guanggao.js",
"*.net/ad/*.js",
"*.com/ad/*.js",
"*/floatad.js",
"*/duilian.js",
"*/adfile/*.js",
"*/adbox.asp*",
"*/adshow.asp*",
"*/js/ads.*",
"*/ad/files/*",
"*.cn/adv/ad/*",
"*/advertising/*&id=*",
"*/adShow.*?id=*",
"http://adtag.*",
"*/html/ad/*",
"*/www/delivery/*",
"*.com/ads_*",
"*/main/s?*&local=yes",
"*.com/adsys/*",
"http://adv2.*",
"*/ad/index/*",
"*.php?ad_pos=*",
"*/advertpro/servlet/*",
"http://us-ads.*",
"*.cn/js/ads/*",
"*/json/advertise_list.*",
"*/getAdList.*",
"*/getad?*",
"*service/advertising/*",
"*cc/js/ads/*",
"*.com/js/ads/*",
"http://gg.*.js",
"*/page/s.php?s=*&w=*&h=*",
"*/public/ads/*",
"*.com/ads/adm.*",
"http://ad.*.js",
"*/static/adsview/*.js",
"*/plus/ad_*.js",
"*/d/js/acmsd/*",
"http://adserver.*",
"*/ad1.js",
"*/ad2.js",
"*/ad3.js",
"*/adscpv/i.*",
"*/ad/AdSale/*",
"*/ad/Adv/*",
"*_advertise_list.*",
"*_advertise_native_*",
"*_advertise_cpc_*",
"http://ads.*.js",
"*/getAds.php?*",
"http://i.ifeng.com/showjs?apids=*",
"http://cdn.tanx.com/t/m/m.js",
"*/wapAdversApi?*",
"*bid.adview.cn/agent/getAd*",
"*mi.gdt.qq.com/gdt_mview.fcg*",
"*googleads.g.doubleclick.net:80/mads/gma*",
"*api2.adsmogo.mobi/ad*",
"*api2.adsmogo.net/ad*",
"*r3.adwo.com/adweb*",
"*pub.funshion.com/interface/deliver*",
"*livew.l.qq.com/livemsg*",
"*lives.l.qq.com/livemsg*",
"*api.mobile.dianru.com/ads*",
"*service.cocounion.com/core/ssp/bid/chance*",
"*api2.adsmogo.com/ad*",
"*api2.adsmogo.org/ad*",
"*googleads.g.doubleclick.net*",
"*i.w.inmobi.com/showad.asm*",
"*api.24kidea.com/hqzs/getnewadsystemappad*",
"*mads/gma*",
"*news.l.qq.com/app*",
"*g1.163.com/madr*",
"*sdkapp.mobile.sina.cn/interface/sdk/sdkad.php",
"*pgdt.gtimg.cn/gdt*",
"*ad.api.3g.tudou.com/adv.*",
"*.domob.cn/a",
"*.snssdk.com/service/13/app_ad*",
"*lf.snssdk.com/2/article/information*",
"*iface.iqiyi.com/api/get2UserInfo*",
"*passport.iqiyi.com/apis/user/info.action*",
"*passport.qiyi.com/apis/user/info.action*",
"*staticimg.yidianzixun.com/s/ad*",
"*a1.go2yd.com/Website/contents/recommend-ads*",
"*pagead2.googlesyndication.com/pagead*",
"*ads.service.kugou.com/v1/mobile*",
"*mvads.kugou.com/mobile*",
"*appsrv4.mdn2.net/cs3*",
"*appsrv4.madserving.c*/cs3*",
"*ads.mopub.com/m/ad*",
"*.domob*/a",
"*.duomeng*/a",
"*adv.madserving.com/material*",
"*.gameloft.com/un/index*ad*",
"*ads.mopub.com/m/ad*",
"*ios.bayimob.com/ad/getAdList*",
"*bayilaoye.oss-cn-hangzhou.aliyuncs.com/iosAdv*",
"*basead.wifigo.cn/3/ad/ad*",
"*g.163.com/ur*",
"*sax.sina.cn/wap/impress*",
"*api.jxedt.com/api/guide*",
"*api.jxedt.com/api/ad*",
"*sandbox.adapter.opendsp.tanx.com",
"*mp4ba.qucaigg.com:8080/960X90.js",
"*img.twcczhu.com/js/rr/rich_m.js",
"*img.fd7c.com/html/click.*",
"*afp.csbew.com/s.htm",
"*adsdk.gao7.com*Ad*",
"*8112d.365xs.org/*",
"*.doubleclick.net*",
"*googlesyndication.com*",
"*ggs.myzaker.com/zk_article_ad.php*",
"*ggs.myzaker.com/zk_ggs.php*ads*",
"*ad*.ximalaya.com/subapp*",
"*7pulxu.com2.z0.glb.qiniucdn.com*",
"*admgr.qingting.fm/adxconfig*",
"*ad.qingting.fm/api/ad*",
"*js.users.51.la/*js",
"*cpro.baidustatic.com/cpro/ui*",
"*njs.myhx120.com/cpv/v.php*",
"*w.m.taobao.com/sdk/*banner*",
"*m2.qiushibaike.com/banner*",
"*init.startappexchange.com/*ads*",
"http://ios.ijinshan.com/kbatterydoctor/displayad.json",
"http://api.vungle.com/api/v3/requestAd",
"*pos.baidu.com*dai*",
"*ssl.google-analytics.com*",
"*e.crashlytics.com*",
"*med.heyzap.com*",
"*a.applovin.com*",
"*req.startappservice.com*",
"*filelx.gao7.com/g1*",
"*ads.mopub.com/m/open",
"http://iface.iqiyi.com/api/initLogin*",
"http://i.play.api.3g.youku.com/common/v3/hasadv/play*",
"*cache.m.iqiyi.com/dc/amdt*",
"*.cupid.iqiyi.com/show2*",
"*www.xwctw.com:8888/lxmService/lxmPosition*",
"*mobads.baidu.com/ads*",
"*api.weibo.cn/2/cardlist*siminfo*",
"*cdn.moogos.com/js/_jssdk.js*",
"*img-wifi2.poco.cn*Recommend*",
"*img-wifi2.poco*Ad*",
"*ios.win007.com*JsonAd.txt*",
"*www.sf-express.com/app/cn/sc*",
"*app.9nali.com/1315/check*set*",
"*jt.rsscc.com/trainnet/advertisement*",
"*mobads.baidu.com/cpro/ui*",
"*dl.smilingwhitebear.com/as/config*",
"*mrobot.pcauto.com.cn/v3/ad_py*",
"*www.wyxokokok.com/pub/readpubxml*",
"http://pomelocdn.beautyplus.com/iphone*",
"*config.mobile.kukuplay.com:8080/MobileConfig*"
//=========URL规则End=========
//【在分界线上面可以追加URL规则，两边加上双引号，使用逗号分隔。】
    ]

    dnsResolve("sc.cdce.cf");
    var IS_AD = "PROXY example.com:80";
    switch (mode){
      case 0:
          IS_NOT_AD = "DIRECT";
          break;
      case 1:
          IS_NOT_AD = "PROXY " + domain + ":" + port;
          break;
      case 2:
          IS_NOT_AD = FindUserProxyForURL(url, host);
          break;
    }
    for (var n = 0; n < hosts.length; n++){
        if (dnsDomainIs(host, hosts[n])){
            return IS_AD;
        }
    }
    for (var n = 0; n < ips.length; n++){
        if (isInNet(host, ips[n], "225.225.225.225")){
            return IS_AD;
        }
    }
    for (var n = 0; n < rules.length; n++){
        if (shExpMatch(url, rules[n])){
            return IS_AD;
        }
    }
    return IS_NOT_AD;
}

/**********************************************
*                                             *
*            使用pac规则代理的方法               *
*                                             *
*  1. 设置“mode = 2”。                         *
*  2. 打开pac文件，将里面的“FindProxyForURL”替换  *
*     为“FindUserProxyForURL“后粘贴在下方即可。  *
*                                             *
**********************************************/
