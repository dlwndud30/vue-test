<script setup></script>
<template>
  <div class="gnb">
    <div class="gnb_wrap">
      <a
        href="#"
        class="menu"
        >카테고리</a
      >
      <!-- <div class="layer_all_menu d-none">ss</div> -->
      <ul class="gnb_menu_list list">
        <li><RouterLink to="/">오특</RouterLink></li>
        <li><RouterLink to="/">랭킹</RouterLink></li>
        <li><RouterLink to="/">LUXE EDIT</RouterLink></li>
        <li><RouterLink to="/">기획전</RouterLink></li>
        <li><RouterLink to="/">세일</RouterLink></li>
        <li><RouterLink to="/">기프트카드</RouterLink></li>
        <li><RouterLink to="/">멤버십/쿠폰</RouterLink></li>
        <li><RouterLink to="/">이벤트</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.gnb {
  width: 100%;
  border: 1px solid lightgray;
}
.gnb_wrap {
  width: 1020px;
  margin: 0 auto;
  display: flex;

  .menu {
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

  .gnb_menu_list {
    width: 100%;
    font-size: large;
    justify-content: space-around;
    align-items: center;
  }

  .gnb_menu_list li {
    border-right: none;
  }
}
</style>
