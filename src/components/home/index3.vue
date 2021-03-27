<template>
	<div class="home">
		<section class="section">
			<div class="row">
				<div class="col-12">
					<div class="home-page-footer">
						<div class="content">
							<div class="title">
								<h1>夕拾</h1>
								<h1>朝花</h1>
							</div>
							<p class="introduction">
								实交共每根说细名十家级，战展内无几置王规石，飞会村OD做拒金于。 二育两军体规明，提那该七离土周，
								广1用政越。 心通下般期半心场步，即件回报如几层，心气N租西九呜。 相风南子见线战看越识火，较界把
								和主收和属车等，别备Y究组旱吧没着。 量革员亲与，查直S。
							</p>
						</div>
					</div>
					<footer class="home-footer">
						<div class="copyright"><label> @Di~FriedRice</label></div>
						<div class="contact">
							<a><i class="iconfont icon-zhifubao"></i></a>
							<a><i class="iconfont icon-11qq"></i></a>
							<a><i class="iconfont icon-weixin1"></i></a>
						</div>
					</footer>
				</div>
				<!-- <div class="col-6">
					<div class="home-page">
						<div class="pageImg">
							<img src="../../assets/img/bg12.jpg"/>
						</div>
					</div>
				</div> -->
			</div>
		</section>
		<!-- <div class="menuBox" :class="{ active: menu}">
			<a class="menu" @click="showMenu">
				<i class="iconfont" :class="[ menu ? 'icon-daohang' : 'icon-menu1' ]"></i>
			</a>
			<div class="content">
				<div class="user-box">
					<a class="user-cover">
						<img src="../../assets/img/cover1.jpeg"/>
					</a>
					<div class="user-info">
						<h4>Di~FriedRice</h4>
						<p>实交共每根说细名十家级，战展内无几置王规石，飞会村OD做拒金于。 二育两军体规明，提那该七离土周</p>
					</div>
				</div>
				<ul class="blog-list">
					<li v-for="(item, index) in blogList" :key="index" class="blog-item"><a class="iconfont" :class="item.icon"></a></li>
				</ul>
			</div>
		</div>
		<div class="page">
			<a class="iconfont icon-arrow-left"></a>
			<a class="iconfont icon-arrow-right"></a>
		</div> -->
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			menu: false,
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
			]
		}
	},
	methods: {
		showMenu () {
			this.menu = !this.menu
		}
	},
	created() {
		window.onscroll = () =>{
			//为了保证兼容性，这里取两个值，哪个有值取哪一个
			//scrollTop就是触发滚轮事件时滚轮的高度
			this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		}
		// 落花
		// window.onload = function () {
    //   var img;
    //   setInterval(function () {
		// 		img=document.createElement("img");
		// 		img.src= require("./../../assets/img/snow.png");
		// 		img.style.position="absolute";
		// 		img.style.top="-50px";
		// 		img.style.left=(Math.random()*1300)+"px";
		// 		img.style.width=Math.random()*35+"px";
		// 		img.style.height=img.style.width;
		// 		img.style.opacity=Math.random();
		// 		var deg=(Math.random()*360)+"deg";
		// 		img.style.transform="rotate("+deg+")";
		// 		document.body.appendChild(img);
		// 		start(img);
		// 	},300);

		// 	function start(e) {
		// 		var s= setInterval(function() {
		// 			e.style.top=(parseInt(e.style.top)+1)+"px";
		// 			e.style.left=(parseFloat(e.style.left)+Math.random()*0.4)+"px";
		// 			e.style.opacity= e.style.opacity-0.0009;
		// 			if (parseInt(e.style.top)>document.documentElement.clientHeight-50||parseInt(e.style.left)>document.documentElement.clientWidth-200){
		// 				document.body.removeChild(e);
		// 				clearInterval(s);
		// 			}
		// 		},1);
		// 	}
		// }
		
	}
}
</script>

<style scoped lang="less">
.home-page-footer {
	height: calc(100vh - 80px);
	padding: 80px;
	.content {
		padding-top: 10px;
		.title {
			position: relative;
			width: 100px;
			height: 140px;
			&:after {
				content: '';
				position: absolute;
				z-index: 1;
				height: 20px;
				width: 20px;
				right: -16px;
				top: -8px;
				border: 8px solid #e9432b;
				border-radius: 50%;
			}
			h1 {
				position: absolute;
				z-index: 2;
				display: inline-block;
				width: 48px;
				font-size: 48px;
				+ h1 {
					right: 0;
					margin-left: 3px;
				}
			}
		}
		.introduction {
			margin-top: 40px;
		}
	}
}

.home-page {
	height: 100vh;
	position: relative;
	.pageImg {
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -240px;
		height: 812px;
		width: 480px;
		img {
			width: 100%;
			height: 100%;
		}
	}
}

.home-footer {
	overflow: hidden;
	padding-left: 80px;
	height: 80px;
	line-height: 80px;
	border-top: 1px solid #ddd;
	.copyright {
		float: left;
	}
	.contact {
		float: right;
		a {
			margin-right: 16px;
			cursor: pointer;
			i {
				font-size: 20px;
			}
		}
	}
}

/* a 按钮样式 */
a.button {
	margin-top: 24px;
	border: none;
	font-weight: bold;
	border-radius: 4px;
	display: inline-block;
	padding: 12px 24px;
	font-size: 14px;
	color: #fff;
	background: #1E9FFF;
	cursor: pointer;
}

a.button:hover {
  background: #1E9FFF;
}

a.button:active {
  background: #1e9ccc;
}

/* 内容部分 */
.section {
	background:#fff;
	width: 100%;
	height: 100vh;
}
.page {
	position: fixed;
	z-index: 10;
	bottom: 20px;
	right: 104px;
	a {
		cursor: pointer;
		font-size: 28px;
		margin: 0 24px;
	}
}
.menuBox {
    position: fixed;
	z-index: 13;
    top: 0;
	right: -60%;
	width: 60%;
    height: 100%;
	transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	&.active {
		right: 0;
		&:before {
			right: 20%;
		}
		.menu {
			color: #e9432b;
		}
	}
	&:before {
		content: '';
		width: 60%;
		height: 100%;
		background: #18191b;
		position: fixed;
		-webkit-transition: all .5s cubic-bezier(.19,1,.22,1);
		-moz-transition: all .5s cubic-bezier(.19,1,.22,1);
		-o-transition: all .5s cubic-bezier(.19,1,.22,1);
		transition: all .5s cubic-bezier(.19,1,.22,1);
		-webkit-transform: translateZ(0) translateX(45%) skew(12deg);
		-moz-transform: translateZ(0) translateX(45%) skew(12deg);
		-ms-transform: translateZ(0) translateX(45%) skew(12deg);
		-o-transform: translateZ(0) translateX(45%) skew(12deg);
		transform: translateZ(0) translateX(45%) skew(12deg);
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		-o-backface-visibility: hidden;
		backface-visibility: hidden;
		top: 0;
		right: -120%;
		z-index: 10;
		background-color: #18191b;
		background-image: -webkit-linear-gradient(46deg,#18191a,#18191b);
		background-image: -moz-linear-gradient(46deg,#18191a,#18191b);
		background-image: -o-linear-gradient(46deg,#18191a,#18191b);
		background-image: linear-gradient(46deg,#18191a,#18191b);
		box-shadow: 10px 10px 68px #000;
	}
	.menu {
    	position: fixed;
		z-index: 13;
    	top: 80px;
    	right: 80px;
		color: #18191b;
		cursor: pointer;
		i {
			font-size: 24px;
		}
	}
	.content {
		position: absolute;
		z-index: 13;
		right: 14%;
		top: 50%;
		margin-top: -290px;
		.user-box {
			width: 504px;
			.user-cover {
				float: left;
				height: 80px;
				width: 80px;
				overflow: hidden;
				border-radius: 50%;
				border: 1px solid #e9432b;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.user-info {
				padding-left: 94px;
				h4 {
					color: #fff;
					font-size: 18px;
				}
				p {
					display: block;
					margin-top: 2px;
					color: #fff;
				}
			}
		}
		.blog-list {
			width: 504px;
			overflow: hidden;
			border-radius: 5px;
			border: 1px solid #f4f4f4;
			border-right: none;
			border-bottom: none;
			margin-top: 40px;
			.blog-item {
				float: left;
				text-align: center;
				width: 33.33%;
				height: 168px;
				line-height: 168px;
				border-right: 1px solid #f4f4f4;
				border-bottom: 1px solid #f4f4f4;
				background: rgba(255, 255, 255, 0.05);
				transition: all .7s;
				a {
					display: inline-block;
					height: 100%;
					width: 100%;
					font-size: 40px;
					color: #f4f4f4;
					cursor: pointer;
					&:hover {
						background: #e9432b;
					}
				}
			}
		}
	}
}
</style>
