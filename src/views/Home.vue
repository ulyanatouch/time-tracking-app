<template>
    <div>
      <h1>Touch Time Tracking App</h1>
      <TimeEntry />
      <CategoryManagerComponent />
    </div>
  </template>
  
  <script>
  import TimeEntry from '../components/TimeEntry.vue';
  import CategoryManagerComponent from '../components/CategoryManager.vue';
  
  export default {
    name: 'HomePage',
    components: {
      CategoryManagerComponent,
      TimeEntry
    }
  };
  </script>