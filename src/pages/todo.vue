<template lang="pug">
  .container
    h1 vue & vuex Todo List example
    hr
    .row
      .nput-group.col-md-4
        //-
          加一個 input 用來新增 todo
          希望按 enter 也可以增加 todo
          在 Vue 裡面要捕捉 "按鍵事件" 可以使用 @keyup.[鍵位碼]
          加入 @keyup.enter(修飾) 也等於 @keyup.13
        input(type="text" placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo")
        button(@click="actionAddTodo")
          span.glyphicon.glyphicon-plus(aria-hidden="true")
    //- 左右兩個欄位分別存放 todo / done
    .row
      .col-md-6
        h2 Todo List:
        li(v-for="(item, index) in todoList")
          label {{ item.content }}
            //-
              改變狀態
              套用 vuex 因此不能使用 v-model 做雙向綁定，會報錯誤
              1. 將 list 的 value bind 到 input checked 屬性上，改變樣式。
              2. onchange 事件發出 action 帶入 key
            input(type="checkbox" v-bind:checked="item.done" @change="toggleTodo( item.key )")

          //-
            刪除按鈕
            onclick 事件發出 action 帶入 key
          button.btn.btn-xs.btn-danger(@click="deleteTodo( item.key )")
            span.glyphicon.glyphicon-trash(aria-hidden="true")
      .col-md-6
        h2 Done List:
        li(v-for="(item, index) in doneList")
          label {{ item.content }}
            input(type="checkbox" v-bind:checked="item.done" @change="toggleTodo( item.key )")

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
        todoList: 'getTodo',
        doneList: 'getDone',
      })
    },
    methods: {
      ...mapActions([
        'toggleTodo',
        'deleteTodo',
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
