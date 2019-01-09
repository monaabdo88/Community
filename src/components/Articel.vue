<template>
	<div class="card my-3">
		<div class="card-header font-weight-bold">{{articel.title}}</div>
		<div class="card-body">
			<div class="my-3" v-html="articel.content.substring(0,250)"></div>
			<router-link :to="`/articel/${articel.id}`" class="btn btn-primary my-3">Read More</router-link>
		</div>
		
	</div>
</template>
<script>
	export default{
		props:['articel']
	}
</script>