<script setup>
  import Header from './Header.vue'
  import Features from './Features.vue'
  import Footer from './Footer.vue'
  import Banner from './Banner.vue'
</script>

<template>
  <div id="base">
    <Banner />
    <Header />
    <Features />
    <!-- <span class="dot-1" /> -->
    <!-- <span class="dot-2" /> -->
    <!-- <span class="dot-3" /> -->
    <!-- <span class="dot-4" /> -->
    <!-- <span class="dot-5" /> -->
    <!-- <span class="dot-6" /> -->
    <!-- <span class="dot-7" /> -->
    <img class="w-8/12 h-8/12 illus-1 invisible lg:visible" src="../assets/illus_home_1.svg" alt="" />
    <svg class="wave-1 invisible md:visible" width="241" height="422" viewBox="-260 100 1 412" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="white-to-lilac" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#D8D5E7" />
          <stop offset="100%" stop-color="#D8D5E7" />
        </linearGradient>
      </defs>
      <path d="M696.631 232.833C698.8 361.886 454.83 481.066 364.565 387.366C289.979 309.942 485.991 177.805 417.239 95.7901C329.151 -9.28839 131.458 270.666 42.1609 166.491C-41.7495 68.6006 17.6144 -104.663 96.8523 -184.939C176.09 -265.214 443.092 -335.806 547.797 -299.49" stroke="#2D2B3C" stroke-width="1.5"/>
    </svg>
    <svg class="wave-2" width="262" height="362" viewBox="100 100 -100 462" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="white-to-lilac" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#D8D5E7" />
          <stop offset="100%" stop-color="#D8D5E7" />
        </linearGradient>
      </defs>
      <path d="M-233.491 41.4156C-182.324 -25.757 95.8735 -5.14967 141.995 73.419C180.105 138.34 -58.4076 140.516 -27.6674 205.841C11.7175 289.536 312.748 211.82 353.641 295.456C392.068 374.047 264.9 443.308 157.409 458.016C49.9176 472.725 -229.873 419.364 -313.209 365.488" stroke="#2D2B3C" stroke-width="1.5"/>
    </svg>
    <!-- <svg class="wave-3 invisible md:visible" width="262" height="362" viewBox="0 0 314 526" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="white-to-lilac" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#D8D5E7" />
          <stop offset="100%" stop-color="#D8D5E7" />
        </linearGradient>
      </defs>
      <path d="M589.113 407.138C563.799 487.716 295.42 562.567 225.457 504.222C167.648 456.011 314.417 392.539 263.396 341.451C198.026 275.997 88.7361 362.504 21.9688 297.616C-40.771 236.643 53.5572 145.279 128.001 97.1162C278.501 -0.252505 445.336 -11.5722 541.897 10.9165" stroke="#2D2B3C" stroke-width="1.5"/>
    </svg> -->
    <!-- <svg class="wave-4 invisible md:visible" width="412" height="515" viewBox="0 0 412 515" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="white-to-lilac" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#D8D5E7" />
          <stop offset="100%" stop-color="#D8D5E7" />
        </linearGradient>
      </defs>
      <path d="M-240.093 97.0639C-208.318 18.8085 65.2549 -33.9958 130.247 29.8398C183.949 82.5868 32.5087 133.928 79.2119 188.991C139.049 259.539 331.02 118.894 392.296 188.991C449.875 254.859 369.284 384.8 214.501 455.242C70.8895 520.601 -130.802 526.069 -225.218 495.811" stroke="#2D2B3C" stroke-width="1.5"/>
    </svg> -->
    <Footer />
  </div>
</template>

<style scoped>
  #base {
    background-color: #1F1D2B;
    color: #FFFFFF;
    height: 200vh;
  }
  .illus-1 {
    margin: 0;
    display: block;
    position: absolute;
    top: 45%;
    left: 16.5%;
    pointer-events: none;
  }
  .wave-1 {
    display: block;
    position: absolute;
    top: 0;
    left: 1900;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.15;
  }
  .wave-2 {
    margin-top: 300px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.15;
  }

  .wave-3 {
    margin-top: 500px;
    display: block;
    position: absolute;
    top: 0;
    left: 20%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.15;
  }

  .wave-4 {
    margin-top: 1100px;
    padding-right: 900px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    height: 70%;
    pointer-events: none;
    opacity: 0.15;
  }

  path {
    fill: none;
    stroke: url(#white-to-lilac);
    stroke-width: 2px;
    vector-effect: non-scaling-stroke;
  }
 .dot-1 {
    height: 5px;
    width: 5px;
    background-color: #D8D5E7;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.5;
 }
 .dot-2 {
    height: 5px;
    width: 5px;
    background-color: #D8D5E7;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.5;
 }

 .dot-3 {
    height: 5px;
    width: 5px;
    background-color: #D8D5E7;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.5;
 }
 .dot-4 {
    height: 5px;
    width: 5px;
    background-color: #D8D5E7;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left:08px;
    top: 0px;
    opacity: 0.5;
 }
 .dot-5 {
    height: 5px;
    width: 5px;
    background-color: #D8D5E7;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.5;
 }

 .dot-6 {
    height: 5px;
    width: 5px;
    background-color: #D8D5E7;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.5;
 }

 .dot-7 {
    height: 5px;
    width: 5px;
    background-color: #D8D5E7;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.5;
 }
</style>
