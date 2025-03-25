// Manually compiled TypeScript for demo purposes
const events = [
    {
        id: 1,
        title: 'The Ethics of AI: Global Perspectives',
        date: 'May 15-16, 2025',
        location: 'Berlin, Germany',
        description: 'A two-day conference exploring ethical questions around artificial intelligence development from diverse cultural and philosophical traditions.',
        imageUrl: 'img/event-1.jpg'
    },
    {
        id: 2,
        title: 'Philosophy and Climate Justice',
        date: 'June 22-23, 2025',
        location: 'Bangkok, Thailand',
        description: 'An international symposium examining the philosophical dimensions of climate justice and environmental ethics.',
        imageUrl: 'img/event-2.jpg'
    },
    {
        id: 3,
        title: 'Digital Democracy: Philosophical Foundations',
        date: 'September 10-12, 2025',
        location: 'São Paulo, Brazil',
        description: 'A three-day workshop exploring the philosophical underpinnings of democracy in the digital age.',
        imageUrl: 'img/event-3.jpg'
    }
];

const speakers = [
    {
        id: 1,
        name: 'Dr. Sophia Chen',
        title: 'Professor of Ethics and Technology, Stanford University',
        bio: 'Dr. Chen specializes in the ethical implications of emerging technologies, with a focus on cross-cultural perspectives on AI ethics.',
        imageUrl: 'img/speaker-1.jpg'
    },
    {
        id: 2,
        name: 'Dr. Kwame Nkrumah',
        title: 'Distinguished Fellow, Pan-African Philosophy Institute',
        bio: 'Dr. Nkrumah\'s work focuses on decolonial approaches to environmental ethics and climate justice.',
        imageUrl: 'img/speaker-2.jpg'
    },
    {
        id: 3,
        name: 'Prof. Maria Garcia',
        title: 'Chair of Digital Ethics, University of Barcelona',
        bio: 'Prof. Garcia is a leading voice on the philosophical dimensions of digital rights, privacy, and democratic participation.',
        imageUrl: 'img/speaker-3.jpg'
    },
    {
        id: 4,
        name: 'Dr. Hiroshi Tanaka',
        title: 'Director, Center for Global Philosophy, Tokyo University',
        bio: 'Dr. Tanaka\'s research examines the intersection of Eastern and Western philosophical traditions in addressing contemporary global challenges.',
        imageUrl: 'img/speaker-4.jpg'
    }
];

// Quotes data
const quotes = [
    {
        text: "\"In order to be an effective activist, you must deeply understand what your opposition believes, and why they believe it.\"",
        author: "Jon Dallas"
    },
    {
        text: "\"He who knows only his own side of the case knows little of that.\"",
        author: "John Stuart Mill"
    },
    {
        text: "\"The ability to observe without evaluating is the highest form of intelligence.\"",
        author: "Jiddu Krishnamurti"
    },
    {
        text: "\"Understanding is the very foundation of love. When you understand someone, you cannot help but love them.\"",
        author: "Thich Nhat Hanh"
    },
    {
        text: "\"It is the mark of an educated mind to be able to entertain a thought without accepting it.\"",
        author: "Aristotle (misattributed)"
    }
];

// DOM Elements
const eventContainer = document.getElementById('event-container');
const speakerContainer = document.getElementById('speaker-container');
const contactForm = document.getElementById('contact-form');
const quoteSection = document.getElementById('quote');

// Initialize the application
function init() {
    renderEvents();
    renderSpeakers();
    setupContactForm();
    setupRotatingQuotes();
}

// Setup rotating quotes
function setupRotatingQuotes() {
    if (!quoteSection) return;
    
    let currentQuoteIndex = 0;
    
    function updateQuote() {
        // Fade out
        quoteSection.classList.add('fade-out');
        quoteSection.classList.remove('fade-in');
        
        setTimeout(() => {
            // Update quote content
            const quote = quotes[currentQuoteIndex];
            quoteSection.querySelector('blockquote p').textContent = quote.text;
            quoteSection.querySelector('blockquote cite').textContent = `— ${quote.author}`;
            
            // Update index for next quote
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            
            // Fade in
            quoteSection.classList.remove('fade-out');
            quoteSection.classList.add('fade-in');
        }, 500); // Half a second for the fade out effect
    }
    
    // Add initial fade-in class
    quoteSection.classList.add('fade-in');
    
    // Rotate quotes every 10 seconds
    setInterval(updateQuote, 10000);
}

// Render events to the DOM
function renderEvents() {
    if (!eventContainer)
        return;
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
      <div class="event-image" style="background-image: url('${event.imageUrl || 'img/placeholder.jpg'}');"></div>
      <div class="event-details">
        <span class="event-date">${event.date}</span>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-location">${event.location}</p>
        <p>${event.description}</p>
        <a href="#" class="btn">Learn More</a>
      </div>
    `;
        eventContainer.appendChild(eventCard);
    });
}

// Render speakers to the DOM
function renderSpeakers() {
    if (!speakerContainer)
        return;
    speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.className = 'speaker-card';
        speakerCard.innerHTML = `
      <div class="speaker-image" style="background-image: url('${speaker.imageUrl || 'img/placeholder.jpg'}');"></div>
      <div class="speaker-details">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-title">${speaker.title}</p>
        <p>${speaker.bio}</p>
      </div>
    `;
        speakerContainer.appendChild(speakerCard);
    });
}

// Setup contact form submission
function setupContactForm() {
    if (!contactForm)
        return;
    
    // Form validation
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Validate inputs
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            nameInput.classList.add('error');
            isValid = false;
        } else {
            nameInput.classList.remove('error');
        }
        
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add('error');
            isValid = false;
        } else {
            emailInput.classList.remove('error');
        }
        
        if (!messageInput.value.trim()) {
            messageInput.classList.add('error');
            isValid = false;
        } else {
            messageInput.classList.remove('error');
        }
        
        if (!isValid) {
            return;
        }
        
        // In a real application, you would send this data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted with the following data:');
        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Message:', messageInput.value);
        
        // Add a success message to the form
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        contactForm.appendChild(successMessage);
        
        // Reset the form
        contactForm.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);