// content.js



// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});

function $(s){return document.querySelector(s);}
function $$(s){return document.querySelectorAll(s);}
var Coins = Object.freeze({"BTC":1, "BCH":2, "ETH":3,"LTC":4});
var Currency= Object.freeze({"USD":1, "BTC":2});
var previous={"time":snapStamp,"ratio":priviousRatio,"USD":PriviousUSD,"P":previousPressure};previous;
var current={"ctime":currentStamp,"cratio":currentRatio,"cUSD":currentUSD,"cP":currentPressure};current;
