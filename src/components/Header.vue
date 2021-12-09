<template>
  <Popover class="relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img class="h-6 w-auto sm:h-6" src="./../assets/SB_WHITE.svg" alt="" />
          </a>
        </div>

        <div class="flex justify-between lg:w-0 lg:flex-1">
           <a href="#" class="text-base font-normal text-white">
            Home
          </a>

          <a href="#" class="text-base font-normal text-gray-500 hover:text-white">
            About
          </a>
          
          <a href="#" class="text-base font-normal text-gray-500 hover:text-white">
            Creators
          </a>

          <a href="#" class="text-base font-normal text-gray-500 hover:text-white">
            Businesses
          </a>
        </div>

        <div class="flex justify-end lg:w-0 lg:flex-1">
          <a href="#" class="text-base font-normal text-black">
            .
          </a>
        </div>

      </div>
      <main class="mt-40 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-custom-blue sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Lifestyle</span>
            {{ ' ' }}
            <span class="block text-custom-white xl:inline">at your fingertips.</span>
          </h1>
          <p class="mt-10 text-thin text-custom-lilac-light">
            A seamless social shopping experience is just one swipe away
          </p>
          <div class="mt-20 flex justify-center">
            <img src="./../assets/DEMO.svg" alt="" />
          </div>
          
        </div>
      </main>
    </div>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel
  },
  setup() {
  },
}
</script>

<style scoped>
 .text-custom-blue {
   color: #3983FF
 }
 .text-custom-white {
   color: #F2F4F8
 }
 .text-custom-lilac-light {
   color: #D8D5E7;
 }
</style>