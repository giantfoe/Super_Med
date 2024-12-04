<div class="card" style="--card-bg: {backgroundColor}">
  <slot />
</div>

<style>
  .card {
    background-color: var(--card-bg, white);
    /* other styles */
  }
</style> 