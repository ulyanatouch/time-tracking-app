<template>
    <div>
      <h2>Add Time Entry</h2>
      <form @submit.prevent="addTimeEntry">
        <div>
          <label for="date">Date:</label>
          <input type="date" v-model="formattedDate" required lang="en"/>
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
      <ReportsComponent />
    </div>
  </template>
  
  <script>
  import { ref, push } from "firebase/database";
  import { database } from "../firebase";
  import { format } from 'date-fns';
  import ReportsComponent from '../components/ReportsComponent.vue';

  export default {
    name: 'TimeEntryComponent',
    components: {
    ReportsComponent
  },
    data() {
      return {
        date: '',
        category: '',
        hours: '',
        formattedDate: ''
      };
    },
    watch: {
      date(newDate) {
      if (newDate) {
        this.formattedDate = format(new Date(newDate), 'yyyy-MM-dd'); 
      } else {
        this.formattedDate = '';
      }
    }
  },
    methods: {
      addTimeEntry() {
        const timeEntryRef = ref(database, 'time-entries');
        const newEntry = {
          id: Date.now(),
          date: this.formattedDate,
          category: this.category,
          hours: this.hours
        };
        push(timeEntryRef, newEntry);
        this.date = '';
        this.category = '';
        this.hours = '';
        this.formattedDate = '';
      }
    }
  };
  </script>
  
 