<template>
  <div id="app">
    <!--
      router-link 就像
      <a href="/c2f">CtoF</a>
      :to 裡面是物件形式，描述要轉跳的目的與需要帶的參數
      目的：考可以用 path 或 name
      在 main.js router 我們是這樣設定的：
      {
        path: '/hello',
        name: 'hello',
        component: Hello
      },
    -->
    <div class="my-nav">
      <router-link :to="{path: '/hello'}">Hello</router-link>
      <router-link :to="{name: 'c2f'}">CtoF</router-link>
      <router-link :to="{name: 'learnComponent'}">learnComponent</router-link>
      <router-link :to="{name: 'info'}">info</router-link>
      <router-link :to="{name: 'count'}">count</router-link>
      <router-link :to="{name: 'todo'}">todo</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>


  .my-nav {
    position: fixed;
    top: 60px;
    padding: 0 10px;
  }

  .my-nav a {
    display: block;
    margin-bottom: 10px;
  }
</style>
