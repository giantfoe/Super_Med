<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  // Mock data - will replace with Supabase
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 128,
      nextAvailable: "Today",
      tags: ["Heart Disease", "Hypertension"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 96,
      nextAvailable: "Tomorrow",
      tags: ["Skin Care", "Acne"]
    }
  ];

  let searchQuery = "";
  let selectedSpecialty = "all";
  let selectedAvailability = "all";

  const specialties = [
    { value: "all", label: "All Specialties" },
    { value: "cardiology", label: "Cardiology" },
    { value: "dermatology", label: "Dermatology" },
    { value: "pediatrics", label: "Pediatrics" }
  ];

  const availabilityOptions = [
    { value: "all", label: "Any Time" },
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "week", label: "This Week" }
  ];
</script>

<!-- Header -->
<div class="sticky top-14 bg-white border-b border-neutral-200/80 z-10 px-4 py-3 -mx-4">
  <div class="flex items-center justify-between">
    <h1 class="text-lg font-semibold text-neutral-900">Find Doctors</h1>
    <button class="bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-medium
                   hover:bg-primary-100 transition-colors flex items-center gap-1.5 border border-primary-200">
      <Icon name="filter" class="w-4 h-4" />
      Filter
    </button>
  </div>
</div>

<!-- Search and Filters -->
<div class="pt-4 space-y-4">
  <!-- Search -->
  <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
    <div class="relative">
      <Icon name="search" class="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search by name or specialty"
        class="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 
               focus:border-primary-300 focus:ring-2 focus:ring-primary-100 
               placeholder:text-neutral-400 text-sm"
      />
    </div>

    <!-- Filter Pills -->
    <div class="flex gap-2 mt-4 overflow-x-auto pb-1">
      <select
        bind:value={selectedSpecialty}
        class="px-3 py-1.5 rounded-full text-sm border border-neutral-200 bg-white
               focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
      >
        {#each specialties as specialty}
          <option value={specialty.value}>{specialty.label}</option>
        {/each}
      </select>

      <select
        bind:value={selectedAvailability}
        class="px-3 py-1.5 rounded-full text-sm border border-neutral-200 bg-white
               focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
      >
        {#each availabilityOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>
  </div>

  <!-- Doctor List -->
  <div class="grid grid-cols-1 gap-3">
    {#each doctors as doctor}
      <a 
        href="/doctors/{doctor.id}"
        class="block bg-white rounded-xl p-4 shadow-sm border border-neutral-200 
               hover:shadow-md hover:border-primary-200 transition-all duration-300"
      >
        <div class="flex items-start gap-3">
          <!-- Doctor Avatar -->
          <div class="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
            <Icon name="user-circle" class="w-6 h-6 text-primary-600" />
          </div>

          <div class="flex-1 min-w-0">
            <!-- Header -->
            <div class="flex items-start justify-between mb-2">
              <div>
                <h3 class="font-medium text-neutral-900">{doctor.name}</h3>
                <p class="text-sm text-neutral-500">{doctor.specialty}</p>
              </div>
              <div class="flex items-center text-sm">
                <Icon name="star" class="w-4 h-4 text-yellow-400 mr-1" />
                <span class="font-medium">{doctor.rating}</span>
                <span class="text-neutral-400 ml-1">({doctor.reviews})</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-3">
              {#each doctor.tags as tag}
                <span class="px-2 py-1 bg-primary-50 text-primary-600 rounded-full text-xs border border-primary-200">
                  {tag}
                </span>
              {/each}
            </div>

            <!-- Next Available -->
            <div class="flex items-center justify-between">
              <div class="flex items-center text-sm text-neutral-600">
                <Icon name="clock" class="w-4 h-4 mr-1.5" />
                <span>Next available: {doctor.nextAvailable}</span>
              </div>
              <span class="text-primary-600 text-sm font-medium">View Profile →</span>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div> 