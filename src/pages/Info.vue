<template>
  <div id="info">
    <div class="added">
      名字： <input type="text" v-model="name"><br>
      電話： <input type="text" v-model="phone"><br>
      性別：
      <input type="radio" value="男生" v-model="gender">男生
      <input type="radio" value="女生" v-model="gender">女生<br>
      興趣：
      <select v-model="interest">
        <option disabled value="">請選擇</option>
        <option value="打球">打球</option>
        <option value="寫程式">寫程式</option>
        <option value="讀書" selected>讀書</option>
      </select><br>
      <button @click='addInform'>確認</button>
      <button @click='reset'>清空</button>
    </div>
    {{name}}/{{phone}}/{{gender}}/{{interest}}<br>
    ------------------------------------------------------<br>
    <input type="text" v-model="keyword" placeholder="輸入關鍵字...">      <button @click="searchResults">搜尋</button> {{keyword}}
    <div v-if="noSearch">沒有符合項目</div>
    <div v-for="person in results">
      {{person.name}}/{{person.phone}}/{{person.gender}}/{{person.interest}}
    </div><br>
    ------------------------------------------------------
    <table>
      <thead>
      <th><a href='#' @click='sort("name")'>名字</a></th>
      <th><a href='#' @click='sort("phone")'>電話</a></th>
      <th><a href='#' @click='sort("gender")'>性別</a></th>
      <th><a href='#' @click='sort("interest")'>興趣</a></th>
        <th></th>
      </thead>
      <tbody>
        <tr class="content" v-for="person in people">
          <td>{{ person.name }}</td>
          <td>{{ person.phone }}</td>
          <td>{{ person.gender }}</td>
          <td>{{ person.interest }}</td>
          <td><button v-on:click="removePerson(person.name)">刪除</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>


export default {
  data () {
    return {
      name: '',
      phone: '',
      gender: '',
      interest: '',
      keyword: '',
      results: [],
      LastSort: [],
      noSearch: false,
      people: [
        {
          name: 'Peter',
          phone: '0972023078',
          gender: '男生',
          interest: '打球'
        }
      ],
    }
  },
  methods: {
    addInform(){
      this.people.push({
        name: this.name,
        phone: this.phone,
        gender: this.gender,
        interest: this.interest
      })
      this.LastSort = _.clone(this.people)
      this.sort("name")
      this.reset()
    },
    removePerson(name){
      const personIndex = this.people.findIndex(person => person.name === name)
      this.people.splice(personIndex, 1)
    },
    sort(by) {
      this.people.sort(function (a, b) {
        return a[by] > b[by] ? 1 : -1
      })
      this.PeopleReverse()
    },
    PeopleReverse(){
      (_.isEqual(this.LastSort, this.people)) && (this.people.reverse())
      this.LastSort = _.clone(this.people)
    },
    searchResults(){
      this.results = []
      for(var i=0; i < this.people.length; i++) {
        for(const key in this.people[i]) {
          if(this.people[i][key].indexOf(this.keyword) != -1) {
            this.results.push(this.people[i])
            break
          }
        }
      }
      (this.results.length == 0) ? (this.noSearch = true) : (this.noSearch = false)
      return this.results
    },
    reset(){
      this.name = '', this.phone = '', this.gender = '' , this.interest = ''
    }
  }
}
</script>

<style>
  #info {
    margin-left: 200px;
  }
</style>
