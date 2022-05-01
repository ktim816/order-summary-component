<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.info]">
      <IconMusic />
      <div class="space-y-1">
        <div :class="[$style.heading]">{{ heading }}</div>
        <div :class="[$style.price]">${{ price }}/{{ per }}</div>
      </div>
    </div>
    <a href="#">Change</a>
  </div>
</template>

<script lang="ts" setup>
import IconMusic from '@images/icon-music.svg';

const props = defineProps<{
  heading: string;
  price: number;
  per: 'month' | 'year';
}>();
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-between items-center space-x-4 rounded-[11px] bg-secondary sm:p-6 p-4;
}

.heading,
.price {
  @apply sm:text-base sm:leading-[21px] text-sm;
}
.heading {
  @apply font-black text-dark;
}

.info {
  @apply flex items-center space-x-5;
}
</style>
