<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
/* 初始化样式 */
html,body {
  scroll-behavior:smooth; 
}
* {
  margin: 0;
  padding: 0;
}

em, i {
    font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

h1,h2,h3,h4,h5,h6 {
  color: #18191b;
}
p {
  color: #52555a;
}
label {
  color: #a7abb3;
}
.intersperse {
  color: #e9432b;
}
</style>
