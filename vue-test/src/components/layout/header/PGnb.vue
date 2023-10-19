<script setup></script>
<template>
  <div class="gnb">
    <div class="gnb-wrap">
      <a class="menu">카테고리</a>
      <!-- <div class="layer_all_menu d-none">ss</div> -->
      <ul class="gnb-menu-list list">
        <li><RouterLink to="/hotdeal">오특</RouterLink></li>
        <li><RouterLink to="/best">랭킹</RouterLink></li>
        <li><RouterLink to="/planShopDetail">LUXE EDIT</RouterLink></li>
        <li><RouterLink to="/planShop">기획전</RouterLink></li>
        <li><RouterLink to="/sale">세일</RouterLink></li>
        <li><RouterLink to="/giftCardGuide">기프트카드</RouterLink></li>
        <li><RouterLink to="/memberShip">멤버십/쿠폰</RouterLink></li>
        <li><RouterLink to="/event">이벤트</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.gnb {
  width: 100%;
  border: 1px solid lightgray;
}
.gnb-wrap {
  width: 1020px;
  margin: 0 auto;
  display: flex;

  .menu {
    text-decoration: none;
    width: 170px;
    height: 44px;
    padding-left: 27px;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    line-height: 44px;
    color: #000;
    font-size: 15px;
    font-weight: 700;
  }
  .menu:before {
    content: '';
    display: inline-block;
    margin: 0 8px 0 0;
    background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_menu_off.png) 0 14px no-repeat;
    width: 24px;
    height: 44px;
    vertical-align: middle;
  }

  .gnb-menu-list {
    width: 100%;
    font-size: large;
    justify-content: space-around;
    align-items: center;
  }
  .gnb-menu-list a {
    border: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }
}
</style>
