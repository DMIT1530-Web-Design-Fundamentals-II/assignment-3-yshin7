document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.querySelector('.toggle');
  const navContent = document.querySelector('.nav-content');

  toggleBtn.addEventListener('mouseover', function() {
      navContent.classList.toggle('active');
  });
});