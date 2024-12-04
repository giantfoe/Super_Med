import { mockData } from '$lib/stores/mockData';
import type { Doctor, Appointment, Prescription } from '$lib/types';
import { faker } from '@faker-js/faker';

function generateDoctors(count: number = 10): Doctor[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: `Dr. ${faker.person.fullName()}`,
    specialty: faker.helpers.arrayElement([
      'Cardiologist', 'Dermatologist', 'Pediatrician', 
      'Neurologist', 'Psychiatrist', 'Oncologist'
    ]),
    rating: Number(faker.number.float({ min: 4.0, max: 5.0, precision: 0.1 })),
    reviews: faker.number.int({ min: 50, max: 300 }),
    experience: `${faker.number.int({ min: 5, max: 25 })}+ years`,
    education: `${faker.helpers.arrayElement(['Harvard', 'Stanford', 'Johns Hopkins', 'Yale', 'UCLA'])} Medical School`,
    languages: faker.helpers.arrayElements(['English', 'Spanish', 'Mandarin', 'French', 'Arabic'], { min: 1, max: 3 }),
    about: faker.lorem.paragraph(),
    location: `Floor ${faker.number.int({ min: 1, max: 5 })}`,
    image: `/images/doctors/placeholder.jpg`,
    availability: {
      nextAvailable: faker.helpers.arrayElement(['Today', 'Tomorrow', 'Next Week']),
      slots: Array.from({ length: 3 }, () => ({
        date: faker.date.future().toISOString().split('T')[0],
        times: Array.from({ length: 3 }, () => faker.date.future().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
      }))
    }
  }));
}

function generateAppointments(doctorIds: string[], count: number = 5): Appointment[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    doctorId: faker.helpers.arrayElement(doctorIds),
    date: faker.date.future().toISOString().split('T')[0],
    time: faker.date.future().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    type: faker.helpers.arrayElement(['Follow-up', 'New Patient', 'Consultation', 'Check-up']),
    status: faker.helpers.arrayElement(['confirmed', 'pending', 'cancelled']),
    notes: faker.lorem.sentence(),
    location: faker.helpers.arrayElement(['Main Clinic', 'West Wing', 'Medical Center']),
    reminders: faker.datatype.boolean()
  }));
}

function generatePrescriptions(doctorIds: string[], count: number = 3): Prescription[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    medication: faker.helpers.arrayElement([
      'Lisinopril', 'Metformin', 'Amoxicillin', 
      'Omeprazole', 'Sertraline', 'Atorvastatin'
    ]),
    dosage: `${faker.number.int({ min: 5, max: 500 })}mg`,
    frequency: faker.helpers.arrayElement(['Once daily', 'Twice daily', 'Three times daily', 'As needed']),
    startDate: faker.date.recent().toISOString().split('T')[0],
    endDate: faker.date.future().toISOString().split('T')[0],
    remainingDays: faker.number.int({ min: 1, max: 90 }),
    remainingRefills: faker.number.int({ min: 0, max: 3 }),
    doctorId: faker.helpers.arrayElement(doctorIds),
    status: faker.helpers.arrayElement(['active', 'inactive', 'expired']),
    instructions: faker.lorem.sentence(),
    pharmacy: {
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      phone: faker.phone.number()
    }
  }));
}

export function initializeMockData() {
  const doctors = generateDoctors();
  const doctorIds = doctors.map(d => d.id);
  const appointments = generateAppointments(doctorIds);
  const prescriptions = generatePrescriptions(doctorIds);

  mockData.update(data => ({
    ...data,
    doctors,
    appointments,
    prescriptions
  }));
} 