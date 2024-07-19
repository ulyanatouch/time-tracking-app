<template>
    <div>
      <h1>Time Reports</h1>
      <TimeReport />
    </div>
  </template>
  
  <script>
  import TimeReport from '../components/TimeReport.vue';
  
  export default {
    name: 'ReportsPage',
    components: {
      TimeReport
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background: #ecf0f1;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  