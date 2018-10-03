(function () {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 300,
        height: 300
    });

    function makeCode(url) {
        console.log(url);
        qrcode.makeCode(url);
    }

    function getActiveTab() {
        return browser.tabs.query({ active: true, currentWindow: true });
    }

    getActiveTab().then((tabs) => {
        console.log(tabs[0].url);
        document.getElementById('current-url').innerHTML = tabs[0].url
        makeCode(tabs[0].url);
    });
})();