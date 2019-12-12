This is a Vue.js's directive that let the html DOM can be move with mouse

# Install
```bash
npm install
```
# Usage
```bash
import Vue from 'vue';
import VueRemovable from 'vue-removable';
Vue.use(VueRemovable);

```

```bash
<template>
  <div class="wrapper">
    <div
      v-removable="'#btn'"
      class="box"
    >
      <el-button
        id="btn"
        size="mini"
        type="primary"
      >
        点击拖拽
      </el-button>
    </div>
    <div
      v-removable
      class="box2"
    >
      点击拖拽
    </div>
    <div
      v-removable
      class="box3"
    >
      点击拖拽
    </div>
  </div>
</template>
<script>
export default {
};
</script>

<style scoped lang="less">
  .wrapper{
    position: relative;
    margin: 100px;
  }
  .box{
    border: 1px solid #333;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 50px;
  }
  .box2{
    border: 1px solid #333;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: 350px;
  }
  .box3{
    border: 1px solid #333;
    width: 100px;
    height: 100px;
  }
</style>

```
