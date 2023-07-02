<template>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer
        class="bg-light"
        theme="light"
        permanent
      >
      <v-list-item style="padding: 20px 0 0 40px;" title="Overview"></v-list-item>

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
          <v-list-item title="See all"></v-list-item>
        
        </v-list>

        <v-list-item style="padding: 20px 0 0 40px;" title="Personal"></v-list-item>

        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-account-outline" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-bell-outline" title="Notifications"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="red">
            <v-btn color="deep-purple" block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
  
      <v-app-bar >
        <v-spacer></v-spacer>
              <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                density="compact"
                single-line
              >Search Chatter</v-text-field>

              <v-list-item style="margin: 0 3px 0 0; padding: 0 1px 0 5px; width: 24px;" 
              prepend-icon="mdi-bell-outline" ></v-list-item>


          <v-list-item style="margin: 0 1px 0 0; padding: 0 5px 0 5px;"
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-list-item>
      </v-app-bar>
  
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        Main Content
      </v-main>
    </v-layout>
  </template>