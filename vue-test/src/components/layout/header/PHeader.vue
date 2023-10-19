<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isDeliveryBoxVisible = ref(false);
const showDeliveryBox = () => {
  isDeliveryBoxVisible.value = true;
};
const hideDeliveryBox = () => {
  isDeliveryBoxVisible.value = false;
};
</script>
<template>
  <header class="header">
    <ul class="header_top list">
      <li><RouterLink to="/login">회원가입</RouterLink></li>
      <li><RouterLink to="/">로그인</RouterLink></li>
      <li><RouterLink to="/about">장바구니</RouterLink></li>
      <li><RouterLink to="/">주문배송</RouterLink></li>
      <li><RouterLink to="/">고객센터</RouterLink></li>
      <li><RouterLink to="/">매장안내</RouterLink></li>
      <li><RouterLink to="/">Global</RouterLink></li>
    </ul>
    <div class="header_inner">
      <div class="logo">
        <img alt="logo" />
      </div>
      <div class="search_box">
        <input
          class="search_bar"
          type="text"
          placeholder="검색어를 입력해 주세요"
        />
        <button class="search_btn"></button>
      </div>
      <ul class="mymenu_area list">
        <li class="delivery">
          <div
            @mouseover="showDeliveryBox"
            @mouseout="hideDeliveryBox"
            :class="{ hover: isDeliveryBoxVisible }"
          >
            오늘드림
            <img
              class="today-icon"
              src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_delivery_flag.png"
            />
          </div>
          <div
            class="delivery-box-wrap"
            v-if="isDeliveryBoxVisible"
          >
            <div class="delivery-box">
              <p>배송지를 등록하고 오늘드림으로 구매 가능한 상품을 확인하세요!</p>
            </div>
          </div>
        </li>
        <li class="store">관심 매장소식</li>
        <li class="recent">최근 본 상품</li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 1020px;
  margin: 0 auto;
}

.header_top {
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  letter-spacing: -0.005em;
}

.header_top li {
  display: inline;
  font-size: 11px;
}

.header_inner {
  display: flex;
  height: 90px;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 248px;
    height: 42px;
    background-color: bisque;
  }

  .search_box {
    display: flex;
    padding: 0 20px 0 20px;
    align-items: center;
    width: 340px;
    height: 40px;
    border: 2px solid #9bce26;
    background-color: #fff;
    border-radius: 20px;
    .search_bar {
      width: 100%;
      height: 36px;
      border: 0;
      padding: 8px 10px 8px 0;
      font-size: 12px;
      letter-spacing: 0.5px;
    }
    .search_btn {
      width: 21px;
      height: 21px;
      border: none;
      background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_search21x212.png) 50% 50% no-repeat;
    }
  }

  .mymenu_area li {
    padding: 0 14px 0 15px;
    border-right: 1px solid lightgray;
    font-size: 14px;
    color: #000;
    line-height: 20px;
    z-index: 30;
    font-weight: 200;
  }

  .mymenu_area > li:not(:first-child):after {
    content: '';
    display: inline-block;
    width: 7px;
    height: 4px;
    background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow11x72.png) no-repeat;
    margin: 0 0 2px 8px;
  }
  .mymenu_area li:last-child {
    padding-right: 0;
    border-right: none;
  }
}

.today-icon {
  font-size: 12px;
  width: 22px;
}

.delivery-box-wrap {
  z-index: 20;
  position: absolute;
  top: 100px;
  width: 210px;
  background: #fff;
  padding: 12px 15px;
  box-shadow: 2px 0 7px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  .delivery-box > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    letter-spacing: 0;
    word-break: keep-all;
    margin: 0;
  }
}

.hover {
  border-bottom: 2px solid #000;
}
</style>
