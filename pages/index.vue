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
            A dozen links every two weeks on web development, web design, accessbility, mobile apps, backend, databases, and programmer culture targeted at those beginning their education.
          </p>
          <p><small>Previous issues are available <a href="https://www.getrevue.co/profile/n00b_news/">here.</a></small></p>
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
    color: #67ff67;
  }

</style>
