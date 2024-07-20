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
          {{ cat.name }}
        </li>
      </ul>
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
        categories: []
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
    },
    methods: {
      addCategory() {
        const categoryRef = ref(database, 'categories');
        const newCategory = {
          name: this.newCategory
        };
        push(categoryRef, newCategory);
        this.newCategory = '';
      }
    }
  };
  </script>
  
