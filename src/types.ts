export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}