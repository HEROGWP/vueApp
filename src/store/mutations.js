import * as types from './mutations_type.js';
import Vue from 'vue';

// state
export const state = {
  count: 0,
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
	  { key: 1, content: 'vuex 2.0', done: false },
	  { key: 2, content: 'vue-router 2.0', done: false },
	  { key: 3, content: 'vue-resource 2.0', done: false },
	  { key: 4, content: 'webpack', done: false }
  ]
}

// mutations
export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE] (state, num) {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    // 第二個參數是接收 commit 傳遞的值: num
    // 計算邏輯，改變 state
    state.count += parseInt(num);
    console.log('INCREASE', num, 'state?', state.count);
  },
  [types.DECREASE] (state, num) {
    state.count -= parseInt(num);
    console.log('DECREASE', num, 'state?', state.count);
  },
  [types.COUNT_RESET] (state) {
    // 歸零，就將 state 設定為 0 囉!
    state.count = 0;
    console.log('COUNT_RESET - state?', state.count);
  },
}
