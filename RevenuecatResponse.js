
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
  if (userAgent.startsWith("fileball") || userAgent.startsWith("filebox")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"filebox_pro":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("aptv")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.kimen.aptvpro.lifetime","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"com.kimen.aptvpro.lifetime":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } else if (userAgent.startsWith("tevegram")) {
  	body = body.replace('"entitlements":{},','"entitlements":{"Premium access":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"lifetime_unlock","purchase_date":"2023-01-07T09:26:18Z"}},');
  	body = body.replace('"non_subscriptions":{},','"non_subscriptions":{"lifetime_unlock":[{"is_sandbox":false,"original_purchase_date":"2021-09-01T12:00:00Z","purchase_date":"2021-09-01T12:00:00Z","store":"app_store"}]},');
  } 
  $done({body});
};

subscriber();
