
let subscriber = () => {
  var body = String($response.body);
  let url = $request.url;
  if (url.endsWith("offerings")) {
  	$done({body});
  	return;
  }
  let headers = $request.headers;
  let userAgent = headers['user-agent'] || headers['User-Agent'];
//   console.log(userAgent);
  if (userAgent.startsWith("mizframa")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"mf_20_lifetime2","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"mf_20_lifetime2":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("Fileball") || userAgent.startsWith("Filebox")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"filebox_pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("aptv")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.kimen.aptvpro.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.kimen.aptvpro.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  }
  $done({body});
};

subscriber();
