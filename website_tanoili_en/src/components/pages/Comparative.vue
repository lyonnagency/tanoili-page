<template lang="pug">
  layout_landing
    section.comparative.comunbg.pb-10.bg-comparative.pb-sm-0
      .column(data-aos="new-animation" data-aos-duration="2000" )
        .types_fats.mt-5
          .comparison_oils
          .split_panel
            .healthy_fats
              .wrapper
                .headlong.colo-base-process.cabecera-comp
                  img(width="32" src="../../assets/img/good-fact.svg")
                  h2.ff-intelo.fs-20.fw-700.my-0.space-letter-200 HEALTHY
                  h2.ff-georgia.fsty-italic.fs-30.fw-400.my-0 Fats
                  h3.ff-georgia.fsty-italic.fs-16.my-0.color-grasa Unsaturated
                  p.fs-13.ff-intelo.fw-200.txt-fats Its moderate consumption increases the "good cholesterol" (HDL). HDL cholesterol cruises the bloodstream removing the bad cholesterol, avoiding the accumulation of fat in arteries and reducing heart disease.
            .saturated_fats
              .wrapper
                .headlong.colo-base-process.cabecera-comp
                  img(width="32" src="../../assets/img/bad-fact.svg")
                  h2.ff-intelo.fs-20.fw-700.my-0.space-letter-200 UNHEALTHY
                  h2.ff-georgia.fsty-italic.fs-30.fw-400.my-0 Fats
                  h3.ff-georgia.fsty-italic.fs-16.my-0 Saturated
                  p.fs-13.ff-intelo.fw-200.txt-fats Consuming saturated fats increases the "bad cholesterol" (LDL). When LDL cholesterol reaches high levels it tends to accumulate in the arteries, therefore is known as bad cholesterol.
    section.comparative.comparative-graph
      .column(data-aos="new-animation" data-aos-duration="2000" data-aos-mirror="true")
        .oil_comparison
          .bar_graph_content.colo-base-process.ff-georgia.fsty-italic
            .bar_graph
              .label
                span.fs-15 #[span.fw-700 Tanoili] Avocado oil
              .bar.avocado
                .healthy_fats(data-percentage="90%" style="width: 80%;")
                .saturated_fats.saturated-bar(data-percentage="10%" style="width: 10%;")
            .bar_graph
              .label
                span.fs-15 #[span.fw-700 Olive] oil
              .bar
                .healthy_fats(data-percentage="86%" style="width: 76%;")
                .saturated_fats.saturated-bar(data-percentage="14%" style="width: 14%;")
            .bar_graph
              .label
                span.fs-15 #[span.fw-700 Sunflower] oil
              .bar
                .healthy_fats(data-percentage="75%" style="width: 65%;")
                .saturated_fats.saturated-bar(data-percentage="25%" style="width: 25%;")
            .bar_graph
              .label
                span.fs-15 #[span.fw-700 Corn] oil
              .bar
                .healthy_fats(data-percentage="69%" style="width: 59%;")
                .saturated_fats.saturated-bar(data-percentage="31%" style="width: 31%;")
    section.py-5
      .column.colo-base-process
        h2.ff-intelo.fs-30.fw-700.my-0.space-letter-200(data-aos="just-fade" data-aos-duration="3000" ) MORE FEATURES ABOUT
        h2.ff-georgia.fsty-italic.fs-30.my-0(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="500") Tanoili avocado oil
        .cont-flex.justify-center.mt-4.fs-15
          .f-basis-40
            ul.list-caracteristicas.ff-georgia.fsty-italic.fs-15
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Cold pressed extra virgin oil
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Controlled temperature under 50°C (122°F)
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") 100% natural avocado oil
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Hass avocado
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Appearance: emerald green color with yellow shadows
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Smell: complex and elegant with a subtle nut & avocado sent
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Taste: soft and delicate with a great flavor balance and light avocado flavor.
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Acidity: 1%
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") 0% cholesterol
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Weight: 16.9 fl oz (500 ml)
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Weight: 8.4 fl oz (250 ml)
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Weight: 33.8 fl oz (1 lt)
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Shelf-life: 3 months after open
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Made in Mexico
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Origin: Tancitaro, Michoacan
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Distributed by: Tanoili. Blvd García de León 1685 int 301 Col. Chapultepec oriente c.p. 58260 Morelia, Michoacán. México
          .f-basis-40.txt-center.cont-bot-comp
            img.bot-comp(width=400 src="../../assets/img/botella-08.png" alt="Avocado")
    section.section.call-proceso.py-5
      .column-new.column
        .cont-call-proceso.txt-center
          h2.ff-georgia.fs-31.tit-call.fs-24(data-aos="just-fade" data-aos-duration="2000") Tanoili #[span Avocado Oil]. Cook gourmet, cook healthy, cook tasty.
          .cont-flex.mt-4.justify-center(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="500")
            router-link(to="/products" alt="Go to Process").fs-11.fw-500.pt-sm-2.mx-sm-2
              span.fs-12.saber-mas.mx-call-1.mx-sm-2.color-proceso SEE PRODUCTS
            router-link(to="/contact" alt="Go to Contact").fs-11.fw-500.mx-call-1.pt-sm-2.mx-sm-2
              span.fs-12.ml-2.saber-mas.color-proceso.ml-sm-0 CONTACT US
</template>

<script>
import Landing from '@/components/layouts/Landing'
import anime from 'animejs'
import AOS from 'aos';

export default {
  name: 'page_comparative',
  components: {
    layout_landing: Landing
  },
  methods: {

  },
  mounted() {
    //this.initAnimations()
    //Inicializacion del plugin Animate On Scroll Library
    setTimeout(()=>{

      AOS.init({
        duration: 1000
      });
    },500)
  },
  metaInfo: {
    title:'Aceite de aguacate tanoili vs otros aceites',
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'},
      {vmid: 'kw', name:'keywords', content: 'beneficios del aceite de aguacate, comparativa de aceites, ¿para que sirve el aceite de aguacate?, aceite de aguacate vs otros aceites, aceite de aguacate para cocinar'},
      {vmid: 'inm', itemprop:'name', content: 'Aceite de aguacate tanoili vs otros aceites'},
      {vmid: 'idtn', itemprop:'description', content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'},
      {vmid: 'purl', property:'og:url', content: 'http://tanoili.com/about'},
      {vmid: 'ptt', property:'og:title', content: 'Aceite de aguacate tanoili vs otros aceites'},
      {vmid: 'pdtn', property:'og:description', content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'},
      {vmid: 'twtt', name:'twitter:title', content: 'Aceite de aguacate tanoili vs otros aceites'},
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Aceite de aguacate tanoili vs otros aceites'},
      {itemprop: 'description' ,content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porque algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'},
    ]
  }
}
</script>
