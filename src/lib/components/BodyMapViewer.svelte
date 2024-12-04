<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { BodyPart } from '$lib/types';

  const dispatch = createEventDispatcher();
  
  export let selectedPart: string = '';
  export let highlightedParts: string[] = [];

  // Body part definitions with SVG paths and metadata
  const bodyParts: Record<string, BodyPart> = {
    head: {
      id: 'head',
      path: 'M50,10 C70,10 80,30 80,50 L20,50 C20,30 30,10 50,10',
      label: 'Head',
      symptoms: ['Headache', 'Dizziness', 'Vision Problems'],
      relatedSystems: ['Neurological']
    },
    chest: {
      id: 'chest',
      path: 'M20,50 L80,50 L90,120 L10,120 Z',
      label: 'Chest',
      symptoms: ['Chest Pain', 'Shortness of Breath', 'Cough'],
      relatedSystems: ['Cardiovascular', 'Respiratory']
    },
    abdomen: {
      id: 'abdomen',
      path: 'M10,120 L90,120 L95,180 L5,180 Z',
      label: 'Abdomen',
      symptoms: ['Abdominal Pain', 'Nausea', 'Bloating'],
      relatedSystems: ['Digestive']
    }
    // ... more body parts
  };

  function handlePartClick(partId: string) {
    selectedPart = partId;
    dispatch('selectPart', {
      part: bodyParts[partId],
      symptoms: bodyParts[partId].symptoms
    });
  }

  function handlePartHover(partId: string) {
    dispatch('hoverPart', {
      part: bodyParts[partId],
      symptoms: bodyParts[partId].symptoms
    });
  }
</script>

<div class="body-map-container">
  <svg 
    viewBox="0 0 100 400" 
    class="body-map"
  >
    {#each Object.entries(bodyParts) as [id, part]}
      <path
        d={part.path}
        class="body-part"
        class:selected={selectedPart === id}
        class:highlighted={highlightedParts.includes(id)}
        on:click={() => handlePartClick(id)}
        on:mouseenter={() => handlePartHover(id)}
      />
      <text
        x={part.labelPosition?.x || 50}
        y={part.labelPosition?.y || 50}
        class="body-part-label"
      >
        {part.label}
      </text>
    {/each}
  </svg>

  {#if selectedPart}
    <div class="part-details">
      <h3>{bodyParts[selectedPart].label}</h3>
      <h4>Common Symptoms:</h4>
      <ul>
        {#each bodyParts[selectedPart].symptoms as symptom}
          <li>{symptom}</li>
        {/each}
      </ul>
      <h4>Related Systems:</h4>
      <ul>
        {#each bodyParts[selectedPart].relatedSystems as system}
          <li>{system}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .body-map-container {
    display: flex;
    gap: 2rem;
    padding: 1rem;
  }

  .body-map {
    width: 300px;
    height: auto;
  }

  .body-part {
    fill: #e2e8f0;
    stroke: #64748b;
    stroke-width: 0.5;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .body-part:hover {
    fill: #cbd5e1;
  }

  .body-part.selected {
    fill: #93c5fd;
  }

  .body-part.highlighted {
    fill: #fde68a;
  }

  .body-part-label {
    font-size: 3px;
    fill: #475569;
    text-anchor: middle;
    pointer-events: none;
  }

  .part-details {
    padding: 1rem;
    background: #f8fafc;
    border-radius: 0.5rem;
    min-width: 200px;
  }

  .part-details h3 {
    margin: 0 0 1rem 0;
    color: #1e293b;
  }

  .part-details h4 {
    margin: 0.5rem 0;
    color: #475569;
  }

  .part-details ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    color: #64748b;
  }
</style> 