const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

// In deployment, put this keys in the .env files
const publicVapidKey = 'BMLUy-CEuTejbRBfCEPchtYLwIR2XS82Go5DF_DQp-aQixOGNYvhV6n7mHEcTHZRUaAuL0yuj5pqtxOR6ONiasc';
const privateVapidKey = '-Hi7K3VYjIKydED9RFGTFYEpOcVBC20fsky5hXUv0kc';

// VapidKeys identify who is sending the push notifications.
webpush.setVapidDetails('mailto: test@test.com', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get PUSH subscription object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json({});

    // Create Payload
    const payload = JSON.stringify({ title: 'Push Test' });

    // Pass object into sendNotification
    webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
})

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));