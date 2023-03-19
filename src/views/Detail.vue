<template>
  <div class="detailBox">
    <!-- 基本信息 -->
    <div class="base">
      <div class="top">
        <div class="pic">
          <img
            src="https://user-gold-cdn.xitu.io/2020/6/26/172f0a69771328b9?w=1950&h=2730&f=png&s=1115920"
            alt
          />
        </div>
        <div class="con">
          <h4>Mastering Gradle</h4>
          <p>
            这是一本能拉开你与别人 Gradle 差距的书。
            从工程实践角度出发, 一方面讲述 Gradle 的核心用法, 另一方面讲述其背后的原理. 相信看完我们精心准备的系列文章, 读者再也不用死记硬背 "Build Script 到底有哪些配置?", 也不会为 "Gradle 到底是怎么执行的?" 这些问题而苦恼, 而是有种 "拨云见日, 原来如此, 不过如此" 的顿悟感.
          </p>
          <p>
            <img
              src="https://lc-gold-cdn.xitu.io/btkQdzynsAVBNhEsu0yzw9Zq4ZfKfzPncM5t1Y89?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
              alt
            />
            <span>walfud</span>
          </p>
        </div>
      </div>

      <div class="buy">
        <p class="info">
          <i></i>
          <span>89 人已购买</span>
        </p>
        <div class="imageList">
          <img
            src="https://mirror-gold-cdn.xitu.io/168e0867c25139157c0?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
            alt
          />
          <img
            src="https://mirror-gold-cdn.xitu.io/168e0867c25139157c0?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
            alt
          />
          <img
            src="https://mirror-gold-cdn.xitu.io/168e0867c25139157c0?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
            alt
          />
          <img
            src="https://mirror-gold-cdn.xitu.io/168e0867c25139157c0?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
            alt
          />
        </div>
      </div>

      <div class="button">
        <van-button type="default">试读</van-button>
        <van-button type="primary">购买 ￥29.9</van-button>
      </div>
    </div>

    <!-- 章节列表 -->
    <div class="section">
      <h3 class="title">小册内容</h3>
      <ul class="list">
        <li class="item">
          <router-link :to="{path:`/content/0/0`}">
            <div class="num">1</div>
            <div class="con">
              <p>全书介绍</p>
              <p>
                <span>时长:3分</span>
                <span>379次学习</span>
              </p>
            </div>
            <div class="btn">
              <van-tag type="warning">试读</van-tag>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    
    <!-- 详细描述 -->
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "Detail"
};
</script>

<style lang="less" scoped>
.detailBox {
  background: #eee;
}

.base {
  background: #fff;
  padding: 0.3rem;

  .top {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .pic {
      width: 18rem;
      background: #eee;

      img {
        display: block;
        width: 100%;
      }
    }

    .con {
      margin-left: 0.3rem;

      h4 {
        font-size: 0.4rem;
        line-height: 0.8rem;
      }

      p {
        margin-bottom: 0.2rem;
        line-height: 0.5rem;
        font-size: 0.28rem;

        img {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          vertical-align: middle;
        }

        span {
          margin-left: 0.2rem;
          vertical-align: middle;
        }
      }
    }
  }

  .buy {
    margin-top: 0.2rem;
    padding: 0.2rem 0.3rem;
    display: flex;
    align-items: center;
    border-top: 0.02rem solid #ebedf0;
    border-bottom: 0.02rem solid #ebedf0;

    .info {
      font-size: 0;
      i {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background: url("https://b-gold-cdn.xitu.io/v3/static/img/buy-icon.1323aad.svg")
          no-repeat center center;
        background-size: 90% 90%;
        vertical-align: middle;
      }

      span {
        vertical-align: middle;
        font-size: 0.32rem;
      }
    }

    .imageList {
      margin-left: 0.4rem;
      font-size: 0;
      img {
        display: inline-block;
        margin-right: 0.2rem;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
    }
  }

  .button {
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;

    .van-button {
      width: 30% !important;
      height: 1rem !important;

      &:nth-last-child(1) {
        width: 60% !important;
      }
    }
  }
}

.section {
  margin-top: 0.4rem;
  background: #fff;
  padding: 0.3rem;

  .title {
    line-height: 0.8rem;
  }

  .list {
    .item {
      padding: 0.26rem 0;
      border-bottom: 0.02rem solid #ebedf0;
      &:nth-last-child(1) {
        border-bottom: none;
      }

      a {
        display: flex;
        align-items: center;
        color: #555;
      }

      .num {
        width: 13%;
        text-align: center;
      }

      .con {
        width: 70%;

        p {
          line-height: 0.6rem;
          font-size: 0.36rem;

          &:nth-last-child(1) {
            font-size: 0.28rem;
            span {
              margin-right: 0.2rem;
            }
          }
        }
      }

      .btn {
        margin-left: 0.2rem;
      }
    }
  }
}

.content {
  margin-top: 0.4rem;
  background: #fff;
  padding: 0.3rem;
}
</style>