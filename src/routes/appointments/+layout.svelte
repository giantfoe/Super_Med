<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="card p-4 md:p-6">
  <div class="border-b border-neutral-200 pb-4 mb-4">
    <h1 class="text-xl font-semibold text-neutral-900">Appointments</h1>
  </div>

  <!-- Mobile-friendly navigation -->
  <div class="flex flex-col md:flex-row gap-4 md:gap-6">
    <nav class="md:w-64 flex-shrink-0">
      <div class="flex md:block space-x-2 md:space-x-0 md:space-y-1 overflow-x-auto pb-2 md:pb-0">
        <a 
          href="/appointments" 
          class="flex-shrink-0 block px-4 py-2 rounded-lg transition-colors duration-200 text-sm {
            $page.url.pathname === '/appointments' 
              ? 'bg-primary-50 text-primary-600 font-medium' 
              : 'text-neutral-600 hover:bg-neutral-100'
          }"
        >
          Upcoming
        </a>
        <a 
          href="/appointments/history" 
          class="flex-shrink-0 block px-4 py-2 rounded-lg transition-colors duration-200 text-sm {
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