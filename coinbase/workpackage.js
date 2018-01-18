/**
global variable

*/
var ds=$$(".ProductSelectionItem_price_sn2Ut");
var lableContainner = $(".MarketInfo_market-info_3lkUj");

/**
create html lable, the lable will update automaticaly
*/
var description = "ETH ratio";
var li = createLabel(2.477, description);
lableContainner.appendChild(li);
var testId = setInterval(htmlupdate.bind(null, ds, description), 1000);




/**
two function can be called:
e2blong
e2b

*/

var refreshIntervalId = setInterval(e2b.bind(null, ds), 1000);
var refreshIntervalId = setInterval(e2blong.bind(null, ds), 1000);

/**
price remind
*/

var remindmeId1 = setInterval(checkPriceLess.bind(null, ds,951), 1000);


/**
stop the timmer of running scripts
*/
clearInterval(refreshIntervalId);

clearInterval(remindmeId1 );