<template>
    <v-app-bar app color="#111111" dark flat class="px-8">
      <v-btn icon @click="scroll('home')" class="logo-btn">
        <v-icon color="#A7121D" class="logo-icon" style="font-size: 28px;">fas fa-dragon</v-icon>
        <span class="logo-text" style="font-size: 25px;">Anirudh D</span>
      </v-btn>
        
      <v-spacer></v-spacer>
      <v-btn text @click="scroll('home')">Home</v-btn>
      <v-btn text @click="scroll('skills')">Skills</v-btn>
      <v-btn text @click="scroll('experience')">Experience</v-btn>
      <v-btn text @click="scroll('projects')">Projects</v-btn>
      <v-btn text @click="scroll('contact')">Work with us</v-btn>
    </v-app-bar>
</template>
  
  <script>
  export default {
    methods:{
        scroll(refName) {
            const element =document.getElementById(refName);
            element.scrollIntoView({behavior: "smooth"});
        }
    }
  }
  </script>
  
  <style>
    .logo-btn {
      padding-left: 120px;
    }

    .logo-icon {
      margin-right: 30px;
    }

    .logo-text {
      font-size: 16px;
    }
  </style>