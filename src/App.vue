<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 6.4rem;
  margin: 0 auto;
  height: 100%;
}
*{
  margin:0;
  padding:0;
}
ul,li{
  list-style-type: none;
}
.picContain>img{
  width: 100%;
  display: block;
}
.pos_abs{
   position: absolute;
   z-index: 1;
}
.pos_rel{
   position: relative;
   z-index: 1;
}
body{
  background: #f2f2f2;
}
.boxShadow{
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.08);
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 13.3333px Arial;
    border: none;
    background: none;
}
  input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
    align-items: flex-start;
    text-align: center;
    cursor: default;
    color: buttontext;
    background-color: buttonface;
    box-sizing: border-box;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 13.3333px Arial;
}
input, textarea, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb;
}
.ui-datepicker td a, .ui-datepicker td span {
    display: block;
    width: 0.9rem;
    height: .87rem;
    line-height: .87rem;
    text-align: center;
    text-decoration: none;
}
.leader_dynamic{
  width: 5.8rem;
}
.things .things_ul{
  width: 5.9rem;
}
.things .dynamic{
  width: 5.28rem;
}
.things{
  width: 5.9rem;
}
.page{
  height:100%;
  overflow-y: auto;
}
</style>
