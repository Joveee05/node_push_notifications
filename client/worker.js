console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by me!",
    icon: "https://pisqre-app-4m3x3.ondigitalocean.app/img/users/default.jpg",
  });
});
