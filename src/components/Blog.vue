<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        class="bg-light"
        theme="light"
        permanent
      >
      <v-list-item style="padding: 20px 0 0 40px;" title="Overview"></v-list-item>

        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-account-box" title="Feed"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Bookmarks"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Team blogs"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Drafts"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Analytics"></v-list-item>
        </v-list>

        <v-list-item style="padding: 20px 0 0 40px;" title="Trending Tags"></v-list-item>

        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-account-box" title="Programming"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Data science"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Technology"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Machine learning"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Politics"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="See all"></v-list-item>
        </v-list>

        <v-list-item style="padding: 20px 0 0 40px;" title="Personal"></v-list-item>

        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Notifications"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="red">
            <v-btn color="deep-purple" block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 400px"></v-main>
    </v-layout>
  </v-card>


    <!-- <div>
      <h1>My Blog</h1>
      <div v-for="post in posts" :key="post.id" class="post">
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="post-meta">Posted on {{ post.date }}</div>
        <p class="post-content">{{ post.content }}</p>
      </div>
    </div> -->
</template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    data () {
      return {
        posts:  [
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
      ]
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
  .over{
    font-size: 10px;
    margin-left: 30px;
  }
  </style>
  