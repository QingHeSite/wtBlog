<template>
    <div>
        <p>大前端方向发展🚀</p>
        <p>技术栈: Vue2, Vue3全家桶, 小程序开发, 微信公众号开发(登录授权,支付等), React, Node, Express, Koa, docker容器化,</p>
        <p>有兴趣可以一起写博客交流经验呢🤔</p>
        <span>wechat👇</span>
        <button class="open-btn" @click="showWechat">展开微信码</button>
        <div v-if="showWechatStatus"><img src="../assets/imgs/wt_wechat.jpg" width="300" alt=""></div>
    </div>
</template>
<script>
export default {
    name: 'indexPage',
    data: function() {
        return {
            page: 'index-',
            showWechatStatus: false
        }
    },
    methods: {
        showWechat() {
            this.showWechatStatus = true
        }
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
    .open-btn{
        width: 90px;
        height: 28px;
        line-height: 26px;
        padding: 0;
        font-weight: 600;
        cursor: pointer;
        margin-left: 20px;
        transition: all .3s;
        &:hover{
            transform: scale(1.2);
        }
    }
</style>