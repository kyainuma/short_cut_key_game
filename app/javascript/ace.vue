<!--<template>-->
<!--  <div ref="ace" className="ace" style="height: 300px"></div>-->
<!--</template>-->

<!--<script>-->
<!--// import ace from 'node_modules/ace-builds'-->
<!--import ace from 'ace-builds'-->
<!--import 'ace-builds/webpack-resolver'-->

<!--// 使いたい言語モードのインポート-->
<!--import 'ace-builds/src-noconflict/mode-javascript'-->

<!--// 使いたいテーマのインポート-->
<!--import 'ace-builds/src-noconflict/theme-github'-->

<!--export default {-->
<!--  name: 'Ace',-->
<!--  data() {-->
<!--    return {-->
<!--      editor: Object,-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    this.editor = ace.edit(this.$refs.ace);-->
<!--    this.editor.session.setMode('ace/mode/javascript');-->
<!--    this.editor.setTheme('ace/theme/monokai');-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.ace {-->
<!--  position: relative !important;-->
<!--  border: 1px solid lightgray;-->
<!--  margin: auto;-->
<!--  height: 100%;-->
<!--  width: 100%;-->
<!--}-->
<!--</style>-->

<template>
  <div ref="ace" class="ace"></div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
// import some modes
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
// import some themes
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-terminal'
export default {
  name: 'Ace',
  props: {
    mode: String,
    theme: String,
    content: String
  },
  data() {
    return {
      editor: Object
    };
  },
  mounted () {
    this.editor = ace.edit(this.$refs.ace);

    if(this.mode) {
      this.editor.session.setMode(`ace/mode/${this.mode}`);
    }
    if(this.theme) {
      this.editor.setTheme(`ace/theme/${this.theme}`);
    }
    if(this.content) {
      this.editor.session.setValue(this.content);
    }
    this.editor.on('change', () => {
      this.$emit('content-changed', this.editor.getValue())
    })
  }
};
</script>

<style scoped>
.ace {
  position: relative !important;
  border: 1px solid lightgray;
  margin: auto;
  height: 100%;
  width: 100%;
}
</style>
