// Lấy phần tử Dropdown
var dropdown = document.querySelector('.nav-item.dropdown');

// Khi di chuột vào Dropdown
dropdown.addEventListener('mouseenter', function() {
  // Hiển thị Dropdown menu
  dropdown.querySelector('.dropdown-menu').style.display = 'block';
});

// Khi di chuột ra khỏi Dropdown
dropdown.addEventListener('mouseleave', function() {
  // Ẩn Dropdown menu
  dropdown.querySelector('.dropdown-menu').style.display = 'none';
});
