<template>
    <div>
      <h1>Touch Time Tracking App</h1>
      <TimeEntry />
    </div>
  </template>
  
  <script>
  import TimeEntry from '../components/TimeEntry.vue';
  
  export default {
    name: 'HomePage',
    components: {
      TimeEntry
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #38a173;
  }
  </style>
  