<script setup lang="ts">
import { PageFileData} from "../../../../type/index.js";
import {onMounted, ref} from "vue";
import {putNotification} from "../../../js/notification/notification.js";
import Loading from "./Loading.vue";
import LoadError from "./LoadError.vue";
const props = defineProps<{file:PageFileData}>()

const loading = ref(true);
const loadError = ref(false);
const innerText = ref<string>();
onMounted( async ()=>{
  try{
    const res = await fetch(props.file.downloadUrl);
    if(!res.ok){
      putNotification({message:"加载 文本 文件失败!",type:"error",time:10000});
    }
    innerText.value = await res.text();
  }catch (e){
    putNotification({message:"加载 文本 文件失败!",type:"error",time:10000});
    loadError.value = true;
  }
  loading.value = false;
});

</script>

<template>
  <div class="pre-text">
    <LoadError v-if="loadError" message="加载 文本 文件失败!"></LoadError>
    <Loading v-else-if="loading"></Loading>
    <template v-else>
      <div class="title">{{props.file.name}}</div>
      <pre class="body">{{innerText}}</pre>
    </template>
  </div>
</template>

<style scoped>
.title{
  border: 1px solid var(--main-border-c);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  width: calc(100% - 32px);
  padding: 12px 16px;
  background-color: rgba(0, 0, 0, 0.02);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0178571429em;
}
.body{
  border: 1px solid var(--main-border-c);
  border-radius: 0 0 4px 4px;
  padding: 16px;
  width: calc(100% - 32px);
  max-height: 70vh;
  margin: 0;
  overflow: auto;
  background-color: var(--mian-box-bgc);
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}
.pre-text{
  padding: 16px 0;
}
</style>