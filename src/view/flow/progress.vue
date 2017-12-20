<template>
    <div class="content">
        <p>系统正在努力为您充值，请耐心等待！</p>
        <p>本批次共充值<pre>2</pre>笔，<span>已成功<pre>1</pre>笔，</span><span>失败<pre>0</pre>笔</span></p>
        <div class="progress"></div>
        <div class="progress1"></div>
        <span class="percent">50%</span>
    </div>
</template>
<style lang="less" scoped>
  @import "../../assets/less/flow/less.less";
  .content{
     .lang(100%, 266px);
    .margin(20px, 0, 0, 0);
    .border(#e9e9e9);
    p{
      .margin(70px,0,0,86px);
      color:#ababab;
      &:nth-child(2){
        .margin(25px,0,0,86px);
        color: #494949;
      }
      span{
        font-size: 16px;
        &:nth-child(2){
          color: #70c31f;
        }
        &:nth-child(3){
          color:red;
        }
      }
      pre{
        display: inline;
        font-size: 24px;
      }
    }
    .percent{
      color:#8962e5;
      float:right;
      .margin(-22px,15px,0,0);
    }

  }
  .progress{
    .lang(820px,26px);
    .bg-color(#ededed);
    border-radius: 6px;
    .margin(29px,0,0,22px);
  }
  .progress1{
    .lang(410px,26px);
    .margin(-26px,0,0,22px);
    .bg-color(@color);
     border-radius: 6px;
  }
</style>

