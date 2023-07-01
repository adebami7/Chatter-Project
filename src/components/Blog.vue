<template>
    <div>
      <h1>My Blog</h1>
      <div v-for="post in posts" :key="post.id" class="post">
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="post-meta">Posted on {{ post.date }}</div>
        <p class="post-content">{{ post.content }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const posts = ref([
        {
          id: 1,
          title: 'First Blog Post',
          date: 'June 1, 2023',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum fermentum risus, sed semper ex laoreet eu.'
        },
        {
          id: 2,
          title: 'Second Blog Post',
          date: 'June 5, 2023',
          content: 'Vestibulum sit amet urna eu tellus interdum rhoncus. Nulla facilisi. Aliquam placerat libero ac justo convallis, vel pulvinar odio commodo.'
        }
        // Add more blog posts as needed
      ]);
  
      return {
        posts
      };
    }
  });
  </script>
  

  
  
  <style scoped>
  .post {
    margin-bottom: 30px;
  }
  
  .post-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .post-content {
    line-height: 1.6;
  }
  
  .post-meta {
    font-size: 14px;
    color: #888;
  }
  </style>
  