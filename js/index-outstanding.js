var link = document.querySelector('.name');
var fullText = link.innerText;

  link.addEventListener('mouseenter', function() {
      link.innerText = fullText;
  });

  link.addEventListener('mouseleave', function() {
      link.innerText = truncateText(fullText, 6);
  });

  function truncateText(text, length) {
      if (text.length <= length) {
          return text;
      } else {
          return text.substr(0, length) + '...';  
      }
  }