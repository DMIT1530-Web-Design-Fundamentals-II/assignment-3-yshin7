document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.querySelector('.toggle');
  const navContent = document.querySelector('.nav-content');

  toggleBtn.addEventListener('click', function() {
      navContent.classList.toggle('active');
  });
});