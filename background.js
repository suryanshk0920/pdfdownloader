let lastPdfUrl = null;

// Capture completed requests for PDF files
chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.url.endsWith(".pdf")) {
      console.log("PDF detected:", details.url);
      lastPdfUrl = details.url;
    }
  },
  { urls: ["<all_urls>"] }
);

// Listen for download request from popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "download_latest_pdf") {
    if (lastPdfUrl) {
      chrome.downloads.download({ url: lastPdfUrl });
    } else {
      chrome.notifications?.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "PDF Not Found",
        message: "No recent PDF found in network requests."
      });
    }
  }
});
