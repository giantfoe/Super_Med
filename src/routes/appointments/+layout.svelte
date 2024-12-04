<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="card">
  <div class="border-b border-neutral-200 pb-4 mb-6">
    <h1 class="text-2xl font-semibold text-neutral-900">Appointments</h1>
  </div>

  <div class="flex gap-6">
    <!-- Sidebar navigation -->
    <nav class="w-64 flex-shrink-0">
      <div class="space-y-1">
        <a 
          href="/appointments" 
          class="block px-4 py-2 rounded-lg transition-colors duration-200 {
            $page.url.pathname === '/appointments' 
              ? 'bg-primary-50 text-primary-600 font-medium' 
              : 'text-neutral-600 hover:bg-neutral-100'
          }"
        >
          Upcoming
        </a>
        <a 
          href="/appointments/history" 
          class="block px-4 py-2 rounded-lg transition-colors duration-200 {
            $page.url.pathname === '/appointments/history' 
              ? 'bg-primary-50 text-primary-600 font-medium' 
              : 'text-neutral-600 hover:bg-neutral-100'
          }"
        >
          History
        </a>
      </div>
    </nav>

    <!-- Main content area -->
    <div class="flex-1">
      <slot />
    </div>
  </div>
</div> 