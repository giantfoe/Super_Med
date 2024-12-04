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
      image: "/doctors/sarah-wilson.jpg", // We'll add these images later
      tags: ["Heart Disease", "Hypertension"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 96,
      nextAvailable: "Tomorrow",
      image: "/doctors/michael-chen.jpg",
      tags: ["Skin Care", "Acne"]
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Pediatrician",
      rating: 4.9,
      reviews: 156,
      nextAvailable: "Mar 15",
      image: "/doctors/emily-brown.jpg",
      tags: ["Child Care", "Vaccinations"]
    }
  ];

  let searchQuery = "";
  let selectedSpecialty = "all";
  let selectedAvailability = "all";

  const specialties = [
    "all",
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Psychiatrist"
  ];

  const availabilityOptions = [
    { value: "all", label: "Any Time" },
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "week", label: "This Week" }
  ];
</script>

<div class="py-4 space-y-4">
  <!-- Search and Filters -->
  <div class="card space-y-4">
    <!-- Search -->
    <div class="relative">
      <Icon name="search" class="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search doctors by name or specialty"
        class="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 
               focus:border-primary-300 focus:ring-2 focus:ring-primary-100 
               placeholder:text-neutral-400 text-sm"
      />
    </div>

    <!-- Filters -->
    <div class="flex gap-3 overflow-x-auto pb-2">
      <select
        bind:value={selectedSpecialty}
        class="px-3 py-1.5 rounded-lg border border-neutral-200 text-sm 
               focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
      >
        {#each specialties as specialty}
          <option value={specialty.toLowerCase()}>
            {specialty === 'all' ? 'All Specialties' : specialty}
          </option>
        {/each}
      </select>

      <select
        bind:value={selectedAvailability}
        class="px-3 py-1.5 rounded-lg border border-neutral-200 text-sm
               focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
      >
        {#each availabilityOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>
  </div>

  <!-- Doctor List -->
  <div class="space-y-4">
    {#each doctors as doctor}
      <div class="card hover:scale-[1.01] transition-transform duration-300">
        <div class="flex gap-4">
          <!-- Doctor Image -->
          <div class="w-16 h-16 rounded-full bg-primary-100 flex-shrink-0">
            <!-- We'll add proper images later -->
            <div class="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-primary-200 
                        flex items-center justify-center text-primary-600">
              <Icon name="user-circle" class="w-8 h-8" />
            </div>
          </div>

          <!-- Doctor Info -->
          <div class="flex-1 min-w-0">
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
                <span class="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs">
                  {tag}
                </span>
              {/each}
            </div>

            <!-- Next Available & Book Button -->
            <div class="flex items-center justify-between">
              <div class="flex items-center text-sm text-neutral-600">
                <Icon name="clock" class="w-4 h-4 mr-1" />
                <span>Next available: {doctor.nextAvailable}</span>
              </div>
              <a 
                href="/appointments/new?doctor={doctor.id}" 
                class="btn-primary text-sm py-1.5 px-4"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div> 