// Frida snippet to bypass mcdonalds' app SSL certificate transparency.
// But does not bypasses integrity check and SSL verification.
// method com.tw1.intercept

// Decompiled java code
// if ((wdgVar instanceof tdg) && this.g) {
    // throw new SSLPeerUnverifiedException("Certificate transparency failed");
// }


Java.perform(() => {
    let tw1 = Java.use("com.tw1");
    tw1["intercept"].implementation = function (chain) {
        if (this['g'].value){
            this['g'].value = false;
        }
        let result = this["intercept"](chain);
        return result;
    };
});