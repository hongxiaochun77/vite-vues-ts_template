<template>
 <van-search
  v-model="value"
  show-action
  label="地址"
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onClickButton">搜索</div>
  </template>
</van-search>

 <div></div>
</template>

<script lang="ts">
export default {
  name: '',
}
</script>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { showToast } from 'vant';
  const value = ref('');
  const onSearch = (val:string) => showToast(val);
  const onClickButton = () => showToast(value.value);
</script>
<style lang='less'>

</style>

