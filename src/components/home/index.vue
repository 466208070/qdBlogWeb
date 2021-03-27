<template>
	<div class="home">
		<header class="row">
			<div class="col-3">
				<h1 class="login">
					Mr.FriedRice
				</h1>
			</div>
			<div class="col-6">
				<ul class="header">
					<li class="header-item" :class="{active: currentHeader === index}" @click="activeHeader(index)" v-for="(item, index) in menuList" :key="index"><a>{{ item }}</a></li>
				</ul>
			</div>
			<div class="col-3">
				<div class="header-search">
					<!-- <input :class="{ 'active': showSearch }"/> -->
					<a title="搜索" @click="showSearch = true"><i class="iconfont icon-sousuo"></i></a>
				</div>
			</div>
		</header>
		<section class="section">
			<div class="home-text">
				<h2 class="title">允许自己虚度时光</h2>
				<div class="content">
					<p>
						我慢慢明白了,为什么我不快乐。因为我总是期待一个结果，看一本书期待它让我变深刻
						吃饭游泳期待它让我一斤斤瘦下来，发一条短信期待它被回复,对一个人好期待他回应也好
						写一个故事说一个心情期待被关注被安慰,
						参加一个活动期待换来充实丰富的经历,
						如果这些预设的期待实现了长舒一口气,如果没实现自怨自艾。
						可是,小时候也是同一个我呀,用一下午的时间看蚂蚁搬家,看石头开花。
						小时候从不期待结果,小时候的哭笑,都不打折。
						生命之于这个世界最幸福的存在，不是喧嚣和繁盛而是简单和自由
					</p>
					<p class="auther"> --马德</p>
				</div>
			</div>
			<ul class="classification">
				<li 
					class="classification-item" 
					:class="{ active: currentClassification === index }" 
					v-for="(item, index) in classification" 
					:key="index"
					@click="filterContent(index)">
						<a>{{ item }}</a>
				</li>
			</ul>
			<waterfall 
				style="margin-top: 20px;" 
				:col="col"
				:width="itemWidth" 
				:gutterWidth="gutterWidth" 
				:data="dataSource" 
				@loadmore="loadmore">
				<template>
					<div class="cell-item" v-for="(item,index) in dataSource" :key="index">
						<div class="item-body">
							<img :src="item.src" style="width: 100%;"/>
						</div>
					</div>
				</template>
			</waterfall>
		</section>
		<ul class="contact">
			<li><a><i class="iconfont icon-zhifubao"></i></a></li>
			<li><a><i class="iconfont icon-11qq"></i></a></li>
			<li><a><i class="iconfont icon-weixin1"></i></a></li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue'
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
export default {
	name: 'home',
	computed:{
		itemWidth(){  
			return (172*0.5*(document.documentElement.clientWidth/375))
		},
		gutterWidth(){
			return (8*0.5*(document.documentElement.clientWidth/375))
		}
	},
	data() {
		return {
			currentClassification: 0,
			classification: ['All', 'Minimalistic','Architecture','City','Abstract','Peple'],
			currentHeader: 0,
			showSearch: false,
			menuList: ['HEMO', 'MUSICE', 'NOTE', 'NOTE'],
			blogList: [
				{ icon: 'icon-shexiangji', title: '手机'},
				{ icon: 'icon-changpian', title: '手机1'},
				{ icon: 'icon-meishi', title: '手机2'},
				{ icon: 'icon-iconset0116', title: '手机2'},
				{ icon: 'icon-wenjian', title: '手机2'},
				{ icon: 'icon-map', title: '手机2'},
				{ icon: 'icon-biji', title: '手机2'},
				{ icon: 'icon-airudiantubiaohuizhi-zhuanqu_youxi', title: '手机2'},
				{ icon: 'icon-xiazai3', title: '手机2'}
			],
			dataSource: [
				{title: '111', src: require('../../assets/img/bg11.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg12.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg1.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg2.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg3.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg4.jpeg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg5.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg6.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg7.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg8.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg9.jpg'), liked: '1',user: '111'},
				{title: '111', src: require('../../assets/img/bg10.jpg'), liked: '1',user: '111'}
			],
			col: 3
		}
	},
	methods: {
		filterContent (index) {
			this.currentClassification = index
		},
		activeHeader (index) {
			this.currentHeader = index
		},
		showMenu () {
			this.menu = !this.menu
		},
		scroll(scrollData){
			console.log(scrollData)
		},
		loadmore(){
			this.dataSource = this.dataSource.concat(this.dataSource)
			this.$waterfall.forceUpdate()
		}
	},
	created() {
	}
}
</script>

<style scoped lang="less">
.home {
	max-width: 1200px;
	margin: 0 auto;
	header {
		height: 180px;
		line-height: 180px;
		// 图标
		h1 {
			font-size: 28px;
			font-family: cursive;
		}
		// 导航
		.header {
			font-size:  14px;
			text-align: center;
			.header-item {
				margin-left: 28px;
				display: inline-block;
				a {
					position: relative;
					color: #999;
					cursor: pointer;
					transition: all .5s cubic-bezier(.19,1,.22,1);
					&:before {
						content: '';
						position: absolute;
						top: 50%;
						height: 1px;
						width: 0;
						border-top: 1px solid #999;
						transition: all .5s cubic-bezier(.19,1,.22,1);
					}
				}
				// 当前菜单选中情况
				&.active {
					a {
						color: #18191b;
						&:before {
							width: 100%;
						}
					}
				}
				&:first-child {
					margin-left: 0;
				}
			}
		}
		// 搜索栏
		.header-search {
			input {
				height: 30px;
				line-height: 30px;
				border: none;
				width: 0px;
				-webkit-transition: all .5s cubic-bezier(.19,1,.22,1);
				-moz-transition: all .5s cubic-bezier(.19,1,.22,1);
				-o-transition: all .5s cubic-bezier(.19,1,.22,1);
				transition: all .5s cubic-bezier(.19,1,.22,1);
				&.active {
					width:  200px;
					border: 1px solid #ddd;
				}
				&:focus {
					border: 1px solid #ddd;
				}
			}
			a {
				font-weight: bold;
				font-size: 18px;
				cursor: pointer;
			}
			text-align: right;
		}
	}
	// 内容部分
	.home-text {
		.title {
			font-size: 24px;
		}
		.content {
			max-width: 700px;
			margin-top: 12px;
			.auther {
				text-align: right;
			}
		}
	}
	.classification {
		margin-top: 24px;
		color: #999;
		.classification-item {
			position: relative;
			margin-right: 18px;
			&:after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 0;
				height: 2px;
				border-bottom: 2px solid #18191b;
				-webkit-transition: all .5s cubic-bezier(.19,1,.22,1);
				-moz-transition: all .5s cubic-bezier(.19,1,.22,1);
				-o-transition: all .5s cubic-bezier(.19,1,.22,1);
				transition: all .5s cubic-bezier(.19,1,.22,1);
			}
			&.active {
				&:after {
					width: 100%;
				}
			}
			a {
				font-weight: bold;
				font-size: 14px;
				color: #18191b;
				cursor: pointer;
			}
		}
	}
	// 图标联系方式
	.contact {
		position:fixed;
		right: 80px;
		bottom: 120px;
		width: 20px;
		li {
			margin-bottom: 12px;
			a {
				cursor: pointer;
				i {
					font-size: 20px;
				}
			}
		}
	}
}

</style>
