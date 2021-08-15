<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <p>بسم الله والصلاة والسلام على رسول الله سيدنا محمَّد وعلى آله وصحبه ومن والاه</p>
      <p>بسم الله توكلتُ على الله ولا حول ولا قوة إلا بالله</p>
      <p>لا إله إلا الله محمَّد رسول الله</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
