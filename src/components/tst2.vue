<template>
  <view class='tst'>
    {{ props.a }}
  </view>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, watchEffect } from 'vue';
const props = withDefaults(defineProps<{
  a?: string;
}>(), {
  a: ''
})

watchEffect(() => {
  console.info(props.a)
})

</script>
<style lang='scss' scoped>
</style>
