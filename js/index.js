const shareButton = document.getElementById("button-show-author-links");

shareButton.addEventListener("click", () => {
  const socialLinks = document.getElementById("social-links");
  const authorDetails = document.getElementById("author-details");

  socialLinks.toggleAttribute("inert");
  socialLinks.toggleAttribute("hidden");

  authorDetails.toggleAttribute("inert");
  authorDetails.toggleAttribute("hidden");
});
