<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  const pastAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      date: "February 15, 2024",
      time: "10:30 AM",
      status: "completed",
      type: "Video Call",
      notes: "Follow-up in 3 months"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "January 28, 2024",
      time: "2:15 PM",
      status: "cancelled",
      type: "In-Person",
      notes: "Rescheduled to March"
    },
    {
      id: 3,
      doctor: "Dr. Emily Brown",
      specialty: "Pediatrician",
      date: "January 10, 2024",
      time: "3:45 PM",
      status: "completed",
      type: "In-Person",
      notes: "Annual check-up completed"
    }
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-accent-50 text-accent-600 border-accent-200';
      case 'cancelled':
        return 'bg-neutral-50 text-neutral-500 border-neutral-200';
      default:
        return 'bg-neutral-50 text-neutral-500 border-neutral-200';
    }
  };
</script>

<!-- Appointments History Grid -->
<div class="grid grid-cols-1 gap-3">
  {#each pastAppointments as appointment}
    <div class="block bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
      <div class="flex items-start gap-3">
        <!-- Icon -->
        <div class="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
          <Icon name="user-circle" class="w-5 h-5 text-primary-600" />
        </div>

        <div class="flex-1 min-w-0">
          <!-- Header -->
          <div class="flex items-start justify-between mb-3">
            <div>
              <h3 class="font-medium text-neutral-900 mb-0.5">{appointment.doctor}</h3>
              <p class="text-sm text-neutral-500">{appointment.specialty}</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs border flex items-center gap-1 capitalize
                       {getStatusStyles(appointment.status)}">
              <span class="w-1.5 h-1.5 rounded-full 
                         {appointment.status === 'completed' ? 'bg-accent-500' : 'bg-neutral-400'}" />
              {appointment.status}
            </span>
          </div>

          <!-- Details -->
          <div class="space-y-2">
            <div class="flex items-center text-neutral-600">
              <Icon name="calendar" class="w-4 h-4 mr-1.5" />
              <span class="text-sm">{appointment.date}</span>
            </div>
            <div class="flex items-center text-neutral-600">
              <Icon name="clock" class="w-4 h-4 mr-1.5" />
              <span class="text-sm">{appointment.time}</span>
            </div>
            {#if appointment.notes}
              <div class="flex items-start text-neutral-600 mt-3 pt-3 border-t border-neutral-100">
                <Icon name="document-text" class="w-4 h-4 mr-1.5 mt-0.5" />
                <span class="text-sm">{appointment.notes}</span>
              </div>
            {/if}
          </div>

          <!-- Actions -->
          <div class="mt-4 flex gap-2">
            {#if appointment.status === 'completed'}
              <button class="btn-secondary text-sm py-1.5 flex-1 flex items-center justify-center gap-1.5">
                <Icon name="document-duplicate" class="w-4 h-4" />
                View Summary
              </button>
              <button class="btn-primary text-sm py-1.5 flex-1 flex items-center justify-center gap-1.5">
                <Icon name="calendar" class="w-4 h-4" />
                Book Follow-up
              </button>
            {:else}
              <button class="btn-primary text-sm py-1.5 flex-1">
                Reschedule
              </button>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div> 