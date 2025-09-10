// =============================
// Part 2: JavaScript Functions
// =============================

// Function with parameters and return value
function sum(a, b) {
    // Local scope: a, b
    return a + b;
}

// Function to show sum result in the DOM
function showSum() {
    const result = sum(3, 4); // Using parameters and return value
    document.getElementById('sum-result').textContent = `Sum: ${result}`;
}

// Demonstrate local vs global scope
let globalVar = 'I am global!';
function scopeDemo() {
    let localVar = 'I am local!';
    document.getElementById('scope-result').textContent = `${globalVar} / ${localVar}`;
}

// =============================
// Part 3: Combining CSS & JS
// =============================

// Function to trigger box animation by toggling a class
function triggerBoxAnimation() {
    const box = document.getElementById('animate-box');
    box.classList.remove('animated'); // Reset if already animated
    // Force reflow to restart animation
    void box.offsetWidth;
    box.classList.add('animated');
}

// Function to show/hide modal with animation
function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
}

// =============================
// Bonus: Reusable Animation Trigger
// =============================
/**
 * Triggers a CSS animation by class for any element
 * @param {HTMLElement} el - The element to animate
 * @param {string} className - The animation class
 */
function triggerAnimation(el, className) {
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
}
// Example usage (uncomment to use):
// triggerAnimation(document.querySelector('.fade-box'), 'animated-fade');
