<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return{
				show:false,
			}
		},
		mounted() {
			document.addEventListener('click', (e) => {
				console.log(e.target,'this is target')
				if (!this.$el.contains(e.target)) this.show = false
			})
		},
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		width: 100%;
		height: 100%;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}

	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
</style>