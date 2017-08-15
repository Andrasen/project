<template>
	<div class="user">
		<h1>user</h1>
		<form @submit="adduser">
			<input type="text" v-model="newUser.name" placeholder="输入姓名">
			<input type="text" v-model="newUser.email" placeholder="输入email">
			<input type="submit" value="提交">
		</form>
		<ul>
			<li v-for="user in user">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted:user.contacted}">
					{{user.name}} : {{user.email}}
					<button @click="deleuser(user)">X</button>
				</span>
				
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name : 'user',
		data() {
			return {
				newUser: {},
				user:[
					{
						name:'zhangsan',
						email:'zhangsan@email.com',
						contacted:false
					},
					{
						name:'lisi',
						email:'lisi@email.com',
						contacted:false
					},
					{
						name:'wangwu',
						email:'wangwu@email.com',
						contacted:false
					},
				]
			}
		},
		methods: {
			adduser:function(e) {
				e.preventDefault();
				this.user.push({
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false
				});
			},
			deleuser:function(user) {
				this.user.splice(this.user.indexOf(user),1);
			}
		},
	}
</script>

<style type="text/css">
	.contacted {
		text-decoration: line-through;
	}
</style>