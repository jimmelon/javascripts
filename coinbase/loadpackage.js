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
	return [price.BCH.price.BTCRATIO, price.ETH.price.BTCRATIO,price.LTC.price.BTCRATIO];
}

var threePressure=function(){
	var price = getPrice(ds);
	return [price.BCH.price.pressure, price.ETH.price.pressure,price.LTC.price.pressure];
}

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

