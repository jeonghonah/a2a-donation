(async () => {
    const { prepare, request } = klipSDK

    const urlParams = new URLSearchParams(window.location.search);
    const bappName = urlParams.get('name');
    const to = urlParams.get('to');
    const amount = urlParams.get('amount');

    let request_key

    try {
        ({ request_key } = await prepare.sendKLAY({ bappName, to, amount }))
    } catch (err) {
        console.error(err)
        return
    }

    const showQRCode = () => {
        document.getElementById("container").style.visibility = "visible";
        var qrcode = new QRCode("qrcode");
        qrcode.makeCode("https://klipwallet.com/?target=/a2a?request_key="+request_key)
    }

    request(request_key, showQRCode)
})()
