<template>
  <div id="app">
    <!-- 头部 -->
    <van-nav-bar v-if="isNav" :title="navText" left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- 内容 -->
    <div class="mainBox" :style="sty">
      <keep-alive include="Home">
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- 底部 -->
    <van-grid :column-num="3" v-if="isFooter">
      <van-grid-item icon="home-o" text="全部小册" to="/" />
      <van-grid-item icon="shopping-cart-o" text="购买" to="/buy" />
      <van-grid-item icon="contact" text="我" to="/info" />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFooter: true,
      isNav: true,
      navText: "",
      sty: {
        paddingBottom: "1.4rem",
        paddingTop: "0rem"
      }
    };
  },
  methods: {
    // 返回上级路由
    onClickLeft() {
      this.$router.go(-1);
    },
    // 控制头尾样式
    show() {
      let { path } = this.$route;
      if (/(content|detail)/.test(path)) {
        this.isFooter = false;
        this.isNav = true;
        this.sty = {
          paddingBottom: "0rem",
          paddingTop: "1.12rem"
        };
        this.navText = path.includes("/detail") ? "内容详情" : "章节阅读";
        return;
      }
      this.isFooter = true;
      this.isNav = false;
      this.sty = {
        paddingBottom: "1.4rem",
        paddingTop: "0rem"
      };
    }
  },
  // 第一次加载 或者 路由改变  都去计算一下头部底部
  watch: {
    $route() {
      this.show();
    }
  },
  beforeMount() {
    this.show();
  }
};
</script>

<style lang="less">
.mainBox {
  font-size: 0.3rem;
}

.van-nav-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  border-bottom: 0.02rem solid #ebedf0;
  height: 1.1rem !important;

  .van-nav-bar__title,
  .van-icon-arrow-left {
    font-size: 0.4rem !important;
  }
}

.van-grid {
  box-sizing: border-box;
  position: fixed !important;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  border-top: 0.02rem solid #ebedf0;

  .van-grid-item__content {
    padding: 0.15rem !important;
  }

  .van-grid-item__text {
    margin-top: 0.1rem !important;
  }

  .van-grid-item__icon {
    font-size: 0.6rem !important;
  }
}
</style>