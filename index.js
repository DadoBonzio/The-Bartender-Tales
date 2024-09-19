const app = Vue.createApp({
  data() {
    return ({
      active: 0,
      products: [
        {
          title: 'Valu Village',
          image: './src/products/Valu_Village.jpg',
          description: "Valu Village is a settlement primarly inhabited by fisherman and wayfarers. People here tend to be kind, work hard, and tell stories, especially the legends of the village, that speak the mighty deeds of theirpatron: St. Talwin, the legendary (to them) Half-Orc Paladin. What you'll find: names, description, premade adventure text for locations and npcs, several adventure hooks for various quests all interconnected, systems and rules to run and determine the outcome of some of the players' action (and the consequence they will have on the village's economy and quality of life, which will dynamically change), rules to randomly generate hawkers' merch and variant rules for shopkeepers.",
          link: "https://www.dmsguild.com/product/492768/Valu-Village--Premade-Location?affiliate_id=4141531&src=G"
        },
        {
          title: 'Spebble The Wizard Goldfish',
          image: './src/products/Spebble_The_Wizard_Goldfish.jpg',
          description: "This book series is about sideckicks, officially described in 5th edition in the rulebook: Tasha’s Cauldron of Everything (TCE for short, p.142). Every installment of this serie is going to be about a different sidekick, and aims to cover anything you might ever need to run him at your table: From finding it to recruit it. In order to mantain the sidekicks as setting neutral as possible, the content of this document has the sole purpose of reference and inspiration: change everything that would clash with your setting",
          link: "https://www.dmsguild.com/product/493022/Spebble--The-Wizard-Goldfish?affiliate_id=4141531&src=G"
        }
      ]
    })
  },
  methods: {
    setActive(slideTo) {
      this.active = slideTo
    }
  },
  mounted() {
    console.log("calling");
    var help;
    $('#carouselExampleAutoplaying').on('slide.bs.carousel', (e) => this.setActive($(e.relatedTarget).index()));
    // $('#carouselExampleAutoplaying').on('slide.bs.carousel', function (e) {
    //   var slideFrom = $(this).find('.active').index();
    //   var slideTo = $(e.relatedTarget).index();
    //   this.help = slideTo;
    //   console.log(help);
    //   console.log(slideFrom + ' => ' + slideTo);
    // });

    //this.setActive(help);
    console.log("called");
  },
})

app.mount('#app');
