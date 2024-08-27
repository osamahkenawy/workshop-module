<template>
    <div class="overlay">
      <div :class="['license-plate', plateSizeClass]">
        <span class="license-plate-left">9999</span>
        <div class="license-plate-middle">
          <span class="license-plate-middle-top">٢</span>
          <span class="license-plate-middle-bottom">A</span>
        </div>
        <span class="license-plate-right">عُمان</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OmanPlateComponent',
    props: {
      size: {
        type: Number,
        default: 10, // Default size
        validator: (value) => value >= 1 && value <= 20
      }
    },
    computed: {
      plateSizeClass() {
        return `license-plate-size-${this.size}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .license-plate {
    display: inline-flex;
    border: 5px solid #000000;
    border-radius: 10px;
    background-color: #FFCE34;
    position: relative;
    color: #000;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center;
    text-shadow: 0 0 10px #000;
    box-shadow: 0 0 50px #000000;
    margin: 20px;
  }
  
  /* Generate CSS classes for sizes 1 to 20 */
  .license-plate-size-1 { font-size: 10px; padding: 2px; }
  .license-plate-size-2 { font-size: 12px; padding: 3px; }
  .license-plate-size-3 { font-size: 14px; padding: 4px; }
  .license-plate-size-4 { font-size: 16px; padding: 5px; }
  .license-plate-size-5 { font-size: 18px; padding: 6px; }
  .license-plate-size-6 { font-size: 20px; padding: 7px; }
  .license-plate-size-7 { font-size: 22px; padding: 8px; }
  .license-plate-size-8 { font-size: 24px; padding: 9px; }
  .license-plate-size-9 { font-size: 26px; padding: 10px; }
  .license-plate-size-10 { font-size: 28px; padding: 11px; }
  .license-plate-size-11 { font-size: 30px; padding: 12px; }
  .license-plate-size-12 { font-size: 32px; padding: 13px; }
  .license-plate-size-13 { font-size: 34px; padding: 14px; }
  .license-plate-size-14 { font-size: 36px; padding: 15px; }
  .license-plate-size-15 { font-size: 38px; padding: 16px; }
  .license-plate-size-16 { font-size: 40px; padding: 17px; }
  .license-plate-size-17 { font-size: 42px; padding: 18px; }
  .license-plate-size-18 { font-size: 44px; padding: 19px; }
  .license-plate-size-19 { font-size: 46px; padding: 20px; }
  .license-plate-size-20 { font-size: 48px; padding: 21px; }
  
  .license-plate-left {
    padding-left: 10px;
    padding-right: 10px;
    border-right: 2px solid #000000;
    box-shadow: inset 0 0 5px #000000;
  }
  
  .license-plate-middle {
    padding-left: 10px;
    padding-right: 10px;
    border-right: 2px solid #000000;
    border-left: 2px solid #000000;
    box-shadow: inset 0 0 5px #000000;
  }
  
  .license-plate-right {
    padding-left: 10px;
    padding-right: 10px;
    border-left: 2px solid #000000;
    box-shadow: inset 0 0 5px #000000;
  }
  
  .license-plate-middle-top,
  .license-plate-middle-bottom {
    display: block;
  }
  
  /* Responsive media queries */
  @media (max-width: 600px) {
    .license-plate {
      font-size: calc(var(--plate-font-size) * 0.5);
    }
  }
  
  @media (min-width: 601px) and (max-width: 1024px) {
    .license-plate {
      font-size: calc(var(--plate-font-size) * 0.75);
    }
  }
  
  @media (min-width: 1025px) {
    .license-plate {
      font-size: calc(var(--plate-font-size) * 1);
    }
  }
  </style>
  