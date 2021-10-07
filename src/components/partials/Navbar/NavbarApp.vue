<template>
  <!-- Navbar goes here -->
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<!-- Website Logo -->
					<div>
            <router-link :to="home" class="flex items-center py-4 px-2">
              <!-- <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" /> -->
							<span class="font-semibold text-gray-500 text-lg"
								>Révisions DEV2</span
							>
            </router-link>
					</div>
					<!-- Primary Navbar items -->
					<div class="hidden md:flex items-center space-x-1">
            <router-link :to="home" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
              Accueil
            </router-link>
            <router-link :to="portfolio" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
              Portfolio
            </router-link>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
  export default {
    name:"navbar-app",
    data() {
      return {
        
      }
    },
    computed: {
      home() {
        return { name: 'home-app' }
      },
      portfolio() {
        return { name: 'portfolio' }
      }
    }
  }
</script>

<style scoped>
  
</style>