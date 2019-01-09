<template>
	<div class="container">
		<div class="row my-5">
			<div class="col-md-8 offset-md-2">
				<div class="card" v-if="!loading">
					<img height="420px" :src="article.imageUrl"  class="card-image-top"/>
					<div class="card-body">
            			<h1 class="card-title text-center my-3">{{ article.title }}</h1>
            			<div class="article-content" v-html="article.content"></div>
            			<div class="comments my-5">
							<vue-disqus shortname="community-blog" :identifier="article.slug" :url="url"></vue-disqus>
            			</div>
					</div>
				</div>
				<div class="loader text-center" v-else>
          			<i class="fas fa-5x fa-spin fa-spinner"></i>
        		</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Axios from 'axios'
	import config from '@/config'
	export default{
		mounted(){
			this.getArticel();
		},
		data(){
			return{
				article:{},
				loading: true,
				url:window.location.href
			}
		},
		methods:{
			getArticel(){
      			Axios.get(`${config.apiUrl}/article/${this.$route.params.id}`).then(response => {
					this.loading = false;
					this.article = response.data.data;
				});
			}
		}
	}
</script>