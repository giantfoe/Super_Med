<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import { Icon } from 'svelte-hero-icons';
</script>

<svelte:head>
  <title>{$page.data.title ?? 'SuperMed'}</title>
</svelte:head>

<div class="min-h-screen bg-white flex flex-col">
  <!-- Top Header - Minimal -->
  <header class="bg-white border-b border-neutral-200/80 sticky top-0 z-50">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex h-14 items-center justify-between">
        <a href="/" class="text-lg font-bold text-primary-600">
          SuperMed
        </a>
        <button class="p-2 text-neutral-600 hover:text-primary-600">
          <Icon name="user-circle" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-1 max-w-2xl w-full mx-auto px-4 pb-20">
    <slot />
  </main>

  <!-- Bottom Navigation Bar -->
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200/80 z-50">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex justify-around py-2">
        <a 
          href="/" 
          class="flex flex-col items-center p-2 {
            $page.url.pathname === '/' 
              ? 'text-primary-600' 
              : 'text-neutral-600'
          }"
        >
          <Icon name="home" class="w-6 h-6" />
          <span class="text-xs mt-1">Home</span>
        </a>
        
        <a 
          href="/appointments" 
          class="flex flex-col items-center p-2 {
            $page.url.pathname.includes('/appointments') 
              ? 'text-primary-600' 
              : 'text-neutral-600'
          }"
        >
          <Icon name="calendar" class="w-6 h-6" />
          <span class="text-xs mt-1">Appointments</span>
        </a>
        
        <a 
          href="/prescriptions" 
          class="flex flex-col items-center p-2 {
            $page.url.pathname.includes('/prescriptions') 
              ? 'text-primary-600' 
              : 'text-neutral-600'
          }"
        >
          <Icon name="clipboard-list" class="w-6 h-6" />
          <span class="text-xs mt-1">Prescriptions</span>
        </a>
        
        <a 
          href="/doctors" 
          class="flex flex-col items-center p-2 {
            $page.url.pathname.includes('/doctors') 
              ? 'text-primary-600' 
              : 'text-neutral-600'
          }"
        >
          <Icon name="user-group" class="w-6 h-6" />
          <span class="text-xs mt-1">Doctors</span>
        </a>
      </div>
    </div>
  </nav>
</div> 