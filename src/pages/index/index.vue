<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    />
    <TButton :value="tstVal" @change="handleChange" />
  </view>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import TButton from '../../components/tst1.vue';
const tstVal: Ref<string> = ref('')

const handleChange = (val: string) => {
  console.info(val)
  tstVal.value = val;
}

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.fuck1 {
  color: red;
}
.fuck2 {
  color: green;
}
</style>
