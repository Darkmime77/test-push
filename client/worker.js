console.log("Service worker loaded...");

self.addEventListener('push', function(e) {
    const data = e.data.json();
    console.log(data)
    self.registration.showNotification(
        data.title,
        {
            body: data.body,
        }
    );
})