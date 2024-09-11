<template>
    <div>
        <Sidebar />
    </div>
</template>

<script>
     import Sidebar from '@/views/pages/Livemap/Components/Sidebar.vue'
    export default {
        name: 'live-map',
        components: {
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>

</style>

<style lang="scss" scoped>
/* Using your shared color variables */
div {
  background-color: var(--primary-color);
  color: var(--default-color);
}

.custom-btn {
  background-color: var(--accent-color);
  color: white;
}
</style>