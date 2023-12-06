let headers = $request.headers;
headers['x-revenuecat-etag'] = '';
$done({headers});