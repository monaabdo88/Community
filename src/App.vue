<template>
  <div id="app">
  	<Navbar></Navbar>
  	<div class="container">
    	<router-view></router-view>
  	</div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components:{
  	Navbar,
  }
}
</script>
<style>
* {
	font-family: 'Poppins', sans-serif;
	border-radius:0;
}
body{
	background-color:#f5f3ef;
}
</style>
