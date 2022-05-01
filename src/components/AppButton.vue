<template>
  <button :class="[[$style.wrapper], [$style[`wrapper--${theme}`]]]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {ref, withDefaults} from 'vue';

const props = withDefaults(
  defineProps<{
    theme: 'primary' | 'secondary';
  }>(),
  {
    theme: 'primary',
  }
);
</script>

<style lang="scss" module>
.wrapper {
  @apply text-md font-black transition-colors;

  &--primary {
    @apply flex items-center justify-center bg-primary text-white rounded-[11px] hover:bg-accent p-4;
    box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);
  }

  &--secondary {
    @apply inline-flex justify-center items-center text-grey hover:text-dark p-2;
  }
}
</style>
