<template>
    <div>
      <h2>Manage Categories</h2>
      <form @submit.prevent="addCategory">
        <div>
          <label for="category">Category:</label>
          <input type="text" v-model="newCategory" required />
        </div>
        <button type="submit">Add Category</button>
      </form>
      <ul>
        <li v-for="cat in categories" :key="cat.id">
          <a @click="selectCategory(cat.id)">{{ cat.name }} ({{ getCategoryCount(cat.id) }})</a>
        </li>
      </ul>
      <div v-if="selectedCategory">
        <h3>Records for {{ selectedCategoryName }}</h3>
        <ul>
          <li v-for="entry in filteredEntries" :key="entry.id">
            {{ entry.date }} - {{ entry.category }}: {{ entry.hours }} hours
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, push, onValue } from "firebase/database";
  import { database } from "../firebase";
  
  export default {
    name: 'CategoryManagerComponent',
    data() {
      return {
        newCategory: '',
        categories: [],
        timeEntries: [],
        selectedCategory: null,
        selectedCategoryName: ''
      };
    },
    created() {
      const categoryRef = ref(database, 'categories');
      onValue(categoryRef, (snapshot) => {
        const categories = [];
        snapshot.forEach((childSnapshot) => {
          const category = childSnapshot.val();
          category.id = childSnapshot.key;
          categories.push(category);
        });
        this.categories = categories;
      });
  
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
    },
    methods: {
      addCategory() {
        const categoryRef = ref(database, 'categories');
        const newCategory = {
          name: this.newCategory
        };
        push(categoryRef, newCategory);
        this.newCategory = '';
      },
      selectCategory(categoryId) {
        this.selectedCategory = categoryId;
        const selectedCategory = this.categories.find(cat => cat.id === categoryId);
        this.selectedCategoryName = selectedCategory ? selectedCategory.name : '';
      },
      getCategoryCount(categoryId) {
        return this.timeEntries.filter(entry => entry.category === this.categories.find(cat => cat.id === categoryId).name).length;
      }
    },
    computed: {
      filteredEntries() {
        return this.timeEntries.filter(entry => entry.category === this.selectedCategoryName);
      }
    }
  };
  </script>