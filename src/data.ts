import { Event, Speaker } from './types';

export const events: Event[] = [
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

export const speakers: Speaker[] = [
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