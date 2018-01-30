<template>
    <div class="choose_box">
        <div class="card_box">
            <div @click="choosefill">
                <p>运营商充值卡供货</p>
                <div class="img_box border">
                    <img src="../../../../../assets/image/Provide/card_pur.png" alt="" class="card">
                    <span>上网充值卡</span>
                </div>
            </div>
            <div @click="choosefule">
                <p>加油卡供货</p>
                <div class="img_box border">
                    <img src="../../../../../assets/image/Provide/fule.png" alt="" class="fule">
                    <span>中石化充值卡</span>
                </div>
            </div>
            <div @click="addfriends">
                <p>其他资源供货</p>
                <div class="img_box border">
                    <img src="../../../../../assets/image/Provide/phone.png" alt="" class="phone">
                    <span>点我联系商务</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
		data() {
			return {
				
			}
        },
        methods: {
			choosefill:function(){
				this.$router.push({
					name: 'onecard'
				});
            },
            choosefule:function(){
				this.$router.push({
					name: 'onefuel'
				});
			},
			addfriends:function(){
				window.open("http://wpa.qq.com/msgrd?v=3&uin=571996401&site=qq&menu=yes");
			}
		}
	}
</script>

<style lang="less" scoped>
    .choose_box{
        width: 908px;
        height: 627px;
        .card_box{
            width: 200px;
            padding-top: 29px;
            .img_box{
                width: 198px;
                height: 88px;
                border-radius: 3px;
                img.card{
                    width: 40px;
                    height: 30px;
                    vertical-align: top;
                    margin-left: 25px;
                    margin-top: 28px;
                }
                img.fule{
                    width: 40px;
                    height: 40px;
                    vertical-align: top;
                    margin-left: 25px;
                    margin-top: 24px;
                }
                img.phone{
                    width: 25px;
                    height: 48px;
                    vertical-align: top;
                    margin-left: 33px;
                    margin-top: 20px;
                }
                span{
                    line-height: 88px;
                    color: #8862e4;
                    padding-left: 15px;
                    font-size: 16px;
                }
            }
        }
        p{
            color: #494949;
            font-size: 18px;
            margin-bottom: 18px;
        }
        div{
            margin-bottom: 30px;
            cursor: pointer;
        }
    }
</style>