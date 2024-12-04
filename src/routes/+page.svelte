<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  // Mock data - will replace with Supabase
  const upcomingAppointment = {
    doctor: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    date: "March 15, 2024",
    time: "10:30 AM",
    status: "confirmed"
  };

  const activePrescriptions = 3;
  const pendingAppointments = 2;
</script>

<div class="py-6 space-y-6">
  <!-- Quick Stats -->
  <div class="grid grid-cols-2 gap-4">
    <div class="card bg-primary-50 border-none">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-primary-600">Upcoming</p>
          <p class="text-2xl font-semibold text-primary-700">{pendingAppointments}</p>
        </div>
        <Icon name="calendar" class="w-8 h-8 text-primary-500" />
      </div>
    </div>
    
    <div class="card bg-accent-50 border-none">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-accent-600">Active Meds</p>
          <p class="text-2xl font-semibold text-accent-700">{activePrescriptions}</p>
        </div>
        <Icon name="clipboard-list" class="w-8 h-8 text-accent-500" />
      </div>
    </div>
  </div>

  <!-- Next Appointment -->
  {#if upcomingAppointment}
    <div class="card card-gradient">
      <div class="flex justify-between items-start mb-4">
        <h2 class="text-lg font-semibold text-neutral-900">Next Appointment</h2>
        <button class="text-sm text-primary-600 hover:text-primary-700">
          View All
        </button>
      </div>
      
      <div class="flex items-start gap-4">
        <div class="icon-container">
          <Icon name="user-circle" class="w-6 h-6 text-primary-600" />
        </div>
        <div class="space-y-2">
          <div>
            <p class="font-medium text-neutral-900">{upcomingAppointment.doctor}</p>
            <p class="text-sm text-neutral-500">{upcomingAppointment.specialty}</p>
          </div>
          <div class="flex items-center gap-3 text-sm">
            <div class="flex items-center text-neutral-600">
              <Icon name="calendar" class="w-4 h-4 mr-1" />
              <span>{upcomingAppointment.date}</span>
            </div>
            <div class="flex items-center text-neutral-600">
              <Icon name="clock" class="w-4 h-4 mr-1" />
              <span>{upcomingAppointment.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- Quick Actions -->
  <div class="grid grid-cols-1 gap-4">
    <a href="/appointments/new" class="card group">
      <div class="flex items-center gap-4">
        <div class="icon-container">
          <Icon name="plus-circle" class="w-6 h-6 text-primary-600" />
        </div>
        <div class="flex-1">
          <h3 class="font-medium text-neutral-900">Schedule Appointment</h3>
          <p class="text-sm text-neutral-500">Book a consultation with a specialist</p>
        </div>
        <Icon name="chevron-right" class="w-5 h-5 text-neutral-400 group-hover:text-primary-500" />
      </div>
    </a>

    <a href="/conditions" class="card group">
      <div class="flex items-center gap-4">
        <div class="icon-container">
          <Icon name="search-circle" class="w-6 h-6 text-primary-600" />
        </div>
        <div class="flex-1">
          <h3 class="font-medium text-neutral-900">Match Condition</h3>
          <p class="text-sm text-neutral-500">Find specialists for your symptoms</p>
        </div>
        <Icon name="chevron-right" class="w-5 h-5 text-neutral-400 group-hover:text-primary-500" />
      </div>
    </a>

    <a href="/prescriptions" class="card group">
      <div class="flex items-center gap-4">
        <div class="icon-container">
          <Icon name="clipboard-list" class="w-6 h-6 text-primary-600" />
        </div>
        <div class="flex-1">
          <h3 class="font-medium text-neutral-900">View Prescriptions</h3>
          <p class="text-sm text-neutral-500">Manage your medications</p>
        </div>
        <Icon name="chevron-right" class="w-5 h-5 text-neutral-400 group-hover:text-primary-500" />
      </div>
    </a>
  </div>
</div> 
