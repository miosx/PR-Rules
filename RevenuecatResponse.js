
let subscriber = () => {
  var body = String($response.body);
  let url = $request.url;
  if (url.endsWith("offerings")) {
  	$done({body});
  	return;
  }
  let headers = $request.headers;
  var userAgent = headers['user-agent'] || headers['User-Agent'];
  userAgent = userAgent.toLowerCase();
//   console.log(userAgent);
  if (userAgent.startsWith("mizframa")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"mf_20_lifetime2","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"mf_20_lifetime2":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("fileball") || userAgent.startsWith("filebox")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"filebox_pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("aptv")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.kimen.aptvpro.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.kimen.aptvpro.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("pastepal")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.onmyway133.PastePal.pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.onmyway133.PastePal.pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("shellboxkit")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"ShellBoxKit.Lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"ShellBoxKit.Lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("browser")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"pro_zoomable","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"pro_zoomable":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("tqbrowser")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro_lt":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.tk.client.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.tk.client.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("picseedclient")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Pro":{"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"product_identifier":"com.picseed.sub.pro.annual","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"subscriptions":{}','"subscriptions":{"com.picseed.sub.pro.annual":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2033-05-18T03:33:19Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2023-01-07T09:26:21Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2023-01-07T09:26:18Z","store":"app_store","store_transaction_id":"190001505827904"}}');
  }
  $done({body});
};

subscriber();
