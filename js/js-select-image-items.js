document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".items-thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));

      this.classList.add("active");
      const newImageSrc = this.getAttribute("data-image");

      mainImage.style.opacity = "0.5";

      setTimeout(() => {
        mainImage.src = newImageSrc;
        mainImage.style.opacity = "1";
      }, 150);
    });
  });
});
