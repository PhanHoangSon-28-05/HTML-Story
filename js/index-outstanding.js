var link = document.querySelector('.name');
var fullText = link.innerText;
var authorLink = document.querySelector('.author');
var fullAuthorText = authorLink.innerText;

  link.addEventListener('mouseenter', function() {
      link.innerText = fullText;
      authorLink.style.display = 'none';
  });

  link.addEventListener('mouseleave', function() {
      link.innerText = truncateText(fullText, 6);
      authorLink.style.display = 'inline';
  });

  function truncateText(text, length) {
      if (text.length <= length) {
          return text;
      } else {
          return text.substr(0, length) + '...';  
      }
  }