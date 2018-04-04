<template lang="html">
	<div class="mask_menu" ref='mask' :style="{opacity: isShow?1:0,transitionDelay:isShow?'0.1s':'0s'}">
		<div class="mask_menu__container" ref="menu">
			<div style='height:50%'></div>
			<div v-for='(item,index) in menu' class="mask_menu__item" :style="{width:150*width+'px',height:120*height+'px'}">
				<div class="mask_menu__title" :style='{height:titleHeight+"px",lineHeight:titleHeight+"px",top:-1*titleHeight+"px"}'>{{item.title}}</div>

				<div v-for='(block,_index) in item.blocks' :style="{width:block.width*150 +'px',height:block.height*120 +'px',padding:'3px'}"
				 class="mask_menu__block">
					<div class="mask_menu__block__core" :style="{lineHeight: block.height*120 - 3*2 +'px',background:block.color}" >
						
                		<div class="mask_menu--block_name">{{block.name}}</div>
                		<div :class="block.icon+' mask_menu--block_icon ' + 'iconsize_'+block.height+block.width" :data-row = 'index' :data-col = '_index' @click='blockClick'></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bi-menu',
		props: ['isShow'],
		data() {
			return {
				width: 2,
				height: 5,
				titleHeight: 48,
				scrollObj: null
			}
		},
		methods: {
			test(test) {
				this.scrollObj(test.deltaY)
			},
			blockClick(e){
				const domSet = e.target.dataset
				console.log(domSet)
				this.$store.commit('router/choose',{row:domSet.row,col:domSet.col})
				this.$emit('closeMenu')
			}
		},
		computed:{
			menu(){
				const _this = this
				if (!_this.$store.state.router.all) return []

				return _this.$store.state.router.all.map(val=>({
					title:val.label,
					blocks:val.children?val.children.map(item=>({
						name:item.label,
						width:item.width,
						height:item.height,
						float:'left',
						color:item.color,
						icon:item.icon
					})):[]
				}))
			}
		}
		,
		mounted() {
			this.scrollObj = CreacteScroll(this.$refs.menu)

			//添加鼠标滚轮监听
			addMouseWheelEvent(
				this.$refs.menu,
				(event) => {
					this.scrollObj(event.deltaY)
				},
				(event) => {
					this.scrollObj(event.detail)
				},
			)
		}
	}


	function addMouseWheelEvent(element, func1,func2) {

		if (element.onmousewheel === null) 
			element.onmousewheel = func1
		else
			// 火狐鼠标滚动兼容
			element.addEventListener("DOMMouseScroll", func2, false)
		
	}


	function CreacteScroll(dom) {
		let
			target = dom, // 目标 dom
			timeout = null, // timeout 对象
			step = 10, //动画帧数
			time = 50, // 时间参数
			before = 0, //起始点
			after = 0, // 目标点
			range = 0, // 滚动范围(滚动最大值),
			task = [] // 每帧位置

		function scroll() {
			if (task.length == 0)
				timeout = null
			else {
				dom.scrollLeft = task[0]
				let n = Math.ceil(task.length * (7 / 13))
				task.splice(0, n)

				timeout = requestAnimationFrame(scroll)
			}

		}

		return function (direct) {
			before = task.length > 0 ? task[task.length - 1] : dom.scrollLeft
			range = dom.scrollWidth - dom.clientWidth
			after = (() => {
				let temp = direct + 80 * (direct > 0 ? 1 : -1) + before
				return (
					temp < 0 ?
						0 :
						(temp > range ?
							range :
							temp)
				)
			})()

			if (before == after)
				return

			for (let i = 0; i < step; i++) {
				if (i == step - 1)
					task.push(after)
				else
					task.push(before + (after - before) * (i + 1) / step)
			}

			if (timeout)
				return
			else
				scroll()

		}
	}
</script>

<style lang="css" scoped>
	.mask_menu {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		padding-top: 48px;
		background-color: transparent;
		transition: all 0.3 ease-out;
	}

	.mask_menu__container {
		width: 100%;
		height: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		padding: 0 96px 0 48px;
		white-space: nowrap;
		position: relative;
	}

	.mask_menu__item {
		width: 360px;
		height: 720px;
		display: inline-block;
		position: relative;
		/* top: 50%!important; */
		transform: translate(0, -50%)!important;
		margin-left: 48px;
	}
	/* .mask_menu__item:first-child {
		margin-left: 256px;
	} */

	.mask_menu__item:last-child {
		margin-right: 48px;
	}
	.mask_menu__title {
		text-align: left;
		position: absolute;
		left: 0;
		right: 0;
		color: #fff;
		font-size: 24px;
		font-weight: 700;
	}

	.mask_menu__block {
		float: left;
	}

	.mask_menu__block__core {
		position: relative;
		width: 100%;
		height: 100%;
		/* background-color: aqua; */
		border-radius: 1px;
		transition: all 0.5 ease-out;
		text-align: center;
	}

	.mask_menu--block_name{
		position: absolute;
		bottom: 0;
		left: 0;
		height: 28px;
		line-height: 28px;
		font-size: 16px;
		padding-left: 8px;
		font-weight:bold;
	}
	/* .mask_menu__block__core:hover{
  transform: scale(1.01,1.01);
} */

	.mask_menu__block__core:active {
		transform: scale(0.99, 0.99);
	}

	.mask_menu--block_icon{
		
		position: absolute;
		bottom: 0;
		left: 0;
		height: 120px;
		line-height: 110px;
		font-size: 48px;
		width: 100%;
	}

	.iconsize_11{
		font-size: 40px;
	}
</style>