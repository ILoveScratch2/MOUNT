<script setup lang="ts">

</script>

<template>
  <div class="main-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.main-box{
  background-color: var(--mian-box-bgc);
  border-radius: 4px;
  padding: 16px;
  box-shadow: var(--mian-box-shadow);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.main-box:hover{
  box-shadow: var(--mian-box-shadow-hover);
}
</style>