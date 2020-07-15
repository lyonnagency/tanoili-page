<template lang="pug">
  layout_landing
    section.comunbg.bg.radiant.process.section.height-full.height-full-125.section-process
      .column-new.column.column-nowrap
        .title-section.fw-700.color-base-txt.title-process-med
          h2.fs-24(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="100") OUR PROCESS
        .cocina-desc.ff-gotham.fw-300.fs-13.color-desc.proceso-sm(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="500")
          p.fs-13.txt-center.mt-2 We do every step of every stage with the mayor care and dedication to ensure that our Tanoili avocado oil conserves its properties, benefits, and quality until its moment of consumption.
        slider_process.slider
    section.section.call-proceso.py-5
      .column-new.column
        .cont-call-proceso.txt-center
          h2.ff-georgia.fs-31.tit-call.fs-24(data-aos="just-fade" data-aos-duration="2000") Tanoili #[span Avocado Oil]. Cook gourmet, cook healthy, cook tasty.
          .cont-flex.mt-4.justify-center(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="500")
            span.fs-12.saber-mas.mx-call-1.mx-sm-2 SEE PRODUCTS
            router-link(to="/contact" alt="Go to Contact").fs-11.fw-500.mx-call-1.pt-sm-2.mx-sm-2
              span.fs-12.ml-2.saber-mas.color-proceso.ml-sm-0 CONTACT US

</template>

<script>
  import Landing from '@/components/layouts/Landing'
  import FullPage from '#/vue-fullpage.js/src/FullPage'
  import Slider from '@/components/includes/SliderProcess'

  export default {
    name: "Process",
    components: {
      layout_landing: Landing,
      full_page: FullPage,
      slider_process: Slider
    },
    data() {
      return {
        options: {
          navigation: true,
          controlArrows: false,
          onLeave: this.onLeave,
          onSlideLeave: this.onSlideLeave
        }
      }
    },
    methods: {
      currentSlide(current) {
        if (current != null && typeof current == 'number') {
          let step_control = this.$el.querySelector('.step_control ul')
          let steps = step_control.querySelectorAll('.step_button')
          for (let index = 0; index <= steps.length - 1; index++) {
            steps[index].classList.remove('current')
          }
          steps[current].classList.add('current')
          let removeClassByPrefix = (el, prefix) => {
            var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g')
            el.className = el.className.replace(regx, '')
            return el
          }
          removeClassByPrefix(step_control, 'step_')
          step_control.classList.add('step_' + current)
        } else {
          console.err("current is not valid")
        }
      },
      moveSlide(event, sliderNumber) {
        let steps = this.$el.querySelectorAll('.step_control .step_button')
        for (let index = 0; index <= steps.length - 1; index++) {
          let step = steps[index]
          if (step === event.target) {
            this.currentSlide(index)
            break
          }
        }
        $.fn.fullpage.moveTo('process', sliderNumber)
      }
    },
    metaInfo: {
      title: 'Process',
      meta: [
        {name: 'robots', content: 'index, follow'},
        {
          vmid: 'dtn',
          name: 'description',
          content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'
        },
        {
          vmid: 'kw',
          name: 'keywords',
          content: 'beneficios del aceite de aguacate, comparativa de aceites, ¿para que sirve el aceite de aguacate?, aceite de aguacate vs otros aceites, aceite de aguacate para cocinar'
        },
        {vmid: 'inm', itemprop: 'name', content: 'Aceite de aguacate tanoili vs otros aceites'},
        {
          vmid: 'idtn',
          itemprop: 'description',
          content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'
        },
        {vmid: 'purl', property: 'og:url', content: 'http://tanoili.com/about'},
        {vmid: 'ptt', property: 'og:title', content: 'Aceite de aguacate tanoili vs otros aceites'},
        {
          vmid: 'pdtn',
          property: 'og:description',
          content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'
        },
        {
          vmid: 'tdtn',
          name: 'twitter:description',
          content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porqué algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'
        },
        {vmid: 'twtt', name: 'twitter:title', content: 'Aceite de aguacate tanoili vs otros aceites'},
        // Google / Schema.org markup:
        {itemprop: 'name', content: 'Aceite de aguacate tanoili vs otros aceites'},
        {
          itemprop: 'description',
          content: 'Actualmente hay una gran variedad de aceites vegetales, pero usted sabe cuál debe usar al cocinar o porque algunos aceites son más saludables que otros. Aquí explicamos porqué el aceite de aguacate es más saludable y tu mejor opción'
        },
      ]
    }
  }
</script>

<style>

</style>
