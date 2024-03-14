// if('serviceWorker' in navigator) {
//     registerServiceWorker().catch(console.log)
// }
document.getElementById("clickMe").onclick
document.getElementById("clickMe").onclick = function () {
    registerServiceWorker().catch(console.log)
};

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });

    await fetch("/subscribeGo", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        }
    })
}