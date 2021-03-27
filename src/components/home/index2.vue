<template>
	<div class="home">
		<header class="header table-row">
			<div></div>
			<div class="tablecell">
				<h1>QD-Blog</h1>
				<p>事情往往比想象中的要简单，不妨多等会。</p>
				<div class="option">
						<a class="button">Enter Blog</a>
						<i class="iconfont icon-atm-away"></i>
				</div>
			</div>
			<a class="next" id="next" @click="next"></a>
		</header>
		<section class="section table-row">
			<div class="tablecell">
				<div class="blog-section">
						<h1 class="animate__animated animate__fadeInUp" :style="{'visibility': scrollTop>100?'block':'visible', 'animation-name': scrollTop>100?'fadeInDown':'none'}">博客分类</h1>
						<p class="animate__animated animate__fadeInUp" :style="{'visibility': scrollTop>100?'block':'visible', 'animation-name': scrollTop>100?'fadeInDown':'none'}">随便写写你想要的东西就可以了</p>
						<ul class="blog-card">
							<li v-for="(item, index) in blogs" :key="index" class="animate__animated animate__fadeInUp" :style="{'visibility': scrollTop>100?'block':'visible', 'animation-name': scrollTop>100?'fadeInUp':'none', 'animation-delay': 0.2*Number(index)+'s'}">
								<div class="blog-img">
									<img :src="item.src"/>
								</div>
								<div class="blog-content">
									<h3>{{item.title}}</h3>
									<label>{{item.time}}</label>
									<p>{{item.content}}</p>
									<a>阅读更多</a>
								</div>
							</li>
						</ul>
				</div>
			</div>
		</section>
		<div class="introduction">
			<div class="btns">
				<a>关于</a>
				<a>+友情链接</a>
			</div>
			<div class="title">
				<h1>QD个人博客</h1>
				<p>事情往往比想象中的要简单，不妨多等会。开心一天是一天，不要着急这寻找什么</p>
			</div>
		</div>
		<footer class="footer">
			<div class="container">
				<div class="about">
					<h4>相关链接</h4>
					<ul>
						<li><i></i>&nbsp;&nbsp;博文</li>
						<li><i></i>&nbsp;&nbsp;资源</li>
						<li><i></i>&nbsp;&nbsp;归档</li>
					</ul>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			scrollTop: 0,
			scollHeight: window.scollHeight,
			blogs: [
				{
					src: require('../../assets/img/bg8.jpg'),
					title: '编程专栏',
					time: '2021年2月19日',
					content: '本专栏主要分享编程的各种常见问题，包括前端，java，项目，面试题，希望通过这些知识的分享能够提升自己的java水平'
				},
				{
					src: require('../../assets/img/bg7.jpg'),
					title: '思考专栏',
					time: '2021年2月19日',
					content: '本专栏主要分享哲学视频，科普视频，通过学习获得更好的知识'
				},
				{
					src: require('../../assets/img/bg4.jpeg'),
					title: '美学专栏',
					time: '2021年2月19日',
					content: '本专栏主要分享音乐，古今中外，古典流行等，希望通过这些提高审美'
				}
			]
		}
	},
	methods: {
		next() {
			document.documentElement.scrollTop = document.documentElement.clientHeight
		}
	},
	created() {
		window.onscroll = () =>{
			//为了保证兼容性，这里取两个值，哪个有值取哪一个
			//scrollTop就是触发滚轮事件时滚轮的高度
			this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		}
	}
}
</script>

<style scoped>
/* 公共演示设置居中 */
.table-row {
	position: relative;
	display: table;
	width: 100%;
}
.tablecell {
	display: table-cell;
	vertical-align: middle;
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1;
	/* background-color: rgba(0,0,0,0.1) */
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

/* 头部样式 */
.header {
	height: 100vh;
	background-size: cover;
	background-image: url('../../assets/img/bg5.jpg');
}

.header h1 {
	text-align: center;
	color: #fff;
}

.header p {
	text-align: center;
	margin: 24px;
	color: #fff;
}

.next {
	display: block;
	width: 16px;
	height: 16px;
	position: absolute;
	bottom: 50px;
	left: 50%;
	margin-left: -25px;
	z-index: 11;
	-webkit-transition: all .5s ease-out;
	transition: all .5s ease-out;
	transform: rotateZ(45deg);
	border: 3px solid #ddd;
	border-top: none;
	border-left: none;
	cursor: pointer;
}

/* 内容部分 */
.section {
	background:#fff;
	width: 100%;
	height: 100vh;
}

.section h1{
	margin-bottom: 18px;
}

.blog-section {
	width: 74%;
	margin: 0 auto;
}

.blog-card {
	display: flex;
}

.blog-card li {
	flex: 1;
	margin: 20px;
	background: rgba(0,0,0,0.05);
	text-align: left;
}

.blog-card li .blog-img {
	line-height: 0;
	border:1px solid #ddd;
	overflow: hidden;
	border-radius: 3px;
}

.blog-card li .blog-img img{
	width: 100%;
	height: 284px;
	border: none;
}

.blog-card li .blog-content{
	padding: 30px 15px;
}

.blog-card li .blog-content h3{
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 12px; 
}
.blog-card li .blog-content label{
	display: inline-block;
	font-size: 12px;
	color: #bbbbbb;
	margin-bottom: 12px;
}
.blog-card li .blog-content p{
	font-size: 14px;
	margin-bottom: 24px;
	height: 50px;
}
.blog-card li .blog-content a{
	color: #1E9FFF;
	cursor: pointer;
}

.introduction {
	height: auto;
	background-image: url('../../assets/img/bg10.jpg');
	background-position: cover;
	background-size: 100%;
	background-attachment: fixed;
	background-repeat: no-repeat;
}
.introduction .btns{
	text-align: center;
	padding: 128px 0;
}

.introduction .btns a {
	display:inline-block;
	width: 240px;
	line-height: 40px;
	color:#fff;
	margin:0 64px;
	border:1px solid #fff;
	cursor: pointer;
}

.introduction .title{
	background: #fff;
	padding: 90px 0;
}

.introduction .title p{
	margin-top: 24px;
}

.footer {
	background:#000;
	color: #fff;
}
.container{
	padding: 54px;
}
.container ul{
	margin-top: 24px; 
}
</style>
