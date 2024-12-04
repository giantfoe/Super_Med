<script lang="ts">
  import { addAppointment } from '$lib/stores/appointments';
  import { v4 as uuid } from 'uuid';
  
  let date = '';
  let time = '';
  let description = '';
  let showForm = false;

  function handleSubmit() {
    addAppointment({
      id: uuid(),
      date,
      time,
      description
    });
    showForm = false;
    date = '';
    time = '';
    description = '';
  }
</script>

{#if showForm}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">Schedule Appointment</h2>
      
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            bind:value={date}
            required
            class="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label for="time">Time</label>
          <input
            type="time"
            id="time"
            bind:value={time}
            required
            class="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label for="description">Description</label>
          <textarea
            id="description"
            bind:value={description}
            required
            class="w-full border p-2 rounded"
          />
        </div>

        <div class="flex justify-end gap-2">
          <button
            type="button"
            on:click={() => showForm = false}
            class="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-primary text-white rounded"
          >
            Schedule
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

<button
  on:click={() => showForm = true}
  class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
>
  Book Appointment
</button> 