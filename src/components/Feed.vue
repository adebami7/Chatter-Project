<template>

    <v-layout class="rounded rounded-md">
      <v-navigation-drawer
        class="bg-light"
        theme="light"
        permanent
      >
      <v-list-item>
        <template v-slot:prepend>
              <img src="/src/moment.png" alt="Comment Image" style="margin: 0px; width: 150px; height: 80px;">
            </template>
            
      </v-list-item>
      <v-list-item-title style="margin: 0 0 0 40px;">Overview</v-list-item-title>

        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-post-outline" style="font-size: 15px;">
          <router-link :to="`/feed`" class="v-list-item-content" >
            Feeds
          </router-link>
        </v-list-item>          
          <v-list-item prepend-icon="mdi-bookmark-multiple-outline" title="Bookmarks"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple-outline" title="Team blogs"></v-list-item>
          <v-list-item prepend-icon="mdi-email-open-outline" title="Drafts"></v-list-item>
          <v-list-item prepend-icon="mdi-google-analytics" style="font-size: 15px;">
            <router-link :to="`/analytics`" class="v-list-item-content" >
            Analytics
          </router-link>
          </v-list-item>
        </v-list>

        <v-list-item style="padding: 20px 0 0 40px;" title="Trending Tags"></v-list-item>

        <v-list class="over" style="padding-left: 20px;" color="transparent">
          
          <v-list-item title="Programming"></v-list-item>
          <v-list-item title="Data science"></v-list-item>
          <v-list-item title="Technology"></v-list-item>
          <v-list-item title="Machine learning"></v-list-item>
          <v-list-item title="Politics"></v-list-item>
          <v-list-item style="font-size: 15px;">
            <router-link :to="`/blog`" class="v-list-item-content">
              See All
            </router-link>
          </v-list-item>
        
        </v-list>

        <v-list-item style="padding: 20px 0 0 40px;" title="Personal"></v-list-item>

        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-account-outline" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-bell-outline" title="Notifications"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="log"><router-link to="/" class="v-btn-link"><v-btn style="background-color: #222B4C; color: white; border-radius: 2px;" dark block>
        Log Out
  </v-btn></router-link></div>
    
        </template>
      </v-navigation-drawer>
  
      <v-app-bar >
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        density="compact"
        label="Search Moment"
        single-line
        hide-details
      ></v-text-field>

              <v-list-item style="margin: 0 10px 0 0; padding: 0 1px 0 10px; width: 24px;" 
              prepend-icon="mdi-bell-outline" ></v-list-item>


          <v-list-item style="margin: 0 1px 0 0; padding: 0 5px 0 5px;"
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-list-item>
      </v-app-bar>
  
     

      <v-main class="d-flex align-center justify-center" style="min-height: 300px; width: 200px; margin: 20px 20px 20px 20px;">
      
        <v-card>
          <v-toolbar
      color="light"
    >

      <v-toolbar-title>
        <h2 class="post-title" style="font-size: 20px;padding: 10px 0 0 20px;"> FEED
            <p class="post-meta" style="font-size: 10px; margin-top: 8px;">Explore different content you'd love</p>
            </h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
          <div class="get"><router-link to="/post"><v-btn small class="custom-button">
            <v-list-item prepend-icon="mdi-pencil-outline" style=" width: 10px; margin: 0 2px 0px 0px; padding: 0;"></v-list-item>
            <b>Post a content</b>
          </v-btn></router-link>
          </div>
      </v-btn>
      </v-toolbar>
          <v-tabs
            v-model="tab"
            fixed-tabs
            color="indigo-darken-2"
            align-tabs="center"
          >
            <v-tab value="one">For you</v-tab>
            <v-tab value="two">Featured</v-tab>
            <v-tab value="three">Recent</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <div class="body">
                  <div v-for="post in posts" :key="post.id" class="post">
                    <div class="post-header" >
                      <v-avatar style="margin-right: 10px;">
                        <img :src="post.avatar" alt="Avatar">
                      </v-avatar>
                      <h2 class="post-title" style="font-size: 20px;">{{ post.title }}
                      <p class="post-meta" style="font-size: 10px; margin-top: 8px;">Posted on {{ post.date }}</p>
                      </h2>
                    </div>
                    <h3 class="post-subtitle" >{{ post.subtitle }}</h3>
                    <div style="display: flex; margin: 0px; padding: 0px; ">
                      <v-list-item prepend-icon="mdi-book-open-variant" style="width: 24px; padding: 0 10px;"></v-list-item>
                      <p class="post-time" style="margin-bottom: 0px;padding: 9.5px 0 0 15px;">{{ post.time }}</p>
                    </div>
                    
                    
                    <p class="post-content" style="font-size: 10px;">{{ post.content }}</p>
                    <!-- Display images after comments -->
                    <div class="comment-images">
                      <img v-for="image in post.commentImages" :key="image.id" :src="image.url" alt="Comment Image">
                    </div>
                  </div>
                </div>
              </v-window-item>

              <v-window-item value="two">
                <div class="body">
                  <div v-for="post in posts" :key="post.id" class="post">
                    <div class="post-header" >
                      <v-avatar style="margin-right: 10px;">
                        <img :src="post.avatar" alt="Avatar">
                      </v-avatar>
                      <h2 class="post-title" style="font-size: 20px;">{{ post.title }}
                      <p class="post-meta" style="font-size: 10px; margin-top: 8px;">Posted on {{ post.date }}</p>
                      </h2>
                    </div>
                    <h3 class="post-subtitle" >{{ post.subtitle }}</h3>
                    <p class="post-content" style="font-size: 10px;">{{ post.content }}</p>
                    <!-- Display images after comments -->
                    <div class="comment-images">
                      <img v-for="image in post.commentImages" :key="image.id" :src="image.url" alt="Comment Image">
                    </div>
                  </div>
                </div>
              </v-window-item>

              <v-window-item value="three">
                <div class="body">
                  <div v-for="post in posts" :key="post.id" class="post">
                    <div class="post-header" >
                      <v-avatar style="margin-right: 10px;">
                        <img :src="post.avatar" alt="Avatar">
                      </v-avatar>
                      <h2 class="post-title" style="font-size: 20px;">{{ post.title }}
                      <p class="post-meta" style="font-size: 10px; margin-top: 8px;">Posted on {{ post.date }}</p>
                      </h2>
                    </div>
                    <h3 class="post-subtitle" >{{ post.subtitle }}</h3>
                    <p class="post-content" style="font-size: 10px;">{{ post.content }}</p>
                    <!-- Display images after comments -->
                    <div class="comment-images">
                      <img v-for="image in post.commentImages" :key="image.id" :src="image.url" alt="Comment Image">
                    </div>
                  </div>
                </div>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-main>
    </v-layout>
</template>

    

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data () {
      return {
        search: '',
        tab: null,
        dialog:false,
        posts:  [
        {
          id: 1,
          title: 'Ademide Oye',
          date: 'June 1, 2023',
          subtitle: 'Starting out as a Front-End Software Engineer',
          time: '2 mins read',
          content: 'Embarking on a journey as a Front-End Software Engineer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, software design offers an opportunity to shape the way people interact with the world around them.',
          avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
          commentImages: [
            { id: 1, url: "src/unsplash_zvmZiw3vdsQ.png" },
          ]
        },
        {
          id: 2,
          title: 'Ayo Oye',
          date: 'June 5, 2023',
          subtitle: 'Using CSS Selectors',
          time: '6 mins read',
          content: 'Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages.',
          avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
          commentImages: [
          { id: 2, url: "src/Frame 43318.png" },
          ]
        },
        {
          id: 3,
          title: 'Jed Glory',
          date: 'June 9, 2023',
          subtitle: 'The Impact of Social',
          time: '8 mins read',
          content: 'In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world.',
          avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
          commentImages: [
          { id: 3, url: "src/unsplash_wqLGlhjr6Og.png" },
          ]
        },
        {
          id: 4,
          title: 'James Lawren',
          date: 'June 13, 2023',
          subtitle: 'Starting out as a product designer',
          time: '10 mins read',
          content: 'Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.',
          avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
          commentImages: [
          { id: 4, url: "src/unsplash_87gLIFoj79c.png" },
          ]
        }
        // Add more blog posts as needed
      ]
      };
    }
  });

</script>

<style scoped>
.comment-images{
  margin-bottom: 30px;
}

.post-header {
    display: flex;
  
  }
  .post-header v-avatar {
    margin-right: 10px;
  }
  
  .custom-button{
  font-size: 9px; 
  padding: 0 5px 5px 5px;
  margin: 0 90px 0 0px;
  background-color: #222B4C;
  color: white;
}
.v-btn-link{
  text-decoration: none;
}
</style>