document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const wordCountDisplay = document.getElementById('wordCount');
    const countButton = document.getElementById('countButton');
  
    countButton.addEventListener('click', function () {
      const text = textInput.value.trim();
      const words = text.split(/\s+/);
      const wordCount = words.length > 0 && words[0] !== '' ? words.length : 0;
  
      wordCountDisplay.textContent = wordCount;
    });
  });
  