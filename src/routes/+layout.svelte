<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.data.title ?? 'SuperMed'}</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50">
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="/" class="text-xl font-bold text-primary-600">SuperMed</a>
        </div>
        <div class="flex items-center space-x-4">
          <a href="/appointments" class="text-neutral-600 hover:text-primary-600">Appointments</a>
          <a href="/prescriptions" class="text-neutral-600 hover:text-primary-600">Prescriptions</a>
          <a href="/doctors" class="text-neutral-600 hover:text-primary-600">Find Doctors</a>
        </div>
      </div>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <slot />
  </main>
</div> 