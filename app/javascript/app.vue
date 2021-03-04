<!--<template>-->
<!--  <div id="app">-->
<!--    <div style="width: 20rem; height: 10rem">-->
<!--      <Ace />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Ace from './ace'-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    Ace-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  color: #2c3e50;-->
<!--}-->
<!--</style>-->

<template>
  <div id="app">
    Answer editor
    <Ace
        mode="html"
        theme="github"
        :content="contentJs"
        @content-changed="onChangeJs"
        style="height: 10rem"
    />

    <div class="box">
      <p>JavaScript content</p>
      <textarea
          v-model="contentJs"
          disabled
          class="preview"
      />
      <p>{{ question }}</p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import Ace from './ace'
export default {
  name: 'App',
  components: {
    Ace
  },
  data() {
    return {
      contentJs: `初期値`,
      question: `question`,
      answer: 'answer',
    }
  },
  methods: {
    onChangeJs(data) {
      this.contentJs = data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.box {
  display: inline-block;
  width: 20rem;
}
.preview {
  width: 100%;
  height: 10rem;
}
</style>
