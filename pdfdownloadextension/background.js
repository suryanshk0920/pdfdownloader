// Capture completed requests for PDF files and persist them
chrome.webRequest.onCompleted.addListener(
  (details) => {
    try {
      const urlPath = new URL(details.url).pathname;
      if (urlPath.toLowerCase().endsWith(".pdf")) {
        console.log("PDF detected:", details.url);
        // Persist so it survives service worker restarts
        chrome.storage.session.set({ lastPdfUrl: details.url });
      }
    } catch (e) {
      // ignore malformed URLs
    }
  },
  { urls: ["<all_urls>"] }
);

// Listen for download request from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "download_latest_pdf") {
    chrome.storage.session.get("lastPdfUrl", (result) => {
      const url = result.lastPdfUrl;
      if (url) {
        chrome.downloads.download({ url, filename: getFilename(url) });
        sendResponse({ success: true, url });
      } else {
        sendResponse({ success: false });
      }
    });
    return true; // keep message channel open for async response
  }
});

function getFilename(url) {
  try {
    const pathname = new URL(url).pathname;
    const parts = pathname.split("/");
    return decodeURIComponent(parts[parts.length - 1]);
  } catch {
    return "download.pdf";
  }
}
