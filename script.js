const button = document.getElementById('magicButton');
console.log('Button:', button);  // See what 'button' contains

let count = 0;
button.addEventListener('click', function() {
    count = count + 1;
    console.log('Count is now:', count);  // Track what's happening
});