<template lang="pug">
  .container
    .row
      .col-md-4(v-for="item in list")
        h2 {{ item.title }}
        p {{ item.info }}
        p
          a.btn.btn-default(href="#") {{ item.btntext }}
</template>

<script>
export default{
  props: {
    list: Array
  },
}
</script>
