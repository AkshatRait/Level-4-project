document.addEventListener("DOMContentLoaded", function() {
  const inputElement = document.querySelector('#HomeSearchBar input[type="text"]');

  // Make sure the input element exists before continuing
  if (inputElement) {
    // Store the original placeholder value
    const originalPlaceholder = inputElement.getAttribute('placeholder');

    // Add event listeners
    inputElement.addEventListener('focus', () => {
      inputElement.setAttribute('placeholder', '');
      inputElement.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          
          
        }
      });
    });

    inputElement.addEventListener('blur', () => {
      inputElement.setAttribute('placeholder', originalPlaceholder);
    });
  } else {
    console.error('Could not find the input element.');
  }
});
