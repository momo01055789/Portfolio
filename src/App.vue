<template>
  <div>
    <app-header/>
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: { AppHeader,AppFooter }

}

</script>

<style lang="scss">

</style>
