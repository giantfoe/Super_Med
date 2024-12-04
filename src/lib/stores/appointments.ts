import { writable } from 'svelte/store';

export type Appointment = {
  id: string;
  date: string;
  time: string;
  description: string;
};

export const appointments = writable<Appointment[]>([]);

export function addAppointment(appointment: Appointment) {
  appointments.update(apps => [...apps, appointment]);
} 