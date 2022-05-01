<template>
  <main :class="[$style.wrapper]">
    <OrderSummaryCard
      heading="Order Summary"
      description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
    />
  </main>
</template>

<script setup lang="ts">
import OrderSummaryCard from '@components/OrderSummaryCard.vue';
import {getImage} from '@helpers/common';

const bgPattern = getImage('pattern-background-desktop.svg');
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center min-h-screen p-6;
}
</style>
