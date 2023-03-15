<template>
  <v-app
    id="home"
    :style="{background: $vuetify.theme.themes.dark.background }"
  >
  <nav-bar />
    
  <v-container fluid>
      <v-row>
      <v-col cols="6">
        <v-img class="d-flex align-items-center" src="bg-image.jpg" contain max-height="500">
            <v-img class="rounded-circle mx-auto mt-15 mr-12"
              max-height="250"
              max-width="250"
              src="myImage.jpg"
            ></v-img>
        </v-img>
      </v-col>
      <v-col cols="6">
        <h1 class="white--text top">Hello, I'm Anirudh</h1>
        <h5 class="red--text font-weight-bold text-darken-4" style="font-size: 1.3rem;">Software Development Engineer</h5>
        <p class="grey--text">A 2022-Batch Computer Science Engineer, a meticulous and organized individual 
                              seeking an Entry-level position in the field of Software Development. Strong in 
                              design and integration with intuitive problem-solving skills. Effective 
                              collaborator promoting excellent programming knowledge. Proficient in C 
                              Programming, Python, Full stack web Development and SQL. Looking to start career 
                              as an entry-level software engineer with a reputed firm driven by technology.</p>
        <v-btn title color="#A7121D" dark @click="redirectToLink">About Me</v-btn>
      </v-col>
      <v-col cols="12" class="padd" id="skills">
          <div class="first">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3"
                    >mdi-palette-swatch</v-icon
                  >
                  <h3 class="white--text ml-3 mt-4">Front-End Development</h3>
                  <p class="grey--text ml-3 mt-6">
                    HTML-CSS, Javascripts, ReactJS <br />AngularJS, NodeJS
                  </p>
                  <v-btn color="#A7121D" dark text>
                    know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2">
                  <v-icon color="" x-large class="ml-3" dark
                    >mdi-shopping</v-icon
                  >
                  <h3 class="white--text ml-3 mt-4">Programming</h3>
                  <p class="grey--text ml-3 mt-6">
                    Using languages like C, Python <br />C++, Java etc.
                  </p>
                  <v-btn color="" dark text>
                    know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3"
                    >mdi-book-open-page-variant</v-icon
                  >
                  <h3 class="white--text ml-3 mt-4">Databases</h3>
                  <p class="grey--text ml-3 mt-6">
                    RDBMS, SQL, Realational Algebra, <br /> Query processing 
                    and Transactions
                  </p>
                  <v-btn color="#A7121D" dark text>
                    know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" class="mt-10" id="experience">
                <div class="child1">
                  <h1 class="red--text text--darken-4 mt-4 number">23</h1>
                  <h3 class="white--text mt-4">years since Birth</h3>
                </div>
                <div class="child2 mRight">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">5+</h1>
                        <p class="grey--text">Programing Languages</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">12+</h1>
                        <p class="grey--text">Completed Projects</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="child2">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">01</h1>
                        <p class="grey--text">Years Experience</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">10</h1>
                        <p class="grey--text">Achievements</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col md="3" offset-md="3">
          <h4 class="white--text" id="projects">FEATURED PROJECTS</h4>
          <p class="grey--text">Following are some of my projects works</p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile color="#A7121D" dark> View All </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="ReactWebsite.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="AngularWebsite2.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> The ReactJS Website </v-btn
          ><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> Angular Website </v-btn><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="WordpressWebsite2.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="WixWebsite.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> Wordpress Website </v-btn
          ><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> Wix Website </v-btn><br />
          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-card class="mx-auto" max-width="800" color="#A7121D">
            <v-card-title>My Video</v-card-title>
            <v-card-text>
              <div class="video-container">
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen></iframe>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" class="padd topInverse">
          <div class="second">
            <div class="secondchild1" id="contact">
              <v-row>
                <v-col cols="7">
                  <h1 class="white--text">
                    Let's work together on<br />your next project
                  </h1>
                  <p class="grey--text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius nesciunt ducimus natus <br />
                  </p>
                </v-col>
                <v-col cols="5">
                  <v-btn tile color="#A7121D" dark class="mt-16">
                    Contact
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-toolbar class="topTolbar" color="#111111" dark flat>
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <v-btn text>Home</v-btn>
              <v-btn text>Project</v-btn>
              <v-btn text>about</v-btn>
              <v-btn text> contact</v-btn>
            </div>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  <Footer />
  </v-app>
</template>

<script>
  import NavBar from '../components/nav-bar.vue'
  import Footer from "../components/footer-elem.vue";
  export default {
    name: 'Home-view',
    data: () => ({
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }),
    components: {
      NavBar,
      Footer,
    },
    methods: {
      redirectToLink() {
        window.location.href = "https://drive.google.com/file/d/1Uzxdpb52DeJ0QmlRLOiXjEisVvipG7bw/view?usp=share_link";
      },
    },
  };
</script>

<style scoped>
.top{
  margin-top: 120px;
}
.topInverse{
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1{
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1{
  background-color: #1e1e1e;
}
.bgColor2{
  background-color: #ce1d2a;
}
.child1{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>