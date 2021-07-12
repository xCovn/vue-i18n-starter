<template>
  <transition name="component-fade" mode="out-in">
    <router-view @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)"/>
  </transition>
</template>