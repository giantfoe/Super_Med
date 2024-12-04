<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  let selectedSymptoms: string[] = [];
  let searchQuery = "";

  const commonSymptoms = [
    "Headache",
    "Fever",
    "Cough",
    "Fatigue",
    "Nausea",
    "Back Pain",
    "Joint Pain",
    "Dizziness"
  ];

  const suggestedConditions = [
    {
      name: "Migraine",
      matchPercentage: 85,
      symptoms: ["Headache", "Nausea", "Fatigue"],
      specialists: ["Neurologist", "Headache Specialist"]
    },
    {
      name: "Common Cold",
      matchPercentage: 75,
      symptoms: ["Cough", "Fever", "Fatigue"],
      specialists: ["General Physician", "ENT Specialist"]
    }
  ];

  function toggleSymptom(symptom: string) {
    if (selectedSymptoms.includes(symptom)) {
      selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
    } else {
      selectedSymptoms = [...selectedSymptoms, symptom];
    }
  }
</script>

<!-- Header -->
<div class="sticky top-14 bg-white border-b border-neutral-200/80 z-10 px-4 py-3 -mx-4">
  <div class="flex items-center justify-between">
    <h1 class="text-lg font-semibold text-neutral-900">Symptom Checker</h1>
  </div>
</div>

<div class="pt-4 space-y-4">
  <!-- Search Symptoms -->
  <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
    <div class="relative">
      <Icon name="search" class="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search symptoms..."
        class="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 
               focus:border-primary-300 focus:ring-2 focus:ring-primary-100 
               placeholder:text-neutral-400 text-sm"
      />
    </div>

    <!-- Selected Symptoms -->
    {#if selectedSymptoms.length > 0}
      <div class="flex flex-wrap gap-2 mt-4">
        {#each selectedSymptoms as symptom}
          <button 
            class="px-3 py-1 rounded-full text-xs border bg-primary-50 text-primary-600 
                   border-primary-200 flex items-center gap-1.5"
            on:click={() => toggleSymptom(symptom)}
          >
            {symptom}
            <Icon name="x" class="w-3 h-3" />
          </button>
        {/each}
      </div>
    {/if}

    <!-- Common Symptoms -->
    <div class="mt-4">
      <h3 class="text-sm font-medium text-neutral-900 mb-3">Common Symptoms</h3>
      <div class="flex flex-wrap gap-2">
        {#each commonSymptoms as symptom}
          <button 
            class="px-3 py-1.5 rounded-full text-sm border transition-colors
                   {selectedSymptoms.includes(symptom)
                     ? 'bg-primary-50 text-primary-600 border-primary-200'
                     : 'bg-white text-neutral-600 border-neutral-200 hover:border-primary-200'}"
            on:click={() => toggleSymptom(symptom)}
          >
            {symptom}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Matched Conditions -->
  {#if selectedSymptoms.length > 0}
    <div class="space-y-3">
      <h2 class="text-lg font-semibold text-neutral-900">Possible Conditions</h2>
      
      {#each suggestedConditions as condition}
        <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
          <div class="flex items-start justify-between mb-3">
            <div>
              <h3 class="font-medium text-neutral-900">{condition.name}</h3>
              <p class="text-sm text-neutral-500">
                Matches {condition.matchPercentage}% of your symptoms
              </p>
            </div>
            <div class="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <span class="text-primary-600 font-semibold">{condition.matchPercentage}%</span>
            </div>
          </div>

          <!-- Matching Symptoms -->
          <div class="space-y-2">
            <p class="text-sm font-medium text-neutral-700">Matching Symptoms:</p>
            <div class="flex flex-wrap gap-2">
              {#each condition.symptoms as symptom}
                <span class="px-2 py-1 rounded-full text-xs bg-accent-50 text-accent-600 border border-accent-200">
                  {symptom}
                </span>
              {/each}
            </div>
          </div>

          <!-- Recommended Specialists -->
          <div class="mt-4 pt-4 border-t border-neutral-100">
            <p class="text-sm font-medium text-neutral-700 mb-2">Recommended Specialists:</p>
            <div class="flex flex-wrap gap-2">
              {#each condition.specialists as specialist}
                <span class="px-2 py-1 rounded-full text-xs bg-secondary-50 text-secondary-600 
                           border border-secondary-200">
                  {specialist}
                </span>
              {/each}
            </div>
          </div>

          <!-- Action Button -->
          <div class="mt-4">
            <a 
              href="/appointments/new" 
              class="btn-primary w-full justify-center text-sm py-2"
            >
              Book Consultation
            </a>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div> 