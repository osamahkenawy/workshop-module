<template>
  <div>
    <div
      v-if="isWhite(plateColor)"
      class="d-inline-flex flex-column plate-number"
      :style="[
        plateColor
          ? {
              color: `${plateColor} !important`,
              'border-color': 'black !important',
            }
          : {},
      ]"
      :class="[{ 'elevation-1': !flat }]"
    >
      <div
        class="d-flex align-items-end justify-content-between flex-nowrap"
        style="border-bottom: 1px solid black"
      >
        <div class="px-1" style="color: black !important">
          {{ code || "&nbsp;" }}
        </div>
        <div class="px-1 plate-number--state" style="color: black !important">
          {{ state || "&nbsp;" }}
        </div>
      </div>

      <div class="plate-number--number text-center bold-font">
        {{ number || "&nbsp;" }}
      </div>
    </div>
    <div
      v-else
      class="d-inline-flex flex-column plate-number"
      :style="[plateColor ? { color: `${plateColor} !important` } : {}]"
      :class="[{ 'elevation-1': !flat }]"
    >
      <div
        class="d-flex align-items-end justify-content-between flex-nowrap plate-number--top"
      >
        <div class="px-1">{{ code || "&nbsp;" }}</div>
        <div class="px-1 plate-number--state">{{ state || "&nbsp;" }}</div>
      </div>
      <div class="plate-number--number text-center bold-font">
        {{ number || "&nbsp;" }}
      </div>
    </div>
  </div>
</template>

<script>
import ColorHelper from "@/helpers/colors";

/*eslint no-useless-escape: "off"*/
const plate_regex = new RegExp(
  "^[0-9a-z]{1,}?[ -]?[a-z\.]{1,}?[ -]?[0-9]{1,6}$",
  "i"
);

export default {
  name: "plate-number",
  props: {
    plateNumber: { type: String, default: () => "" },
    plateColor: { type: String, default: () => "" },
    flat: { type: Boolean, default: () => false },
    plateColorOptions: { type: Array, default: () => [] },
    labelSet: { type: String, default: () => "SAVE" },
  },
  data() {
    return {
      code: "",
      state: "",
      number: "",
      plate_color_options: [],
      plate_number_error: false,
      editing: { plateNumber: "", plateColor: "" },
      editing_clone: { plateNumber: "", plateColor: "" },
      maxAllowed: 11,
    };
  },
  watch: {
    plateColorOptions: { immediate: true, handler: "plateColorOptionsChanged" },
    plateNumber: { immediate: true, handler: "formatPlateNumber" },
  },
  computed: {
    plateStyles() {
      console.log(
        "plateColor",
        ColorHelper.getColor(`${this.plateColor || "blue"}`)
      );
      const color = ColorHelper.getColor(`${this.plateColor || "blue"}`);
      return {
        color,
      };
    },
  },
  methods: {
    plateColorOptionsChanged() {
      this.editing.plateColor = this.plateColor;
      this.updateClone();
      this.plate_color_options.splice(
        0,
        this.plate_color_options.length,
        ...(this.plateColorOptions.length
          ? [...this.plateColorOptions]
          : [
              { label: this.$t("COLORS.BLUE"), value: "blue" },
              { label: this.$t("COLORS.GREEN"), value: "green" },
              { label: this.$t("COLORS.RED"), value: "red" },
            ])
      );
    },
    isWhite(hexColor) {
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
      if (this.plateNumber.includes("-")) {
        this.editing.plateNumber = this.plateNumber;
        this.updateClone();
        const plate = (this.plateNumber || "").toUpperCase();
        this.plate_number_error = !plate_regex.test(this.plateNumber);
        const split = plate.split("-");
        if (!split) return this.reset();
        this.code = split[0];
        this.state = split[1];
        this.number = split[2];
      } else {
        this.editing.plateNumber = this.plateNumber;
        this.updateClone();
        const plate = this.plateNumber;
        this.plate_number_error = !plate_regex.test(this.plateNumber);
        const split = plate.trim().split(/\s+/);
        if (!split) return this.reset();
        this.code = split[0];
        this.state = split[1];
        this.number = split[2];
        console.log("OsamaPlateNumber", this.code, this.state, this.number);
      }
    },
    reset() {
      this.code = "";
      this.state = "";
      this.number = "";
    },
    validate(val) {
      if (val.plateNumber === undefined) return false;
      this.plate_number_error = !plate_regex.test(val.plateNumber);
      return !this.plate_number_error;
    },
    detailsUpdated() {
      this.updateClone();
      this.$emit("update:plateNumber", this.editing.plateNumber);
      this.$emit("update:plateColor", this.editing.plateColor);
    },
    updateClone() {
      this.editing_clone.plateNumber = this.editing.plateNumber;
      this.editing_clone.plateColor = this.editing.plateColor;
    },
    recollectClone() {
      this.editing.plateNumber = this.editing_clone.plateNumber;
      this.editing.plateColor = this.editing_clone.plateColor;
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
  &.plate-number--editable {
    &::before {
      content: "";
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
      background: var(--warning);
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 50%;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
