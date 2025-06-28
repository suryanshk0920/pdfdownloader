document.getElementById("downloadBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "download_latest_pdf" });
});
