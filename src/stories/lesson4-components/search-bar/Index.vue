<template>
    <div class="search-bar">
      <input v-model="searchText" placeholder="" class="search-input" />
      <button @click="search" class="search-button">Search</button>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        searchText: "",
      };
    },
    methods: {
      search() {
        this.$emit("search", this.searchText);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* .search-input {
    width: 80%;
  }
  .search-button {
    width: auto;
    background: rgba(0,111,255,.2);
  } */
  </style>
  