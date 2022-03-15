<template>
  <view class=''>
    <input @input="handleChange" placeholder="输入内容看"/>
    <Tst :a="props.value" :data-xxxx="props.value"/>
    {{ props.value }}
  </view>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Tst from './tst.vue';
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
    const handleChange = (e: any) => {
      emit('update:value', e.target.value);
      emit('change', e.target.value);
    }
    return {
      handleChange,
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
