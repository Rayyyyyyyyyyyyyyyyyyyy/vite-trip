<script setup lang="ts">
import e1 from "@/assets/images/explore/e1.jpg"
import e2 from "@/assets/images/explore/e2.jpg"
import e3 from "@/assets/images/explore/e3.jpg"
import e4 from "@/assets/images/explore/e4.jpg"
import e5 from "@/assets/images/explore/e5.jpg"
import e6 from "@/assets/images/explore/e6.jpg"

</script>

<template lang="pug">
.explore
  .explore-title
    .explore-title-left 行程規劃
    .explore-title-hr
    .explore-title-right.text-vertical 探索


  .explore-banner
    .explore-banner-left
      .explore-banner-item
        .hover-box
        img(:src="e1" alt="explore-img")
      .explore-banner-item
        .hover-box
        img(:src="e2" alt="explore-img")
    .explore-banner-right
      .explore-banner-item
        .hover-box
        img(:src="e6" alt="explore-img")
      .explore-banner-right--bottom
        .explore-banner-item
          .hover-box
          img(:src="e3" alt="explore-img")
        .explore-banner-item
          .hover-box
          img(:src="e4" alt="explore-img")
        .explore-banner-item
          .hover-box
          img(:src="e5" alt="explore-img")













</template>

<style lang="scss" scoped>
.explore {
  @apply py-8 w-full h-screen;
  &-title {
    @apply flex items-center mb-8;

    &-left {
      @apply text-3xl;
    }

    &-hr {
      @apply mx-10 h-8 border-bg-footer border-r-2;
    }

    &-right {
      @apply text-2xl;
    }
  }

  &-banner {
    @apply flex w-full h-full;
    max-height: 80vh;
    img {
      @apply object-cover;
      @apply w-full h-full;

    }
    &-item {
      @apply relative;
      .hover-box {
        @apply absolute left-0 top-0 z-20 bg-transparent;
        @apply w-full h-full cursor-pointer;
        &:hover {
          @apply bg-bg-footer/50;
          transition: .5s;
        }
      }
    }

    &-left {
      @apply w-5/12 mr-2;
      @apply flex flex-col overflow-hidden;

      .explore-banner-item{
        @apply w-full h-1/2;
      }
      .explore-banner-item + .explore-banner-item {
        @apply mt-2;
      }

    }

    &-right {
      @apply w-7/12 h-full;
      @apply flex flex-col overflow-hidden;

      .explore-banner-item {
        @apply w-full h-4/5;
      }
      &--bottom {
        @apply w-full h-1/5 flex overflow-hidden mt-2;
        .explore-banner-item {
          @apply w-1/3 h-full;
        }
      }
    }
  }

}
</style>
