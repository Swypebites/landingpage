<template>
  <div class="bg-blue-700 footer-bg">
    <div class="max-w-7xl mx-auto py-2 px-2 sm:px-5 lg:px-5">
      <div class="flex justify-center items-center">
        <span class="flex p-2 rounded-lg bg-blue-900 shadow-xl">
          <BellIcon class="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <p class="ml-4 font-medium text-sm text-white truncate">
          <span class="hidden md:inline">
            Registration for Closed Beta has ended. Watch this page for future
            updates!
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { BellIcon } from "@heroicons/vue/outline";

export default {
  components: {
    BellIcon,
  },
};
</script>
<style scoped>
 .footer-bg {
   background-color: #1F1D2B;
 }
</style>