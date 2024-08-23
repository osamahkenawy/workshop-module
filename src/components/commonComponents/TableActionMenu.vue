<template>
    <div>
      <v-btn
        :disabled="disabled"
        :loading="loading"
        color="#BDBDBD"
        depressed
        width="20px"
        height="20px"
        fab
      >
        <v-menu bottom left v-model="menuOpen">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon x-small v-bind="attrs" v-on="on">
              <v-icon small>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list min-width="170px" class="custom-table-actions-wrapper p-0 table-actions-wrapper">
            <v-list-item
              v-for="(item, i) in actions"
              :key="i"
              :class="[
                'dropdown-item text-blue__hover d-flex px-4 p-0 cursor-pointer',
                i + 1 < actions.length ? 'border-bottom' : ''
              ]"
              dense
              @click="handleItemClick(item)"
            >
              <div class="d-flex align-start">
                <i v-if="!item.imgForIcon && item.icon && !item.mdiIcon" :class="getIconClass(item.icon)"></i>
                 <v-icon small v-else-if="item.mdiIcon == true && item.icon">
                  {{ item.icon }}
                </v-icon>
                <div
                  v-else-if="item.imgForIcon && isSvgIcon(item.icon)"
                  v-html="item.icon"
                  class="mr-2"
                ></div>
                <img
                  v-else-if="item.imgForIcon && !isSvgIcon(item.icon)"
                  :src="item.icon"
                  class="mr-2"
                />
               
                <label class="mb-0">{{ item.title }}</label>
              </div>
            </v-list-item>
            <!-- Pass Custom Items -->
            <slot></slot>
          </v-list>
        </v-menu>
      </v-btn>
      <v-overlay :value="menuOpen" @click="menuOpen = false"></v-overlay>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      actions: {
        type: Array,
        required: true
      },
      imgForIcon: {
        type: Boolean,
        default: false
      },
      mdiIcon: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      handleItemClick(action) {
        // Emit an event or perform any other action when an item is clicked
        this.$emit("item-click", action);
        // Close the menu
        this.menuOpen = false;
      },
      getIconClass(icon) {
        return ["innov-icon", icon];
      },
      isSvgIcon(icon) {
        // Check if the icon is an SVG string
        return icon.trim().startsWith("<svg");
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .mr-2 {
    margin-right: 8px;
  }
  .text-blue__hover:hover label,
  .text-blue__hover:hover i::before {
    color: #1a73e8;
  }
  </style>
  