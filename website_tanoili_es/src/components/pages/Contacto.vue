<template lang="pug">
  layout_landing
    section.section.py-5
      .column-new.column
        .title-section.fw-700.color-base-txt.mt-6
          h2.fs-24.title-contact(data-aos="up-animation" data-aos-duration="3000" data-aos-delay="1000") CONÓCENOS
        .cocina-desc.ff-gotham.fw-300.fs-13.color-desc.conocenos-desc(data-aos="down-animation" data-aos-duration="3000" data-aos-delay="1000")
          p.fs-13.txt-center.mt-2 Con cultivos ubicados en Tancítaro, Michoacán e instalaciones en Morelia, Michoacán, nuestras oficinas se encuentran disponibles para su atención en Blvd García de León 1685 int 301 Col. Chapultepec oriente 58260 Morelia Michoacán, México.
    section.section.py-2
    a(name="contacto-info" id="contacto-info")
      .column-new.column
        .cont-flex.flex-contact
          .f-basis-30.bg-radiant.contact-contact(data-aos="new-animation" data-aos-duration="3000" data-aos-delay="1000")
            .txt-center.py-5
              img.logo-contact(src="../../assets/img/icons/TanoiliLogo.svg")
              .info-contacto.mt-2.ff-georgia.fs-13
                p.bordered Oficina: + 52 (443) 537 2225
                p.bordered Mail: oil@tanoili.com
                p Blvd García de León 1685 int 301
                p Col. Chapultepec oriente c.p. 58260
                p Morelia, Michoacán. México
              .social-cont.pt-2.justify-center
                a(href="https://www.facebook.com/TanoiliOil/" target="_blank")
                  img.social-icons.facebook(src="../../assets/img/icons/facebook-ico.svg" alt="Aguacate tanoili")
                a(href="https://www.instagram.com/tanoili/" target="_blank")
                  img.social-icons(src="../../assets/img/icons/instagram-ico.svg" alt="Aguacate tanoili")
                a
                  img.social-icons(src="../../assets/img/icons/linkedin-ico.svg" alt="Aguacate tanoili")
          .f-basis-70.contact-map(data-aos="animation-left" data-aos-duration="3000" data-aos-delay="1000")
            googleMap
    a(name="mess" id="mess")
    section.section.fondo-patron.pb-5

      .column
        .title-section.fw-700.color-base-txt
          h2.fs-24(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="500") ESCRÍBENOS
        .subt-desc.ff-gotham.fw-300.fs-13.color-subt.desc-contact-contact
          p.fs-13.txt-center(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="1000") Estaremos felices de establecer comunicación con ustedes, escuchar y resolver sus dudas, aclaraciones, comentarios y formar lazos que propicien una fuerte relación de valor y confianza.
        .contacto.contact-form-container(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="1000")
          include_contactForm

</template>

<script>
  import Landing from '@/components/layouts/Landing'
  import ContactForm from '@/components/includes/ContactForm'
  import Map from '@/components/includes/GoogleMap'

  export default {
    name: "Contacto",
    components: {
      layout_landing: Landing,
      include_contactForm: ContactForm,
      googleMap:Map
    },

  }
</script>

<style>

</style>
