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
</style>
