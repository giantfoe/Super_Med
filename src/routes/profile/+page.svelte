<script lang="ts">
  import { Icon } from 'svelte-hero-icons';

  // Mock data - will replace with Supabase
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    bloodType: "O+",
    allergies: ["Penicillin", "Peanuts"],
    emergencyContact: {
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543"
    }
  };

  const settings = {
    notifications: {
      appointments: true,
      medications: true,
      reminders: true,
      updates: false
    },
    preferences: {
      language: "English",
      theme: "light",
      timeFormat: "12h"
    }
  };
</script>

<!-- Header -->
<div class="sticky top-14 bg-white border-b border-neutral-200/80 z-10 px-4 py-3 -mx-4">
  <div class="flex items-center justify-between">
    <h1 class="text-lg font-semibold text-neutral-900">Profile</h1>
    <button class="bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-medium
                   hover:bg-primary-100 transition-colors flex items-center gap-1.5 border border-primary-200">
      <Icon name="pencil" class="w-4 h-4" />
      Edit
    </button>
  </div>
</div>

<div class="pt-4 grid grid-cols-1 gap-4">
  <!-- Profile Overview -->
  <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
    <div class="flex items-center gap-4 mb-4">
      <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
        <Icon name="user-circle" class="w-8 h-8 text-primary-600" />
      </div>
      <div>
        <h2 class="font-medium text-neutral-900">{profile.name}</h2>
        <p class="text-sm text-neutral-500">{profile.email}</p>
      </div>
    </div>

    <!-- Basic Info -->
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Phone</p>
        <p class="text-sm font-medium">{profile.phone}</p>
      </div>
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Date of Birth</p>
        <p class="text-sm font-medium">{new Date(profile.dateOfBirth).toLocaleDateString()}</p>
      </div>
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Gender</p>
        <p class="text-sm font-medium">{profile.gender}</p>
      </div>
      <div class="space-y-1">
        <p class="text-sm text-neutral-500">Blood Type</p>
        <p class="text-sm font-medium">{profile.bloodType}</p>
      </div>
    </div>
  </div>

  <!-- Medical Info -->
  <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
    <h2 class="text-base font-semibold text-neutral-900 mb-3">Medical Information</h2>
    
    <!-- Allergies -->
    <div class="mb-4">
      <p class="text-sm text-neutral-500 mb-2">Allergies</p>
      <div class="flex flex-wrap gap-2">
        {#each profile.allergies as allergy}
          <span class="px-2 py-1 bg-accent-50 text-accent-600 rounded-full text-xs border border-accent-200">
            {allergy}
          </span>
        {/each}
      </div>
    </div>

    <!-- Emergency Contact -->
    <div class="pt-4 border-t border-neutral-100">
      <p class="text-sm text-neutral-500 mb-2">Emergency Contact</p>
      <div class="space-y-2">
        <p class="text-sm font-medium">{profile.emergencyContact.name}</p>
        <p class="text-sm text-neutral-600">{profile.emergencyContact.relationship}</p>
        <a 
          href={`tel:${profile.emergencyContact.phone}`}
          class="text-sm text-primary-600 flex items-center gap-1"
        >
          <Icon name="phone" class="w-4 h-4" />
          {profile.emergencyContact.phone}
        </a>
      </div>
    </div>
  </div>

  <!-- Notification Settings -->
  <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
    <h2 class="text-base font-semibold text-neutral-900 mb-3">Notifications</h2>
    <div class="space-y-4">
      {#each Object.entries(settings.notifications) as [key, enabled]}
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium capitalize">{key}</p>
            <p class="text-xs text-neutral-500">
              Receive notifications for {key}
            </p>
          </div>
          <button 
            class="w-11 h-6 rounded-full relative transition-colors duration-200
                   {enabled ? 'bg-primary-600' : 'bg-neutral-200'}"
          >
            <span 
              class="absolute w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform duration-200
                     {enabled ? 'translate-x-5' : 'translate-x-1'}"
            />
          </button>
        </div>
      {/each}
    </div>
  </div>

  <!-- Preferences -->
  <div class="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
    <h2 class="text-base font-semibold text-neutral-900 mb-3">Preferences</h2>
    <div class="space-y-4">
      {#each Object.entries(settings.preferences) as [key, value]}
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium capitalize">{key}</p>
          <select 
            class="text-sm border border-neutral-200 rounded-lg px-3 py-1.5
                   focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
          >
            <option>{value}</option>
          </select>
        </div>
      {/each}
    </div>
  </div>

  <!-- Actions -->
  <div class="space-y-2">
    <button class="w-full btn-secondary py-2 flex items-center justify-center gap-2">
      <Icon name="shield-check" class="w-4 h-4" />
      Privacy Settings
    </button>
    <button class="w-full text-red-600 bg-red-50 border border-red-200 rounded-xl py-2 
                   hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
      <Icon name="logout" class="w-4 h-4" />
      Sign Out
    </button>
  </div>
</div> 