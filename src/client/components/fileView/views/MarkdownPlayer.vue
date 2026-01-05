<script setup lang="ts">
import {PageFileData} from "../../../../type/index.js";
import markdownit from 'markdown-it'
import {onMounted, ref} from "vue";
import {putNotification} from "../../../js/notification/notification.js";
import Loading from "./Loading.vue";
import LoadError from "./LoadError.vue";

const props = defineProps<{file:PageFileData}>()
const markdown = markdownit();

const loading = ref(true);
const loadError = ref(false);
const innerHTML = ref<string>();
onMounted( async ()=>{
  try{
    const res = await fetch(props.file.downloadUrl);
    if(!res.ok){
      putNotification({message:"加载 markdown 文件失败!",type:"error",time:10000});
    }
    const text = await res.text();
    innerHTML.value = markdown.render(text);
  }catch (e){
    putNotification({message:"加载 markdown 文件失败!",type:"error",time:10000});
    loadError.value = true;
  }
  loading.value = false;
});

</script>

<template>
<div class="markdown">
  <LoadError v-if="loadError" message="加载 markdown 文件失败!"></LoadError>
  <Loading v-else-if="loading"></Loading>
  <template v-else>
    <div class="title">{{props.file.name}}</div>
    <div class="body">
      <div class="markdown-body" v-html="innerHTML"></div>
    </div>
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
  overflow-x: hidden;
  background-color: var(--mian-box-bgc);
}
.markdown{
  padding: 16px 0;
}
</style>