const btn = document.getElementById("downloadBtn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
  status.textContent = "Looking for PDF...";
  chrome.runtime.sendMessage({ action: "download_latest_pdf" }, (response) => {
    if (response?.success) {
      status.textContent = "Download started!";
    } else {
      status.textContent = "No PDF found. Open the PDF page first, then click again.";
    }
  });
});

// Show last captured URL on popup open
chrome.storage.session.get("lastPdfUrl", (result) => {
  if (result.lastPdfUrl) {
    try {
      const pathname = new URL(result.lastPdfUrl).pathname;
      const filename = decodeURIComponent(pathname.split("/").pop());
      status.textContent = `Ready: ${filename}`;
    } catch {
      status.textContent = "PDF ready to download.";
    }
  } else {
    status.textContent = "No PDF detected yet.";
  }
});
