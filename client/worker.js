console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Astute Yard!',
        icon: 'https://images.yourstory.com/cs/1/b3cbe640-ab5e-11e8-8691-f70342131e20/pepsilogo1540277695578.png'
    });
});