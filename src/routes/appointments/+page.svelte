<script lang="ts">
  import { Icon } from 'svelte-hero-icons';
</script>

<div class="grid grid-cols-1 gap-4">
  <!-- Upcoming Appointment Card -->
  <div class="card card-gradient hover:scale-[1.01] transition-transform duration-300">
    <div class="flex items-start justify-between mb-3">
      <div>
        <h3 class="text-base font-medium text-neutral-900">Dr. Sarah Wilson</h3>
        <p class="text-sm text-neutral-500">Cardiologist</p>
      </div>
      <span class="status-badge status-badge-confirmed text-xs">
        Confirmed
      </span>
    </div>
    
    <div class="space-y-2">
      <div class="flex items-center text-neutral-600">
        <Icon name="calendar" class="w-4 h-4 mr-2" />
        <span class="text-sm">Tuesday, March 15, 2024</span>
      </div>
      <div class="flex items-center text-neutral-600">
        <Icon name="clock" class="w-4 h-4 mr-2" />
        <span class="text-sm">10:30 AM</span>
      </div>
    </div>
    
    <div class="mt-4 flex gap-2">
      <button class="btn-primary text-sm py-1.5">Join Video Call</button>
      <button class="btn-secondary text-sm py-1.5">Reschedule</button>
    </div>
  </div>

  <!-- Second Card for Demo -->
  <div class="card hover:scale-[1.01] transition-transform duration-300">
    <div class="flex items-start justify-between mb-3">
      <div>
        <h3 class="text-base font-medium text-neutral-900">Dr. Michael Chen</h3>
        <p class="text-sm text-neutral-500">Dermatologist</p>
      </div>
      <span class="status-badge status-badge-pending text-xs">
        Pending
      </span>
    </div>
    
    <div class="space-y-2">
      <div class="flex items-center text-neutral-600">
        <Icon name="calendar" class="w-4 h-4 mr-2" />
        <span class="text-sm">Friday, March 18, 2024</span>
      </div>
      <div class="flex items-center text-neutral-600">
        <Icon name="clock" class="w-4 h-4 mr-2" />
        <span class="text-sm">2:15 PM</span>
      </div>
    </div>
    
    <div class="mt-4">
      <button class="btn-secondary text-sm py-1.5 w-full">Confirm Appointment</button>
    </div>
  </div>
</div> 