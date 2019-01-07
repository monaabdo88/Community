<template>
	<div class="row my-5">
		<div class="col-md-6 offset-md-3">
			<div class="card">
				<div class="card-body">
					<h3 class="text-center my-4">Login</h3>
					<div class="form-group">
						<input type="text" v-bind:class="{'is-invalid':errors.email,'is-valid':!errors.email&& this.submitted}" class="form-control" placeholder="Email" v-model="email"/>
						<div class="errors" v-if="errors.email">
			              	<small class="text-danger" :key="error" v-for="error in errors.email">
			              	{{ error }}</small>
			            </div>
					</div>
					<div class="form-group">
						<input v-bind:class="{'is-invalid':errors.password,'is-valid':!errors.password&& this.submitted}" type="password" class="form-control" placeholder="Password" v-model="password" />
						<div class="errors" v-if="errors.password">
			              	<small class="text-danger" :key="error" v-for="error in errors.password">
			              	{{ error }}</small>
			            </div>
					</div>
					<div class="form-group text-center">
						<button @click="loginUser" :disabled="loading" class="btn form-control btn-success"><i class="fas fa-spinner" v-if="loading"></i>
						{{ loading ? '' : ' Login' }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Axios from 'axios'
	export default{
		data(){
			return {
				email:'',
				password:'',
				errors:{},
				submitted:false,
				loading:false
			}
		},
		methods:{
			loginUser(){
				this.loading = true
				Axios.post('https://react-blog-api.bahdcasts.com/api/auth/login',{
					email: this.email,
					password: this.password

				}).then((response) =>{
					this.loading = false;
					this.submitted = true;
					const {data} = response.data;
					localStorage.setItem('auth',JSON.stringify(data))
					this.$root.auth = data
					this.$router.push('/')
				
				}).catch(({response}) => {
					this.loading = false;
					this.submitted = true;
					if(response.status === 401){
						this.errors = {
							email:['Wrong Email Please try again']
						}
					}else{
						this.errors = response.data
					}
					
				});
			}
		}
	}
</script>