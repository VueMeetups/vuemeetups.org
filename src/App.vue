<template>
  <div id="app" :class="$style.app">
    <nav id="nav" :class="$style.nav">
      <ul>
        <li><a href="#">Introduction</a></li>
        <li><a href="#">Find a Meetup</a></li>        
        <li><a href="#">Start Your Own Meetup</a></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss" module>
.app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100vh;

	display: flex;
}
.nav {
	width: 300px;
	padding: 30px;
	text-align: left;
	overflow-y: scroll;

	> ul {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
