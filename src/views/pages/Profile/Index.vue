<template>
    <v-container  class="bg-white">
      <!-- avatar -->
      <v-row class="justify-center">
        <v-avatar size="150px">
          <img src="https://image.flaticon.com/icons/png/512/265/265674.png" />
        </v-avatar>
      </v-row>
      <!-- name -->
      <v-row class="justify-center pb-5">
        <span class="title text-secondary py-2 font-weight-bold">{{ name }}</span>
      </v-row>
      <v-text-field
        label="First Name"
        outlined 
        shaped
        prepend-inner-icon="mdi-account"
        disabled
        :value="formData.firstName"
      ></v-text-field>
      <v-text-field
        label="Last Name"
        outlined
        shaped
        disabled
        prepend-inner-icon="mdi-account"
        :value="formData.lastName"
      ></v-text-field>
      <v-text-field
        label="Username"
        outlined
        shaped
        disabled
        prepend-inner-icon="mdi-account"
        :value="formData.username"
      ></v-text-field>
      <v-text-field
        label="Email"
        outlined
        disabled
        shaped
        prepend-inner-icon="mdi-email"
        :value="formData.email"
      ></v-text-field>
      <v-text-field
        label="Address"
        outlined
        disabled
        shaped
        prepend-inner-icon="mdi-map-marker"
        :value="formData.address"
      ></v-text-field>
      <v-text-field
        label="Phone Number"
        outlined
        disabled
        shaped
        prepend-inner-icon="mdi-phone"
        :value="formData.phoneNumber"
      ></v-text-field>
     
    </v-container>
  </template>
  
  <script>

  export default {
    computed: {
      formData: {
        get: function () {
          return {
            firstName: 'Osama',
            lastName: 'Alaaeldin',
            username: 'osama alaaeldin',
            address: 'liwa tower',
            email: 'osamaalaa133@gmail.com',
            phoneNumber: '+971522200730',


          }
        },
      },
      name() {
         return this.formData.firstName + " " + this.formData.lastName;
      },
    },
    methods: {
      backToPreviousPage() {
        this.$router.back();
      },
    },
  };
  </script>
  <style lang="css" scoped>
.bg-white {
  background: white;
}
</style>