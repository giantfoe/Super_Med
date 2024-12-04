export async function load() {
  return {
    someSlowData: loadSlowData(), // Returns Promise, doesn't await
    fastData: await loadFastData() // Awaits fast data
  };
} 