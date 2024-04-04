const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
``
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")))


const publicVapidKey = "BK7CGic4mFr8cu9V4LPFGSk6V5ZBw9NpKmxQla8JieIEkbn5wQYkBMGbHtNEzoxJeI-eMRe9jp09ND9rmBS_MBQ";
const privateVapidKey = "atj_ET4xu_QwzlqayLk5qVKAoEqTFaffsq8ttsiuj4U";

webpush.setVapidDetails("mailto:test@test.com", publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });
    webpush.sendNotification(subscription, payload).catch(console.log);
})
app.post('/subscribeGo', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({
        title: "Good",
        body: "Jobs Noise",
    });
    console.log(subscription, payload)
    webpush.sendNotification(subscription, payload).catch(console.log);
})

const PORT = 5001;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})