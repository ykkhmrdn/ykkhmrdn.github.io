const roles = ['Front-end Developer', 'Back-end Developer', 'UI/UX Designer'];
let roleIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < roles[roleIndex].length) {
        document.querySelector('.role').textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        // Add a delay before starting to erase
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        document.querySelector('.role').textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        roleIndex++;
        if (roleIndex >= roles.length) roleIndex = 0;
        // Add a delay before starting to type the next role
        setTimeout(type, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (roles.length) setTimeout(type, 2000);
});