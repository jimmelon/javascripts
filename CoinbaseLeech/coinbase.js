function $(s){return document.querySelector(s);}
function $$(s){return document.querySelectorAll(s);}

var Coins = Object.freeze({"BTC":1, "BCH":2, "ETH":3,"LTC":4});
var Currency= Object.freeze({"USD":1, "BTC":2});

var previous={"time":snapStamp,"ratio":priviousRatio,"USD":PriviousUSD,"P":previousPressure};previous;
var current={"ctime":currentStamp,"cratio":currentRatio,"cUSD":currentUSD,"cP":currentPressure};current;

function test(){

	alert("hello world");
}

//test();

var selectcointype=function(coin,type){	
	$("li.ProductSelection_choose-product_3ZOjB > ul > li:nth-child("+coin+") > ul > li:nth-child("+type+") > a").click();
	$("li.ProductSelection_choose-product_3ZOjB").setAttribute("class", "ProductSelection_choose-product_3ZOjB");//remove popup
	$("form > ul.OrderForm_trade-type_2QyK4 > li:nth-child(2)").click();
	return $("li.ProductSelection_choose-product_3ZOjB > ul > li:nth-child("+coin+") > ul > li:nth-child("+type+") > a");
}

var buysellcoin=function(coin,type,amount, margin= 0.01,real=false)
{
	selectcointype(coin,type);
	
	var price=_get_current_price(coin,type);
	if(type==Currency.BTC){
		margin = 0.00001;	
	}
	
	if(amount > 0)
	{
		price=parseFloat(price)- parseFloat(margin);
		//$("form > ul.OrderForm_toggle_120Ka > li.OrderForm_toggle-tab_bZZnC.OrderForm_buy_38n5g").click()
	}else{//for sell
		$("form > ul.OrderForm_toggle_120Ka > li.OrderForm_toggle-tab_bZZnC.OrderForm_sell_3vYRQ").click();
		amount=Math.abs(amount);
		price=parseFloat(price)+ parseFloat(margin);
	}
	
	$('form > div.limit-order > div > div.OrderForm_input-box_XkGmi > input[name="amount"]').value=amount;
	//make sure post only
	//$("form > div.limit-order > div:nth-child(3) > div.OrderForm_toggle_120Ka.OrderForm_small_3d6oD > div.OrderForm_toggle-tab_bZZnC.OrderForm_active_Di-9p").click();
	$("form > div.limit-order > div:nth-child(3) > div.OrderForm_toggle_120Ka.OrderForm_small_3d6oD > div:nth-child(1)").click();
	//$("form > div.limit-order > div:nth-child(3) > div.OrderForm_toggle_120Ka.OrderForm_small_3d6oD > div:nth-child(2)").click();
	
	if(price>0)
	{	price = (parseFloat( price).toPrecision(6));
		$('form > div.limit-order > div:nth-child(2) > div.OrderForm_input-box_XkGmi > input[type="number"]').value=price;	
	}else{
		console.log(price);
	}
	
	if(real)
	$("form > button").click();

}

function _get_current_price(coin,type){
	var price,prices = getPrice(ds);
	
	switch(coin) {
    case Coins.BTC:
		switch(type) {
			case Currency.USD:
				price=prices.BTC.USD;
				break;
			default:
				price=0;
			}
        break;
    case Coins.BCH:
		switch(type) {
			case Currency.USD:
				price=prices.BCH.USD;
				break;
			case Currency.BTC:
				price=prices.BCH.BTC;
				break;
			default:
				price=0;
			}
        break;
    case Coins.ETH:
		switch(type) {
			case Currency.USD:
				price=prices.ETH.USD;
				break;
			case Currency.BTC:
				price=prices.ETH.BTC;
				break;
			default:
				price=0;
			}
		break;
	case Coins.LTC:
		switch(type) {
			case Currency.USD:
				price=prices.LTC.USD;
				break;
			case Currency.BTC:
				price=prices.LTC.BTC;
				break;
			default:
				price=0;
			}
		break;
	default:
		price=0;
	}
	return price;
	
}

var getPrice=function(){
	ds=$$(".ProductSelectionItem_price_sn2Ut");

	if (typeof ds[0] === "undefined") return;

	return {
		BTC:{
				USD:ds[0].innerHTML.substring(1),
				BTC:1		
		},
		BCH:{
			USD:ds[3].innerHTML.substring(1),
			BTC:ds[4].innerHTML.substring(1),
			BTCRATIO: ds[3].innerHTML.substring(1)/ds[0].innerHTML.substring(1),
			pressure: (ds[3].innerHTML.substring(1)/ds[0].innerHTML.substring(1)-ds[4].innerHTML.substring(1))*10000
			
		},
		ETH:{
			USD:ds[6].innerHTML.substring(1),
			BTC:ds[7].innerHTML.substring(1),
			BTCRATIO: ds[6].innerHTML.substring(1)/ds[0].innerHTML.substring(1),
			pressure: (ds[6].innerHTML.substring(1)/ds[0].innerHTML.substring(1)-ds[7].innerHTML.substring(1))*10000
			
		},
		LTC:{
			USD:ds[9].innerHTML.substring(1),
			BTC:ds[10].innerHTML.substring(1),
			BTCRATIO: ds[9].innerHTML.substring(1)/ds[0].innerHTML.substring(1),
			pressure: (ds[9].innerHTML.substring(1)/ds[0].innerHTML.substring(1)-ds[10].innerHTML.substring(1))*10000
			
		},
		EOS:{}
	}

}

var totalasset=function()
{
	
	var prices = getPrice(ds);
	$("#page_content > div > div.Navbar_nav-wrapper_3F-kP > div > div.AccountPanel_account-panel_2u2aK > nav > div > ul > li:nth-child(2) > a").click();

	var usd=$("#page_content > div > div.Accounts_accounts_MxWwa > aside > div > div > ul > li:nth-child(1) > a > div > h5:nth-child(2) > span:nth-child(3)").innerHTML;
	var eth=$("#page_content > div > div.Accounts_accounts_MxWwa > aside > div > div > ul > li:nth-child(2) > a > div > h5:nth-child(2) > span:nth-child(3)").innerHTML;
	var bch=$("#page_content > div > div.Accounts_accounts_MxWwa > aside > div > div > ul > li:nth-child(3) > a > div > h5:nth-child(2) > span:nth-child(3)").innerHTML;
	var ltc=$("#page_content > div > div.Accounts_accounts_MxWwa > aside > div > div > ul > li:nth-child(4) > a > div > h5:nth-child(2) > span:nth-child(3)").innerHTML;
	var btc=$("#page_content > div > div.Accounts_accounts_MxWwa > aside > div > div > ul > li:nth-child(5) > a > div > h5:nth-child(2) > span:nth-child(3)").innerHTML;
	console.log([usd,btc,bch,eth,ltc]);
	console.log([1,prices.BTC.USD,prices.BCH.USD,prices.ETH.USD,prices.LTC.USD]);
	
	var usdusd = 1 * usd;
	var ethusd = eth * prices.ETH.USD;
	var bchusd = bch * prices.BCH.USD;
	var ltcusd = ltc * prices.LTC.USD;
	var btcusd = btc * prices.BTC.USD;
	console.log([usdusd,ethusd,bchusd,ltcusd,btcusd]);
	
	console.log(parseFloat(usdusd)+parseFloat(ethusd)+parseFloat(bchusd)+parseFloat(ltcusd)+parseFloat(btcusd));
	
	
}
var threeRatio=function(price){
	return [1,price.BCH.BTC, price.ETH.BTC,price.LTC.BTC];
}

var threePressure=function(price){
	return [0,price.BCH.pressure, price.ETH.pressure,price.LTC.pressure];
}

var threeUSD=function(price){
	return [price.BTC.USD, price.BCH.USD, price.ETH.USD,price.LTC.USD];
}
var threeBTCRATIO=function(price){
	return [1, price.BCH.BTCRATIO, price.ETH.BTCRATIO,price.LTC.BTCRATIO];
}

var snapStamp,priviousRatio,PriviousUSD,previousPressure, previousBTCRATIO;
var currentStamp,currentRatio,currentUSD,currentPressure, currentBTCRATIO;
var SnapshotPrice=function(price)
{
	snapStamp=Date.now();
	priviousRatio=threeRatio(price);
	PriviousUSD=threeUSD(price);
	previousPressure=threePressure(price);
	previousBTCRATIO=threeBTCRATIO(price);

}
var currentPrice=function(price)
{
	currentStamp=Date.now();
	currentRatio=threeRatio(price);
	currentUSD=threeUSD(price);
	currentPressure=threePressure(price);
	currentBTCRATIO=threeBTCRATIO(price);
}
var checkProfile=function(index){
	
	var currencyType;
	switch(index) {
    case 1:
		currencyType="BCH";
        console.log("check ---------------------------------> BCH");
        break;
    case 2:
		currencyType="ETH";
        console.log("check  ---------------------------------> ETH");
        break;
    case 3:
		currencyType="LTC";
        console.log("check  ---------------------------------> LTC");
		break;
	default:
		console.log("wrong parameter");
	}

	var startAmount=1000, endAmount, deltaUSD=0.01, deltaRatio=0.0001;
	//currentPrice();
	
	//todo check time being
	
	//todo post your deal with +0.01 or -0.001
	
	//USD->BTC->ETH/BTC->ETH->USD
	if(previousPressure[index] > 0)
	{
		console.log("try buy BTC--->");
		//     <<>
		if(currentUSD[0]<PriviousUSD[0]){console.log("success buy BTC");}else if(currentUSD[0]==PriviousUSD[0]){console.log("wait BTC lower")}else{console.log({cur:currentUSD[0],o:">",pre:PriviousUSD[0]});}//buy
		if(currentRatio[index]<priviousRatio[index]){console.log("success buy Ratio");}else if(currentRatio[index]==priviousRatio[index]){console.log("wait ratio lower")}else{console.log({cur:currentRatio[index],o:">",pre:priviousRatio[index]});}//buy
		if(currentUSD[index]>PriviousUSD[index]){console.log("success sell index");}else if(currentUSD[index]==PriviousUSD[index]){console.log("wait "+currencyType+" higher")}else{console.log({cur:currentUSD[index],o:"<",pre:PriviousUSD[index]});}//sell
	
		if(currentUSD[0]<PriviousUSD[0]){//buy BTC
			console.log("1");
			if(currentRatio[index]<priviousRatio[index]){//buy eth --->convert to ETH
				console.log("2");
				if(currentUSD[index]>PriviousUSD[index]){//sell ETH index
					console.log("3");
					checkPossible(startAmount,index,true);
				}
			}
		}
	}else{//USD->ETH>ETH/BTC->BTC->USD
		console.log("try sell --->BTC");

		if(currentUSD[index]<PriviousUSD[index]){console.log("success buy index");}else if(currentUSD[index]==PriviousUSD[index]){console.log("wait "+currencyType+" lower")}else{console.log({cur:currentUSD[index],o:">",pre:PriviousUSD[index]});}//buy
		if(currentRatio[index]>priviousRatio[index]){console.log("success sell Ratio");}else if(currentRatio[index]==priviousRatio[index]){console.log("wait ratio Higher")}else{console.log({cur:currentRatio[index],o:"<",pre:priviousRatio[index]});}//sell
		if(currentUSD[0]>PriviousUSD[0]){console.log("success sell BTC");}else if(currentUSD[0]==PriviousUSD[0]){console.log("wait BTC Higher")}else{console.log({cur:currentUSD[0],o:"<",pre:PriviousUSD[0]});}//sell
		
		if(currentUSD[0]<PriviousUSD[0]){
			console.log("1");
			if(currentRatio[index]>priviousRatio[index]){
				console.log("2");
				if(currentUSD[index]>PriviousUSD[index]){
					console.log("3");
					checkPossible(startAmount,index,false);
				}
			}
		}

	}
	
	
	//USD->ETH>ETH/BTC->BTC->USD
	
}

var  checkPossible=function(startAmount,index,direction){
	var endAmount=0;
	console.log({ coin:currentUSD[index],ratio:currentRatio[index],btc:currentUSD[0] });
	if(direction)
	{
		console.log("USD->ETH>ETH/BTC->BTC->USD");
		endAmount = (((startAmount/currentUSD[index])*currentRatio[index])*currentUSD[0]);
		
		
	}else{
		console.log("USD->BTC->ETH/BTC->ETH->USD");
		endAmount = (((startAmount/currentUSD[0])/currentRatio[index])*currentUSD[index]);
		
	}
	
	console.log([startAmount, endAmount]);
	
}





function createLabel(label, description)
{
	var li=document.createElement("li");
	li.setAttribute('class', "MarketInfo_day-volume_16biA");
	    var h4 = document.createElement("h4");
		h4.setAttribute('class', "MarketInfo_market-stat_2xWig");
			var sp1 = document.createElement("span");
			sp1.setAttribute('class', "MarketInfo_market-num_1lAXs");
			
				var sp1_1 = document.createElement("span");
				sp1_1.setAttribute('class', "MarketInfo_price-up_1nKzy");
				sp1_1.setAttribute('id', description+"_id");
				var node1 = document.createTextNode(label);
				sp1_1.appendChild(node1);
			sp1.appendChild(sp1_1);
			
			var sp2 = document.createElement("span");
			sp2.setAttribute('class', "MarketInfo_market-descr_2lp4B");
			//sp1_1.setAttribute('id', description+"_usd");
			var node = document.createTextNode(description);
			sp2.appendChild(node);
		h4.appendChild(sp1);
		h4.appendChild(sp2);
	
	li.appendChild(h4);
	return li;
}

var htmlupdate=function(ds, description) {
	var ele = document.getElementById(description+"_id");
	ds=$$(".ProductSelectionItem_price_sn2Ut");
	ele.innerHTML =Number.parseFloat((ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1) - ds[6].innerHTML.substring(1))*10000).toPrecision(4);
};


//Price redsnder
var checkPriceLess=function(ds,target) {
	if (Number.parseFloat(ds[5].innerHTML.substring(1))<=target) {console.log("bear ".concat(target))}
}

var checkPriceGreat=function(ds,target) {
	if (Number.parseFloat(ds[5].innerHTML.substring(1))>=target) {console.log("bull ".concat(target))}
}

///-------------------------
var checkCount=0;
///--------------------------
var htmlupdates=function() {
	var ds=$$(".ProductSelectionItem_price_sn2Ut");
	var prices = getPrice();
	
	console.log(prices);
	if (typeof prices === "undefined") return;
	
	currentPrice(prices);
	document.getElementById("bch_ratio_id").innerHTML = Number.parseFloat((prices.BCH.USD/prices.BTC.USD - prices.BCH.BTC)*10000).toPrecision(4);
	document.getElementById("eth_ratio_id").innerHTML = Number.parseFloat((prices.ETH.BTCRATIO - prices.ETH.BTC)*10000).toPrecision(4);
	document.getElementById("ltc_ratio_id").innerHTML = Number.parseFloat(prices.LTC.pressure).toPrecision(4);

	//if (typeof ds === "undefined") return;
	
	if(checkCount%3 ==0) {

		//if(checkCount !=0)checkProfile(2);
		SnapshotPrice(prices);
		checkCount=0;
	}

	checkCount++;

};

var ds=$$(".ProductSelectionItem_price_sn2Ut");
var lableContainner = $(".MarketInfo_market-info_3lkUj");


var li2 = createLabel(1, "bch_ratio");
lableContainner.appendChild(li2);

var li3 = createLabel(2, "eth_ratio");
lableContainner.appendChild(li3);

var li4 = createLabel(3, "ltc_ratio");
lableContainner.appendChild(li4);


//htmlupdates.bind(null,ds)

var testId = setInterval(htmlupdates, 1000);
