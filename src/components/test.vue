<template>
	<div class="test">
		<h1>{{title}}</h1>
		<h2>{{user.lastName}}</h2>
		<p v-if="showName">{{user.firstName}}</p>
		<ul>
			<li v-for="item in items">
				{{item.title}}
			</li>
		</ul>
		<!-- v-on -->
		<button v-on:click="greet('hello')">Say</button>
		<!-- 键盘事件 -->
		<input type="text" @keyup="pressKey">
		<!-- computed 计算属性 -->
		<br>
		<label>First Name:</label>
		<input type="text" v-model="user.firstName">
		<br>
		<label>Last Name:</label>
		<input type="text" v-model="user.lastName">
		<h3>{{fullName}}</h3>

		<!-- props 属性 -->
		<h2>{{msg}}</h2>
	</div>
</template>

<script type="text/javascript">
	export default {
		name : 'test',
		data() {
			return {
				title : 'Hello Vue',
				user: {
					firstName : 'chen',
					lastName : 'wenjie'
				},
				showName:true,
				items: [
					{title:1},
					{title:2},
					{title:3}
				],
			}
		},
		methods: {
			greet: function(a) {
				alert(a);
			},
			pressKey: function() {
				alert('press');
			}
		},
		computed: {
			fullName : function() {
				return this.user.firstName + ' '+this.user.lastName;
			}
		},
		props: {
			msg : {
				type:String,
				default:'默认'
			}
		}
	}
</script>

<style type="text/css">
	
</style>