<template>
  <div class="sidepanel" :style="{ marginLeft: panelMargin }">
    <!-- Slot for passing content from parent -->
    <slot></slot>
    <div class="circle" @click="togglePanel">
      <v-btn elevation="2" color="error" fab dark small bottom left>
        <v-icon v-if="!isCollapsed">mdi-chevron-left</v-icon>
        <v-icon v-if="isCollapsed">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Sidebar",
  setup() {
    const isCollapsed = ref(false);
    const panelMargin = ref("0px");

    const togglePanel = () => {
      if (isCollapsed.value) {
        // Expand the panel
        panelMargin.value = "0px";
      } else {
        // Collapse the panel
        panelMargin.value = `-${getPanelWidth()}px`;
      }
      isCollapsed.value = !isCollapsed.value;
    };

    const getPanelWidth = () => {
      return document.querySelector(".sidepanel").offsetWidth;
    };

    return {
      isCollapsed,
      panelMargin,
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
  background-color: white; /* Changed background to white */
  width: 20%; /* Set to 20% for responsiveness */
  min-width: 100px;
  margin-left: 0;
  z-index: 2;
  font-size: 1.5em;
  line-height: 1.5em;
  color: #333; /* Adjusted text color for better contrast */
  font-family: Helvetica;
  text-align: center;
  transition: all 0.5s ease;
}

/* Responsive behavior for smaller screens */
@media (max-width: 768px) {
  .sidepanel {
    width: 30%; /* Adjust for smaller screens */
  }
}

@media (max-width: 480px) {
  .sidepanel {
    width: 40%; /* Further adjust for very small screens */
  }
}

.sidepanel:before {
  content: "";
  position: absolute;
  height: 100vh;
  width: 10px;
  top: 0;
  left: 100%;

  z-index: 1;
}

.sidepanel span {
  position: relative;
  display: block;
  width: calc(100% - 2em);
  min-width: 100px;
  padding: 1em;
  background-color: var(--white-color); /* Make span's background match panel */
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
  background-color: var(--white-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 22px);
  left: calc(100% - 22px);
  z-index: 3;
  cursor: pointer;
  transition: left 0.5s ease;
}

/* Hide elements for small screen sizes */
@media (max-width: 768px) {
  .circle {
    top: 10px; /* Adjust circle position on smaller screens */
  }
}

.hide {
  display: none;
}
</style>
