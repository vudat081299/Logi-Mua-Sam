<template>
  <v-container class="landing-page fill-height">
    <v-toolbar flat class="background-toolbar" style="height: 72px; background-color: #25292e"></v-toolbar>
    <v-container class="main-content fill-height">
      <v-card flat style="height: 72px;" class="rounded-0 toolbar-card">
        <v-toolbar fixed flat class="pt-1 main-toolbar" style="height: 72px; background-color: #25292e">
          <!-- <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png"> -->
          <v-icon class="mx-4" dark x-large>mdi-dev-to</v-icon>
          <v-toolbar-title class="white--text">
            <span class="font-weight-light">Logi </span>
            <span>Mua Sam</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-btn dark text>Sign in</v-btn>
          <v-btn dark outlined>Sign up</v-btn> -->
          <div class="font-weight-medium custom-font d-flex flex-items-center">
            <a
              href="/login"
              class="HeaderMenu-link flex-shrink-0 no-underline mr-3"
              data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/about","user_id":null}}'
              data-hydro-click-hmac="5c74a448d0c5a3899bded30f9177b04a134915494f39328527e6830ff83efc11"
              data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in"
            >
              Sign in
            </a>
            <a
              href="/signup"
              class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1 js-signup-redesign-target js-signup-redesign-control"
              data-hydro-click='{"event_type":"analytics.click","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/about;ref_cta:Sign up;ref_loc:header logged out","originating_url":"https://github.com/about","user_id":null}}'
              data-hydro-click-hmac="ccd99aea4b7ecb44734b581afed8808b69de7ea682e56eacb5d80a453d1dae48"
            >
              Sign up
            </a>
          </div>
        </v-toolbar>
      </v-card>

  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
          <main class="font-mktg">
<div class="pt-7 pt-lg-9 font-mktg">
  <div class="container-xl p-responsive">
    <div class="col-12 col-lg-7 mb-8 mx-auto text-center">
      <h1 class="h2-5-mktg-fluid h1-sm-mktg-fluid h0-lg-mktg-fluid mb-3">
        Where the world<br class="d-block d-lg-none"> builds software
      </h1>

      <p class="f4-mktg-fluid f2-sm-mktg-fluid text-gray-light-mktg mb-4 lh-condensed lh-sm-default">
        Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.
      </p>
    </div>

    <div class="mb-6 text-center">
      <div class="d-flex gutter-condensed-fluid gutter-md-spacious-fluid col-12 col-lg-8 flex-justify-between mx-auto">
        <div class="col-6 col-sm-4 col-md-3">
          <h2 class="h5-mktg-fluid text-mono text-normal no-wrap">56<span class="text-gray-light-mktg">+</span> million</h2>
          <p class="m-0 text-mono  f6-mktg-fluid">Developers</p>
        </div>

        <div class="col-6 col-sm-4 col-md-3">
          <h2 class="h5-mktg-fluid text-mono text-normal no-wrap">3<span class="text-gray-light-mktg">+</span> million</h2>
          <p class="m-0 text-mono  f6-mktg-fluid">Organizations</p>
        </div>

        <div class="col-sm-4 col-md-3 d-none d-md-block">
          <h2 class="h5-mktg-fluid text-mono text-normal no-wrap">100<span class="text-gray-light-mktg">+</span> million</h2>
          <p class="m-0 text-mono  f6-mktg-fluid">Repositories</p>
        </div>

        <div class="col-3 d-none d-sm-block">
          <h3 class="h5-mktg-fluid text-mono text-normal no-wrap">72%</h3>
          <p class="m-0 text-mono  f6-mktg-fluid">Fortune 50</p>
        </div>
      </div>
    </div>

    <div class="mb-8 mx-auto text-center">
      <div class="d-inline-block border p-4 rounded-2">
        <span class="d-inline-block f4-mktg-fluid">
          Follow us on
        </span>

        <ul class="d-inline-block list-style-none ml-3 lh-condensed-ultra" style="position: relative; top: 2px">
          <li class="d-inline-block mr-3">
            <a href="https://twitter.com/github" data-ga-click="Footer, go to Twitter, text:twitter" title="GitHub on Twitter" class="text-gray-light-mktg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" class="d-block" height="18"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg>

              <span class="sr-only">Twitter</span>
            </a>
          </li>

          <li class="d-inline-block mr-3">
            <a href="https://www.facebook.com/GitHub" data-ga-click="Footer, go to Facebook, text:facebook" title="GitHub on Facebook" class="text-gray-light-mktg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.4" class="d-block" height="18"><path d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z" fill="currentColor"></path></svg>

              <span class="sr-only">Facebook</span>
            </a>
          </li>

          <li class="d-inline-block mr-3">
            <a href="https://www.youtube.com/github" data-ga-click="Footer, go to YouTube, text:youtube" title="GitHub on YouTube" class="text-gray-light-mktg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.17 13.6" class="d-block" height="16"><path d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z" fill="currentColor"></path></svg>

              <span class="sr-only">YouTube</span>
            </a>
          </li>

          <li class="d-inline-block mr-3">
            <a href="https://www.linkedin.com/company/github" data-ga-click="Footer, go to Linkedin, text:linkedin" title="GitHub on Linkedin" class="text-gray-light-mktg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" class="d-block" height="18"><path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" fill="currentColor"></path></svg>

              <span class="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <picture>
      <source srcset="https://github.githubassets.com/images/modules/site/about/octocats.webp" type="image/webp">
      <img src="https://github.githubassets.com/images/modules/site/about/octocats.png" alt="An array of octocats working and enjoying life" class="mx-auto width-fit height-auto p-responsive mb-6" width="1600" height="255">
    </picture>

    <div class="col-md-10 col-lg-6 mx-auto mb-8">
    <a href="https://github.blog" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Blog <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Read up on product innovations and updates, company announcements, community spotlights, and more.
      </p>
    </a>
    <a href="/logos" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Brand assets <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Want to use Mona the octocat? Looking for the right way to display the GitHub logo for your latest project? Download the assets and see how and where to use them.
      </p>
    </a>
    <a href="/readme" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Community stories <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Developers are building the future on GitHub every day, explore their stories, celebrate their accomplishments, and find inspiration for your own work.
      </p>
    </a>
    <a href="/customer-stories?type=enterprise" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Customer stories <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        See how some of the most influential businesses around the world use GitHub to provide the best services, products, and experiences for their customers.
      </p>
    </a>
    <a href="/about/careers" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Careers <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Help us build the home for all developers. We’re a passionate group of people dedicated to software development and collaboration. Come join us!
      </p>
    </a>
    <a href="/about/diversity" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Diversity, Inclusions &amp; Belonging <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        We are dedicated to building a community and team that reflects the world we live in and pushes the boundaries of software innovation. Learn more about our DI&amp;B efforts.
      </p>
    </a>
    <a href="https://www.githubstatus.com" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        GitHub Status <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        We are always monitoring the status of github.com and all its related services. Updates and status interruptions are posted in real-time here.
      </p>
    </a>
    <a href="/about/leadership" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Leadership <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Meet the leadership team guiding us as we continue on this journey building the world’s largest and most advanced software development platform in the world.
      </p>
    </a>
    <a href="https://octoverse.github.com" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Octoverse <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Dive into the details with our annual State of the Octoverse report looking at the trends and patterns in the code and communities that build on GitHub.
      </p>
    </a>
    <a href="/about/press" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Press <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Explore the latest press stories on our company, products, and global community.
      </p>
    </a>
    <a href="https://socialimpact.github.com" class="d-block width-full py-5 border-bottom Link--secondary no-underline Bump-link">
      <h3 class="mb-3 h5-mktg-fluid h4-md-mktg-fluid">
        Social Impact <span class="Bump-link-symbol">→</span>
      </h3>
      <p class="mb-0 f4-mktg-fluid f3-md-mktg-fluid color-text-tertiary">
        Learn about how GitHub’s people, products, and platform are creating positive and lasting change around the world.
      </p>
    </a>
</div>

  </div>
</div>
</main>

  </div>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'LandingPage',
  components: {
    // HelloWorld
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
/* block */
.landing-page {
  width: 100%;
  max-width: 100%;
  padding: 0px;
}
.main-content {
  width: 1200px;
  max-width: 1200px;
  padding: 0px;
  padding-top: 64px;
}

/* toolbar */
.background-toolbar {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 72px;
}
.toolbar-card {
  position: absolute;
  top: 0px;
  width:1200px;
  height: 72px;
}
.main-toolbar {
  position: absolute;
  width: 1200px;
  height: 72px;
}

/*  */
.v-btn {
  text-transform: none;
}
.custom-font {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 16px!important;
}
</style>
