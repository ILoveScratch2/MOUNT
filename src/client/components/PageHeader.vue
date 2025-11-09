<script setup lang="ts">

import {useSiteData} from "vuepress/client";

const siteData = useSiteData()

</script>

<template>
  <header class="header">
    <RouterLink class="left" to="/">
      <img src="/logo.png" alt="logo" class="logo" />
      <div class="logo-title">{{siteData.title}}</div>
    </RouterLink>
    <div class="right">
    </div>
  </header>
</template>

<style scoped>
.left{
  display: block;
  gap: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.left:hover{
  opacity: 0.87;
}
.logo-title{
  font-size: 1.25rem;
  color: var(--logo-color);
  letter-spacing: 0.0125em;
}
.left,.right{
  height: 100%;
  display: flex;
  align-items: center;
}
.logo{
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
              0px 4px 5px 0px rgba(0,0,0,0.14), 
              0px 1px 10px 0px rgba(0,0,0,0.12);
  padding: 0 16px;
  background-color: var(--mian-box-bgc);
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>