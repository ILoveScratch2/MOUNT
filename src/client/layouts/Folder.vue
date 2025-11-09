<script setup lang="ts">
import {usePageFrontmatter, useRoute} from 'vuepress/client';
import {FolderPageFrontmatter} from "../../type/index.js";
import FilesPageMain from "../components/FilesPageMain.vue";
import FButtonLink from "../components/FButtonLink.vue";
import FileTypeIcon from "../components/FileTypeIcon.vue";
import {dateFormat} from "../js/dateFormat.js";
import {fileSizeFormat} from "../js/fileSizeFormat.js";
import {computed, ref, watch} from "vue";
import ArrowDown from "../imgs/ui/ArrowDown.vue";

const frontmatter = usePageFrontmatter<FolderPageFrontmatter>();
const children = computed(()=>frontmatter.value.flistData?.children || []);
const route = useRoute();

//排序
const sortType = ref<"name-asc"|"name-desc"|"size-asc"|"size-desc"|"item-asc"|"item-desc">();
const showChildren = computed(()=>{
  if(sortType.value==="name-asc"){
    return [...children.value || []].sort((a,b)=>{
      if(a.isFolder && !b.isFolder){
        return -1
      }
      if(!a.isFolder && b.isFolder){
        return 1
      }
      return a.name.localeCompare(b.name)
    });
  }
  if(sortType.value==="name-desc"){
    return [...children.value || []].sort((a,b)=>{
      if(a.isFolder && !b.isFolder){
        return 1
      }
      if(!a.isFolder && b.isFolder){
        return -1
      }
      return b.name.localeCompare(a.name)
    });
  }
  if(sortType.value==="size-asc"){
    return [...children.value || []].sort((a,b)=>{
      if(a.isFolder && !b.isFolder){
        return -1
      }
      if(!a.isFolder && b.isFolder){
        return 1
      }
      return (a.size || 0) - (b.size || 0)
    });
  }
  if(sortType.value==="size-desc"){
    return [...children.value || []].sort((a,b)=>{
      if(a.isFolder && !b.isFolder){
        return 1
      }
      if(!a.isFolder && b.isFolder){
        return -1
      }
      return (b.size || 0) - (a.size || 0)
    });
  }
  if(sortType.value==="item-asc"){
    return [...children.value || []].sort((a,b)=>{
      if(a.isFolder && !b.isFolder){
        return -1
      }
      if(!a.isFolder && b.isFolder){
        return 1
      }
      return (a.updateTime || 0) - (b.updateTime || 0)
    });
  }
  if(sortType.value==="item-desc"){
    return [...children.value || []].sort((a,b)=>{
      if(a.isFolder && !b.isFolder){
        return 1
      }
      if(!a.isFolder && b.isFolder){
        return -1
      }
      return (b.updateTime || 0) - (a.updateTime || 0)
    });
  }
  return children.value;
});

// //用于开关排序动画
// const sortStart = ref(false);
// watch(children,()=>{
//   sortStart.value = false;
// });
// watch(sortType,()=>{
//   sortStart.value = true;
// });



</script>

<template>
  <FilesPageMain>
    <template #default v-if="showChildren && showChildren.length>0">
      <div class="files sort-start">
        <!--      表头-->
        <div class="th">
          <div class="thc t-name" @click="sortType=sortType=='name-asc'?'name-desc':sortType=='name-desc'?undefined:'name-asc'"><span>名称</span><ArrowDown class="sort-icon" :class="{asc:sortType=='name-asc',desc:sortType=='name-desc'}"></ArrowDown></div>
          <div class="thc t-size" @click="sortType=sortType=='size-asc'?'size-desc':sortType=='size-desc'?undefined:'size-asc'"><ArrowDown class="sort-icon" :class="{asc:sortType=='size-asc',desc:sortType=='size-desc'}"></ArrowDown><span>大小</span></div>
          <div class="thc t-up-item" @click="sortType=sortType=='item-asc'?'item-desc':sortType=='item-desc'?undefined:'item-asc'"><ArrowDown class="sort-icon" :class="{asc:sortType=='item-asc',desc:sortType=='item-desc'}"></ArrowDown><span>更新时间</span></div>
        </div>
        <!--      行-->
        <TransitionGroup name="list" :key="route.path">
          <FButtonLink class="td" v-for="file of showChildren" :key="file.name" :to="`./${encodeURI(file.name).replaceAll(',','_').replaceAll('+','_')}/`">
            <div class="t-name">
              <FileTypeIcon class="file-icon" :class="{folder:file.isFolder}" :isFolder="!!file.isFolder" :fileName="file.name" />
              <span class="file-name" :title="file.name">{{file.name}}</span>
            </div>
            <div class="t-size">{{fileSizeFormat(file.size)}}</div>
            <div class="t-up-item">{{dateFormat(file.updateTime)}}</div>
          </FButtonLink>
        </TransitionGroup>
      </div>
    </template>
  </FilesPageMain>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: none;
}
.sort-start .list-move{
  transition: transform 0.25s ease;
}

.sort-icon{
  width: 1em;
  height: 1em;
  opacity: 0;
  transform: translateY(0.1em) rotate(0deg);
  color: var(--f-color-1);
  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.thc{
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.thc:hover .sort-icon{
  opacity: 0.54;
}
.thc .sort-icon.asc{
  transform: translateY(0.1rem) rotate(-135deg);
  opacity: 1;
}
.thc .sort-icon.desc{
  transform: translateY(0.1rem) rotate(45deg);
  opacity: 1;
}
@media (min-width: 768px) {
  .th .t-size{
    border-right: 1px solid rgba(0, 0, 0, 0);
    padding-right: 8px;
    transition: border-right-color 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .th:hover .t-size{
    border-right: 1px solid var(--main-border-c);
  }
}
.th .t-name{
  border-right: 1px solid rgba(0, 0, 0, 0);
  padding-right: 8px;
  transition: border-right-color 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.th:hover .t-name{
  border-right: 1px solid var(--main-border-c);
}

.th .t-name,.th .t-size,.th .t-up-item{
  font-weight: 500;
  color: var(--f-color-1);
  align-items: center;
  flex-direction: row;
  gap: 8px;
  font-size: 0.875rem;
  letter-spacing: 0.0178571429em;
}
.th .t-size,.th .t-up-item{
  justify-content: flex-end;
}
.th .t-size{
  display: flex;
}
.td .t-size,.td .t-up-item{
  font-size: 0.875rem;
  color: var(--f-color-1);
}
.td{
  gap: 12px;
}

.file-name{
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 显示省略号 */
}
.files{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.th,.td{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.th{
  padding: 0 8px 12px 8px;
  border-bottom: 1px solid var(--main-border-c);
}
.t-name{
  flex: 1;
  width: 0rem;
  display: flex;
  align-items: center;
  gap: 12px;
}
.file-icon{
  font-size: 24px;
  flex-shrink: 0;
  color: var(--file-icon-c);
}
.file-icon.folder{
  color: var(--folder-icon-c);
}
.t-size{
  text-align: right;
  min-width: 5rem;
}
.t-up-item{
  display: none;
  flex: 0.3;
  text-align: right;
  min-width: 10rem;
}
@media (min-width: 768px) {
  .t-up-item{
    display: block;
  }
  .th .t-up-item{
    display: flex;
  }
}
</style>
