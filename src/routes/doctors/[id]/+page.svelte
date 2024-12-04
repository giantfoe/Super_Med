<script lang="ts">
  import { Icon } from 'svelte-hero-icons';
  
  // Mock data - will replace with Supabase
  const doctor = {
    id: 1,
    name: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 128,
    experience: "15+ years",
    education: "Stanford Medical School",
    languages: ["English", "Spanish"],
    about: "Dr. Wilson is a board-certified cardiologist specializing in preventive cardiology and heart disease management.",
    nextAvailable: "Today",
    location: "Medical Center, Floor 3",
    image: "/doctors/sarah-wilson.jpg",
    tags: ["Heart Disease", "Hypertension", "Preventive Care"],
    availableSlots: [
      { date: "2024-03-15", slots: ["09:00", "10:30", "14:00"] },
      { date: "2024-03-16", slots: ["11:00", "13:30", "15:00"] }
    ]
  };
</script>

<div class="py-4 space-y-4">
  <!-- Doctor Profile -->
  <div class="card">
    <div class="flex gap-4">
      <!-- Doctor Image -->
      <div class="w-24 h-24 rounded-full bg-primary-100 flex-shrink-0">
        <div class="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-primary-200 
                    flex items-center justify-center text-primary-600">
          <Icon name="user-circle" class="w-12 h-12" />
        </div>
      </div>

      <!-- Basic Info -->
      <div class="flex-1">
        <div class="flex items-start justify-between mb-2">
          <div>
            <h1 class="text-xl font-semibold text-neutral-900">{doctor.name}</h1>
            <p class="text-neutral-500">{doctor.specialty}</p>
          </div>
          <div class="flex items-center text-sm">
            <Icon name="star" class="w-4 h-4 text-yellow-400 mr-1" />
            <span class="font-medium">{doctor.rating}</span>
            <span class="text-neutral-400 ml-1">({doctor.reviews})</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mt-3">
          {#each doctor.tags as tag}
            <span class="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs">
              {tag}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="grid grid-cols-2 gap-3">
    <button class="btn-primary">
      Book Appointment
    </button>
    <button class="btn-secondary">
      Send Message
    </button>
  </div>

  <!-- About Section -->
  <div class="card space-y-4">
    <h2 class="text-lg font-semibold text-neutral-900">About</h2>
    <p class="text-neutral-600 text-sm leading-relaxed">
      {doctor.about}
    </p>
    
    <!-- Details Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Experience</p>
        <p class="text-sm font-medium">{doctor.experience}</p>
      </div>
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Education</p>
        <p class="text-sm font-medium">{doctor.education}</p>
      </div>
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Languages</p>
        <p class="text-sm font-medium">{doctor.languages.join(", ")}</p>
      </div>
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Location</p>
        <p class="text-sm font-medium">{doctor.location}</p>
      </div>
    </div>
  </div>

  <!-- Available Slots -->
  <div class="card">
    <h2 class="text-lg font-semibold text-neutral-900 mb-4">Available Slots</h2>
    <div class="space-y-4">
      {#each doctor.availableSlots as day}
        <div>
          <h3 class="text-sm font-medium text-neutral-700 mb-2">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</h3>
          <div class="grid grid-cols-3 gap-2">
            {#each day.slots as time}
              <button class="px-3 py-2 text-sm border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                {time}
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div> 