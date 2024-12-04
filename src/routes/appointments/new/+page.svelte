<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  let selectedDoctor = '';
  let selectedDate = '';
  let selectedTime = '';
  let appointmentType = 'video';
  let notes = '';

  const availableDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      nextAvailable: "Today",
      image: "/doctors/sarah-wilson.jpg"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      nextAvailable: "Tomorrow",
      image: "/doctors/michael-chen.jpg"
    }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];
</script>

<!-- Form -->
<div class="space-y-6">
  <!-- Doctor Selection -->
  <div class="space-y-3">
    <h2 class="text-lg font-semibold text-neutral-900">Select Doctor</h2>
    <div class="grid grid-cols-1 gap-3">
      {#each availableDoctors as doctor}
        <button 
          class="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200
                 {selectedDoctor === doctor.id 
                   ? 'border-primary-200 bg-primary-50' 
                   : 'border-neutral-200 hover:border-primary-200 hover:bg-primary-50/50'}"
          on:click={() => selectedDoctor = doctor.id}
        >
          <div class="w-12 h-12 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center">
            <Icon name="user-circle" class="w-6 h-6 text-primary-600" />
          </div>
          <div class="flex-1 text-left">
            <h3 class="font-medium text-neutral-900">{doctor.name}</h3>
            <p class="text-sm text-neutral-500">{doctor.specialty}</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-neutral-500">Next available:</span>
            <span class="text-sm font-medium text-primary-600">{doctor.nextAvailable}</span>
          </div>
        </button>
      {/each}
    </div>
  </div>

  <!-- Date & Time Selection -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Date Picker -->
    <div class="space-y-3">
      <h2 class="text-lg font-semibold text-neutral-900">Select Date</h2>
      <input 
        type="date" 
        bind:value={selectedDate}
        class="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:border-primary-300 
               focus:ring-2 focus:ring-primary-100"
      />
    </div>

    <!-- Time Slots -->
    <div class="space-y-3">
      <h2 class="text-lg font-semibold text-neutral-900">Select Time</h2>
      <div class="grid grid-cols-3 gap-2">
        {#each timeSlots as time}
          <button 
            class="px-3 py-2 text-sm border rounded-lg transition-colors duration-200
                   {selectedTime === time 
                     ? 'border-primary-300 bg-primary-50 text-primary-700' 
                     : 'border-neutral-200 hover:border-primary-200 hover:bg-primary-50/50'}"
            on:click={() => selectedTime = time}
          >
            {time}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Appointment Type -->
  <div class="space-y-3">
    <h2 class="text-lg font-semibold text-neutral-900">Appointment Type</h2>
    <div class="flex gap-3">
      <button 
        class="flex-1 p-4 rounded-xl border transition-all duration-200
               {appointmentType === 'video' 
                 ? 'border-primary-200 bg-primary-50' 
                 : 'border-neutral-200 hover:border-primary-200 hover:bg-primary-50/50'}"
        on:click={() => appointmentType = 'video'}
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <Icon name="video-camera" class="w-5 h-5 text-primary-600" />
          <span class="font-medium text-neutral-900">Video Call</span>
        </div>
        <p class="text-sm text-neutral-500">Consult with your doctor online</p>
      </button>
      <button 
        class="flex-1 p-4 rounded-xl border transition-all duration-200
               {appointmentType === 'inperson' 
                 ? 'border-primary-200 bg-primary-50' 
                 : 'border-neutral-200 hover:border-primary-200 hover:bg-primary-50/50'}"
        on:click={() => appointmentType = 'inperson'}
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <Icon name="office-building" class="w-5 h-5 text-primary-600" />
          <span class="font-medium text-neutral-900">In-Person</span>
        </div>
        <p class="text-sm text-neutral-500">Visit the clinic in person</p>
      </button>
    </div>
  </div>

  <!-- Notes -->
  <div class="space-y-3">
    <h2 class="text-lg font-semibold text-neutral-900">Additional Notes</h2>
    <textarea 
      bind:value={notes}
      placeholder="Any specific concerns or symptoms..."
      class="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-300 
             focus:ring-2 focus:ring-primary-100 min-h-[100px]"
    ></textarea>
  </div>

  <!-- Submit Button -->
  <button 
    class="w-full btn-primary py-3 text-base"
    disabled={!selectedDoctor || !selectedDate || !selectedTime}
  >
    Schedule Appointment
  </button>
</div> 