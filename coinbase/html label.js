/** create a html dom node example
<li class="MarketInfo_price-down_K3YvV">
<h4 class="MarketInfo_market-stat_2xWig">
<span class="MarketInfo_market-num_1lAXs"></span>
<span class="MarketInfo_market-num_1lAXs">-8.86 %</span>
<span class="MarketInfo_market-descr_2lp4B">24 hour price</span>
</h4></li>



*/

var mi=$$(".ProductSelectionItem_price_sn2Ut");


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

var li = createLabel(2.477, "ETH ratio");
$(".MarketInfo_market-info_3lkUj").appendChild(li);

var description = "ETH ratio";
var mi=$$(".ProductSelectionItem_price_sn2Ut");
var htmlupdate=function(mi, description) {
var ele = document.getElementById(description+"_id");
ele.innerHTML =Number.parseFloat((mi[4].innerHTML.substring(1)/mi[0].innerHTML.substring(1) - mi[5].innerHTML.substring(1))*10000).toPrecision(4);
};
var testId = setInterval(htmlupdate.bind(null, mi, description), 1000);