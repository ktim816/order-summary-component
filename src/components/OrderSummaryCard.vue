<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.hero]" />
    <div :class="[$style.content]">
      <div :class="[$style.info]">
        <h1>{{ heading }}</h1>
        <p>{{ description }}</p>
      </div>
      <PlanBox
        class="sm:mt-5 mt-6"
        heading="Annual Plan"
        :price="59.99"
        per="year"
      />
      <div :class="[$style.buttons]">
        <AppButton class="w-full">Proceed to Payment</AppButton>
        <AppButton theme="secondary">Cancel Order</AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PlanBox from '@components/PlanBox.vue';
import AppButton from '@components/AppButton.vue';

const props = defineProps<{
  heading: string;
  description: string;
}>();
</script>

<style lang="scss" module>
.wrapper {
  @apply sm:max-w-[450px] max-w-[327px] rounded-[20px] overflow-hidden;
  box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);
}

.buttons {
  @apply flex flex-col items-center sm:mt-8 mt-6 sm:space-y-6 space-y-4;
}

.content {
  @apply sm:px-12 px-6 sm:pt-11 pt-8 sm:pb-12 pb-6 bg-white;
}

.info {
  @apply sm:space-y-5 space-y-4 text-center;
}

.hero {
  @apply bg-primary bg-hero bg-cover bg-center sm:h-[220px] h-[160px];
}
</style>
