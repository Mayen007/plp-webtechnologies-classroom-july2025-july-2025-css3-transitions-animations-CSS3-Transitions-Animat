// Global variables to demonstrate global scope
let globalMessage = "This is a global variable";
let isLoading = false;

/**
 * Part 2: JavaScript Functions - Scope, Parameters & Return Values
 */

// Function with parameters and return value
function calculateArea(length, width) {
  // Local variables - demonstrating local scope
  let area = length * width;
  let result = `Area calculated: ${length} × ${width} = ${area}`;

  // Update the output display
  displayResult(result);

  // Return the calculated area
  return area;
}

// Function with parameter and return value
function greetUser(name) {
  // Local variable
  let greeting = `Hello, ${name}! Welcome to our interactive page.`;

  // Display the greeting
  displayResult(greeting);

  return greeting;
}

// Function demonstrating scope awareness
function demonstrateScope() {
  // Local variable
  let localMessage = "This is a local variable";

  // Function accessing both local and global scope
  let scopeDemo = `
        Global scope: ${globalMessage}
        Local scope: ${localMessage}
        Function can access both!
    `;

  displayResult(scopeDemo);

  return { global: globalMessage, local: localMessage };
}

// Reusable utility function for displaying results
function displayResult(message) {
  const outputElement = document.getElementById('function-output');
  if (outputElement) {
    outputElement.innerHTML = message;
  }
}

/**
 * Part 3: Combining CSS Animations with JavaScript
 */

// Function to trigger CSS animation by adding/removing classes
function animateBox() {
  const box = document.getElementById('js-animated-box');

  // Toggle the animation class
  if (box.classList.contains('animate')) {
    box.classList.remove('animate');
    box.textContent = 'Click button to animate me!';
  } else {
    box.classList.add('animate');
    box.textContent = 'Animated!';

    // Remove animation class after animation completes
    setTimeout(() => {
      box.classList.remove('animate');
      box.textContent = 'Click button to animate me!';
    }, 600); // Match CSS transition duration
  }
}

// Function for card flip animation
function flipCard() {
  const card = document.getElementById('flip-card');
  card.classList.toggle('flipped');
}

// Function to toggle loading animation (start/stop based on user input)
function toggleLoading() {
  const spinner = document.getElementById('loading-spinner');
  const button = event.target; // Get the button that was clicked

  if (isLoading) {
    // Stop loading
    spinner.classList.add('hidden');
    button.textContent = 'Toggle Loading';
    isLoading = false;
  } else {
    // Start loading
    spinner.classList.remove('hidden');
    button.textContent = 'Stop Loading';
    isLoading = true;
  }
}

// Function to show modal with slide-in animation
function showModal() {
  const modal = document.getElementById('modal');

  // Remove hidden class and add show class for animation
  modal.classList.remove('hidden');

  // Use setTimeout to ensure the display change takes effect before animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

// Function to hide modal with fade-out animation
function hideModal() {
  const modal = document.getElementById('modal');

  // Remove show class to trigger fade-out animation
  modal.classList.remove('show');

  // Hide the modal after animation completes
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300); // Match CSS transition duration
}

// Additional utility functions demonstrating reusable logic

// Function with parameters that returns a value for calculations
function convertToPercent(value, total) {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

// Function demonstrating scope with nested functions
function createCounter() {
  // Local variable in outer function scope
  let count = 0;

  // Return inner function that has access to outer scope
  return function () {
    count++; // Accessing outer function's variable
    return count;
  };
}

// Event listeners and initialization (demonstrates function usage)
document.addEventListener('DOMContentLoaded', function () {
  // Initialize any needed setup
  console.log('Page loaded! Interactive elements are ready.');

  // Demonstrate the counter function
  const myCounter = createCounter();
  console.log('Counter demo:', myCounter(), myCounter(), myCounter());

  // Add keyboard event for modal (ESC to close)
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      const modal = document.getElementById('modal');
      if (!modal.classList.contains('hidden')) {
        hideModal();
      }
    }
  });
});

// Function to demonstrate return values with complex logic
function generateRandomColor() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function that uses other functions (demonstrating modularity)
function changeElementColor(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const newColor = generateRandomColor();
    element.style.backgroundColor = newColor;
    return newColor;
  }
  return null;
}
