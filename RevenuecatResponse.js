
let subscriber = () => {
  var body = String($response.body);
  let url = $request.url;
  if (url.endsWith("offerings")) {
  	$done({body});
  	return;
  }
  let headers = $request.headers;
  
  var bundleID = headers['x-client-bundle-id'];
  if (bundleID == "com.zy.JSTV") {
  	body = body.replace('"entitlements":{},','"entitlements":{"product_lifetime":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.zy.JSTV.product_lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.zy.JSTV.product_lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
    $done({body});
  	return;
  }
  
  var userAgent = headers['user-agent'] || headers['User-Agent'];
  userAgent = userAgent.toLowerCase();
//   console.log(userAgent);
  if (userAgent.startsWith("mizframa")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"mf_20_lifetime2","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"mf_20_lifetime2":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("fileball") || userAgent.startsWith("filebox") || userAgent.startsWith("filebar")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"filebox_pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("aptv")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.kimen.aptvpro.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.kimen.aptvpro.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("pastepal")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.onmyway133.PastePal.pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.onmyway133.PastePal.pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("folder")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Pro access":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"nonconsumable.workspace.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"nonconsumable.workspace.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("shellboxkit")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"ShellBoxKit.Lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"ShellBoxKit.Lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("browser")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"pro_zoomable","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"pro_zoomable":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("tqbrowser")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro_lt":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.tk.client.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.tk.client.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("grow")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"grow.pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"grow_lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"grow_lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("httpbot")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.behindtechlines.HTTPBot.prounlock","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.behindtechlines.HTTPBot.prounlock":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("rond")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"lifetime_248","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"lifetime_248":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("dtdvibe")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.dtd.aroundu.life","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.dtd.aroundu.life":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("anybox")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"cc.anybox.Anybox.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"cc.anybox.Anybox.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("plinky")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"iap.com.redpandaclub.plinky.lifetimeProUnlock","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"iap.com.redpandaclub.plinky.lifetimeProUnlock":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("circletime")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"000","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"000":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("gps%20map%20camera")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Lifetime":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.vasu.gpsmapcamera.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.vasu.gpsmapcamera.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("project%20delta")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"rc_entitlement_obscura_ultra":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.benricemccarthy.obscura4.obscura_ultra_lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.benricemccarthy.obscura4.obscura_ultra_lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("forward")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"forward.vip.forever","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"forward.vip.forever":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("darkroom")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"co.bergen.Darkroom.entitlement.allToolsAndFilters":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"co.bergen.Darkroom.product.forever.everything","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"co.bergen.Darkroom.product.forever.everything":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("blink")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"unlimited_screen_time":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"blink_shell_classic_unlimited_0","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"blink_shell_classic_unlimited_0":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("jellycuts")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"premium","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"premium":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("no%20fusion")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"LivePhoto":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.grey.nofusion.livephoto","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.grey.nofusion.livephoto":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("%e6%9e%81%e7%ae%80%e6%97%b6%e9%92%9f")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.mad.zenflipclock.iap.buymeacoffee","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.mad.zenflipclock.iap.buymeacoffee":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("opticlean")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"com.panicbyte.opticlean.iap":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"OptiClean","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"OptiClean":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("reflixios")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"com.magicgroot.reflix.entitlements":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.magicgroot.reflix.subs.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.magicgroot.reflix.subs.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("alisttools")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro_lifetime":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.jy.alistTools.pro_lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.jy.alistTools.pro_lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("moodcan")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"moodJarPro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"MoodCan_98_Lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"MoodCan_98_Lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("cookie")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"allaccess":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"app.ft.Bookkeeping.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"app.ft.Bookkeeping.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("swiftui-bento-box")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"subscription":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.raktech.bentocraft.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.raktech.bentocraft.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("sunlitt")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"sunlitt.pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"pro.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"pro.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("pocket%20widgets")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Subscription":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.niko.PocketWidgetsApp.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.niko.PocketWidgetsApp.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("gentler")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"app.gentler.activity.nonconsumable.onetime1","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"app.gentler.activity.nonconsumable.onetime1":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("%e4%b9%90%e6%a1%a5")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium_features":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.ericli.BeatB.lifetime_premium","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.ericli.BeatB.lifetime_premium":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("swiftserver")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"SwiftServer Premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"lifetime.premium.swiftserver","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"lifetime.premium.swiftserver":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("iching")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.secret.IChing.Lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.secret.IChing.Lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("coffee")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.alexloth.mindfulcoffee.Lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.alexloth.mindfulcoffee.Lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("actlite_app")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"monthly_vip":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"lifetime_pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"lifetime_pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("tiimo")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"learn":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"lifetime.iap","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"lifetime.iap":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("beetleadb")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"beetle_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"beetle_lifetime_pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"beetle_lifetime_pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("cloudreve")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"all_pro_features":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"org.cloudreve.Cloudreve.Lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"org.cloudreve.Cloudreve.Lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("aquariumwidgets")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"aquarium.premium.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"aquarium.premium.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("jstv")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"product_lifetime":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.zy.JSTV.product_lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.zy.JSTV.product_lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}]},');
  } else if (userAgent.startsWith("picseedclient")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Pro":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"com.picseed.sub.pro.annual","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"com.picseed.sub.pro.annual":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2023-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2023-01-07T09:26:18Z","store":"app_store","store_transaction_id":"190001505827904"}}');
  } else if (userAgent.startsWith("touchretouchbasic")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"tr5_yearlysubsc_15dlrs_1","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"tr5_yearlysubsc_15dlrs_1":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2023-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2023-01-07T09:26:18Z","store":"app_store","store_transaction_id":"190001505827904"}}');
  } else if (userAgent.startsWith("whitecloud")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"allaccess":{"expires_date":"2025-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"wc_pro_1y","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"wc_pro_1y":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2025-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("panels")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Panels+":{"expires_date":"2025-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"art.panels.wallpapers.appstore.sub.annual.tier1.base","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"art.panels.wallpapers.appstore.sub.annual.tier1.base":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2025-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("focus")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"subscribed":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"iap.io.masterbuilders.focus.pro_one_year","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"iap.io.masterbuilders.focus.pro_one_year":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("python3ide")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"python3ide_annual","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"python3ide_annual":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("pillow")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"com.neybox.pillow.premium.year":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("photoroom")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"com.background.pro.yearly","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"com.background.pro.yearly":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("super%20ai%20chat")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"chatbot_3999_1y","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"chatbot_3999_1y":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("leica%20lux")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"lux_annual_product_registration","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"lux_annual_product_registration":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("sonus")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Pro access":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"ai.sonus.year","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"ai.sonus.year":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("snapwords")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Pro access":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"com.happyplan.snapwords.premium.subscription.yearly","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"com.happyplan.snapwords.premium.subscription.yearly":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("hawk")) {
  	body = body.replace('"expires_date":"2025-05-24T11:22:45Z"','"expires_date":"2035-05-24T11:22:45Z"');
  } else if (userAgent.startsWith("portrait")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"UNLIMITED ACCESS":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"com.totoventures.portrait.1yearly","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"com.totoventures.portrait.1yearly":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("sheldonai")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"sai_9999_1y","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"sai_9999_1y":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  } else if (userAgent.startsWith("stash")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Pro":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"dev.alepacheco.stash.yearly12.99","purchase_date":"2024-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"dev.alepacheco.stash.yearly12.99":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2024-01-07T09:26:18Z","store":"app_store","id":"17459f5ff7","store_transaction_id":"340001090153249"}}');
  }
  $done({body});
};

subscriber();
