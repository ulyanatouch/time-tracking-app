<template>
  <div>
    <h2>Time Report</h2>
    <ul>
      <li v-for="entry in timeEntries" :key="entry.id">
        {{ entry.date }} - {{ entry.category }}: {{ entry.hours }} hours
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

export default {
  name: 'TimeReportComponent',
  data() {
    return {
      timeEntries: []
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
    });
  }
};
</script>

