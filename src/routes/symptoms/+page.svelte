<script>
  import { mockData } from '$lib/stores/mockData';
  let selectedSymptoms = [];
  let possibleConditions = [];

  function checkSymptoms() {
    possibleConditions = mockData.conditions.filter(condition =>
      selectedSymptoms.some(symptom => condition.symptoms.includes(symptom))
    );
  }
</script>

<div>
  <h2>Symptom Checker</h2>
  {#each mockData.symptoms as symptom}
    <label>
      <input type="checkbox" bind:group={selectedSymptoms} value={symptom} />
      {symptom}
    </label>
  {/each}
  <button on:click={checkSymptoms}>Check</button>

  {#if possibleConditions.length}
    <h3>Possible Conditions</h3>
    <ul>
      {#each possibleConditions as condition}
        <li>{condition.name}</li>
      {/each}
    </ul>
  {/if}
</div> 