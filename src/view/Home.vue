<script setup lang="ts">
import HomeHeader from "@/components/HomePage/HomeHeader.vue"
import HomeExplore from "@/components/HomePage/HomeExplore.vue"
import {reactive} from "@vue/reactivity";


const state = reactive({
  showHeader: true
})

</script>

<template lang="pug">
HomeHeader(v-if="state.showHeader")
.landing-header
  .introduction.text-vertical
    .introduction--line
    .introduction--text Introduction
.container
  HomeExplore
</template>

<style lang="scss" scoped>
.landing-header {
  @apply h-screen w-screen relative;
  background: url("@/assets/images/banner/yilan-county.jpg") no-repeat;
  background-size: cover;



  .introduction{
    @apply absolute bottom-0 left-32 z-20;
    @apply flex items-center flex-row-reverse;
    @apply cursor-pointer;

    @media (max-width: 768px) {
      @apply left-16;
    }

    &--line{
      @apply border-r-2 border-white h-16 mt-2;
    }

    &--text {
      @apply text-xl text-white;

    }
  }
}


</style>
