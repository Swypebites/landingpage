<template>
  <div class="container mx-auto px-4">
    <hr class="mb-6 border-b-1 border-gray-700" />

    <!-- FOOTER NAV -->
    <div class="px-4">
      <a href="#">
        <img class="h-6 w-auto sm:h-6" src="./../assets/SB_WHITE.svg" alt />
      </a>
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-x-8 md:gap-y-10">
        <div class="px-5 py-5 sm:px-8 sm:py-8">
          <div>
            <h3 class="text-sm tracking-wide font-semibold text-white uppercase">About</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="data in aboutFooter" :key="data.id" class="text-base truncate">
                <a
                  :href="data.href"
                  class="text-xs text-custom-lilac-light font-extralight hover:text-white"
                >{{ data.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-5 py-5 sm:px-8 sm:py-8">
          <div>
            <h3 class="text-sm tracking-wide font-semibold text-white uppercase">Creators</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="data in creatorsFooter" :key="data.id" class="text-base truncate">
                <a
                  :href="data.href"
                  class="text-xs text-custom-lilac-light font-extralight hover:text-white"
                >{{ data.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-5 py-5 sm:px-8 sm:py-8">
          <div>
            <h3 class="text-sm tracking-wide font-semibold text-white uppercase">Business</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="data in businessFooter" :key="data.id" class="text-base truncate">
                <a
                  :href="data.href"
                  class="text-xs text-custom-lilac-light font-extralight hover:text-white"
                >{{ data.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-5 py-5 sm:px-8 sm:py-8">
          <div>
            <h3 class="text-sm tracking-wide font-semibold text-white uppercase">Newsroom</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="data in newsroomFooter" :key="data.id" class="text-base truncate">
                <a
                  :href="data.href"
                  class="text-xs text-custom-lilac-light font-extralight hover:text-white"
                >{{ data.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-5 py-5 sm:px-8 sm:py-8">
          <div>
            <h3 class="text-sm tracking-wide font-semibold text-white uppercase">Contact</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="data in contactFooter" :key="data.id" class="text-base truncate">
                <a
                  :href="data.href"
                  class="text-xs text-custom-lilac-light font-extralight hover:text-white"
                >{{ data.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </dl>
    </div>

    <!-- FOOTER -->
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4">
        <div
          class="text-xs text-white font-semibold py-1"
        >2021 © Swypebites, Sayang Haeyo Pte Ltd. 12 Kallang Ave, #01-56 S339511</div>
      </div>
      <div class="w-full md:w-8/12 px-4">
        <ul class="flex flex-wrap list-none md:justify-end justify-center">
          <li class="px-2">
            <svg
              class="w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </li>
          <li class="px-2">
            <svg
              class="w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </li>
          <li class="px-2">
            <svg
              class="w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const aboutFooter = [
  { id: 1, name: 'Milestones', href: '#' },
  { id: 2, name: 'Culture', href: '#' },
  { id: 3, name: 'Leadership', href: '#' },
  { id: 4, name: 'Investors', href: '#' },
  { id: 5, name: 'Offices', href: '#' },
]

const creatorsFooter = [
  { id: 1, name: 'Community Guidelines', href: '#' },
  { id: 2, name: 'Features', href: '#' },
  { id: 3, name: 'Creator Platform', href: '#' },
]

const businessFooter = [
  { id: 1, name: 'Advertising', href: '#' },
  { id: 2, name: 'E-Commerce', href: '#' },
  { id: 3, name: 'Quest Center', href: '#' },
]

const newsroomFooter = [
  { id: 1, name: 'Company', href: '#' },
  { id: 2, name: 'Community', href: '#' },
  { id: 3, name: 'Trends', href: '#' },
]

const contactFooter = [
  { id: 1, name: 'Inquiries', href: '#' },
  { id: 2, name: 'Follow Us', href: '#' },
]

export default {
  setup() {
    return {
      aboutFooter,
      creatorsFooter,
      businessFooter,
      newsroomFooter,
      contactFooter,
    }
  },
}
</script>

<style scoped>
.text-custom-blue {
  color: #3983ff;
}
.text-custom-white {
  color: #f2f4f8;
}
.text-custom-lilac-light {
  color: #d8d5e7;
}
.bg-custom-black {
  background-color: #2d2c38;
}
</style>