const { prepare, request } = klipSDK

(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bappName = urlParams.get('name');
    const to = urlParams.get('to');
    const amount = urlParams.get('amount');

    try {
        const { request_key } = await prepare.sendKLAY({ bappName, to, amount })
        request(request_key)
    } catch (err) {
        console.error(err)
    }
})()
