document.querySelectorAll(".hiddenButton").forEach((elm) => {
    elm.addEventListener("click", (e) => {
        // データの取得
        chrome.storage.sync.get(null, function (options) {
            // 初回はデータが存在しないため新たに作成する
            if (typeof options.hiddenRemote === "undefined") {
                console.log("hiddenRemote 空");
                options.hiddenRemote = true;
            } else if (options.hiddenRemote) {
                console.log("hiddenRemote true => false");
                options.hiddenRemote = false;
            } else {
                console.log("hiddenRemote false => true");
                options.hiddenRemote = true;
            }
            // 保存
            chrome.storage.sync.set(options);
        });
    });
});