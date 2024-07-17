<template>
    <div id="app">
        <h1>Touch Time Tracking App</h1>
        <TimeEntry />
        <TimeReport />
    </div>
</template>

<script>
import TimeEntry from '../components/TimeEntry.vue'
import TimeReport from '../components/TimeReport.vue'

export default {
    components: {
        TimeEntry,
        TimeReport
    }
}
</script>