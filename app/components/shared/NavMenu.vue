<template>
  <ul class="nav-menu">
    <slot></slot>
  </ul>
</template>

<script lang="ts" src="./NavMenu.vue.ts"></script>

<style lang="less" scoped>
@import "../../styles/_colors";

.nav-menu {
  margin: 0;
  flex: 0 0 220px;
  display: flex;
  flex-direction: column;
  background-color: @bg-secondary;
}

</style>
