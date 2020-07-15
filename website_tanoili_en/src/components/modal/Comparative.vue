<template lang="pug">
    .modal(@click.stop.prevent="close").comparative
      article
        a(@click.stop.prevent="close").close-modal.icon-close
          span.off_screen Close
        .container
          router-link(to="/" alt="Tanoili").txt-center
            img( width="71px" height="85px" src="../../assets/img/icons/TanoiliLogo.svg")
        .container.colo-base-process.txt-center.container-modal
          h1.ff-georgia.fs-100.my-0  90 #[span.fs-28 %]
          p.ff-georgia.fsty-italic.mt-1.fw-700.fs-18 Healthy fats in Tanoili avocado oil
          p.ff-intelo.fw-200.fs-13.line-h-2 The avocado oil reduces the risk of heart diseases, stimulates the immune system, provides healthier skin and increases the muscle mass.
        .container.colo-base-process.txt-center.mt-2.container-modal.mt-sm-0
          .cont
            img.img-hoja( width="261px" height="132px" src="../../assets/img/hoja.png")
        .container.colo-base-process.txt-center.container-modal
          p.ff-georgia.fsty-italic.fw-700.fs-18.mt-0.mb-1 Healthy fats in other oils
        .container.colo-base-process.txt-center.flex-row-dir.container-modal
          .f-basis-30
            h2.ff-georgia.fs-30.fsty-italic.my-0.fw-700 86 #[span.fs-20 %]
            p.mt-1.ff-georgia.fs-18.fsty-italic Olive
          .f-basis-30
            h2.ff-georgia.fs-30.fsty-italic.my-0.fw-700 75 #[span.fs-20 %]
            p.mt-1.ff-georgia.fs-18.fsty-italic Sunflower
          .f-basis-30
            h2.ff-georgia.fs-30.fsty-italic.my-0.fw-700 69 #[span.fs-20 %]
            p.mt-1.ff-georgia.fs-18.fsty-italic Corn
        .cont-flex.justify-center.button-conocer
          router-link(to="/comparative" alt="Tanoili")
            button.btn-hoja.mt-1.mt-sm-0
              span.colo-base-process LEARN MORE

</template>

<script>
export default {
  name: 'modal_comparative',
  methods: {
    open() {
      this.$el.classList.add('active')
      $.fn.fullpage.setAllowScrolling(false)
      $.fn.fullpage.setKeyboardScrolling(false)
    },
    close() {
      this.$el.classList.remove('active')
      $.fn.fullpage.setAllowScrolling(true)
      $.fn.fullpage.setKeyboardScrolling(true)
    }
  }
}
</script>
