<template>
  <div class="bg-blue-700">
    <div class="max-w-7xl mx-auto py-2 px-2 sm:px-5 lg:px-5">
      <div class="flex">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-blue-900 shadow-xl">
            <BellIcon class="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <p class="ml-4 font-medium text-sm text-white truncate">
            <span class="hidden md:inline">
              Registration for Closed Beta has ended. Watch this page for future updates!
            </span>
          </p>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-800 bg-white hover:bg-blue-700 hover:text-white hover:border-white">
            Learn more
          </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
            <span class="sr-only odd:hidden md:inline">Dismiss</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BellIcon } from '@heroicons/vue/outline'

export default {
  components: {
    BellIcon,
  },
}
</script>