<template>
    <div class="search-bar">
      <div style="width: 100%;">
        <input v-model="searchText" :placeholder="inputPlaceholder" :style="`width: ${searchInputWidth}%`" class="search-input"/>
        <Btn :label="buttonLabel" :backgroundColor="btnBackgroundColor" :color="btnLabelColor" @click="searchBtnClicked" />
      </div>

      <SearchFilter :buttonA="ButtonAStandard" :buttonB="ButtonBStandard" :filterLabel="'Search By'" />
    </div>
  </template>
  
  <script lang="ts" setup>
import {ButtonAStandard, ButtonBStandard} from '../filter-options-toggler/DefaultValues.js';

  import { ref } from 'vue';
  import { computed } from 'vue';
  import Btn from '../button/Button.vue'

  import SearchFilter from '../filter-options-toggler/SearchFilter.vue';

  

  const props = withDefaults(defineProps<{
    /**
     * The label of the button
     */
    buttonLabel: string,
    /**
     * The label of the button
     */
    inputPlaceholder: string,
    /**
     * background color of the button
     */
    btnBackgroundColor?: string,

    /**
     * label color of the button
     */
     btnLabelColor?: string,

    /**
     * input´s width
     */
    searchInputWidth: number,

  }>(), {btnBackgroundColor: '#FF0000', searchInputWidth: 50});


  const searchText = ref('');
  

  const searchBtnClicked = () => {
    console.log('search btn click event');

    if (searchText.value.trim() !== '') {
      // Perform search logic here
      console.log('Searching for:', searchText.value);
    }
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .search-input {
    height: 2rem;
  }

  .toggler {
    width: 100%;
  }
  </style>