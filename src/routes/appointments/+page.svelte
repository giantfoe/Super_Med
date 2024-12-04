<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      date: "Tuesday, March 15, 2024",
      time: "10:30 AM",
      status: "confirmed",
      type: "Video Call"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "Friday, March 18, 2024",
      time: "2:15 PM",
      status: "pending",
      type: "In-Person"
    }
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-accent-50 text-accent-600 border-accent-200';
      case 'pending':
        return 'bg-secondary-50 text-secondary-600 border-secondary-200';
      default:
        return 'bg-neutral-50 text-neutral-500 border-neutral-200';
    }
  };
</script>

<!-- Header -->
<div class="sticky top-14 bg-white border-b border-neutral-200/80 z-10 px-4 py-3 -mx-4">
  <div class="flex items-center justify-between">
    <h1 class="text-lg font-semibold text-neutral-900">Appointments</h1>
    <button class="bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-medium
                   hover:bg-primary-100 transition-colors flex items-center gap-1.5 border border-primary-200">
      <Icon name="plus" class="w-4 h-4" />
      Book New
    </button>
  </div>
</div>

<!-- Appointments Grid -->
<div class="pt-4 grid grid-cols-1 gap-3">
  {#each appointments as appointment}
    <div class="block bg-white rounded-xl p-4 shadow-sm border border-neutral-200 
                hover:shadow-md hover:border-primary-200 transition-all duration-300">
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
                         {appointment.status === 'confirmed' ? 'bg-accent-500' : 'bg-secondary-400'}" />
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
          </div>

          <!-- Actions -->
          <div class="mt-4 flex gap-2">
            {#if appointment.status === 'confirmed'}
              <button class="btn-primary text-sm py-1.5 flex-1 flex items-center justify-center gap-1.5">
                <Icon name="video-camera" class="w-4 h-4" />
                Join Call
              </button>
              <button class="btn-secondary text-sm py-1.5 flex-1">
                Reschedule
              </button>
            {:else}
              <button class="btn-primary text-sm py-1.5 flex-1">
                Confirm
              </button>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div> 