<script setup lang="ts">
import PageHeader from "./PageHeader.vue";
import PagBreadcrumb from "./PagBreadcrumb.vue";
import MainBox from "./MainBox.vue";
import FLink from "./FButtonLink.vue";
import {usePageFrontmatter} from "vuepress/client";
import Notification from "../js/notification/Notification.vue";
import { FilePageFrontmatter, FolderPageFrontmatter } from "../../type";
import { computed } from "vue";
import FContent from "./FContent.vue";

const frontmatter = usePageFrontmatter<FolderPageFrontmatter|FilePageFrontmatter>();
const content = computed(()=>frontmatter.value.flistData?.content);

</script>

<template>
  <div class="page-main">
    <div class="page-layouts">
      <PageHeader></PageHeader>
      <PagBreadcrumb></PagBreadcrumb>
      <MainBox v-if="$slots.default">
        <slot></slot>
      </MainBox>
      <FContent v-if="content" :content="content" style="padding: 1rem"></FContent>
    </div>
    <div class="footer">
    </div>
<!--    消息弹出框-->
    <Notification></Notification>
  </div>
</template>

<style scoped>
.page-main{
  background-color: var(--page-bgc);
  padding: 0;
  min-height: 100vh;
}
.page-layouts {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: calc(100vh - 80px);
  padding-top: 24px;
}
.footer{
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  color: var(--f-color-1);
  font-size: 0.875rem;
}

</style>