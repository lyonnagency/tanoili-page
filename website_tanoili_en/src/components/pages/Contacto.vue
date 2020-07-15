<template lang="pug">
  layout_landing
    section.section.py-5
      .column-new.column
        .title-section.fw-700.color-base-txt.mt-6
          h2.fs-24.title-contact(data-aos="up-animation" data-aos-duration="3000" data-aos-delay="1000") SAY HELLO
        .cocina-desc.ff-gotham.fw-300.fs-13.color-desc.conocenos-desc(data-aos="down-animation" data-aos-duration="3000" data-aos-delay="1000")
          p.fs-13.txt-center.mt-2 Our orchards are located in Tancitaro, Michoacan and our offices in Morelia, Michoacan, you can find us in Blvd Garcia de Leon 1685 int 301 Col. Chapultepec oriente 58260 Morelia Michoacan, Mexico.

    section.section.py-2
      a(name="contacto-info" id="contacto-info")
      .column-new.column
        .cont-flex.flex-contact
          .f-basis-30.bg-radiant.contact-contact(data-aos="new-animation" data-aos-duration="3000" data-aos-delay="1000")
            .txt-center.py-5
              img.logo-contact(src="../../assets/img/icons/TanoiliLogo.svg")
              .info-contacto.mt-2.ff-georgia.fs-13
                p.bordered Office: + 52 (443) 537 2225
                p.bordered Mail: oil@tanoili.com
                p Blvd Garcia de Leon 1685 int 301
                p Col. Chapultepec oriente c.p. 58260
                p Morelia, Michoacan. Mexico
              .social-cont.pt-2.justify-center
                a(href="https://www.facebook.com/TanoiliOil/" target="_blank")
                  img.social-icons.facebook(src="../../assets/img/icons/facebook-ico.svg" alt="Aguacate tanoili")
                a(href="https://www.instagram.com/tanoili/" target="_blank")
                  img.social-icons(src="../../assets/img/icons/instagram-ico.svg" alt="Aguacate tanoili")
                a
                  img.social-icons(src="../../assets/img/icons/linkedin-ico.svg" alt="Aguacate tanoili")
          .f-basis-70.contact-map(data-aos="animation-left" data-aos-duration="3000" data-aos-delay="1000")
            googleMap
    section.section.fondo-patron.pb-5
      a(name="mess" id="mess")
      .column
        .title-section.fw-700.color-base-txt
          h2.fs-24(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="500") CONTACT US
        .subt-desc.ff-gotham.fw-300.fs-13.color-subt.desc-contact-contact
          p.fs-13.txt-center(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="1000") We will be glad to hear from you, solve any doubt or clarification, listen to any comment and fortify ties to create a strong work relationship based on trust and values.
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
