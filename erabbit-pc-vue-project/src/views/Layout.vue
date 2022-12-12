<template>
  <div>
    <AppTopnav />
    <AppHeader />
    <main>
      <!--二级路由-->
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>
<script>
import AppTopnav from '@/components/app-topnav';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter },
};
</script>

<style scoped lang="less"></style>
