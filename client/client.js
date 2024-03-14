const publicVapidKey = "BK7CGic4mFr8cu9V4LPFGSk6V5ZBw9NpKmxQla8JieIEkbn5wQYkBMGbHtNEzoxJeI-eMRe9jp09ND9rmBS_MBQ";
// if('serviceWorker' in navigator) {
//     registerServiceWorker().catch(console.log)
// }
registerServiceWorker().catch(console.log)

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });

    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        }
    })
}