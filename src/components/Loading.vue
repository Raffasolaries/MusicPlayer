<template>
  <v-container>
      <div class="progress-circle">
          <v-progress-circular
              indeterminate
              :size="150"
              :width="8"
              color="#50E3C2">
          </v-progress-circular>
      </div>
  </v-container>
</template>

<script>
    export default {
        name: 'Loading'
    }
</script>

<style scoped>
    .progress-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -50px 0px 0px -50px;
    }
</style>
