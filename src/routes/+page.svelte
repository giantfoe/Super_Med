<script lang="ts">
  import { Icon } from 'svelte-hero-icons';
</script>

<div class="py-8">
  <div class="text-center mb-12">
    <h1 class="text-3xl font-bold text-neutral-900 mb-4">
      Your Health Companion
    </h1>
    <p class="text-lg text-neutral-600 max-w-md mx-auto">
      Simple, modern healthcare management at your fingertips
    </p>
  </div>

  <div class="grid grid-cols-1 gap-6">
    <a 
      href="/appointments" 
      class="group card p-6 hover:shadow-lg transition-all duration-300 border border-neutral-200/80"
    >
      <div class="flex items-start gap-4">
        <div class="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
          <Icon name="calendar" class="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h2 class="text-xl font-semibold text-neutral-900 mb-2">Book Appointments</h2>
          <p class="text-neutral-600 leading-relaxed">Schedule and manage your medical visits with ease</p>
        </div>
      </div>
    </a>

    <a 
      href="/prescriptions" 
      class="group card p-6 hover:shadow-lg transition-all duration-300 border border-neutral-200/80"
    >
      <div class="flex items-start gap-4">
        <div class="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
          <Icon name="clipboard-list" class="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h2 class="text-xl font-semibold text-neutral-900 mb-2">Manage Prescriptions</h2>
          <p class="text-neutral-600 leading-relaxed">Track medications and get timely refill reminders</p>
        </div>
      </div>
    </a>

    <a 
      href="/doctors" 
      class="group card p-6 hover:shadow-lg transition-all duration-300 border border-neutral-200/80"
    >
      <div class="flex items-start gap-4">
        <div class="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
          <Icon name="user-circle" class="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h2 class="text-xl font-semibold text-neutral-900 mb-2">Find Specialists</h2>
          <p class="text-neutral-600 leading-relaxed">Connect with qualified healthcare professionals</p>
        </div>
      </div>
    </a>
  </div>
</div> 
