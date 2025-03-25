import { events, speakers } from './data';

// DOM Elements
const eventContainer = document.getElementById('event-container') as HTMLDivElement;
const speakerContainer = document.getElementById('speaker-container') as HTMLDivElement;
const contactForm = document.getElementById('contact-form') as HTMLFormElement;

// Initialize the application
function init(): void {
  renderEvents();
  renderSpeakers();
  setupContactForm();
}

// Render events to the DOM
function renderEvents(): void {
  if (!eventContainer) return;
  
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
function renderSpeakers(): void {
  if (!speakerContainer) return;
  
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
function setupContactForm(): void {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;
    
    // In a real application, you would send this data to a server
    // For now, we'll just log it to the console
    console.log('Form submitted with the following data:');
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Message:', messageInput.value);
    
    // Reset the form
    contactForm.reset();
    
    // Show a success message (in a real app, you would wait for the server response)
    alert('Thank you for your message! We will get back to you soon.');
  });
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);