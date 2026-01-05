<script setup lang="ts">
import {closeNotification, iconComponents, notifications} from "./notification.js";
import CloseSvg from "../../imgs/ui/CloseSvg.vue";

</script>
<template>
  <TransitionGroup class="notification-list" name="list" tag="div">
    <div v-for="({notification}, key) in notifications" :key="key" class="notification">
      <div class="icon">
        <component :is="iconComponents[notification.type]" class="icon-svg" :class="notification.type"></component>
      </div>
      <div class="message">{{notification.message}}</div>
      <div class="close">
        <div class="close-button" @click="closeNotification(key)">
          <CloseSvg class="close-icon"></CloseSvg>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>
<style scoped>
.close-button{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.close-button:hover{
  background-color: rgba(0, 0, 0, 0.04);
}
.close-button:active{
  background-color: rgba(0, 0, 0, 0.12);
}
.close-icon{
  width: 18px;
  height: 18px;
}
.close{
  display: flex;
  align-items: flex-start;
}
.icon-svg.success{
  color: var(--tip-color-success);
}
.icon-svg.error{
  color: var(--tip-color-error);
}
.icon-svg{
  width: 24px;
  height: 24px;
}
.icon{
  display: flex;
  align-items: center;
}
.message{
  flex: 1;
  width: 0;
  word-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
}
.notification{
  background-color: #323232;
  color: #ffffff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 
              0px 6px 10px 0px rgba(0,0,0,0.14), 
              0px 1px 18px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  padding: 14px 16px;
  display: flex;
  align-items: stretch;
  gap: 12px;
  min-width: 288px;
  max-width: 568px;
  margin: 8px;
  max-width: calc(100vw - 32px);
}
.notification-list{
  height: 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1400;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*动画*/
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>