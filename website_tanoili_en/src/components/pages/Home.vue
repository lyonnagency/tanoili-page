<template lang="pug">
  main
    include_nav(ref="include_nav")
    full_page(:options="options")
      section.header.bg-primary_alt.section.header-n
        .shape
          .triangle.bg-primary
            .pattern
        .column
          .col-left.color-base-txt-3(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000")
            .col-container
              p.fw-700.fs-16.space-letter-200 AVOCADO OIL
              p.ff-georgia.fsty-italic.fw-700 Mexican
          .avocado(data-aos="just-fade" data-aos-duration="2000" )
          .col-right.color-base-txt-3(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000")
            .col-container-r
              p.fw-700.fs-16.space-letter-200 EDIBLE OIL
              p.ff-georgia.fsty-italic.fw-700 Premium
          p.descubrir.color-yellow.fs-16
            ico_down(width="25px" height="25px").ico-upDown
      section.header-n.sect-consumo.section.comunbg
        .shape
          .triangle.bg-primary
            .pattern
        .cont-flex.column
          .col-left-aceite.color-base-txt(data-aos-duration="2000" data-aos-delay="3000").custom-animate
            div
              p.fw-700.fs-30.space-letter-200 AVOCADO
              p.fs-45.space-letter-200 OIL
              p.color-base-txt-2.ff-georgia.fs-24.fw-700.fsty-italic Mexican
          .col-left-text.color-base-txt
            p.fw-200.fs-13 This edible oil extracted from the avocado contains properties that give great benefits to the consumer's health. Its components prevent arterial damage and help to protect against "free radicals" and cell damage that can provoke cancer.
            p.fs-11.mt-2
              router-link.mt-2.fs-11(to="/about" alt="Go to About").color-base-txt.saber-mas.mas-small
                span LEARN MORE

          .avocado
          .img-cover
            .cont-img
          p.descubrir.descubrir-avo
            ico_down(icoColor="#615d24").ico-upDown
      section.header-n.sect-consumo.section.comunbg
        .shape
          .triangle.bg-primary
            .pattern
        .column
          .col-right-aceite.color-base-txt
           div
              p.fw-700.fs-30.fs-16.space-letter-200 AEDIBLE
              p.fs-45.fs-16.space-letter-200  OIL
              p.color-base-txt-2.ff-georgia.fs-24.fsty-italic.fw-700 Premium
          .col-right-text.color-base-txt
            p.fw-200.fs-13 It is commonly used as a dressing for salads and dishes previously cooked, but cooking with avocado oil accentuates the flavor of the ingredients used in the preparation of those dishes. It maintains the avocado properties and has a smoke point at 270°C (518°F), which makes it a perfect substitute for olive oil and other oils.
            p.mt-2.fs-11
              router-link(to="/process" alt="Go to About").color-base-txt.saber-mas.mas-small
                span LEARN MORE
          .avocado
          .img-cover-left
            .cont-img-left
          p.descubrir.descubrir-avo
            ico_down(icoColor="#615d24").ico-upDown
      section.header-n.sect-consumo.section.comunbg
        .column.flex-sm-nowrap
          .color-base-txt.col-left-benefits.l-10.t-15
            h3.tit-benefit.fw-500.fs-14.txt-right.txt-sm-center(v-on:click="showBenefit(0)") Avocado properties.
            p.fs-12.txt-right.fw-200.hide-sm(v-bind:class="{show_sm:currentBenefit==0}") Provides high protein levels, carbohydrates, vitamin E, A, K, B1, B2, B3, D, potassium, magnesium, iron, phosphorus, folic acid, omega3, 6 & 9, rich in beta-sitosterol, a substance that prevents the absorption of cholesterol and helps to control the cholesterol range in the organism.
            p.fs-11.saber-mas.txt-right.compare-modal.txt-sm-center.mr-3 COMPARE
          .color-base-txt.col-left-benefits.l-7.t-40
            h3.tit-benefit.fw-500.fs-14.txt-right.txt-sm-center(v-on:click="showBenefit(1)") Cholesterol control.
            p.fs-12.txt-right.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==1}") One of the of the avocado oil benefits is that it helps to control the cholesterol levels in an efficient way. The avocado contains monounsaturated fats which help to reduce LDL cholesterol levels (bad cholesterol) and increase the HDL cholesterol levels (good cholesterol).
            p.fs-11.saber-mas.txt-right.compare-modal.txt-sm-center.mr-3 COMPARE
          .color-base-txt.col-left-benefits.l-10.t-65
            h3.tit-benefit.fw-500.fs-14.txt-right.txt-sm-center(v-on:click="showBenefit(2)") Illness prevention.
            p.fs-12.txt-right.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==2}") The avocado properties help to prevent prostate and breast cancer, controls glucose levels in blood and prevent problems in the circulatory system, contains beta-carotene, lutein that helps to reduce the risk of cataracts and macular degeneration in the eyes, avocado acts as an antioxidant and reduces inflammation helping with arthritis cases.
            p.fs-11.saber-mas.txt-right.compare-modal.txt-sm-center.mr-3 COMPARE
          .avocado-benefits
          p.descubrir.color-base-txt
            span.mt-1 |
          .color-base-txt.col-right-benefits.r-10.t-15
            h3.tit-benefit.fw-500.fs-14.txt-left.txt-sm-center(v-on:click="showBenefit(3)") Kitchen ally.
            p.fs-12.txt-left.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==3}") Using avocado oil for cooking allows to enjoy the dishes without changing the flavors of the ingredients, it has a neutral flavor and a lighter consistency than olive and coconut oil.
            p.fs-11.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARE
          .color-base-txt.col-right-benefits.r-7.t-40
            h3.tit-benefit.fw-500.fs-14.txt-left.txt-sm-center(v-on:click="showBenefit(4)") Skin care.
            p.fs-12.txt-left.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==4}") Avocado oil can also be included in the beauty routine. Its relaxing, softening and hydrating benefits make it a product that can be used to repair dry skin and keep its hydration, stimulates the collagen production and delays skin aging and prevents the formation of wrinkles.
            p.fs-11.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARE
          .color-base-txt.col-right-benefits.r-10.t-65
            h3.tit-benefit.fw-500.fs-14.txt-left.txt-sm-center(v-on:click="showBenefit(5)")  Haircare.
            p.fs-12.txt-left.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==5}") Avocado oil cannot just be used in the skin care routine, but also in the hair care routine, its hydrating and nutritional properties can repair a dry and mistreated hair, helps with the growth, shine, strength & open hair ends.
            p.fs-11.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARE
          .container-slider.slider-benefits
            .slider-fran.slider-benefits-
              .container-fran.container-benefits
                .color-base-txt.contenedor-products.contenedor-bene(v-for="(item,index) in beneficios" :key="index")
                  h3.tit-benefit.fw-500.fs-14.txt-sm-center {{item.titulo}}
                  p.fs-13.fw-200.txt-sm-center {{item.description}}
                  p.fs-11.mas-small.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARE
              .controls.controls-benefits
                ul.controls-lateral
      section.section.bg-radiant.bg-border
        .column-new.column
          .title-section.fw-700.color-base-txt
            h2.fs-24 TANOILI´S DELICIOUS MEALS
          .cocina-desc.ff-gotham.fw-300.fs-13.color-desc
            p.fs-13.txt-center.mt-2 When using Tanoili avocado oil for cooking every ingredient keeps its natural flavor which allows appreciating every dish with all senses in every bite, following the chef, owner of 31 Michelin stars, Joël Robuchon in his saying: "Taste is developed by the diversity of the products one can sample."
          .galeria-recetas.mt-4
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-1.jpeg" alt="Tanoili Meal 1")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-3.jpeg" alt="Tanoili Meal 2")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-6.jpeg" alt="Tanoili Meal 3")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-2.jpeg" alt="Tanoili Meal 4")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-4.jpeg" alt="Tanoili Meal 5")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-5.jpeg" alt="Tanoili Meal 6")

      section.section.comunbg.bg.radiant
        .column-new.column
          .title-section.fw-700.color-base-txt.title-home-contact.mt-25vh
            h2.fs-24 CONTACT US
          .subt-desc.ff-gotham.fw-300.fs-13.color-subt.subt-contact-home
            p.fs-13.txt-center We will be glad to hear from you, solve any doubt or clarification, listen to any comment and fortify ties to create a strong work relationship based on trust and values.
          .contacto.contact-home
            include_contactForm

      include_footer
    modal_comparative(ref="modal_comparative")
</template>

<script>
import FullPage from '#/vue-fullpage.js/src/FullPage'
import Nav from '@/components/includes/NavHome'
import Footer from '@/components/includes/Footer'
import Comparative from '@/components/modal/Comparative'
import ContactForm from '@/components/includes/ContactForm'
import { mapGetters } from 'vuex'
import anime from 'animejs'
import IcoDown from '@/components/icons/ico-down'

export default {
  name: 'page_home',
  components: {
    full_page: FullPage,
    include_nav: Nav,
    include_footer: Footer,
    modal_comparative: Comparative,
    include_contactForm: ContactForm,
    ico_down: IcoDown
  },
  data() {
    return {
      options: {
        navigation: true,
        menu: '#menu',
        anchors: ['home','origen','consumo' ,'benefits', 'process', 'contact', 'footer'],
        controlArrows: false,
        onLeave: this.onLeave,
        onSlideLeave: this.onSlideLeave
      },
      animeHeader: null,
      animeBenefits: null,
      animeProcess: null,
      transitionName: "",
      modal_buttons:"",
      currentBenefit:0,
      slider_fran: document.querySelector('.slider-fran'),
      interval: null,
      contador: 0,
      itemsCount: 0,
      beneficios:[
        {
          titulo:'Avocado properties.',
          description:'Provides high protein levels, carbohydrates, vitamin E, A, K, B1, B2, B3, D, potassium, magnesium, iron, phosphorus, folic acid, omega3, 6 & 9, rich in beta-sitosterol, a substance that prevents the absorption of cholesterol and helps to control the cholesterol range in the organism.'
        },        {
          titulo:'Cholesterol control.',
          description:'One of the of the avocado oil benefits is that it helps to control the cholesterol levels in an efficient way. The avocado contains monounsaturated fats which help to reduce LDL cholesterol levels (bad cholesterol) and increase the HDL cholesterol levels (good cholesterol).'
        },        {
          titulo:'Illness prevention ',
          description:'The avocado properties help to prevent prostate and breast cancer, controls glucose levels in blood and prevent problems in the circulatory system, contains beta-carotene, lutein that helps to reduce the risk of cataracts and macular degeneration in the eyes, avocado acts as an antioxidant and reduces inflammation helping with arthritis cases.'
        },        {
          titulo:'Kitchen ally',
          description:'Using avocado oil for cooking allows to enjoy the dishes without changing the flavors of the ingredients, it has a neutral flavor and a lighter consistency than olive and coconut oil.'
        },        {
          titulo:'Skin care',
          description:'Avocado oil can also be included in the beauty routine. Its relaxing, softening and hydrating benefits make it a product that can be used to repair dry skin and keep its hydration, stimulates the collagen production and delays skin aging and prevents the formation of wrinkles.'
        },        {
          titulo:'Haircare',
          description:'Avocado oil cannot just be used in the skin care routine, but also in the hair care routine, its hydrating and nutritional properties can repair a dry and mistreated hair, helps with the growth, shine, strength & open hair ends.'
        }
      ]
    }
  },
  computed: mapGetters([
    'benefit'
  ]),
  methods: {
    bindEvents() {
      let controles = this.slider_fran.querySelectorAll(`.controls-benefits ul> li`)
      for (let j = 0; j < controles.length; j++) {

        if (j==0) controles[j].addEventListener('click', this.moveLeft)
        if (j==1) controles[j].addEventListener('click', this.moveRight)

      }
    },
    restart() {
      if (this.interval) window.clearInterval(this.interval)
      this.start()
    },
    moveLeft() {
      if (this.contador==0) this.contador=this.itemsCount
      let index = this.contador-1
      this.contador = index
      this.moveTo(index)
      this.restart()
    },
    moveRight() {
      if (this.contador==this.itemsCount-1) this.contador=-1
      let index =this.contador + 1
      this.contador = index
      console.log(this.contador)
      console.log(this.itemsCount)
      this.moveTo(index)
      this.restart()
    },
    indexFosSiblings(el) {
      let children = el.parentNode.children;
      //console.log(children)
      for (let i = 0; i < children.length; i++) {
        console.log(children[i])
        let child = children[i]

        if (child == el) return i
      }
    },
    start() {
      this.interval = window.setInterval(this.move.bind(this), 8000)
    },
    move() {

      this.contador++
      if (this.contador >= this.itemsCount) this.contador = 0
      this.moveTo(this.contador)
    },
    resetActive() {
      let controles = this.slider_fran.querySelectorAll(`.controls li.active-slider`)

      controles.forEach(item => item.classList.remove('active-slider'))
    },
    moveTo(index) {
      let left = (index) * 100
      this.resetActive()
      //this.slider_fran.querySelector(`.controls li:nth-child(${index + 1})`).classList.add('active-slider')
      let contenedor= document.querySelector('.container-benefits')
      console.log(contenedor)
        if (contenedor && contenedor!=null) contenedor.style.left = '-' + left + '%'

    },
    buildControls() {

        let controlI = document.createElement('li')
        let controlD = document.createElement('li')
        controlI.classList.add('left-slide')
        controlD.classList.add('right-slide')

        document.querySelector('.controls-benefits > ul').appendChild(controlI)
        document.querySelector('.controls-benefits > ul').appendChild(controlD)

    }
    ,
    showBenefit(newBenefit){
      this.currentBenefit=newBenefit
    },
    initAnimations() {
      let timeline = anime.timeline({
        easing: 'linear',
        delay: 500,
        duration: 300
      })
      timeline.add({
        targets: this.$el.querySelector("section.header .avocado"),
        opacity: [0, 1]
      }).add({
        targets: this.$el.querySelector("section.header .headlong .headlong-title"),
        opacity: [0, 1],
        translateY: [10, 0]
      }).add({
        targets: this.$el.querySelector("section.header .headlong .headlong-description"),
        opacity: [0, 1],
        translateY: [10, 0]
      })
      let benefits = this.$el.querySelectorAll('.benefit_control .benefit_button')
      this.animeBenefits = anime({
        targets: benefits,
        translateX: [-20, 0],
        opacity: [0, 1],
        duration: (el, i, l) => {
          return 1000 + (i * 1000)
        },
        delay: 600,
        autoplay: false
      })
      let steps = this.$el.querySelectorAll('.step_control .step_button')
      this.animeProcess = anime({
        targets: steps,
        scale: [0.6, 1],
        opacity: [0, 1],
        delay: (el, i, l) => {
          return 600 + (i * 400)
        },
        autoplay: false
      })
    },
    loadBenefit(event, code) {
      let benefits = this.$el.querySelectorAll('.benefit_control .benefit_button')
      for (let index = 0; index <= benefits.length - 1; index++) {
        benefits[index].classList.remove('active')
      }
      event.target.classList.add("active")
      let section = this.$el.querySelector('section.benefits')
      section.classList.add('switch')
      setTimeout(() => {
        this.$store.dispatch('getBenefit', code)
      }, 800)
      setTimeout(() => {
        section.classList.remove('switch')
      }, 1500)
    },
    openComparative() {
      this.$refs.modal_comparative.open()
    },
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
    },
    onLeave(index, nextIndex, direction) {
      // if (index == 1) {
      //   this.$refs.include_nav.addScrollClass()
      // }
      switch (nextIndex) {
        case 1:
          this.$refs.include_nav.removeScrollClass()
          break
        case 2:
          if (this.animeBenefits == null) {
            this.initAnimations()
          }
          this.animeBenefits.play()
          break
        case 3:
          if (this.animeProcess == null) {
            this.initAnimations()
          }
          this.animeProcess.play()
          let hash = this.$route.hash
          if (hash != "" && hash.match(/process/g)) {
            let current = hash.charAt(hash.length - 1)
            if (!isNaN(current)) {
              current = parseInt(current)
              setTimeout(() => {
                this.currentSlide(current)
              }, 800)
            }
          }
          break
      }
    },
    onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {
      this.currentSlide(nextSlideIndex)
    }
  },
  beforeMount() {
    this.$store.dispatch('getBenefit', "01")
  },
  mounted() {
    //alert()
    this.modal_buttons= document.querySelectorAll('.compare-modal' ,':after')
    console.log(this.modal_buttons)
    for (let i =0; i< this.modal_buttons.length; i++){
      this.modal_buttons[i].addEventListener('click',(evt)=>{
        this.openComparative()
      })
    }
    gtag('event', 'conversion', { 'send_to': 'AW-642731809/Wx2CCOPInM8BEKGevbIC', 'transaction_id': '' });

    this.slider_fran = document.querySelector('.slider-benefits-')
    console.log(this.slider_fran)
    this.itemsCount = this.slider_fran.querySelectorAll('.container-fran >*').length
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
    this.start()
    this.buildControls()
    this.bindEvents()
    this.initAnimations()
  },
  metaInfo: {
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Aceite de aguacate Tanoili, el aceite que buscabas para tu cocina, trayendo todos los beneficios del aceite de aguacate y además el gran sabor del aguacate michoacano'},
      {vmid: 'kw', name:'keywords', content: 'tanoili, aceite de aguacate mexicano, aguacate mexicano, aceite de aguacate, aceite de aguacate para cocinar, aceite, aguacate, aceite tanoili, beneficios del aceite de aguacate, proceso de aceite de aguacate, aguacate de michoacán, aceite saludable, ¿cual es el aceite de cocina mas saludable?, aceite mexicano, correo de tanoili, beneficios nutricionales de tanoili, beneficios nutricionales del aceite de aguacate, comparativo de tanoili, acerca de tanoili'},
      {vmid: 'inm', itemprop:'name', content: 'Aceite de Aguacate Mexicano | Tanoili'},
      {vmid: 'idtn', itemprop:'description', content: 'Aceite de aguacate Tanoili, el aceite que buscabas para tu cocina, trayendo todos los beneficios del aceite de aguacate y además el gran sabor del aguacate michoacano'},
      {vmid: 'purl', property:'og:url', content: 'http://tanoili.com/'},
      {vmid: 'ptt', property:'og:title', content: 'Aceite de Aguacate Mexicano | Tanoili'},
      {vmid: 'pdtn', property:'og:description', content: 'Aceite de aguacate Tanoili, el aceite que buscabas para tu cocina, trayendo todos los beneficios del aceite de aguacate y además el gran sabor del aguacate michoacano'},
      {vmid: 'tdtn', name:'twitter:description', content:'Aceite de aguacate Tanoili, el aceite que buscabas para tu cocina, trayendo todos los beneficios del aceite de aguacate y además el gran sabor del aguacate michoacano'},
      {vmid: 'twtt', name:'twitter:title', content: 'Aceite de Aguacate Mexicano | Tanoili'},
      {itemprop: 'name', content: 'Aceite de Aguacate Mexicano | Tanoili'},
      {itemprop: 'description' ,content: 'Sitio web donde puedes ponerte en contacto para comprar aceite de aguacate tanoili'},
    ]
  }
}
</script>
