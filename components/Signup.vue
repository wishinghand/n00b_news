<template>
  <div id="revue-embed" class="columns is-desktop">
    <div class="column is-7 is-offset-one-quarter">
      <form action="https://www.getrevue.co/profile/n00b_news/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
        <div class="revue-form-group field">
          <label for="member_email" >Email address</label>
          <input class="revue-form-field input is-medium" placeholder="Your email address..." type="email" name="member[email]" id="member_email">
        </div>
      
        <div class="revue-form-group field">
          <label for="member_first_name"  >First name</label>
          <input class="revue-form-field input is-medium" placeholder="(Optional)" type="text" name="member[first_name]" id="member_first_name">
        </div>
      
        <div class="revue-form-group field">
          <label for="member_last_name" >Last name</label>
          <input class="revue-form-field input is-medium" placeholder="(Optional)" type="text" name="member[last_name]" id="member_last_name">
        </div>
        <div class="revue-form-actions">
          <input class="button" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
        </div>
      </form>
    </div>
  </div>
</template>

<style>
  label,
  #subtitle,
  #title {
    color: rgb(0, 255, 0);
    font-family: monospace;
  }

  div {
    background-color: black;
  }

  .button {
    background-color: rgb(0, 255, 0);
  }
</style>
