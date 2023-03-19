<template>
  <div class="homeBox">
    <!-- NAV -->
    <nav class="navBox">
      <div class="wrapper">
        <a
          href="javascript:;"
          v-for="item in types"
          :key="item.value"
          :class="{active:item.value===active}"
          @click="changeNav(item.value)"
        >{{item.name}}</a>
      </div>
    </nav>

    <!-- LIST -->
    <van-skeleton title avatar :row="4" v-if="bookData.length===0"></van-skeleton>
    <van-list
      v-else
      v-model="loading"
      :finished="finished"
      finished-text="数据已经全部加载完毕"
      @load="loadMore"
    >
      <ul class="listBox">
        <li class="item" v-for="item in bookData" :key="item.id">
          <router-link :to="{path:`/detail/${item.id}`}">
            <div class="pic">
              <img :src="item.img" alt />
            </div>
            <div class="con">
              <h4>Python数据分析实战：构建股票量化交易系统</h4>
              <p>walfud</p>
              <p>15小节 ▪ 186人购买</p>
            </div>
            <div class="price">￥129.9</div>
          </router-link>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
//类别数据：对于不需要更新或者更新后不需要通知组件渲染的数据，我们不让其数据劫持=>基于Object.freeze冻结它
let types = [
  {
    value: "",
    name: "全部"
  },
  {
    value: "frontend",
    name: "前端"
  },
  {
    value: "backend",
    name: "后端"
  },
  {
    value: "mobile",
    name: "移动开发"
  },
  {
    value: "blockchain",
    name: "区块链"
  },
  {
    value: "general",
    name: "通用"
  }
];

export default {
  name: "Home",
  data() {
    return {
      // 页卡切换
      types: Object.freeze(types),
      active: "",
      // 数据处理
      bookData: [],
      pageNum: 1,
      loading: false,
      finished: false
    };
  },
  methods: {
    // 页卡切换
    changeNav(val) {
      this.active = val;
      this.pageNum = 1;
      this.bookData = [];
      this.queryData();
    },
    // 请求数据
    async queryData() {
      this.loading = true;
      let { d } = await this.$api.book.getListByLastTime({
        pageNum: this.pageNum,
        alias: this.active
      });
      this.loading = false;
      if (d && d.length > 0) {
        d = d.map(item => Object.freeze(item));
        this.bookData.push(...d);
        return;
      }
      // 加载完毕
      this.finished = true;
    },
    // 加载更多数据
    loadMore() {
      this.pageNum++;
      this.queryData();
    }
  },
  // 开始加载组件
  created() {
    this.queryData();
  }
};

/*
 * 骨架屏技术的目的：让页面第一次渲染速度更快，在没有加载出页面内容的时候有一个占位或者loading的效果，减少白屏的时间
 *   【服务器骨架屏】
 *        1. 服务器渲染 SSR （项目是办分离开发：首屏服务器渲染，其余屏幕在首屏加载完成后，由客户端渲染）
 *        2. 首屏数据是我们直接基于ajax从服务器获取的，但是获取的结果中就包含了样式结构和数据(完全分离)
 *   【客户端骨架屏】
 *        其实就是一个loading和占位图
 *        开始也只请求首屏的数据（图片或者其他屏幕的数据都延迟一下）
 */
</script>

<style lang="less" scoped>
.homeBox {
  background: #fff;
  min-height: 100vh;
}

.navBox {
  border-bottom: 0.02rem solid #ebedf0;
  overflow: auto;
  margin-bottom: 0.2rem;

  .wrapper {
    font-size: 0;
    width: 140%;

    a {
      display: inline-block;
      font-size: 0.38rem;
      color: #555;
      padding: 0 0.4rem;
      line-height: 1rem;

      &.active {
        color: #1989fa;
      }
    }
  }
}

.van-skeleton {
  margin: 0.4rem 0;
}

.listBox {
  background: #fff;
  .item {
    position: relative;
    padding: 0.28rem 0.32rem;
    border-bottom: 0.02rem solid #ebedf0;

    &:nth-last-child(1) {
      border-bottom: none;
    }

    a {
      display: block;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      color: #555;
    }

    .pic {
      box-sizing: border-box;
      width: 1.6rem;
      box-shadow: 0.1rem 0.1rem 0.1rem #aaa;
      background: #909090;

      .van-image,
      img {
        display: block;
        width: 100%;
      }
    }

    .con {
      margin-left: 0.3rem;
      width: 3.5rem;

      h4,
      p {
        line-height: 0.6rem;
      }

      h4 {
        font-size: 0.36rem;
      }

      p {
        font-size: 0.32rem;
      }
    }

    .price {
      position: absolute;
      top: 50%;
      right: 0.4rem;
      transform: translateY(-50%);
      padding: 0 0.3rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      background: #f0f7ff;
      font-size: 0.36rem;
      color: #1989fa;
      border-radius: 0.8rem;
    }
  }
}
</style>