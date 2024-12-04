import { writable } from 'svelte/store';

export const mockData = writable({
  appointments: [],
  prescriptions: [],
  doctors: [],
  // Add other mock data as needed
}); 