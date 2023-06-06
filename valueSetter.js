// This function sets the value of an HTML input element and triggers the input event.
function setValue(yourElement, textContent) {
    // Get the native setter function for the 'value' property of HTMLInputElement prototype.
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    // Call the native setter function to set the value of the input element.
    nativeInputValueSetter.call(yourElement, textContent);
  
    // Create a new 'input' event with the 'bubbles' option set to true.
    var ev2 = new Event("input", { bubbles: true });
    // Dispatch the 'input' event on the input element.
    yourElement.dispatchEvent(ev2);
  }
  
  // Find the HTML element with the ID 'VisualSearchInput' and store it in the 'htmlElement' variable.
  var htmlElement = document.querySelector("#VisualSearchInput");
  
  // Set the value of 'htmlElement' to "Product Name" using the setValue function.
  setValue(htmlElement, "Product Name");
  
