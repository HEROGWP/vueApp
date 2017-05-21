<template lang="pug">
  .container
    h2 Todo list:
    div
      //-
         加一個 input 用來新增 todo
         希望按 enter 也可以增加 todo
         在 Vue 裡面要捕捉 "按鍵事件" 可以使用 @keyup.[鍵位碼]
         加入 @keyup.enter(修飾) 也等於 @keyup.13
      input(type="text" placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo")
      button(@click="actionAddTodo") add todo

    ul
      //- 使用 for render todos
      //-  提取 content 顯示
      li(v-for="(todo, index) in todos") {{ todo.content }}
</template>

<script>
  import { mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        newTodo: '' // 方法一、先引入
      }
    },
    computed: {
      ...mapGetters ({
        todos: 'getTodos'
      })
    },
    methods: {
      ...mapActions([
        'addTodo' // 方法一、先引入
      ]),
      actionAddTodo (){
        // 方法一、使用
        // this.addTodo( this.newTodo );

        // 這邊示範第二種方法，不需要先引入 action 可以直接呼叫（調用）。
        // 使用 this.$store.dispatch( action(String), value )
        this.$store.dispatch('addTodo', this.newTodo)

        // 清除 data 中 input 的 value
        this.newTodo = ''
      }
    }

  }
</script>
