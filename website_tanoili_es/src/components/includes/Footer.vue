<template lang="pug">
  footer.section.fp-auto-height.pt-4.bg-radiant-lr
    .column-new.column.color-desc.ff-gotham.fs-12.column-footer
      .cont-flex.container-100h
        .col.f-basis-20.f-logos.mt-4.logos-smm
          img.logos-footer(src="../../assets/img/icons/TanoiliLogo.svg" alt="Aguacate tanoili")
          img.logos-footer(src="../../assets/img/icons/TanoiliFoodsBelong.svg" alt="Aguacate tanoili")
          img.logos-footer(src="../../assets/img/icons/jay-kosher-logo.svg" alt="Aguacate tanoili")
        .f-basis-60.menu-footer.mt-3.menuf-hide-sm
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/" alt="Go to Home"): h2.ff-georgia.fs-17 Inicio
            ul.list-footer
              li
                a.color-desc(href="/#home" alt="Go to Home") Home
              li
                a.color-desc(href="/#origen"  alt="Go to Home") Origen
              li
                a.color-desc(href="/#consumo"  alt="Go to Home") Proceso
              li
                a.color-desc(href="/#benefits"  alt="Go to Home") Beneficios
              li
                router-link.color-desc(to="/comparative"  alt="Go to Home") Comparación
              li
                router-link.color-desc(to="/#process"  alt="Go to Home") Recetario
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/products" alt="Go to Process"): h2.ff-georgia.fs-17 Productos
            ul.list-footer
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Aceite de Aguacate 250 ml
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Aceite de Aguacate 500 ml
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Aceite de Aguacate 1 lt
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Aceite de Aguacate 5 lts
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Aceite de Aguacate 200 lts
              li
                router-link.color-desc(to="/products"  alt="Go to Home")  Aceite de Aguacate 500 lts
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/about" alt="Go to About"): h2.ff-georgia.fs-17 Nosotros
            ul.list-footer
              li
                a.color-desc(href="/about#mision"  alt="Go to Home") Misión y Visión
              li
                a.color-desc(href="/about#mision"  alt="Go to Home") Valores
              li
                a.color-desc(href="/about#historia"  alt="Go to Home") Historia
              li
                a.color-desc(href="/static/AP-1018-18.pdf" target="_blank"  alt="Go to Home") Certificados
              li
                router-link.color-desc(to="/products"  alt="Go to Home") Catálogo
          .col-menu-f.txt-center.f-basis-25
            router-link.color-desc(to="/contact" alt="Go to Process"): h2.ff-georgia.fs-17 Contacto
            ul.list-footer
              li
                a.color-desc(href="/contact/#contacto-info"  alt="Go to Home") Datos de contacto
              li
                a.color-desc(href="/contact/#contacto-info"  alt="Go to Home") Mapa de Ubicación
              li
                a.color-desc(href="/contact/#mess"  alt="Go to Home") Escribir Mensaje
              li Compra Tanoili
              li por Amazon
        .col.f-basis-20.f-logos.justify-flex-social.mt-4.f-contact.f-social-cont-sm
          .social-cont
            .img-footer.img-social-fsm
              a(href="https://www.facebook.com/TanoiliOil/" target="_blank")
                img.social-icons.facebook(src="../../assets/img/icons/facebook-ico.svg" alt="Aguacate tanoili")
              a(href="https://www.instagram.com/tanoili/" target="_blank")
                img.social-icons(src="../../assets/img/icons/instagram-ico.svg" alt="Aguacate tanoili")
              a
                img.social-icons(src="../../assets/img/icons/linkedin-ico.svg" alt="Aguacate tanoili")
            .info-contacto.mt-2.ff-georgia.fsty-italic.fs-13.fs-13-contact-f
              p
                a(href="tel: +524435372225").color-desc Oficina: + 52 (443) 537 2225
              p
                a(href="mailto:oil@tanoili.com").color-desc Mail: oil@tanoili.com
              p Blvd Garcia de León 1685 int 301
              p Col. Chapultepec oriente 58260
              p Morelia, Michoacán. México
        .amazon-footer.amazon.f-basis-20.ff-georgia.fsty-italic.fw-700.fs-14
          p Disponible en
          img.amazon-ico(src="../../assets/img/icons/amazon-ico.svg" alt="Disponible en amazon")
    .input-lyonn
      .column.column-new
        div.div-tanoili
          span.ff-gotham.fs-11 Copyright © 2019 Tanoili Foods S.A.P.I. de C.V.
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
