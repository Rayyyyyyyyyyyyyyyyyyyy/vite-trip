<script setup lang="ts">
import Header from "@/components/Header.vue"
import {reactive} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";

const state = reactive({
  scrollYNum: 0
})

const getWindowScroll = () => {

}
onMounted(()=>{
  window.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
  })
})

</script>

<template lang="pug">
Header(:bg_transparent="true")
router-view

</template>

<style lang="scss" scoped>

</style>
