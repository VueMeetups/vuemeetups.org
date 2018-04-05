<script>
export default {
  name: 'HomePage'
}
</script>

<template>
  <div class="content guide-with-sidebar index-guide">
    <h1>Welcome!</h1>
    <p>Landing page is currently a work in progress, but check out these pages with draft content and ideas:</p>
    <h2>Starting Your Own Meetup</h2>
    <ul>
      <li>
        <router-link to="/introduction">Introduction</router-link>
      </li>
      <li>
        <router-link to="/essentials">Essentials</router-link>        
      </li>
    </ul>
  </div>
</template>

