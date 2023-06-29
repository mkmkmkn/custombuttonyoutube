chrome.storage.sync.get(null, (options) => {
    if (options.hiddenRemote) {
        console.log("キャスト非表示");
        document.querySelector('.ytp-remote-button').classList.add( "hiddenControls" );
    } else {
        console.log("キャスト表示");
        document.querySelector('.ytp-remote-button').classList.remove( "hiddenControls" );
    }
});