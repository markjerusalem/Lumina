document.addEventListener('DOMContentLoaded', function () {
    // Change background color of header and footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.style.backgroundColor = '#367588';
    footer.style.backgroundColor = '#367588';

    // Change font color of navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.style.color = '#fff';
    });

    // Add hover effect to navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#fff';
            this.style.color = '#367588';
        });
        link.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'transparent';
            this.style.color = '#fff';
        });
    });

    // Style the chat container
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.style.backgroundColor = '#9dc8e3';
    chatContainer.style.color = '#000';

    // Style the send button
    const sendButton = document.querySelector('.send-button');
    sendButton.style.backgroundColor = '#367588';
    sendButton.style.color = '#fff';

    // Add box shadow to chat container on hover
    chatContainer.addEventListener('mouseenter', function () {
        this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
    });
    chatContainer.addEventListener('mouseleave', function () {
        this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });

    // Style the back-to-top button
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.style.backgroundColor = '#367588';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';

    // Add hover effect to back-to-top button
    backToTopButton.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#004040';
    });
    backToTopButton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#367588';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Highlight the current page in the navigation menu
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling effect
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    function sendMessage() {
        const messageInput = document.getElementById('message-input');
        const chatBox = document.getElementById('chat-box');

        const userMessage = messageInput.value.trim();
        if (userMessage !== '') {
            // Display user's message
            chatBox.innerHTML += `<p><strong>User:</strong> ${userMessage}</p>`;

            // Simulate chatbot response
            simulateChatbotResponse();

            // Clear the message input
            messageInput.value = '';
        } else {
            alert('Please enter a message before sending.');
        }
    }

    // Simulate Chatbot Response
    function simulateChatbotResponse() {
        const chatBox = document.getElementById('chat-box');
        const chatbotResponse = "Hello!";
        chatBox.innerHTML += `<p><strong>Chatbot:</strong> ${chatbotResponse}</p>`;
    }

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
