 // Profile Dropdown Toggle
 const profileIcon = document.getElementById('profile-icon');
 const profileDropdown = document.getElementById('profile-dropdown');

 profileIcon.addEventListener('click', function() {
     // Toggle dropdown visibility
     profileDropdown.classList.toggle('hidden');
 });

 // Mobile Navbar Toggle
 const navbarToggle = document.getElementById('navbar-toggle');
 const mobileMenu = document.getElementById('mobile-menu');

 navbarToggle.addEventListener('click', function() {
     // Toggle mobile menu visibility
     mobileMenu.classList.toggle('hidden');
 });

 // Close dropdown if clicked outside
 document.addEventListener('click', function(event) {
     if (!profileDropdown.contains(event.target) && !profileIcon.contains(event.target)) {
         profileDropdown.classList.add('hidden');
     }
 });