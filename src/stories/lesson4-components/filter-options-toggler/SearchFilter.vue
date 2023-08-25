<!-- eslint-disable no-debugger -->
<template>
    <div class="toggler">
      <label>{{ filterLabel }}</label>
      <div class="button-container">
        <Btn class="contiguous-button" :label="btnA.label" ref="buttonARef" :backgroundColor="buttonABackgroundColor" @click="toggle('A')" />
        <Btn class="contiguous-button" :label="btnB.label" ref="buttonBRef" :backgroundColor="buttonBBackgroundColor" @click="toggle('B')" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  import Btn from '../button/Button.vue'


  const buttonARef = ref()
  const buttonBRef = ref()

  const props = withDefaults(defineProps<{
    /**
     * The label of the filter options
     */
    filterLabel: string,
    
    
    /**
     * button a a properties
     */
    buttonA: {
      label: string,
      active: boolean,
      btnBackgroundColor: string,
      toggleButtonA: () => void,
    },
    /**
     * button b a properties
     */
    buttonB: {
      label: string,
      active: boolean,
      btnBackgroundColor: string,
      toggleButtonB: () => void,
    },

  }>(), {});

  console.log(props, '111')
  console.log({...props}, '222')

  const {buttonA, buttonB} = props
  const btnA = ref(buttonA)
  const btnB = ref(buttonB)

  const toggle = (button: string) => {
    console.log(props)
    if (button === 'A') {
      btnA.value.active = true;
      btnB.value.active = false;
    } else {
      btnA.value.active = false;
      btnB.value.active = true;
    }

  };
  
  const buttonABackgroundColor = computed(() => {
    return btnA.value.active ? '#F65261' : '#424242';
  });

  const buttonBBackgroundColor = computed(() => {
    return btnB.value.active ? '#F65261' : '#424242';
  });
  </script>
  
  <style scoped>
  .toggler {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  </style>

<style>
.button-container {
  display: flex;
}

.contiguous-button {
  flex: 1;
  margin-right: -1px; /* Adjust this value for the desired spacing */
  border: 1px solid transparent; /* Use transparent border */
  border-right: none; /* Remove the right border to create the contiguous effect */
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
  cursor: pointer;
}

.contiguous-button:last-child {
  margin-right: 0;
  border-right: 1px solid gray; /* Add border back to the last button */
}
</style>