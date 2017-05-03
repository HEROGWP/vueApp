<template lang="pug">
  .container
    h2 count:
      span.count {{ count }}
    button(@click="actionIncrease") +
    button(@click="actionDecrease") -
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from 'vuex'
export default {
  // ...mapGetters 為 ES7 寫法
  computed: {
    ...mapGetters({
      // getCount return value 將會存在別名為 count 的 data 上
      count: 'getCount'
    })
  },
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
    ]),
    callAction() {
       // 其他 method call action 的方法
      this.actionIncrease;
    }
  }
}
</script>
