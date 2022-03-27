<script setup lang="ts">
import Footer from "@/components/Footer.vue"
import HomeHeader from "@/components/HomePage/HomeHeader.vue"

import {reactive} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";
import {useRoute} from "vue-router";
import {watch} from "vue";
import RouterNames from "@/router/name";

const state = reactive({
  scrollYNum: 0,
  showHeader: true
})
const router = useRoute()
const appDom = (document.querySelector("#app") as HTMLElement)

const getWindowScroll = () => {
  appDom.addEventListener("scroll", ()=>{
    state.showHeader = appDom.scrollTop <= 200;
  })
}

onMounted(()=>{
  getWindowScroll()
})

watch(()=>router.name, ()=>{
  if(router.name != RouterNames.home) {
    appDom.removeEventListener("scroll", ()=> {})
  }
})

</script>

<template lang="pug">
HomeHeader(v-if="state.showHeader")
router-view
Footer

</template>

<style lang="scss" scoped>

</style>
