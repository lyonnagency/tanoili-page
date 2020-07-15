<template lang="pug">
  layout_landing
    section.nosotrosbg.section.py-5
      .column-new.column(data-aos="just-fade" data-aos-duration="2000")
        .title-section.title-section-land.fw-700.color-base-txt.mt-10
          h2.fs-24.space-letter-200 ABOUT US.
        .cocina-desc.ff-gotham.fw-300.fs-13.color-gray.top-10.nosotros-header
          p.fs-13.txt-center.mt-2 More than 40 years working with dedication, effort, and passion to harvest excellent quality avocados for every home in the world. Tanoili is a Mexican company with the purpose of using the nutritional benefits of the avocado to take care of people's health, and giving an added value to this fruit's orchards. Originally from Michoacan, the biggest avocado producer in Mexico and the world. It offers a strategic geographic location with the best climate conditions for avocado production that cannot be found in any other country
          .line-cont.mt-4
            .line
    section.bg-flat.py-5.section
      .column-new.column
        .historia-r1
          a(name="historia" id="historia")
          div(data-aos="new-animation" data-aos-duration="2000")
            h2.txt-center.ff-intelo.color-base-txt.title-historia
              p.ff-intelo.fw-700.space-letter-200
              p.ff-georgia.fsty-italic History
            span.fs-13.ff-gotham.line-h-2.color-gray Tanoili is a company with more than 50 years of experience cultivating and producing avocados. The beginning of our story takes place in 1965 with the need of exploring and develop the production of avocado in fine lands and with the best climate conditions in Tancitaro, Michoacan. We own more than 22k hectares where the land offers natural advantages in the best conditions to cultivate and produce the best avocados that cannot be found in any other place. A group of brilliant, hardworking and innovative people decided to compromise and work this region lands, and with time they innovated in the avocado production, leaving a unique legacy for the next generations
            span.p-show-sm.fs-13.ff-gotham.line-h-2.color-gray of orchards in Tancitaro, Michoacan. With experience and specialization in the production of avocado in our orchards, the new producers generation create Tanoili along innovative people interested in transforming the world. Now a new window is open and we can offer an additional competitive advantage to avocado by transforming it into oil, offering ideal alternatives from the same fruit. Because of the high quality and nutritional values of the avocado, Tanoili takes the lead to produce avocado oil and commercialize in international markets for consumers who like to maintain a healthy lifestyle. Currently, Tanoili is constantly in the look to offer the highest quality avocado oil, using the fruit from the best region in the world to produce avocado with the best and unique lands, naturally great for the cultivation of this fruit.
          div.p-hide-sm(data-aos="just-fade" data-aos-duration="2000")
            p.fs-13.ff-gotham.line-h-2.color-gray.mt-6 of orchards in Tancitaro, Michoacan. With experience and specialization in the production of avocado in our orchards, the new producers generation create Tanoili along innovative people interested in transforming the world. Now a new window is open and we can offer an additional competitive advantage to avocado by transforming it into oil, offering ideal alternatives from the same fruit. Because of the high quality and nutritional values of the avocado, Tanoili takes the lead to produce avocado oil and commercialize in international markets for consumers who like to maintain a healthy lifestyle. Currently, Tanoili is constantly in the look to offer the highest quality avocado oil, using the fruit from the best region in the world to produce avocado with the best and unique lands, naturally great for the cultivation of this fruit.
          div.history-img(data-aos="animation-left" data-aos-duration="2000")
        a(name="mision" id="mision")
        .historia-r1.mt-2
          div.bg-hoja(data-aos="animation-left" data-aos-duration="1000" data-aos-delay="500")
            h2.txt-center.ff-intelo.color-base-txt.fs-30.space-letter-200 MISSION
            p.fs-13.ff-gotham.line-h-2.color-gray Incorporate our products in the international market to become the ideal option for the consumer, offering healthy and premium products thru the high value of customer service and adding competitive advantages to our partner network and achieve mutual growth.
          div.bg-hoja(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1500")
            h2.txt-center.ff-intelo.color-base-txt.fs-30.space-letter-200 VISION
            p.fs-13.ff-gotham.line-h-2.color-gray Become the leading company in the production and commercialization of healthy avocado oil, fulfilling every global quality standard, generating trust and compromise between our consumers and social.
          div.valores(data-aos="new-animation" data-aos-duration="3000" data-aos-delay="2000")
            h2.txt-center.ff-intelo.color-base-txt.fs-30 VALUES
        .historia-r2.mt-2(data-aos="down-animation" data-aos-duration="2000" data-aos-delay="1000")
          .cont-bordered
            div.titulo-r2
              h2.txt-center.ff-intelo.color-base-txt.fs-30.space-letter-200 COMPROMISE
            p.texto-r2.fs-13.ff-gotham.line-h-2.color-gray Tanoili and our partner network have a unique compromise offering to our consumer the highest quality products, highlighting the mutual respect, and a total benefit of our environment by producing our products in the most natural way possible. Tanoili is compromised to maintain quality standards to satisfy every need of our partner network and give solutions and constant innovation to future needs.
        .historia-r2.mt-2(data-aos="up-animation" data-aos-duration="2000" data-aos-delay="1500")
          .cont-bordered.column-sm-inverse
            p.texto-r2.fs-13.ff-gotham.line-h-2.color-gray Tanoili is compromised with the natural and social environment. We look for sustainable development in all of our areas respecting and offering optimal and helpful alternatives to maintain the best conditions in the production of our avocado oil.
            div.titulo-r2.top-compromiso
              h2.txt-center.ff-intelo.color-base-txt.fs-30.space-letter-200 IDEOLOGY
        .title-section.fw-700.color-base-txt
          h2.space-letter-200(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="500")  CONTACT US
        .subt-desc.ff-gotham.fw-300.fs-13.color-subt.desc-nosotros(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="1000")
          p.fs-13.txt-center We will be glad to hear from you, solve any doubt or clarification, listen to any comment and fortify ties to create a strong work relationship based on trust and values.

      .column-new.column.fondo-contact-dif
        .contacto.contacto-nosotros(data-aos="just-fade" data-aos-duration="3000" data-aos-delay="1000")
          include_contactForm.mt-2
      .fondo-contact-img




</template>

<script>
  import Landing from '@/components/layouts/Landing'
  import ContactForm from '@/components/includes/ContactForm'
  export default {
        name: "Nosotros",
      components: {
        layout_landing: Landing,
        include_contactForm: ContactForm,
      },
    }
</script>

<style >

</style>
