<template>
    <div class="sidepanel" :style="{ marginLeft: panelMargin }">
      <span :style="{ marginLeft: spanMargin }">Click the button on the side to watch this panel collapse gracefully</span>
      <div class="line"></div>
      <div class="circle" @click="togglePanel">
        <v-icon v-if="!isCollapsed">mdi-chevron-left</v-icon>
        <v-icon v-if="isCollapsed">mdi-chevron-right</v-icon>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const isCollapsed = ref(false);
      const panelMargin = ref('0px');
      const spanMargin = ref('0px');
  
      const togglePanel = () => {
        if (isCollapsed.value) {
          // Expand the panel
          panelMargin.value = '0px';
          spanMargin.value = '0px';
        } else {
          // Collapse the panel
          panelMargin.value = `-${getPanelWidth()}px`;
          spanMargin.value = `-${getPanelWidth()}px`;
        }
        isCollapsed.value = !isCollapsed.value;
      };
  
      const getPanelWidth = () => {
        return document.querySelector('.sidepanel').offsetWidth;
      };
  
      return {
        isCollapsed,
        panelMargin,
        spanMargin,
        togglePanel,
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  
  .sidepanel {
    position: relative;
    height: 100vh;
    background-color: #01848f;
    width: 20%;
    min-width: 100px;
    margin-left: 0;
    z-index: 2;
    font-size: 1.5em;
    line-height: 1.5em;
    color: #f1f1f2;
    font-family: Helvetica;
    text-align: center;
    transition: all 0.5s ease;
  }
  
  .sidepanel:before {
    content: "";
    position: absolute;
    height: 100vh;
    width: 10px;
    top: 0;
    left: 100%;
    background-image: linear-gradient(to left, #fff, rgba(0, 0, 0, 0.3) 10px);
    z-index: 1;
  }
  
  .sidepanel span {
    position: relative;
    display: block;
    width: calc(100% - 2em);
    min-width: 100px;
    padding: 1em;
    background-color: #01848f;
    transition: margin-left 0.5s ease;
  }
  
  .line {
    height: 1px;
    width: calc(100% - 44px);
    background-color: #e9d985;
    margin: 0 22px;
  }
  
  .circle {
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-size: 16px;
    background-color: #ef4581;
    color: #f1f1f2;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - 22px);
    left: calc(100% - 22px);
    z-index: 3;
    cursor: pointer;
    transition: left 0.5s ease;
  }
  
  .hide {
    display: none;
  }
  </style>
  