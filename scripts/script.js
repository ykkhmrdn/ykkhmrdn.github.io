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

// Contact Form
document.querySelector('#contact form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Rename fields to match your server's expected input
    data.email = data.floating_email;
    data.name = data.floating_your_name;
    data.message = data.floating_message;

    // Delete the old properties
    delete data.floating_email;
    delete data.floating_your_name;
    delete data.floating_message;

    // Make sure all fields are filled
    if (!data.name || !data.email || !data.message) {
        swal({
            title: "Hold Up!",
            text: "Ensure all fields are filled out correctly.",
            icon: "error",
            button: {
                text: "Got It",
                closeModal: true,
            },
            dangerMode: true,
        });
        return;
    }

    // Confirm before sending
    const willSend = await swal({
        title: "Ready to Send?",
        text: "Would you like to review your message before sending?",
        icon: "warning",
        buttons: ["Edit", "Send"],
    });

    if (!willSend) {
        // User chose to edit their message
        return;
    }

    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        swal({
            title: "Message Sent!",
            text: "Your message is on its way. Expect a response soon!",
            icon: "success",
            button: {
                text: "Back to Site",
                closeModal: true,
            },
        });

        // Clear the form fields
        form.reset();
    } else {
        swal({
            title: "Message Failed",
            text: "Something went wrong. Give it another shot.",
            icon: "error",
            button: {
                text: "Will Do",
                closeModal: true,
            },
            dangerMode: true,
        });
    }
});



// Function to show alert if live demo not found
function showAlert() {
    swal("Oops!", "Live Demo not found. This project has not yet been deployed!", "error");
  }



// Navbar Toggle Button for Mobile Devices
  document.getElementById('navbar-toggle').addEventListener('click', function () {
    document.getElementById('navbar-menu').classList.toggle('hidden');
  });