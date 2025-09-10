<template>
  <nav>
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = router.getRoutes()
  .filter(route => route.meta.showInNav) 
  .map(route => ({
    path: route.path,
    title: route.meta.title
  }))
</script>