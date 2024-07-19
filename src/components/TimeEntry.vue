<template>
    <div>
      <h2>Add Time Entry</h2>
      <form @submit.prevent="addTimeEntry">
        <div>
          <label for="date">Date:</label>
          <input type="date" v-model="date" required />
        </div>
        <div>
          <label for="category">Category:</label>
          <input type="text" v-model="category" required />
        </div>
        <div>
          <label for="hours">Hours:</label>
          <input type="number" v-model="hours" required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, push } from "firebase/database";
  import { database } from "../firebase";
  
  export default {
    name: 'TimeEntryComponent',
    data() {
      return {
        date: '',
        category: '',
        hours: ''
      };
    },
    methods: {
      addTimeEntry() {
        const timeEntryRef = ref(database, 'time-entries');
        const newEntry = {
          date: this.date,
          category: this.category,
          hours: this.hours
        };
        push(timeEntryRef, newEntry);
        this.date = '';
        this.category = '';
        this.hours = '';
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
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
  