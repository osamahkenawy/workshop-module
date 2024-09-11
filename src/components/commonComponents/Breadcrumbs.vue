<template>
    <div class="breadcrumb-bar">
      <!-- <nav v-if="breadcrumbs.length > 0" aria-label="breadcrumb">
       {{ breadcrumbs }}
        <ol class="breadcrumb pl-0">
          <li
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            :class="{ active: breadcrumb.active }"
            class="breadcrumb-item"
          >
            <router-link v-if="breadcrumb.active" :to="'/' + breadcrumb.link">{{
              $t(breadcrumb.title)
            }}</router-link>
            <span v-else>{{ $t(breadcrumb.title) }}</span>
          </li>
        </ol>
      </nav> -->
      <ul class="breadcrumbs">
        <li><a href="#">Main page</a></li>
          <li><a href="#">About</a></li>
          <li>History</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Breadcrumb",
    props: {
      breadcrumbs: {
        type: Array
      }
    },
    data() {
      return {
        lang: "en"
      };
    }
  };
  </script>
  <style scoped lang="scss">
  
  
  .breadcrumbs {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .breadcrumbs li {
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    float: left;
    font-family: Helvetica Neue,sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .05em;
    line-height: 20px;
    color: hsl(0, 0%, 30%);
  }
  
  .breadcrumbs li a {
    display: block;
    padding: 0 40px 0 0px;
    color: hsl(0, 0%, 30%);
    text-decoration: none;
    height: 20px;
    position: relative;
    perspective: 700px;
  }
  
  .breadcrumbs li a:after {
    content: '';
    width: 20px;
    height: 20px;
    border-color: #333;
    border-style: solid;
    border-width: 1px 1px 0 0;
    
    -webkit-backface-visibility: hidden;
    outline: 1px solid transparent;
    
    position: absolute;
    right: 20px;
    -webkit-transition: all .15s ease;
       -moz-transition: all .15s ease;
        -ms-transition: all .15s ease;
            transition: all .15s ease;
    -webkit-transform: rotateZ(45deg) skew(10deg, 10deg);
       -moz-transform: rotateZ(45deg) skew(10deg, 10deg);
        -ms-transform: rotateZ(45deg) skew(10deg, 10deg);
            transform: rotateZ(45deg) skew(10deg, 10deg);
  }
  
  
  .breadcrumbs li a:hover:after {
    right: 15px;
    -webkit-transform: rotateZ(45deg) skew(-10deg, -10deg);
       -moz-transform: rotateZ(45deg) skew(-10deg, -10deg);
        -ms-transform: rotateZ(45deg) skew(-10deg, -10deg);
            transform: rotateZ(45deg) skew(-10deg, -10deg);
  }
  </style>
  