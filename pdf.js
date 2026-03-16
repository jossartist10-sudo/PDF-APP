// script.js

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Camera scanning
  const cameraBtn = document.querySelector("button:contains('Open Camera')");
  if (cameraBtn) {
    cameraBtn.addEventListener("click", async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = document.createElement("video");
        videoElement.srcObject = stream;
        videoElement.autoplay = true;
        videoElement.style.width = "100%";
        videoElement.style.maxHeight = "400px";
        document.querySelector(".feature").appendChild(videoElement);
      } catch (err) {
        alert("Camera access denied or unavailable.");
        console.error(err);
      }
    });
  }

  // Gallery upload
  const fileInput = document.querySelector("input[type='file']");
  if (fileInput) {
    fileInput.addEventListener("change", (event) => {
      const files = event.target.files;
      if (files.length > 0) {
        alert(`${files.length} file(s) selected from gallery.`);
        // Placeholder: handle file preview or processing
        console.log(files);
      }
    });
  }

  // AI PDF composition
  const aiBtn = document.querySelector("button:contains('Compose with AI')");
  if (aiBtn) {
    aiBtn.addEventListener("click", () => {
      alert("AI composition feature triggered (placeholder).");
      // Placeholder: integrate AI service here
    });
  }

  // Save in different formats
  const saveButtons = document.querySelectorAll(".feature:nth-of-type(4) button");
  saveButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const format = btn.textContent;
      alert(`Saving document as ${format} (placeholder).`);
      // Placeholder: implement export logic here
    });
  });

  // Add signature
  const signBtn = document.querySelector("button:contains('Add Signature')");
  if (signBtn) {
    signBtn.addEventListener("click", () => {
      alert("Signature feature triggered (placeholder).");
      // Placeholder: integrate signature pad or upload here
    });
  }
});