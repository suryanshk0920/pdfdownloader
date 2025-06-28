# 📥 PDF Downloader Extension - Setup Instructions

This guide will help you install the extension manually in Google Chrome.

─────────────────────────────────────────────
🔧 STEP-BY-STEP INSTALLATION
─────────────────────────────────────────────

1. ✅ Extract the ZIP file:
   - Right-click the downloaded ZIP → Click "Extract All"
   - Choose a location and extract.

2. ✅ Open Chrome Extensions Page:
   - Open Google Chrome.
   - Visit: chrome://extensions/
   - OR: Double-click the 'install.bat' file (if available).

3. ✅ Enable Developer Mode:
   - Toggle the "Developer mode" switch in the top-right corner.

4. ✅ Click "Load unpacked":
   - A folder browser will appear.
   - Select the correct folder (explained below).

─────────────────────────────────────────────
⚠️ ERROR HANDLING – SELECT THE RIGHT FOLDER!
─────────────────────────────────────────────

🔴 DO NOT SELECT the **extracted folder itself** if it contains another folder inside it (common mistake on Windows).

For example:
If your extracted folder looks like this:

📁 pdf_downloader_extension-main  
└── 📁 pdf_downloader_extension  

You must select the **inner folder**, like this:
✅ Select: `pdf_downloader_extension`

NOT:
❌ Do not select: `pdf_downloader_extension-main`

Otherwise, Chrome will show an error like:
> "Could not load manifest.json"
