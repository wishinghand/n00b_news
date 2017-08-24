<template>
  <div class="columns is-centered">
    <div class="column is-10">
      <section class="section">
        <div class="container is-fluid content">
          <logo/>
          <h1 class="has-text-centered title" id="title">
            The signup page for the n00b_news newsletter
          </h1>
          <br>
          <p class="subtitle" id="subtitle">
            About 7-8 links a week regarding web development, web design, and programmer culture targeted at those beginning their education.
          </p>
          <signup-form />
        </div>
        <app-disclaimer />
        <app-footer />
      </section>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import signupForm from '~/components/Signup.vue'
import appFooter from '~/components/Footer.vue'
import appDisclaimer from '~/components/Disclaimer.vue'

export default {
  components: {
    Logo,
    signupForm,
    appFooter,
    appDisclaimer
  }
}
</script>

<style lang="sass" src="bulma">

  #subtitle {
    text-decoration: underline;
    color: rgb(0, 255, 0);
  }

</style>
