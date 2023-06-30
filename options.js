document.querySelectorAll(".hiddenButton").forEach((elm) => {
    
    // データの取得
    chrome.storage.sync.get(null, function (options) {
        let hiddenItem = elm.value;
        console.log(hiddenItem, options[hiddenItem]);
        
        // ボタンの文字変更
        if (typeof options[hiddenItem] === "undefined") {
            elm.textContent = "Unspecified";
        } else if (options[hiddenItem]) {
            elm.textContent = "hidden";
        } else {
            elm.textContent = "show";
        }
    });

    // 表示・非表示ボタン　クリックイベント
    elm.addEventListener("click", (e) => {

        // データの取得
        chrome.storage.sync.get(null, function (options) {
            let hiddenItem = elm.value;

            // 初回はデータが存在しないため新たに作成する
            if (typeof options[hiddenItem] === "undefined") {
                console.log(hiddenItem, "undefined => true");
                options[hiddenItem] = true;
                elm.textContent = "hidden";
            } else {
                // 真偽値反転
                options[hiddenItem] = !options[hiddenItem];
                
                // ボタンの文字変更
                if(options[hiddenItem]) {
                    elm.textContent = "hidden";
                } else {
                    elm.textContent = "show";
                }
            }

            // 保存
            chrome.storage.sync.set(options);
        });
    });
});