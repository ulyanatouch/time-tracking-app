<template>
  <div>
    <h2>Reports</h2>
    <button @click="toggleView">{{ isWeekly ? 'Show All' : 'Show Weekly' }}</button>
    <div v-if="isWeekly">
      <div v-for="week in weeklyReports" :key="week.start">
        <h3>{{ formatWeek(week.start, week.end) }}</h3>
        <ul>
          <li v-for="entry in week.entries" :key="entry.id">
            {{ entry.date }} - {{ entry.category }}: {{ entry.hours }} hours
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <ul>
        <li v-for="entry in timeEntries" :key="entry.id">
          {{ entry.date }} - {{ entry.category }}: {{ entry.hours }} hours
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import { startOfWeek, endOfWeek, format } from 'date-fns';

export default {
  name: 'ReportsComponent',
  data() {
    return {
      timeEntries: [],
      weeklyReports: [],
      isWeekly: false
    };
  },
  created() {
    const timeEntryRef = ref(database, 'time-entries');
    onValue(timeEntryRef, (snapshot) => {
      const entries = [];
      snapshot.forEach((childSnapshot) => {
        const entry = childSnapshot.val();
        entry.id = childSnapshot.key;
        entries.push(entry);
      });
      this.timeEntries = entries;
      this.generateWeeklyReports();
    });
  },
  methods: {
    generateWeeklyReports() {
      const reports = [];
      let currentWeek = { start: startOfWeek(new Date()), end: endOfWeek(new Date()), entries: [] };
      this.timeEntries.forEach((entry) => {
        const entryDate = new Date(entry.date);
        if (entryDate >= currentWeek.start && entryDate <= currentWeek.end) {
          currentWeek.entries.push(entry);
        } else {
          if (currentWeek.entries.length > 0) {
            reports.push(currentWeek);
          }
          currentWeek = { start: startOfWeek(entryDate), end: endOfWeek(entryDate), entries: [entry] };
        }
      });
      if (currentWeek.entries.length > 0) {
        reports.push(currentWeek);
      }
      this.weeklyReports = reports;
    },
    formatWeek(start, end) {
      return `${format(new Date(start), 'MMM dd')} - ${format(new Date(end), 'MMM dd')}`;
    },
    toggleView() {
      this.isWeekly = !this.isWeekly;
    }
  }
};
</script>
