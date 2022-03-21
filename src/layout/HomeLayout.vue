<script setup lang="ts">
import Footer from "@/components/Footer.vue"

import {reactive} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";

const state = reactive({
  scrollYNum: 0
})

const getWindowScroll = () => {

}
onMounted(()=>{
  document.body.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
  })
})

</script>

<template lang="pug">
router-view
Footer

</template>

<style lang="scss" scoped>

</style>
