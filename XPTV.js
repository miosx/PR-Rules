
let userInfo = () => {
  var body = String($response.body);
  body = body.replace(/"code":\s*\d+/i,'"code": 0');
  body = body.replace(/"status":\s*\d+/i,'"status": 0');
//   console.log(body);
  $done({body});
};

userInfo();
