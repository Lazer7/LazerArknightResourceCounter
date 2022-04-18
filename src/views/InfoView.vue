<template>
  <div class="info">
    <h1 class="title is-1 has-text-left">
      Welcome to Arknight Resource Counter
    </h1>
    <div class="grid">
      <div class="col-12 md:col-6">
        <section>
          <Card class="primary">
            <template #title> About Us </template>
            <template #content>
              Hey all! Welcome to Arknight Resource Center a application that
              allows you to keep track of the resources you have gather locally
              on your device. We use your browser/device's local storage to save
              all your resource data. Additionally, you have the option to allow
              the data you have collected to be sent to
              <a href="https://penguin-stats.io/" target="blank"
                >Penguin Statistics</a
              >
              the official Department for Data Analysis of Arknight Materials.
              So if you have the time we would love to record how many runs of
              1-7 you have completed so far!
            </template>
          </Card>
        </section>
      </div>
      <div class="col-12 md:col-6">
        <section>
          <Card class="primary">
            <template #title> GIF for current Version </template>
            <template #content>
              <img
                src="https://media.discordapp.net/attachments/630553822036623370/722086749337157744/amy_arknights200615.gif?width=200&height=200"
              />
              <br />
              Credit:
              <a href="https://twitter.com/seseren_kr" target="blank">
                Seseren</a
              >
            </template>
          </Card>
        </section>
      </div>
    </div>
    <div class="grid">
      <div class="col-12 md:col-6">
        <section>
          <Card class="primary">
            <template #title> License </template>
            <template #content>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc/4.0/"
                ><img
                  alt="Creative Commons License"
                  style="border-width: 0"
                  src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a
              ><br />This work is licensed under a
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc/4.0/"
                >Creative Commons Attribution-NonCommercial 4.0 International
                License</a
              >.
            </template>
          </Card>
        </section>
      </div>
      <div class="col-12 md:col-6">
        <section>
          <Card class="primary">
            <template #title> License </template>
            <template #content>
              This tool was made by your local friendly Software Engineer -
              Lazer7! Donations for coffee would be greatly appreciated! <br />
              <br />
              <img src="@/assets/images/donate.png" />
              <br /><br />
              <Button type="is-primary" @click="navigateToDonate">
                <b>Donate</b>
              </Button>
            </template>
          </Card>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoView",
  methods: {
    navigateToDonate() {
      window
        .open(
          "https://www.paypal.com/donate/?business=MP4XX75NSSLYA&no_recurring=0&item_name=Thank+you+for+your+support%21+I+really+appreciate+it+a+lot%21&currency_code=USD",
          "_blank"
        )
        .focus();
    },
  },
};
</script>
