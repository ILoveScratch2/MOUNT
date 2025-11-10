<script setup lang="ts">

const props = defineProps<{
  href?:string
  target?:"_blank"|"_parent"|"_self"|"_top"
}>();

</script>

<template>
  <a :href="props.href" :target="props.href" class="a-button">
    <slot></slot>
  </a>
</template>

<style scoped>
.a-button{
  display: inline-block;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: var(--a-button-bg);
  color: var(--a-button-c);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
              0px 1px 1px 0px rgba(0,0,0,0.14), 
              0px 1px 3px 0px rgba(0,0,0,0.12);
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-transform: uppercase;
}
.a-button:hover{
  background-color: var(--a-button-bg-h);
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
              0px 4px 5px 0px rgba(0,0,0,0.14), 
              0px 1px 10px 0px rgba(0,0,0,0.12);
}
.a-button:active{
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 
              0px 8px 10px 1px rgba(0,0,0,0.14), 
              0px 3px 14px 2px rgba(0,0,0,0.12);
}

</style>