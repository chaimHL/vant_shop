<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive === true" />
    </keep-alive>
    <router-view v-if="$route.meta.keepAlive !== true" />
  </div>
</template>
