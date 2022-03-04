if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

// if (window.location.protocol === "http:") {
//   const requireHTTPS = document.getElementById("requireHTTPS");
//   const link = requireHTTPS.querySelector("a");
//   link.href = window.location.href.replace("http://", "https://");
//   requireHTTPS.classList.remove("hidden");
// }

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile.
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container.
  //divInstall.classList.toggle("hidden", false);
});

document.body.addEventListener("click", async (event) => {
  // only if the add to home button is clicked.
  if (event.target.id === "add-to-home") {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    event.target.disabled = true;
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);

    event.target.disabled = false;
    window.deferredPrompt = null;
    event.target.classList.toggle("hidden", true);
  }
});

window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});
