<template>
  <div class="py-12 pb-32 feature-bg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-24">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md text-white" :class="[feature.bgclass]" >
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="mt-7 text-lg leading-6 font-medium text-white-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-6 text-thin text-custom-lilac-light">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { AcademicCapIcon, CameraIcon, HeartIcon, ShareIcon, CurrencyDollarIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Capture',
    description: 'Make every unique moment a lasting one and share it with your family and friends.',
    icon: CameraIcon,
    bgclass: 'bg-blue-500'
  },
  {
    name: 'Share',
    description: 'Post your recommendations and favourite discoveries with the community.',
    icon: ShareIcon,
    bgclass: 'bg-purple-500'
  },
  {
    name: 'Support',
    description: 'Saw what you like? Show your support through instant checkouts within our App.',
    icon: HeartIcon,
    bgclass: 'bg-red-500'
  },
  {
    name: 'Learn',
    description: 'Gain direct access to a wealth of information and pick-up new skills or tips.',
    icon: AcademicCapIcon,
    bgclass: 'bg-green-400'
  },
  {
    name: 'Earn',
    description: 'Score like-minded followers and unlock income opportunities.',
    icon: CurrencyDollarIcon,
    bgclass: 'bg-pink-400'
  }
]

export default {
  setup() {
    return {
      features,
    }
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
 .feature-bg {
   background-color: #1F1D2B;
}
</style>