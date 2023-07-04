
window.addEventListener("load", cby, false);

function cby() {
    // .ytp-next-buttonの読み込み完了後に動作させる(ページ開いてから再読み込みしないと動作しなかった為記述)
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    function jsLoaded() {
        if (document.querySelector('.ytp-next-button') != null) {
            clearInterval(jsInitCheckTimer);
        };
        chrome.storage.sync.get(null, (options) => {
            Object.entries(options).forEach((a) => {
                if (a[0] === "autonav"){
                    if (a[1]) {
                        try{
                            document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.add( "hiddenControls" );
                            document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.remove( "showControls" );
                        } catch(e) {
                            return null;
                        }
                    } else {
                        try{
                            document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.add( "showControls" );
                            document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.remove( "hiddenControls" );
                        } catch(e) {
                            return null;
                        }
                    }
                } else {
                    if (a[1]) {
                        try{
                            document.querySelector('.ytp-' + a[0] + '-button').classList.add( "hiddenControls" );
                            document.querySelector('.ytp-' + a[0] + '-button').classList.remove( "showControls" );
                        } catch(e) {
                            return null;
                        }
                    } else {
                        try{
                            document.querySelector('.ytp-' + a[0] + '-button').classList.add( "showControls" );
                            document.querySelector('.ytp-' + a[0] + '-button').classList.remove( "hiddenControls" );
                        } catch(e) {
                            return null;
                        }
                    }
                }
            });
        });
    };
};