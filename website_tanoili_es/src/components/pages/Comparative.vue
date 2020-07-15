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
                  h2.ff-intelo.fs-20.fw-700.my-0.space-letter-200 GRASAS
                  h2.ff-georgia.fsty-italic.fs-30.fw-400.my-0 Saludables
                  h3.ff-georgia.fsty-italic.fs-16.my-0.color-grasa Instaturadas
                  p.fs-13.ff-intelo.fw-200.txt-fats Son las grasas benéficas, se encuentran en alimentos de origen vegetal, como los aceites vegetales: especialmente el aceite de aguacate. Su consumo moderado aumenta el "colesterol bueno" (HDL). Se llama colesterol bueno porque evita la acumulación de grasa en las arterias ya que transporta el colesterol a otras partes del cuerpo, lo que reduce el riesgo de problemas cardíacos.
            .saturated_fats
              .wrapper
                .headlong.colo-base-process.cabecera-comp
                  img(width="32" src="../../assets/img/bad-fact.svg")
                  h2.ff-intelo.fs-20.fw-700.my-0.space-letter-200 GRASAS
                  h2.ff-georgia.fsty-italic.fs-30.fw-400.my-0 No saludables
                  h3.ff-georgia.fsty-italic.fs-16.my-0 Saturadas
                  p.fs-13.ff-intelo.fw-200.txt-fats Es una de las grasas dañinas, junto con las grasas trans. Estas, son frecuentemente sólidas a temperatura ambiente. Alimentos como la mantequilla, el aceite de palma y de coco, el queso y la carne roja tienen grandes cantidades de grasas saturadas. Consumirla  puede elevar el colesterol “malo” (LDL) que se acumula y puede llevar a enfermedades cardíacas y otros padecimientos.

    section.comparative.comparative-graph
      .column(data-aos="new-animation" data-aos-duration="2000" data-aos-mirror="true")
        .oil_comparison
          .bar_graph_content.colo-base-process.ff-georgia.fsty-italic
            .bar_graph
              .label
                span.fs-15 Aceite de #[span.fw-700 Aguacate Tanoili]
              .bar.avocado
                .healthy_fats(data-percentage="90%" style="width: 80%;")
                .saturated_fats.saturated-bar(data-percentage="10%" style="width: 10%;")
            .bar_graph
              .label
                span.fs-15 Aceite de #[span.fw-700 oliva]
              .bar
                .healthy_fats(data-percentage="86%" style="width: 76%;")
                .saturated_fats.saturated-bar(data-percentage="14%" style="width: 14%;")
            .bar_graph
              .label
                span.fs-15 Aceite de #[span.fw-700 Girasol]
              .bar
                .healthy_fats(data-percentage="75%" style="width: 65%;")
                .saturated_fats.saturated-bar(data-percentage="25%" style="width: 25%;")
            .bar_graph
              .label
                span.fs-15 Aceite de #[span.fw-700 Maíz]
              .bar
                .healthy_fats(data-percentage="69%" style="width: 59%;")
                .saturated_fats.saturated-bar(data-percentage="31%" style="width: 31%;")
    section.py-5
      .column.colo-base-process
        h2.ff-intelo.fs-30.fw-700.my-0.space-letter-200(data-aos="just-fade" data-aos-duration="3000" ) MÁS CARACTERÍSTICAS DE
        h2.ff-georgia.fsty-italic.fs-30.my-0(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="500") Aceite de aguacate tanoili
        .cont-flex.justify-center.mt-4.fs-15
          .f-basis-40
            ul.list-caracteristicas.ff-georgia.fsty-italic.fs-15
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Aceite extra virgen presionado en frío
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Temperatura controlada debajo de los 50°C
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Aceite de Aguacate 100% natural
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Tipo de aguacate: Hass
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Apariencia: color verde esmeralda con sombras amarillas
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Aroma: complejo y elegante con un sutil aroma a nuez y aguacate
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Sabor: suave y delicado con un buen balance de sabores y un muy ligero sabor a aguacate.
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Acidez: 1%
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") 0% colesterol
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Peso neto: 16.9 fl oz (500 ml)
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Peso neto: 8.4 fl oz (250 ml)
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Peso neto: 33.8 fl (1 lt)
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Vida útil: 3 meses después de abierto
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Producto hecho en México
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Origen: Tancítaro, Michoacán
              li(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000") Distribuido por: Tanoili Foods S.A.P.I DE C.V. Lomas del Parque 153 Col. Lomas del Valle Morelia, c.p. 58170 , Michoacán
          .f-basis-40.txt-center.cont-bot-comp
            img.bot-comp(width=400 src="../../assets/img/botella-08.png" alt="Avocado")
    section.section.call-proceso.py-5.headline
      .column-new.column
        .cont-call-proceso.txt-center(data-aos="just-fade" data-aos-duration="2000")
          h2.ff-georgia.fs-31.tit-call.fs-24 Aceite de #[span Aguacate Tanoili]. Cocina gourmet, cocina sano, cocina delicioso
          .cont-flex.mt-4.justify-center(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="500")
            span.fs-12.saber-mas.mx-call-1.mx-sm-2 VER PRODUCTOS
            router-link(to="/contact" alt="Go to Contact").fs-11.fw-500.mx-call-1.pt-sm-2.mx-sm-2
              span.fs-12.ml-2.saber-mas.color-proceso.ml-sm-0 CONTACTAR
</template>

<script>

import Landing from '@/components/layouts/Landing'
import anime from 'animejs'

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
    //ScrollReveal().reveal('.headline',{ delay: 1000},{easing: 'ease-in'},{ origin: 'top' });

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
