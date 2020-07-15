<template lang="pug">
  layout_landing
    section.about.landing
        .column
            .header.headlong.center.wrapper(data-aos="flip-up")
              h2.headlong-title.ff-alice.fs-40.ct-primary Sobre nosotros
              p.headlong-description.fs-14.fw-400.ct-primary Dedicados al campo, tenemos #[strong más de 40 años de experiencia trabajando con esfuerzo y pasión] para cosechar aguacates de excelente calidad y poder llegar a los hogares de todo el mundo.
            .split_panel.article
              div(data-aos="fade-right")
                .wrapper.article_img
                  .frame
                    img(src="/static/img/about/our_origin.jpg" alt="Our origin")
              div(data-aos="fade-left")
                .wrapper.article_info
                  .headlong
                    h2.headlong-title.ff-alice.fs-24.ct-primary Nuestro origen
                    p.headlong-description.fs-14.fw-400.ct-primary Tanoili es una #[strong empresa de origen mexicano], creada con el propósito de aprovechar las propiedades nutricionales del aguacate para la atención de la salud, otorgando un valor agregado a los huertos de esta fruta. Originario de Michoacán, que es el mayor productor de aguacate en México y el mundo, ofrece un punto geográfico estratégico con las mejores condiciones climáticas que no se encuentran en ningún otro país para la producción de aguacate.
            .split_panel.reverse.article
              div(data-aos="fade-left")
                .wrapper.article_img
                  .frame
                    img(src="/static/img/about/our_objective.jpg" alt="Our objective")
              div(data-aos="fade-right")
                .wrapper.article_info
                  .headlong
                    h2.headlong-title.ff-alice.fs-24.ct-primary Nuestro objetivo
                    p.headlong-description.fs-14.fw-400.ct-primary Proporcionar al mundo nuestro aceite seleccionado y darle un sabor y toque muy especial a los platillos que tú cocinas. Creado de este #[strong maravilloso fruto], traído directamente de nuestros huertos como un #[strong producto de alta calidad].
            .certification(data-aos="fade-up-right")
              .headlong.center.wrapper
                h2.headlong-title.ff-alice.fs-24.ct-primary Estamos Certificados
                p.headlong-description.fs-14.fw-400.ct-primary Contamos con una #[strong certificación internacional] en el área de alimentos abalada por #[a(href="http://jaykosher.com" alt="Jay Kosher Certification" target="_blank").link Jay Kosher], gracias a que logramos llevar a nuestro aceite a su máximo potencial.
              ul.certificates
                li
                  figure
                    img(src="/static/img/certifications/jay_kosher.svg" alt="Jay Kosher Certification")
                    figcaption.off_screen
                      span Jay Kosher Certification
</template>

<script>
import Landing from '@/components/layouts/Landing'
import anime from 'animejs'
import AOS from 'aos';

export default {
  name: 'page_about',
  components: {
    layout_landing: Landing
  },
  methods: {
  },
  mounted() {
    //this.initAnimations()
    // Inicializacion del plugin Animate On Scroll Library
    setTimeout(()=>{
      AOS.init({
        duration: 1000
      });
    },500)
  },
  metaInfo: {
    title:'Acerca de',
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Tanoili es una empresa mexicana, creada con el propósito de explotar las propiedades nutricionales del aguacate para cuidar su salud'},
      {vmid: 'kw', name:'keywords', content: 'Acerca de tanoili, tanoili, aceite de aguacate, objetivo de tanoili, certificado de calidad de tanoili'},
      {vmid: 'inm', itemprop:'name', content: 'Acerca de | Tanoili'},
      {vmid: 'idtn', itemprop:'description', content: 'Tanoili es una empresa mexicana, creada con el propósito de explotar las propiedades nutricionales del aguacate para cuidar su salud'},
      {vmid: 'purl', property:'og:url', content: 'http://tanoili.com/about'},
      {vmid: 'ptt', property:'og:title', content: 'Acerca de | Tanoili'},
      {vmid: 'pdtn', property:'og:description', content: 'Tanoili es una empresa mexicana, creada con el propósito de explotar las propiedades nutricionales del aguacate para cuidar su salud'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Tanoili es una empresa mexicana, creada con el propósito de explotar las propiedades nutricionales del aguacate para cuidar su salud'},
      {vmid: 'twtt', name:'twitter:title', content: 'Acerca de | Tanoili'},
      {itemprop: 'name', content: 'Acerca de aceite de aguacate Tanoili'},
      {itemprop: 'description' ,content: 'Conoce más sobre tanoili, quienes somos, nuestro origen, objetivo y certificados de calidad'},
    ]
  }
}
</script>
