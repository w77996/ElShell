<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon" ></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="supports-count">
				<span class="count">{{seller.supports.length}}个</span>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}></span>>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="40px">
		</div>
		<div v-show="detailShow" class="detail"></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props: {
			seller:{
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			};
		},
	 methods: {
      	showDetail() {
        this.detailShow = true;
     	 }
		},
		created(){
			this.classMap= ['decrease','discount','gurantee','invoice','sepcial'];
		}
	};
</script>
<style type="text/css">
	.header{
		color: #fff;
		background:rgba(7,17,27,0.5);
	}
	.header .content-wrapper{
		padding: 24px 12px 18px 24px;
		font-size: 0; 
		position: relative;
	
	}
	.header .content-wrapper .avatar{
		display: inline-block;
		vertical-align: top;
	}
	.header .content-wrapper .avatar img{
		border-radius:2px;

	}
	.header .content-wrapper .content{
		display: inline-block;
		font-size: 14px;
		margin-left: 16px;
	}
	.header .content-wrapper .content .title{
		margin:  2px 0 8px 0;

	}
	.header .content-wrapper .content .title .brand{
		width: 30px;
		height: 18px;
		display: inline-block;
		background-image: url(./brand@2x.png);
		background-size: 30px 18px;
		background-repeat:  no-repeat;
		vertical-align: top;
	}
	.header .content-wrapper .content .title .name{
		margin-left: 6px;
		font-size: 16px;
		font-weight: bold;
	}

	.header .content-wrapper .content .decroption{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.header .content-wrapper .content .support .icon{
		display: inline-block;
		vertical-align: bottom;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
		background-image: url(./decrease_1@3x.png);
		/*&.discount
			background-image: url(./brand@2x.png);
		&.gurantee
			background-image: url(./brand@2x.png);
		&.invoice
			background-image: url(./brand@2x.png);
		&.sepcial
			background-image: url(./brand@2x.png);*/
	}
	.header .content-wrapper .content .support .text{
		line-height: 12px;
		font-size: 10px;
		vertical-align: bottom;
	}
	.header .content-wrapper .supprots-count{
		position: absolute;
		right: 12px;
		bottom: 18px;
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		text-align: center;
		background: rgba(0,0,0,0.2);
	}
	.header .content-wrapper .supprots-count .count{
		vertical-align: top;
		font-size: 10px;
	}
	.header .bulletin-wrapper{
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow:  hidden;
		text-overflow:  ellipsis;
		font-size: 0;
	}
	.header .bulletin-wrapper .bulletin-title{
		margin-top: 8px;
		vertical-align: top;
		display: inline-block;
		background-image: url(./bulletin@2x.png);
		width: 22px;
		height: 12px;
		background-size: 22px 12px;
		background-repeat: no-repeat;
	}
	.header .bulletin-wrapper .bulletin-text{
		vertical-align: top;
		font-size: 10px;
		margin: 0 4px;
	}
	.header .background{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
	}
	.header .detail{
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: rgba(7,17,27,0.8);
		top: 0;
		left: 0;
	}
</style>