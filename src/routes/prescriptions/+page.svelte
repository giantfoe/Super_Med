<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  // Mock data - will replace with Supabase
  const prescriptions = [
    {
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
      nextRefill: "2024-04-01"
    },
    {
      id: 2,
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "2024-02-15",
      endDate: "2024-05-15",
      remainingDays: 60,
      remainingRefills: 1,
      doctor: "Dr. Michael Chen",
      status: "inactive",
      instructions: "Take with meals",
      nextRefill: "2024-03-15"
    }
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case 'active':
        return 'bg-accent-50 text-accent-600 border-accent-200';
      case 'inactive':
        return 'bg-neutral-50 text-neutral-500 border-neutral-200';
      default:
        return 'bg-neutral-50 text-neutral-500 border-neutral-200';
    }
  };
</script>

<!-- Header -->
<div class="sticky top-14 bg-white border-b border-neutral-200/80 z-10 px-4 py-3 -mx-4">
  <div class="flex items-center justify-between">
    <h1 class="text-lg font-semibold text-neutral-900">Prescriptions</h1>
    <button class="bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-medium
                   hover:bg-primary-100 transition-colors flex items-center gap-1.5 border border-primary-200">
      <Icon name="plus" class="w-4 h-4" />
      Add New
    </button>
  </div>
</div>

<!-- Prescription Grid -->
<div class="pt-4 grid grid-cols-1 gap-3">
  {#each prescriptions as prescription}
    <a 
      href="/prescriptions/{prescription.id}" 
      class="block bg-white rounded-xl p-4 shadow-sm border border-neutral-200 
             hover:shadow-md hover:border-primary-200 transition-all duration-300"
    >
      <div class="flex items-start gap-3">
        <!-- Icon -->
        <div class="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
          <Icon name="pill" class="w-5 h-5 text-primary-600" />
        </div>

        <div class="flex-1 min-w-0">
          <!-- Header -->
          <div class="flex items-start justify-between mb-2">
            <div>
              <h3 class="font-medium text-neutral-900 mb-0.5">{prescription.medication}</h3>
              <p class="text-sm text-neutral-500">{prescription.dosage} • {prescription.frequency}</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs border flex items-center gap-1 capitalize
                       {getStatusStyles(prescription.status)}">
              <span class="w-1.5 h-1.5 rounded-full 
                         {prescription.status === 'active' ? 'bg-accent-500' : 'bg-neutral-400'}" />
              {prescription.status}
            </span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full bg-neutral-100 rounded-full h-1.5 mb-3">
            <div 
              class="bg-primary-500 h-1.5 rounded-full transition-all duration-500" 
              style="width: {(prescription.remainingDays / 90) * 100}%"
            />
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center text-neutral-600">
              <Icon name="calendar" class="w-4 h-4 mr-1.5" />
              <span>{prescription.remainingDays} days left</span>
            </div>
            <div class="flex items-center text-neutral-600">
              <Icon name="refresh" class="w-4 h-4 mr-1.5" />
              <span>{prescription.remainingRefills} refills</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  {/each}
</div> 