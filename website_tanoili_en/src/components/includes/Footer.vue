<template lang="pug">
  footer.section.fp-auto-height.pt-4.bg-radiant-lr
    .column-new.column.color-desc.ff-gotham.fs-12.column-footer
      .cont-flex
        .col.f-basis-20.f-logos.mt-4.logos-smm
          img.logos-footer(src="../../assets/img/icons/TanoiliLogo.svg" alt="Aguacate tanoili")
          //img.logos-footer(src="../../assets/img/icons/TanoiliFoodsBelong.svg" alt="Aguacate tanoili")
          img.logos-footer(src="../../assets/img/icons/jay-kosher-logo.svg" alt="Aguacate tanoili")
        .f-basis-60.menu-footer.mt-3.menuf-hide-sm
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/" alt="Go to Home"): h2.ff-georgia.fs-17 Home
            ul.list-footer
              li
                a.color-desc(href="/#home" alt="Go to Home") Home
              li
                a.color-desc(href="/#origen"  alt="Go to Home") Origin
              li
                a.color-desc(href="/#consumo"  alt="Go to Home") Process
              li
                a.color-desc(href="/#benefits"  alt="Go to Home") Benefits
              li
                router-link.color-desc(to="/comparative"  alt="Go to Home") Compare
              li
                router-link.color-desc(to="/#process"  alt="Go to Home") Recipe book
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/products" alt="Go to Process"): h2.ff-georgia.fs-17 Products
            ul.list-footer
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Avocado oil 250 ml
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Avocado oil 500 ml
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Avocado oil 1 lt
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Avocado oil 5 lts
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Avocado oil 200 lts
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Avocado oil 500 lts
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/about" alt="Go to About"): h2.ff-georgia.fs-17 About Us
            ul.list-footer
              li
                a.color-desc(href="/about#mision"  alt="Go to Home") Mission and Vision
              li
                a.color-desc(href="/about#mision"  alt="Go to Home") Values
              li
                a.color-desc(href="/about#historia"  alt="Go to Home") History
              li
                a.color-desc(href="/static/AP-1018-18.pdf" target="_blank"  alt="Go to Home") Certificates
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Catalogue
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/contact" alt="Go to Process"): h2.ff-georgia.fs-17 Contact
            ul.list-footer
              li
                a.color-desc(href="/contact/#contacto-info"  alt="Go to Home") Contact information
              li
                a.color-desc(href="/contact/#contacto-info"  alt="Go to Home") Location map
              li
                a.color-desc(href="/contact/#mess"  alt="Go to Home") Write a message
              li Buy Tanoili
              li from Amazon
        .col.f-basis-20.f-logos.justify-flex-social.mt-4.f-contact.f-social-cont-sm
          .social-cont
            .img-footer.img-social-fsm
              a(href="https://www.facebook.com/TanoiliOil/" target="_blank")
                img.social-icons.facebook(src="../../assets/img/icons/facebook-ico.svg" alt="Facebook Tanoili")
              a(href="https://www.instagram.com/tanoili/" target="_blank")
                img.social-icons(src="../../assets/img/icons/instagram-ico.svg" alt="Instagram Tanoili")
              a
                img.social-icons(src="../../assets/img/icons/linkedin-ico.svg" alt="Linkedin Tanoili")
            .info-contacto.mt-2.ff-georgia.fsty-italic.fs-13.fs-13-contact-f
              p
                a(href="tel:524435372225" ).color-desc Office: +52 1 (443) 228 5228
              p
                a(href="mailto:oil@tanoili.com").color-desc Mail: oil@tanoili.com
              p Blvd Garcia de Leon 1685 int 301
              p Col. Chapultepec oriente c.p. 58260
              p Morelia, Michoacan. Mexico
        .amazon-footer.amazon.f-basis-20.ff-georgia.fsty-italic.fw-700.fs-14
          p Available at
          img.amazon-ico(src="../../assets/img/icons/amazon-ico.svg" alt="Tanoili available at amazon")
    .input-lyonn
      .column.column-new
        div.div-tanoili
          span.ff-gotham.fs-11 Copyright © 2020 Tanoili.
        div.ff-gotham.fw-700.fs-11.love-lyonn
          span(v-on:click="redirectToLyonn") From Lyonn Agency with love.

</template>

<script>
export default {
  name: 'include_footer',
  methods:{
    redirectToLyonn:
      function(){
        location.href ="http://lyonn.co/";
      }
  }
}
</script>
