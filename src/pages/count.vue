<template lang="pug">
  .container
    h2 count:
      span.count {{ count }}
    //- 1. 增加 input 可以設定數值 model 綁定 num
    h2 Set Number:
    input(type='number' v-model='num')
    br
    //- 3. 雙向綁定 num 到按鈕上顯示
    //- 傳 num 數值給 action
    button(@click="actionIncrease(num)") +{{ num }}
    button(@click="actionDecrease(num)") -{{ num }}

    //- 4. 新增歸零按鈕
    button(@click="actionCountReset") 歸零
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from 'vuex'
export default {
  data (){
    return {
      // 2. model num 預設值為: 1
      num: 1
    }
  },
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
      // 5. 引入歸零 action
      'actionCountReset',
    ]),
    callAction() {
       // 其他 method call action 的方法
      this.actionIncrease;
    }
  }
}
</script>

<style lang="scss">
  h2 {
    color: red;
  }
  h2 + input {
    width: 50px;
  }
</style>
