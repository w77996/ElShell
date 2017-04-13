<template>
  <div id="maindiv">
<!-- <div class="header">  i am header </div> -->
<<<<<<< HEAD
    <v-header :seller="seller"></v-header>
=======
    <v-header></v-header>
>>>>>>> ff869c5537a50db0901983894e85dfca2569d1b7
    <div class="tab">
      <div class="tab-item">
         <router-link v-bind:to="'/goods'">商品</router-link>
      </div>
      <div class="tab-item">
       <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- <div class="content">
    content
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';
export default {
  data() {
    return {
        seller: {}
    };
  },
<<<<<<< HEAD
  created() {
    this.$http.get('/api/seller').then((response) => {
        response =response.body;
        if(response.errno===0){
          this.seller = response.data;
          console.log(this.seller);
        }
    });
  },
=======
>>>>>>> ff869c5537a50db0901983894e85dfca2569d1b7
  components: {
    'v-header': header
  }
};

</script>

<style type="text/css">
/*导航栏样式，高度40px;宽度全局；*/
 .tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
/*  border: 1px solid #000;*/
  }
/*导航栏内部样式，文字居中*/
 .tab .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab .tab-item .active{
    color: rgb(240, 20, 20);
  }
</style>
