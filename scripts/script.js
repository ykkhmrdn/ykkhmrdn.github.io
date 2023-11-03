const roles = ['Front-end Developer', 'Back-end Developer', 'UI/UX Designer', 'Data Analytics'];
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


// Read More Button
document.querySelectorAll('.read-more').forEach((readMore, index) => {
    const toggleButton = document.querySelectorAll('.read-more-toggle')[index];
    const lineHeight = parseFloat(getComputedStyle(readMore)['line-height']);
    const lines = readMore.scrollHeight / lineHeight;

    if (lines > 2) {
        toggleButton.classList.remove('hidden');
        toggleButton.addEventListener('click', function() {
            if (readMore.classList.contains('line-clamp-2')) {
                this.textContent = 'Read Less >';
                readMore.classList.remove('line-clamp-2');
            } else {
                this.textContent = 'Read More >';
                readMore.classList.add('line-clamp-2');
            }
        });
    }
});