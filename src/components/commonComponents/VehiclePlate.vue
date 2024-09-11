<template>
  <div>
    <div
      :class="[
        'd-inline-flex flex-column plate-number',
        { 'elevation-1': !flat }
      ]"
      :style="plateStyle"
    >
      <div v-if="isWhite(plateColor)" class="d-flex align-items-end justify-content-between flex-nowrap" :style="{ borderBottom: '1px solid black' }">
        <div class="px-1" style="color: black !important">{{ code || '&nbsp;' }}</div>
        <div class="px-1 plate-number--state" style="color: black !important">{{ state || '&nbsp;' }}</div>
      </div>
      <div v-else class="d-flex align-items-end justify-content-between flex-nowrap plate-number--top">
        <div class="px-1">{{ code || '&nbsp;' }}</div>
        <div class="px-1 plate-number--state">{{ state || '&nbsp;' }}</div>
      </div>

      <div class="plate-number--number text-center bold-font">{{ number || '&nbsp;' }}</div>
    </div>
  </div>
</template>

<script>
import ColorHelper from "@/helpers/colors";
/*eslint no-useless-escape: "off"*/
const plateRegex = new RegExp(
  "^[0-9a-z]{1,}?[ -]?[a-z\.]{1,}?[ -]?[0-9]{1,6}$",
  "i"
);

export default {
  name: "PlateNumber",
  props: {
    plateNumber: {
      type: String,
      default: "",
    },
    plateColor: {
      type: String,
      default: "",
    },
    flat: {
      type: Boolean,
      default: false,
    },
    plateColorOptions: {
      type: Array,
      default: () => [],
    },
    labelSet: {
      type: String,
      default: "SAVE",
    },
  },
  data() {
    return {
      code: "",
      state: "",
      number: "",
      plate_number_error: false,
      editing: {
        plateNumber: this.plateNumber,
        plateColor: this.plateColor,
      },
    };
  },
  computed: {
    plateStyle() {
      const color = ColorHelper.getColor(this.plateColor || "blue");
      return {
        color: `${color} !important`,
        borderColor: this.isWhite(color) ? 'black' : color,
      };
    },
  },
  watch: {
    plateNumber: {
      immediate: true,
      handler: "formatPlateNumber",
    },
  },
  methods: {
    isWhite(hexColor) {
      // Check if hexColor is null, undefined, or an empty string
      if (!hexColor) return false;

      // Remove the # if it exists in the hexColor
      hexColor = hexColor.replace(/^#/, "");

      // Convert hex to RGB
      const bigint = parseInt(hexColor, 16);
      const red = (bigint >> 16) & 255;
      const green = (bigint >> 8) & 255;
      const blue = bigint & 255;

      // Check if all RGB components are close to 255 (white)
      return red >= 250 && green >= 250 && blue >= 250;
    },
    formatPlateNumber() {
      const plate = this.plateNumber.toUpperCase();
      this.plate_number_error = !plateRegex.test(this.plateNumber);
      const split = plate.includes("-") ? plate.split("-") : plate.trim().split(/\s+/);
      if (split.length !== 3) return this.reset();
      this.code = split[0];
      this.state = split[1];
      this.number = split[2];
    },
    reset() {
      this.code = "";
      this.state = "";
      this.number = "";
    },
    detailsUpdated() {
      this.$emit("update:plateNumber", this.editing.plateNumber);
      this.$emit("update:plateColor", this.editing.plateColor);
    },
  },
};
</script>

<style scoped lang="scss">
.plate-number {
  user-select: none;
  min-width: 4rem;
  max-width: 5rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 1px solid currentColor;
  position: relative;
  background: currentColor;
  .plate-number--top {
    > * {
      color: white;
    }
  }
  .plate-number--number {
    background: white;
    color: black;
  }
  .plate-number--state {
    font-size: 0.7rem;
  }
}
</style>
