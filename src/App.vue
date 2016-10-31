<template>
     <section>
        <p v-if="$authenticating" class="loading">数据加载中...</p>
        <router-view v-if="!$authenticating" class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
     </section>
</template>

<script>
   module.exports={
		
   }
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

.loading{
  text-align: center;
  font-size: 16px;
  color: pink
}

.view {
  position: absolute;
  height: 100%;
  min-width: 100%;
  transition: all .5s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 10px, 0);
}
[v-clock]{
	display: none;
}
</style>
