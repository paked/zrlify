// Run zrlify when the popup icon is pressed.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.executeScript(tab.id, {code: 'window.ZRLIFY();'},
                function(response) {
                    console.log(response);
                })
    });
});
