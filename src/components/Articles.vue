<template>
  <div class="main-div">
    <v-card>
      <v-card-title class="articles-text">Articles</v-card-title>
      <v-card
        color="#f9f9f9"
        v-if="!showArticles || loadingStatus"
        class="placeholder-container"
      >
        <v-skeleton-loader
          v-if="loadingStatus"
          type="image"
        ></v-skeleton-loader>
        <span v-else class="placeholder-text"
          >Click below to load the latest articles</span
        >
      </v-card>
      <div v-if="showArticles && !loadingStatus" class="real-container">
        <v-divider style="padding-bottom: 1em"></v-divider>
        <v-card v-for="post in posts" :key="post.id" class="inner-container">
          <v-card-title class="article-text">{{ post.title }}</v-card-title>
        </v-card>
        <v-divider style="margin-top: 2em;" />
      </div>
      <div class="button-container">
        <v-btn
          large
          color="#444444"
          v-if="!showArticles || loadingStatus"
          :disabled="loadingStatus"
          v-on:click="loadPosts"
          >Get Latest Articles!</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<style lang="scss">
.main-div {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .articles-text {
    justify-content: center;
    font-size: 1.5em !important;
    font-weight: 600 !important;
    color: #2c3e50;
  }
  .placeholder-container {
    margin: 1em 3em 1.5em 3em;
    height: 260px;
    .load-text {
      color: #888888;
    }
    .placeholder-text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-weight: 500;
      color: #888888;
    }
  }
  .real-container {
    margin: 0.5em 3em 2em 3em;
    .article-text {
      font-size: 1.1em;
    }
    .inner-container {
      margin: 1em 1.5em 0 1.5em;
    }
  }
  .v-skeleton-loader {
    height: 100%;
    .v-skeleton-loader__image {
      height: 100%;
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    padding-bottom: 1em;
    .v-btn {
      margin-bottom: 1em;
      .v-btn__content {
        text-transform: none;
        color: white;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      showArticles: false,
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts.slice(0, 10);
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    },
  },
  methods: {
    loadPosts: function() {
      this.$store.dispatch("loadPosts");
      this.showArticles = true;
    },
  },
};
</script>
