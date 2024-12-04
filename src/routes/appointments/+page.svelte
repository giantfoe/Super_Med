<script lang="ts">
  import { Icon } from 'svelte-hero-icons';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <!-- Upcoming Appointment Card -->
  <div class="card hover:scale-[1.02] transition-transform duration-300">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-lg font-medium text-neutral-900">Dr. Sarah Wilson</h3>
        <p class="text-neutral-500">Cardiologist</p>
      </div>
      <span class="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">
        Confirmed
      </span>
    </div>
    
    <div class="space-y-3">
      <div class="flex items-center text-neutral-600">
        <Icon name="calendar" class="w-5 h-5 mr-2" />
        <span>Tuesday, March 15, 2024</span>
      </div>
      <div class="flex items-center text-neutral-600">
        <Icon name="clock" class="w-5 h-5 mr-2" />
        <span>10:30 AM</span>
      </div>
    </div>
    
    <div class="mt-6 flex gap-3">
      <button class="btn-primary">Join Video Call</button>
      <button class="btn-secondary">Reschedule</button>
    </div>
  </div>

  <!-- Second Card for Demo -->
  <div class="card hover:scale-[1.02] transition-transform duration-300">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-lg font-medium text-neutral-900">Dr. Michael Chen</h3>
        <p class="text-neutral-500">Dermatologist</p>
      </div>
      <span class="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">
        Pending
      </span>
    </div>
    
    <div class="space-y-3">
      <div class="flex items-center text-neutral-600">
        <Icon name="calendar" class="w-5 h-5 mr-2" />
        <span>Friday, March 18, 2024</span>
      </div>
      <div class="flex items-center text-neutral-600">
        <Icon name="clock" class="w-5 h-5 mr-2" />
        <span>2:15 PM</span>
      </div>
    </div>
    
    <div class="mt-6 flex gap-3">
      <button class="btn-secondary">Confirm Appointment</button>
    </div>
  </div>
</div> 