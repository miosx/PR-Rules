
let userInfo = () => {
	var body = String($response.body);
	var obj = JSON.parse(body);
	let bundle_id = obj?.receipt?.bundle_id;
	var product_id = "";
	var bFound = false;
	var lifetime = false;
	if (bundle_id == "dev.sanjin.WasteCat") {
		bFound = true;
		lifetime = true;
		product_id = "dev.sanjin.WasteCat.PermanentVip";
	} else if (bundle_id == "co.vulcanlabs.moodtracker") {
		bFound = true;
		lifetime = true;
		product_id = "co.vulcanlabs.moodtracker.lifetime3";
	} else if (bundle_id == "com.CalculatorForiPad.InternetRocks") {
		bFound = true;
		lifetime = false;
		product_id = "co.airapps.calculator.year";
	} else if (bundle_id == "com.zerone.hidesktop") {
		bFound = true;
		lifetime = true;
		product_id = "com.zerone.hidesktop.forever4";
	} else if (bundle_id == "com.iuuapp.audiomaker") {
		bFound = true;
		lifetime = true;
		product_id = "com.iuuapp.audiomaker.removeads";
	} else if (bundle_id == "me.imgbase.intolive") {
		bFound = true;
		lifetime = true;
		product_id = "me.imgbase.intolive.profeaturesNow";
	} else if (bundle_id == "com.youthpe.retake") {
		bFound = true;
		lifetime = true;
		product_id = "retake_unlock_forever";
	} else if (bundle_id == "com.funsapps.videoplayer") {
		bFound = true;
		lifetime = true;
		product_id = "VideoPlayer_ProVersion";
	} else if (bundle_id == "sute.xfuse.ipados") {
		bFound = true;
		lifetime = true;
		product_id = "com.xfuse.ProVision";
	} else if (bundle_id == "com.cz.DSCloudStorage") {
		bFound = true;
		lifetime = true;
		product_id = "dscloudalllife";
	} else if (bundle_id == "com.lm.william.TwinklingCard") {
		bFound = true;
		lifetime = true;
		product_id = "com.lm.william.TwinklingCard.lifelong";
	} else if (bundle_id == "com.lxm.ysbrowser") {
		bFound = true;
		lifetime = true;
		product_id = "com.ys.pro";
	} else if (bundle_id == "com.byteapp.tubepod") {
		bFound = true;
		lifetime = true;
		product_id = "com.byteapp.tubepod.lifetime";
	} else if (bundle_id == "com.bvp.slomovideo") {
		bFound = true;
		lifetime = false;
		product_id = "com.bvp.slomovideo.year";
	} else if (bundle_id == "com.von.TPlan") {
		bFound = true;
		lifetime = true;
		product_id = "top.tlien.today.vip";
	} else if (bundle_id == "com.frank.ssgjx") {
		bFound = true;
		lifetime = true;
		product_id = "xqgjx_remove_ads_forever";
	} else if (bundle_id == "com.xyStudio.loveRead") {
		bFound = true;
		lifetime = true;
		product_id = "com.xyStudio.loveRead.8vip";
	}
	if (bFound) {
		if (lifetime) {
			obj.receipt.in_app = [{
				"quantity": "1",
				"product_id": product_id,
				"transaction_id": "190001561723870",
				"original_transaction_id": "190001561723870",
				"purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"purchase_date_ms": "1748076770000",
				"purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"original_purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"original_purchase_date_ms": "1748076770000",
				"original_purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"web_order_line_item_id": "190000699575418",
				"is_trial_period": "false",
				"is_in_intro_offer_period": "false",
				"in_app_ownership_type": "PURCHASED"
			}];
			obj.latest_receipt_info = [{
				"quantity":"1",
				"product_id":product_id,
				"transaction_id":"1190000046963254",
				"original_transaction_id":"1190000046963254",
				"purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"purchase_date_ms": "1748076770000",
				"purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"original_purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"original_purchase_date_ms": "1748076770000",
				"original_purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"web_order_line_item_id":"1190000022600163",
				"is_trial_period":"false",
				"is_in_intro_offer_period":"false",
				"in_app_ownership_type":"PURCHASED",
				"subscription_group_identifier": "20448621"
			}];
			obj.pending_renewal_info = [{
				"auto_renew_product_id": product_id,
				"product_id": product_id,
				"original_transaction_id": "1190000046963254",
				"auto_renew_status": "1"
			}];
		}
		else {
			obj.receipt.in_app = [{
				"quantity":"1",
				"product_id":product_id,
				"transaction_id":"1190000046963254",
				"original_transaction_id":"1190000046963254",
				"purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"purchase_date_ms": "1748076770000",
				"purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"original_purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"original_purchase_date_ms": "1748076770000",
				"original_purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"expires_date":"2033-05-18 03:33:19 Etc/GMT",
				"expires_date_ms":"1999999999000",
				"expires_date_pst":"2033-05-17 20:33:19 America/Los_Angeles",
				"web_order_line_item_id":"1190000022600163",
				"is_trial_period":"false",
				"is_in_intro_offer_period":"false",
				"in_app_ownership_type":"PURCHASED"
			}];
			obj.latest_receipt_info = [{
				"quantity":"1",
				"product_id":product_id,
				"transaction_id":"1190000046963254",
				"original_transaction_id":"1190000046963254",
				"purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"purchase_date_ms": "1748076770000",
				"purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"original_purchase_date": "2025-05-24 08:52:50 Etc/GMT",
				"original_purchase_date_ms": "1748076770000",
				"original_purchase_date_pst": "2025-05-24 01:52:50 America/Los_Angeles",
				"expires_date":"2033-05-18 03:33:19 Etc/GMT",
				"expires_date_ms":"1999999999000",
				"expires_date_pst":"2033-05-17 20:33:19 America/Los_Angeles",
				"web_order_line_item_id":"1190000022600163",
				"is_trial_period":"false",
				"is_in_intro_offer_period":"false",
				"in_app_ownership_type":"PURCHASED",
				"subscription_group_identifier": "20448621"
			}];
			obj.pending_renewal_info = [{
				"auto_renew_product_id": product_id,
				"product_id": product_id,
				"original_transaction_id": "1190000046963254",
				"auto_renew_status": "1"
			}];
		}	
		body = JSON.stringify(obj);
	}
	$done({body});
};

userInfo();