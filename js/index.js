const shareButton = document.getElementById("button-show-author-links");

shareButton.addEventListener("click", function () {
  const socialLinks = document.getElementById("social-links");
  const authorDetails = document.getElementById("author-details");

  socialLinks.toggleAttribute("inert");
  socialLinks.toggleAttribute("hidden");

  authorDetails.toggleAttribute("inert");
  authorDetails.toggleAttribute("hidden");

  this.parentElement.classList.toggle("active");

  this.classList.toggle("active");
});
