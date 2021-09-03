<template>
  <v-main>
    <Articles class="constrain-size" />
  </v-main>
</template>

<style lang="scss">
.constrain-size {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import Articles from "./components/Articles";

export default {
  name: "App",

  components: {
    Articles,
  },
};
</script>
