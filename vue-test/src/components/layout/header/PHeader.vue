<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <header class="header">
    <ul class="header_top">
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
      <ul class="mymenu_area">
        <li>오늘드림</li>
        <li>관심매장소식</li>
        <li>최근본상품</li>
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
.header_top li a {
  padding: 0 9px 0 10px;
  border-right: 1px solid lightgrey;
  text-decoration: none;
  color: #666;
  font-size: 12px;
}

.header_top li a.router-link-exact-active {
  text-decoration: none; /* 밑줄 제거 */
  color: #666; /* 링크 색상 설정 */
  font-weight: bold; /* 글꼴 굵기 설정 */
}

.header_top li:last-child a {
  border: none;
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

  .mymenu_area {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mymenu_area li {
    padding: 0 9px 0 10px;
    border-right: 1px solid lightgray;
    font-size: 16px;
  }

  .mymenu_area li:last-child {
    border-right: none;
  }
}
</style>
