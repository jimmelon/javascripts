var mi=$$(".ProductSelectionItem_price_sn2Ut");

var e2blong=function(mi) {
	console.log([new Date().getSeconds(),"ETH=".concat(mi[4].innerHTML.substring(1)),
	"BTC=".concat(mi[0].innerHTML.substring(1)),
	"ratio=".concat(Number.parseFloat(mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1)).toPrecision(4)),
	Number.parseFloat(mi[5].innerHTML.substring(1)).toPrecision(4),
	Number.parseFloat((mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1) - mi[5].innerHTML.substring(1))*10000).toPrecision(4)]);
};


var e2b=function(mi) {
	console.log([new Date().getSeconds(),mi[4].innerHTML.substring(1),
	mi[0].innerHTML.substring(1),
	Number.parseFloat(mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1)).toPrecision(4),
	Number.parseFloat(mi[5].innerHTML.substring(1)).toPrecision(4),
	Number.parseFloat((mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1) - mi[5].innerHTML.substring(1))*10000).toPrecision(4)]);
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

var htmlupdate=function(mi, description) {
	var ele = document.getElementById(description+"_id");
	ele.innerHTML =Number.parseFloat((mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1) - mi[5].innerHTML.substring(1))*10000).toPrecision(4);
};


//Price reminder
var checkPriceLess=function(mi,target) {
	if (Number.parseFloat(mi[4].innerHTML.substring(1))<=target) {console.log("bear ".concat(target))}
}

var checkPriceGreat=function(mi,target) {
	if (Number.parseFloat(mi[].innerHTML.substring(1))>=target) {console.log("bull ".concat(target))}
}

