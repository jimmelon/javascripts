// JavaScript Document
//Indicated ETH/BTC
var mi=$$(".ProductSelectionItem_price_sn2Ut");
var e2b=function(mi) {
console.log([new Date().getSeconds(),"ETH=".concat(mi[4].innerHTML.substring(1)),
"BTC=".concat(mi[0].innerHTML.substring(1)),
"ratio=".concat(Number.parseFloat(mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1)).toPrecision(4)),
Number.parseFloat(mi[5].innerHTML.substring(1)).toPrecision(4),
Number.parseFloat((mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1) - mi[5].innerHTML.substring(1))*10000).toPrecision(4)]);
};
var refreshIntervalId = setInterval(e2b.bind(null, mi), 1000);
//No Indicated ETH/BTC
var mi=$$(".ProductSelectionItem_price_sn2Ut");
var e2b=function(mi) {
console.log([new Date().getSeconds(),mi[4].innerHTML.substring(1),
mi[0].innerHTML.substring(1),
Number.parseFloat(mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1)).toPrecision(4),
Number.parseFloat(mi[5].innerHTML.substring(1)).toPrecision(4),
Number.parseFloat((mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1) - mi[5].innerHTML.substring(1))*10000).toPrecision(4)]);
};
var refreshIntervalId = setInterval(e2b.bind(null, mi), 1000);
var refreshIntervalId = setInterval(e2b.bind(null, mi), 1000);
clearInterval(refreshIntervalId);
//_______________________________________________________
//Price reminder
var checkPriceLess=function(mi,target) {
	if (Number.parseFloat(mi[4].innerHTML.substring(1))<=target) {console.log("bear ".concat(target))}
}
var remindmeId1 = setInterval(checkPriceLess.bind(null, mi,951), 1000);
clearInterval(remindmeId1 );
var checkPriceGreat=function(mi,target) {
	if (Number.parseFloat(mi[].innerHTML.substring(1))>=target) {console.log("bull ".concat(target))}
}
var remindmeId2 = setInterval(checkPriceGreat.bind(null, mi,0.085), 1000);
clearInterval(remindmeId2 );