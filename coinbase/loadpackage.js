var ds=$$(".ProductSelectionItem_price_sn2Ut");
var lableContainner = $(".MarketInfo_market-info_3lkUj");


var getPrice=function(ds){
	
	var Coin={
	BTC:{
		price:{ USD:ds[0].innerHTML.substring(1),
				BTC:1
				}
	},
	BCH:{
		price:{USD:ds[3].innerHTML.substring(1),
				BTC:ds[4].innerHTML.substring(1),
				BTCRATIO: ds[3].innerHTML.substring(1)/ds[0].innerHTML.substring(1),
				pressure: (ds[3].innerHTML.substring(1)/ds[0].innerHTML.substring(1)-ds[4].innerHTML.substring(1))*10000
		}
	},
	ETH:{
		price:{	USD:ds[5].innerHTML.substring(1),
				BTC:ds[6].innerHTML.substring(1),
				BTCRATIO: ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1),
				pressure: (ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1)-ds[6].innerHTML.substring(1))*10000
		}
	},
	LTC:{
		price:{	USD:ds[8].innerHTML.substring(1),
				BTC:ds[9].innerHTML.substring(1),
				BTCRATIO: ds[8].innerHTML.substring(1)/ds[0].innerHTML.substring(1),
				pressure: (ds[8].innerHTML.substring(1)/ds[0].innerHTML.substring(1)-ds[9].innerHTML.substring(1))*10000
		}
	},
	EOS:{}
}
	return Coin;
}

var threeRatio=function(){
	var price = getPrice(ds);
	return [1,price.BCH.price.BTC, price.ETH.price.BTC,price.LTC.price.BTC];
}

var threePressure=function(){
	var price = getPrice(ds);
	return [0,price.BCH.price.pressure, price.ETH.price.pressure,price.LTC.price.pressure];
}

var threeUSD=function(){
	var price = getPrice(ds);
	return [price.BTC.price.USD, price.BCH.price.USD, price.ETH.price.USD,price.LTC.price.USD];
}

var snapStamp,priviousRatio,PriviousUSD,previousPressure;
var currentStamp,currentRatio,currentUSD,currentPressure;
var SnapshotPrice=function()
{
	snapStamp=Date.now();
	priviousRatio=threeRatio();
	PriviousUSD=threeUSD();
	previousPressure=threePressure();
}
var currentPrice=function()
{
	currentStamp=Date.now();
	currentRatio=threeRatio();
	currentUSD=threeUSD();
	currentPressure=threePressure();
}
var previous={"time":snapStamp,"ratio":priviousRatio,"USD":PriviousUSD,"P":previousPressure};previous;
currentPrice();var current={"ctime":currentStamp,"cratio":currentRatio,"cUSD":currentUSD,"cP":currentPressure};current;
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
	currentPrice();
	
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




//old
var b2blong=function(ds) {
	console.log([new Date().getSeconds(),"ETH=".concat(ds[3].innerHTML.substring(1)),
	"BTC=".concat(ds[0].innerHTML.substring(1)),
	"ratio=".concat(Number.parseFloat(ds[3].innerHTML.substring(1)/ds[0].innerHTML.substring(1)).toPrecision(4)),
	Number.parseFloat(ds[4].innerHTML.substring(1)).toPrecision(4),
	Number.parseFloat((ds[3].innerHTML.substring(1)/ds[0].innerHTML.substring(1) - ds[4].innerHTML.substring(1))*10000).toPrecision(4)]);
};


var e2blong=function(ds) {
	console.log([new Date().getSeconds(),"ETH=".concat(ds[5].innerHTML.substring(1)),
	"BTC=".concat(ds[0].innerHTML.substring(1)),
	"ratio=".concat(Number.parseFloat(ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1)).toPrecision(4)),
	Number.parseFloat(ds[6].innerHTML.substring(1)).toPrecision(4),
	Number.parseFloat((ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1) - ds[6].innerHTML.substring(1))*10000).toPrecision(4)]);
};


var e2b=function(ds) {
	console.log([new Date().getSeconds(),ds[5].innerHTML.substring(1),
	ds[0].innerHTML.substring(1),
	Number.parseFloat(ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1)).toPrecision(4),
	Number.parseFloat(ds[6].innerHTML.substring(1)).toPrecision(4),
	Number.parseFloat((ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1) - ds[6].innerHTML.substring(1))*10000).toPrecision(4)]);
};

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
			var node = document.createTextNode(description);
			sp2.appendChild(node);
		h4.appendChild(sp1);
		h4.appendChild(sp2);
	
	li.appendChild(h4);
	return li;
}

var htmlupdate=function(ds, description) {
	var ele = document.getElementById(description+"_id");
	ele.innerHTML =Number.parseFloat((ds[5].innerHTML.substring(1)/ds[0].innerHTML.substring(1) - ds[6].innerHTML.substring(1))*10000).toPrecision(4);
};


//Price redsnder
var checkPriceLess=function(ds,target) {
	if (Number.parseFloat(ds[5].innerHTML.substring(1))<=target) {console.log("bear ".concat(target))}
}

var checkPriceGreat=function(ds,target) {
	if (Number.parseFloat(ds[5].innerHTML.substring(1))>=target) {console.log("bull ".concat(target))}
}

