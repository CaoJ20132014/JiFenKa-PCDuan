<template>
    <div class="BOX">
        <div class="heard_top">
            <div class="top">
                <div class="top_left">杭州天缘网络欢迎您！</div>
                <div class="top_right">
                    <img src="../../assets/image/error/viplogin.png" alt="" class="vip"/>
                    <span @click="tologin">会员登录</span>
                </div>
            </div>
        </div>
        <div class="inside">
            <img src="../../assets/image/error/500.png" alt="" style="width: 242px;height: 235px;">
            <div class="right">
                <b>啊，服务器失联！</b>
                <p>请稍等或刷新重试！</p>
                <el-button class="home" @click="goHome">返回首页</el-button>
                <el-button class="prev" @click="Prev">返回上一页</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {
            tologin(){
                this.$router.push({
					name: 'accountlogin'
				});
            },
            goHome(){
                this.$router.push({
                    name: 'home_login'
                });
            },
            Prev(){
                let query = this.$route.query;
                this.$router.push({
                    path: query.redirect
                });
            }
        }
    }
</script>
<style scoped>
    .BOX{
        width: 100%;
        height: 100%;
    }
    .heard_top {
		width: 100%;
		height: 40px;
		background-color: #454545;
		color: white;
	}
	.heard_top .top {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		font-size: 14px;
	}
	.heard_top .top .top_right{
		display: flex;
        cursor: pointer;
	}
    .top_right .vip{
		width: 17px;
		height: 17px;
		vertical-align: top;
		margin-top: 11px;
		margin-right: 5px;
	}
    .inside{
        width: 600px;
        height: 235px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .inside img{
        vertical-align: top;
    }
    .right{
        display: inline-block;
        padding-left: 80px;
        padding-top: 50px;
    }
    .right b{
        font-size: 16px;
    }
    .right p{
        font-size: 14px;
        padding-top: 5px;
        padding-bottom: 50px;
    }
    .el-button.el-button--default{
        width: 110px;
    }
    .el-button.el-button--default.home{
        background-color: #8a63e7;
        color: white;
    }
    .el-button.home:focus, 
    .el-button.home:hover{
        border-color: #8a63e7;
    }
    .el-button.prev:focus, 
    .el-button.prev:hover{
        border-color: #8a63e7;
        color: #8a63e7;
    }
</style>