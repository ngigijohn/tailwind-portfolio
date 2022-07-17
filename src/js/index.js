const { createApp } = Vue;
createApp({
   data() {
    return {
      profile: null
    };
  },
  async mounted() {
    this.profile = await this.getProfile();
  },
  methods: {
    async getProfile() {
       let profile = await fetch("../public/content.json")
      // let profile = await fetch(
      //   "https://api.coindesk.com/v1/bpi/currentprice.json"
      // )
        .then((response) => response.json())
        .catch((error) => {
          console.log(error);
        });
      return profile;
    },
  },
}).mount("#app");
