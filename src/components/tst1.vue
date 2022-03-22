<template>
  <view class=''>
    {{ t.t }}
  </view>
</template>

<script lang='ts'>
import { defineComponent, inject, watch } from 'vue';
import Tst from './tst2.vue';
export default defineComponent({
  name: 'XeButton',
  components: { Tst },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'update:value'],
  setup(props, { emit }) {
    const t = inject<any>('tstKey')
    console.info(t)
    return {
      t,
      props
    }
  }
})

</script>
<style lang='scss' scoped>
input {
  border: 1px solid black;
  width: 400rpx;
}
</style>
