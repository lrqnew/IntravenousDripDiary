<template>
  <div id="app">
     <Login></Login>
  </div>
</template>

<script>
import Login from './components/About'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
.page-login {
    background: url(./assets/images/bg_day.png) no-repeat center;
    color: #BDE7ED;
    background-size: cover;
}

.page-login-day {
    background-color: #BDE7ED;
    background-image: url(./assets/images/bg_day.png);
}

.page-login-night {
    background-color: #1B4B56;
    background-image: url(./assets/images/bg_night.png);
}
</style>
