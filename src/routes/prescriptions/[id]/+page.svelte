<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  // Mock data - will replace with Supabase
  const prescription = {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    startDate: "2024-03-01",
    endDate: "2024-06-01",
    remainingDays: 75,
    remainingRefills: 2,
    doctor: "Dr. Sarah Wilson",
    status: "active",
    instructions: "Take in the morning with food",
    nextRefill: "2024-04-01",
    pharmacy: {
      name: "HealthCare Pharmacy",
      address: "123 Medical Center Blvd",
      phone: "(555) 123-4567"
    },
    schedule: [
      { time: "08:00 AM", taken: true },
      { time: "08:00 AM", taken: true },
      { time: "08:00 AM", taken: false },
    ]
  };
</script>

<!-- Header -->
<div class="sticky top-14 bg-white border-b border-neutral-200/80 z-10 px-4 py-3 -mx-4">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-lg font-semibold text-neutral-900">{prescription.medication}</h1>
      <p class="text-sm text-neutral-500">{prescription.dosage} • {prescription.frequency}</p>
    </div>
    <span class="px-2 py-1 bg-accent-50 text-accent-600 text-xs rounded-md border border-accent-200">
      {prescription.status}
    </span>
  </div>
</div>

<!-- Content -->
<div class="pt-4 grid grid-cols-1 gap-3">
  <!-- Progress Card -->
  <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
          <Icon name="calendar" class="w-4 h-4 text-primary-600" />
        </div>
        <span class="text-sm font-medium">{prescription.remainingDays} days remaining</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
          <Icon name="refresh" class="w-4 h-4 text-primary-600" />
        </div>
        <span class="text-sm font-medium">{prescription.remainingRefills} refills</span>
      </div>
    </div>
    <div class="w-full bg-neutral-100 rounded-full h-2">
      <div 
        class="bg-primary-500 h-2 rounded-full transition-all duration-500" 
        style="width: {(prescription.remainingDays / 90) * 100}%"
      />
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="grid grid-cols-2 gap-3">
    <button class="bg-primary-600 text-white rounded-xl p-4 text-sm font-medium shadow-sm 
                   hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
      <Icon name="refresh" class="w-4 h-4" />
      Request Refill
    </button>
    <button class="bg-white text-neutral-700 rounded-xl p-4 text-sm font-medium shadow-sm 
                   border border-neutral-200 hover:bg-neutral-50 transition-colors
                   flex items-center justify-center gap-2">
      <Icon name="bell" class="w-4 h-4" />
      Set Reminder
    </button>
  </div>

  <!-- Info Cards -->
  <div class="grid grid-cols-1 gap-3">
    <!-- Instructions -->
    <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
          <Icon name="information-circle" class="w-4 h-4 text-primary-600" />
        </div>
        <h2 class="text-sm font-semibold">Instructions</h2>
      </div>
      <p class="text-sm text-neutral-600 pl-11">
        {prescription.instructions}
      </p>
    </div>

    <!-- Doctor -->
    <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
          <Icon name="user" class="w-4 h-4 text-primary-600" />
        </div>
        <div>
          <h2 class="text-sm font-semibold">{prescription.doctor}</h2>
          <p class="text-xs text-neutral-500">Valid until {new Date(prescription.endDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>

    <!-- Schedule -->
    <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
          <Icon name="clock" class="w-4 h-4 text-primary-600" />
        </div>
        <h2 class="text-sm font-semibold">Today's Schedule</h2>
      </div>
      <div class="space-y-2 pl-11">
        {#each prescription.schedule as day}
          <div class="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
            <span class="text-sm">{day.time}</span>
            {#if day.taken}
              <span class="flex items-center text-xs text-accent-600">
                <Icon name="check-circle" class="w-4 h-4 mr-1" />
                Taken
              </span>
            {:else}
              <button class="text-xs text-primary-600 font-medium">
                Mark as taken
              </button>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 