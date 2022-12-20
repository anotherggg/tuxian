<template>
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!--轮播图-->
      <HomeBanner />
      <!--新鲜好物-->
      <HomeNew />
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category';
import HomeBanner from './components/home-banner';
import HomeNew from './components/home-new';

export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner, HomeNew },
};
</script>
<style scoped lang="less"></style>
