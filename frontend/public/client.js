const PUBLIC_VAPID_KEY =
  "BNIi4HYbIShAxUIHIh70I9cMOkOUZZ4shJOcLGv6b_n28XjsQsKuzmk-kYRSUrvTWj3x-CwMzix-P5GP-LWaEpo";

if ("serviceWorker" in navigator) {
  send().catch((error) => {
    console.error(error);
  });
}

async function send() {
  const register = await navigator.serviceWorker.register(
    "/service-worker.js",
    {
      scope: "/",
    }
  );

  const subscription = register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: PUBLIC_VAPID_KEY,
  });

  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
  console.log("Push sent");
}
