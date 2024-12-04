import { initializeMockData } from '$lib/utils/dataGenerator';
import { browser } from '$app/environment';

if (browser) {
  initializeMockData();
} 