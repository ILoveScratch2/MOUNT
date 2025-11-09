<script setup lang="ts">

const props = defineProps<{to:string}>()

function isUrl(url: string){
  try {
    new URL(url)
    return true;
  }catch(error){
    return false;
  }
}
</script>

<template>
  <a v-if="isUrl(props.to)" :href="props.to" target="_blank" class="flink">
    <slot></slot>
  </a>
  <RouterLink v-else :to="props.to" class="flink">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.flink:hover{
  background-color: var(--main-hover-bg);
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
              0px 4px 5px 0px rgba(0,0,0,0.14), 
              0px 1px 10px 0px rgba(0,0,0,0.12);
}
.flink{
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  padding: 8px;
  transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--f-color-0);
  position: relative;
  overflow: hidden;
}
.flink:active{
  background-color: rgba(0, 0, 0, 0.08);
}
</style>