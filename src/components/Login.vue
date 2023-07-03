<template>
    <div class="log" style="height: 86.5vh;">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
      <h1 style="font-size: 20px; padding-bottom: 10px; text-align: center;">Welcome Back</h1>
        <div class="text-subtitle-1 text-medium-emphasis">Email Address</div>
  
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <a
            class="text-caption text-decoration-none text-indigo-darken-2"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a>
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <!-- <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text> -->
        </v-card>

        <router-link to="/blog" 
        class="v-btn-link">
        <v-btn 
        style="background-color: #222B4C; color: white;" 
        dark block>
        Log In
        </v-btn>
      </router-link>
  
        <v-card-text class="text-center">
          <a
            class="text-indigo-darken-2 text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

const visible = ref(false);


</script>

<style scoped>
.log{
    width: 800px;
}
.mx-auto{
   padding: 20PX;
} 
.pa-12{
    padding: 5px;
}
.v-btn-link{
  text-decoration: none;
  size: large;
}
</style>









<!-- <template>
    <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form v-model="form" @submit.prevent="onSubmit">
          <p>Email Address</p>
            <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Email"
          ></v-text-field>
            <p>Password</p>
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password"
          ></v-text-field>
  
          <br>
  
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Log In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const form = ref(false);
  const email = ref(null);
  const password = ref(null);
  const loading = ref(false);
  
  const required = (v: any) => !!v || 'Field is required';
  
  const onSubmit = () => {
    if (!form.value) return;
  
    loading.value = true;
  
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  };
  
  </script>
   -->

