chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("selectin");

    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.executeScript(tab.id, {code: 'window.ZRLIFY();'},
                function(response) {
                    console.log(response);
                })
    });
});
