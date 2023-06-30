chrome.storage.sync.get(null, (options) => {
    Object.entries(options).forEach((a) => {
        if (a[0] === "autonav"){
            if (a[1]) {
                console.log(a[0], "非表示");
                try{
                    document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.add( "hiddenControls" );
                    document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.remove( "showControls" );
                } catch(e) {
                    return null;
                }
            } else {
                console.log(a[0], "表示");
                try{
                    document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.add( "showControls" );
                    document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]').classList.remove( "hiddenControls" );
                } catch(e) {
                    return null;
                }
            }
        } else {
            if (a[1]) {
                console.log(a[0], "非表示");
                try{
                    document.querySelector('.ytp-' + a[0] + '-button').classList.add( "hiddenControls" );
                    document.querySelector('.ytp-' + a[0] + '-button').classList.remove( "showControls" );
                } catch(e) {
                    return null;
                }
            } else {
                console.log(a[0], "表示");
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