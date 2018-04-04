<script>
export default {
	name: 'PageHeader'
}
</script>

<template>
<div id="header">
  <a id="logo" href="/">
    <img src="../assets/logo.png">
    <span>Vue.js</span>
  </a>
  <ul id="nav">
    <li>
      <form id="search-form">
        <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
          <input id="search-query-nav" class="search-query st-default-search-input aa-input" autocomplete="off" spellcheck="false"
            role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" style="position: relative; vertical-align: top;"
            dir="auto" type="text">
          <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system; font-size: 11px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: optimizelegibility; text-transform: none;"></pre>
          <span class="aa-dropdown-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;"
            role="listbox" id="algolia-autocomplete-listbox-0">
            <div class="aa-dataset-1"></div>
          </span>
        </span>
      </form>
    </li>
    <li class="nav-dropdown-container learn">
      <a class="nav-link">Learn</a>
      <span class="arrow"></span>
      <ul class="nav-dropdown">
        <li>
          <ul>
            <li>
              <a href="/v2/guide/" class="nav-link current">Guide</a>
            </li>
            <li>
              <a href="/v2/api/" class="nav-link">API</a>
            </li>
            <li>
              <a href="/v2/style-guide/" class="nav-link">Style Guide</a>
            </li>
            <li>
              <a href="/v2/examples/" class="nav-link">Examples</a>
            </li>
            <li>
              <a href="/v2/cookbook/" class="nav-link">Cookbook</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li class="nav-dropdown-container ecosystem">
      <a class="nav-link current">Ecosystem</a>
      <span class="arrow"></span>
      <ul class="nav-dropdown">
        <li>
          <h4>Help</h4>
        </li>
        <li>
          <ul>
            <li>
              <a href="https://forum.vuejs.org/" class="nav-link" target="_blank">Forum</a>
            </li>
            <li>
              <a href="https://chat.vuejs.org/" class="nav-link" target="_blank">Chat</a>
            </li>
            <li>
              <a href="https://meetups.vuejs.org/" class="nav-link" target="_blank">Meetups</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Tooling</h4>
        </li>
        <li>
          <ul>
            <li>
              <a href="https://github.com/vuejs/vue-devtools" class="nav-link" target="_blank">Devtools</a>
            </li>
            <li>
              <a href="https://vuejs-templates.github.io/webpack" class="nav-link" target="_blank">Webpack Template</a>
            </li>
            <li>
              <a href="https://vue-loader.vuejs.org" class="nav-link" target="_blank">Vue Loader</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Core Libraries</h4>
        </li>
        <li>
          <ul>
            <li>
              <a href="https://router.vuejs.org/" class="nav-link" target="_blank">Vue Router</a>
            </li>
            <li>
              <a href="https://vuex.vuejs.org/" class="nav-link" target="_blank">Vuex</a>
            </li>
            <li>
              <a href="https://ssr.vuejs.org/" class="nav-link" target="_blank">Vue Server Renderer</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>News</h4>
        </li>
        <li>
          <ul>
            <li>
              <a href="https://news.vuejs.org" class="nav-link" target="_blank">Weekly News</a>
            </li>
            <li>
              <a href="https://github.com/vuejs/roadmap" class="nav-link" target="_blank">Roadmap</a>
            </li>
            <li>
              <a href="https://twitter.com/vuejs" class="nav-link" target="_blank">Twitter</a>
            </li>
            <li>
              <a href="https://medium.com/the-vue-point" class="nav-link" target="_blank">Blog</a>
            </li>
            <li>
              <a href="https://vuejobs.com/?ref=vuejs" class="nav-link" target="_blank">Jobs</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Resource Lists</h4>
        </li>
        <li>
          <ul>
            <li>
              <a href="https://github.com/vuejs" class="nav-link" target="_blank">Official Repos</a>
            </li>
            <li>
              <a href="https://curated.vuejs.org/" class="nav-link" target="_blank">Vue Curated</a>
            </li>
            <li>
              <a href="https://github.com/vuejs/awesome-vue" class="nav-link" target="_blank">Awesome Vue</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <a href="/v2/guide/team.html" class="nav-link team">Team</a>
    </li>
    <li class="nav-dropdown-container support-vue">
      <a href="/support-vuejs/" class="nav-link">Support Vue</a>
      <span class="arrow"></span>
      <ul class="nav-dropdown">
        <li>
          <ul>
            <li>
              <a href="/support-vuejs/#One-time-Donations" class="nav-link">One-time Donations</a>
            </li>
            <li>
              <a href="/support-vuejs/#Recurring-Pledges" class="nav-link">Recurring Pledges</a>
            </li>
            <li>
              <a href="https://vue.threadless.com" target="_blank" class="nav-link">T-Shirt Shop</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li class="nav-dropdown-container language">
      <a class="nav-link">Translations</a>
      <span class="arrow"></span>
      <ul class="nav-dropdown">
        <li>
          <a href="https://cn.vuejs.org/v2/guide/index.html" class="nav-link" target="_blank">中文</a>
        </li>
        <li>
          <a href="https://jp.vuejs.org/v2/guide/index.html" class="nav-link" target="_blank">日本語</a>
        </li>
        <li>
          <a href="https://ru.vuejs.org/v2/guide/index.html" class="nav-link" target="_blank">Русский</a>
        </li>
        <li>
          <a href="https://kr.vuejs.org/v2/guide/index.html" class="nav-link" target="_blank">한국어</a>
        </li>
        <li>
          <a href="https://br.vuejs.org/v2/guide/index.html" class="nav-link" target="_blank">Português</a>
        </li>
        <li>
          <a href="https://fr.vuejs.org/v2/guide/index.html" class="nav-link" target="_blank">Français</a>
        </li>
        <li>
          <a href="https://vi.vuejs.org/v2/guide/index.html" class="nav-link" target="_blank">Tiếng Việt</a>
        </li>
      </ul>
    </li>


  </ul>
</div>
</template>

<style>

</style>
