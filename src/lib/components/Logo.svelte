<script lang="ts">
  export let size: "sm" | "md" | "lg" = "md";
  export let type: "full" | "icon" = "full";

  const sizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  };
</script>

{#if type === "full"}
  <div class="flex items-center gap-2">
    <div class="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-2 shadow-md">
      <svg class={sizes[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L15 7M12 4L9 7M12 4V14M15 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9C3 7.89543 3.89543 7 5 7H9M15 7L12 14M9 7L12 14" 
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="font-bold text-neutral-900 text-xl">Medikated</span>
  </div>
{:else}
  <div class="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-2 shadow-md">
    <svg class={iconSizes[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L15 7M12 4L9 7M12 4V14M15 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9C3 7.89543 3.89543 7 5 7H9M15 7L12 14M9 7L12 14" 
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
{/if} 