<template>
    <div>
      <h1>Time Reports</h1>
      <ReportsComponent />
    </div>
  </template>
  
  <script>
  import ReportsComponent from '../components/ReportsComponent.vue';
  
  export default {
    name: 'ReportsPage',
    components: {
      ReportsComponent
    }
  };
  </script>