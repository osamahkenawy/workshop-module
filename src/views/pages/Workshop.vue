<template>
    <div>
        
        <vehicle-plate :plateNumber="'AD-10-1234'" plateColor="#B40808FF" />
    </div> 
</template>

<script>
    export default {
        name: 'workshop',
  
        data(){
            return {
                breadcrumbs: [ { "title": "Home", "link": "tpc-portal/dashboard", "active": true }, { "title": "Workshop", "link": "tpc-portal/workshop", "active": true }, { "title": "List", "link": "tpc-portal/workshop", "active": false } ]
            }
        }
    }
</script>
 
<style lang="scss" scoped>

</style>