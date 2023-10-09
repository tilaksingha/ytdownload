document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("download_btn");
    const downloadLinks = document.getElementById("download_links");
    const videoUrlInput = document.getElementById("video_url");

    downloadButton.addEventListener("click", function () {
        const videoUrl = videoUrlInput.value.trim();

        if (videoUrl !== "") {
            // You can use the YouTube API here to fetch video information
            // and generate download links dynamically.
            // Due to space limitations, I can't provide a full YouTube API implementation.
            
            // Example:
            const downloadLink = document.createElement("a");
            downloadLink.href = "https://www.example.com/download?video_url=" + encodeURIComponent(videoUrl);
            downloadLink.textContent = "Download Video";
            downloadLink.target = "_blank";

            downloadLinks.innerHTML = ""; // Clear previous links
            downloadLinks.appendChild(downloadLink);
        }
    });
});
