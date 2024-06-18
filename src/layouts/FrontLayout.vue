<template>

  <section class="layout-title-pic text-center ">the-word
  </section>
  <v-main style="margin-bottom: 56px;">
    <router-view />
  </v-main>


  <div style="height: 56px;position: fixed; width: 100%;bottom: 0%;">

    <v-btn to="/">
      <v-icon>mdi-home</v-icon>
      首頁
    </v-btn>

    <v-btn to="movie">
      <v-icon>mdi-movie</v-icon>

      電影
    </v-btn>

    <v-btn to="store">
      <v-icon>mdi-store-alert-outline</v-icon>

      <span>設施</span>
    </v-btn>
    <v-btn to="loginv">
      <v-icon>mdi-store-alert-outline</v-icon>

      <span>設施</span>
    </v-btn>

    <v-btn to="../admin">
      <v-icon>mdi-account</v-icon>

      <span>登入</span>
    </v-btn>

  </div>

</template>

<script setup>
//
</script>

<style>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: center;
}
</style>