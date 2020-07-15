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
              p.fw-700.fs-16.space-letter-200 ACEITE DE AGUACATE
              p.ff-georgia.fsty-italic.fw-700 Mexicano
          .avocado(data-aos="just-fade" data-aos-duration="2000" )
          .col-right.color-base-txt-3(data-aos="just-fade" data-aos-duration="2000" data-aos-delay="1000")
            .col-container-r
              p.fw-700.fs-16.space-letter-200 ACEITE COMESTIBLE
              p.ff-georgia.fsty-italic.fw-700 Premium
          p.descubrir.color-yellow.fs-16
            ico_down(width="25px" height="25px").ico-upDown
      section.header-n.sect-consumo.section.comunbg
        .shape
          .triangle.bg-primary
            .pattern
        .cont-flex.column
          .col-left-aceite.color-base-txt
            div
              p.fw-700.fs-30.space-letter-200 ACEITE DE
              p.fs-45.space-letter-200 AGUACATE
              p.color-base-txt-2.ff-georgia.fs-24.fw-700.fsty-italic Mexicano
          .col-left-text.color-base-txt
            p.fw-200.fs-13 El aceite extraído del aguacate contiene propiedades que brindan grandes beneficios para la salud del consumidor ya que sus compuestos ayudan a combatir los “radicales libres” y prevenir daños en las arterias y en las células que puedan provocar el cáncer.
            p.fs-11.mt-2
              router-link.mt-2.fs-11(to="/about" alt="Go to About").color-base-txt
                span.saber-mas SABER MÁS
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
              p.fw-700.fs-30.fs-16.space-letter-200 ACEITE DE
              p.fs-45.fs-16.space-letter-200 CONSUMO
              p.color-base-txt-2.ff-georgia.fs-24.fsty-italic.fw-700 Premium
          .col-right-text.color-base-txt
            p.fw-200.fs-13 Su uso más común es como aderezo a los platillos previamente preparados, pero al cocinar con aceite de aguacate se logra resaltar el sabor de los alimentos incluidos en los platillos, es perfecto para sustituir el aceite de oliva y otros aceites ya que soporta temperaturas de 270°C y conserva las propiedades del aguacate.
            p.mt-2.fs-11
              router-link(to="/process" alt="Go to About").color-base-txt.saber-mas
                span SABER MÁS
          .avocado
          .img-cover-left
            .cont-img-left
          p.descubrir.descubrir-avo
            ico_down(icoColor="#615d24").ico-upDown
      section.header-n.sect-consumo.section.comunbg
        .column.flex-sm-nowrap
          .color-base-txt.col-left-benefits.l-10.t-15
            h3.tit-benefit.fw-500.fs-14.txt-right.txt-sm-center(v-on:click="showBenefit(0)") ¿Qué contiene el aguacate?
            p.fs-12.txt-right.fw-200.hide-sm(v-bind:class="{show_sm:currentBenefit==0}") Proporciona altos niveles de proteínas, carbohidratos, vitaminas E, A, K, B1, B2, B3, D, minerales como hierro, potasio, fósforo y magnesio, ácido fólico, omega3, 6 y 9. Son ricos en beta-sitosterol, que bloquea la absorción de colesterol que contienen los alimentos y ayuda a controlar el “colesterol alto.”
            p.fs-11.saber-mas.txt-right.compare-modal.txt-sm-center.mr-3 COMPARAR
          .color-base-txt.col-left-benefits.l-7.t-40
            h3.tit-benefit.fw-500.fs-14.txt-right.txt-sm-center(v-on:click="showBenefit(1)") Control del colesterol.
            p.fs-12.txt-right.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==1}") Las grasas que se encuentran en el aguacate son monoinsaturadas y ayudan a disminuir los niveles de colesterol LDL (colesterol malo) y aumentar el colesterol HDL (colesterol bueno).
            p.fs-11.saber-mas.txt-right.compare-modal.txt-sm-center.mr-3 COMPARAR
          .color-base-txt.col-left-benefits.l-10.t-65
            h3.tit-benefit.fw-500.fs-14.txt-right.txt-sm-center(v-on:click="showBenefit(2)") Prevención contra enfermedades.
            p.fs-12.txt-right.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==2}") El aguacate contiene propiedades que ayudan a prevenir el cáncer de próstata y de mama, regula los niveles de glucosa, previene complicaciones cardiovasculares, ayuda contra las cataratas, tiene una acción desinflamatoria y antioxidante que ayuda a mejorar casos de artritis.
            p.fs-11.saber-mas.txt-right.compare-modal.txt-sm-center.mr-3 COMPARAR
          .avocado-benefits
          p.descubrir.color-base-txt
            span.mt-1 |
          .color-base-txt.col-right-benefits.r-10.t-15
            h3.tit-benefit.fw-500.fs-14.txt-left.txt-sm-center(v-on:click="showBenefit(3)") Tu aliado en la cocina.
            p.fs-12.txt-left.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==3}") Utilizar el aceite de aguacate para cocinar te permite disfrutar el sabor de los platillos sin modificarlo, ya que su sabor es neutro y es más ligero que el aceite de oliva.
            p.fs-11.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARAR
          .color-base-txt.col-right-benefits.r-7.t-40
            h3.tit-benefit.fw-500.fs-14.txt-left.txt-sm-center(v-on:click="showBenefit(4)") Cuidado de la piel.
            p.fs-12.txt-left.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==4}") Además de servir como aceite de cocina, éste también ayuda estimulando la producción de colágeno y de esta forma se retrasa el envejecimiento de la piel y se previene la aparición de arrugas, su contenido de vitaminas y ácidos grasos también lo hacen ideal para contrarrestar las ojeras.
            p.fs-11.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARAR
          .color-base-txt.col-right-benefits.r-10.t-65
            h3.tit-benefit.fw-500.fs-14.txt-left.txt-sm-center(v-on:click="showBenefit(5)")  Cuidado del cabello.
            p.fs-12.txt-left.fw-200.txt-sm-center.hide-sm(v-bind:class="{show_sm:currentBenefit==5}") Puedes usar el aceite de aguacate, no solo para cuidados de la piel, sino también para el cabello, sus propiedades hidratantes y nutricionales permiten reparar un cabello reseco y maltratado, mejora las puntas abiertas, favorece al brillo, al crecimiento y fortalecimiento de tu cabello.
            p.fs-11.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARAR
          .container-slider.slider-benefits
            .slider-fran.slider-benefits-
              .container-fran.container-benefits
                .color-base-txt.contenedor-products.contenedor-bene(v-for="(item,index) in beneficios" :key="index")
                  h3.tit-benefit.fw-500.fs-14.txt-sm-center {{item.titulo}}
                  p.fs-13.fw-200.txt-sm-center {{item.description}}
                  p.fs-11.txt-left.compare-modal.txt-sm-center: span.saber-mas COMPARAR
              .controls.controls-benefits
                ul.controls-lateral
      section.section.bg-radiant.bg-border.section-process
        .column-new.column.column-nowrap
          .title-section.fw-700.color-base-txt
            h2.fs-24 COCINA DELICIOSO
          .cocina-desc.ff-gotham.fw-300.fs-13.color-desc
            p.fs-13.txt-center.mt-2 Al utilizar aceite de aguacate Tanoili al cocinar se mantiene la naturaleza de cada ingrediente permitiendo apreciar cada platillo con todos los sentidos y en cada bocado siguiendo la filosofía del chef francés Joël Robuchon, galardonado con 31 estrellas michelin: “El sabor es desarrollado por la diversidad de los productos que se pueden degustar.”
          .galeria-recetas.mt-4
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-1.jpeg" alt="Avocado")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-3.jpeg" alt="Avocado")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-6.jpeg" alt="Avocado")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-2.jpeg" alt="Avocado")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-4.jpeg" alt="Avocado")
            .cont-img-gal
              img.img-responsive(src="../../assets/img/recetas-5.jpeg" alt="Avocado")

      section.section.comunbg.bg.radiant
        .column-new.column
          .title-section.fw-700.color-base-txt.title-home-contact.mt-25vh
            h2.fs-24 CONTÁCTANOS
          .subt-desc.ff-gotham.fw-300.fs-13.color-subt.subt-contact-home
            p.fs-13.txt-center Estaremos felices de establecer comunicación con ustedes, escuchar y resolver sus dudas, aclaraciones, comentarios y formar lazos que propicien una fuerte relación de valor y confianza.
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
          titulo:'¿Qué contiene el aguacate?',
          description:'Proporciona altos niveles de proteínas, carbohidratos, vitaminas E, A, K, B1, B2, B3, D, minerales como hierro, potasio, fósforo y magnesio, ácido fólico, omega3, 6 y 9. Son ricos en beta-sitosterol, que bloquea la absorción de colesterol que contienen los alimentos y ayuda a controlar el “colesterol alto.”'
        },        {
          titulo:'Control del colesterol.',
          description:'Las grasas que se encuentran en el aguacate son monoinsaturadas y ayudan a disminuir los niveles de colesterol LDL (colesterol malo) y aumentar el colesterol HDL (colesterol bueno).'
        },        {
          titulo:'Prevención contra enfermedades.',
          description:'El aguacate contiene propiedades que ayudan a prevenir el cáncer de próstata y de mama, regula los niveles de glucosa, previene complicaciones cardiovasculares, ayuda contra las cataratas, tiene una acción desinflamatoria y antioxidante que ayuda a mejorar casos de artritis'
        },        {
          titulo:'Tu aliado en la cocina.',
          description:'Utilizar el aceite de aguacate para cocinar te permite disfrutar el sabor de los platillos sin modificarlo, ya que su sabor es neutro y es más ligero que el aceite de oliva.'
        },        {
          titulo:'Cuidado de la piel.',
          description:'Además de servir como aceite de cocina, éste también ayuda estimulando la producción de colágeno y de esta forma se retrasa el envejecimiento de la piel y se previene la aparición de arrugas, su contenido de vitaminas y ácidos grasos también lo hacen ideal para contrarrestar las ojeras'
        },        {
          titulo:'Cuidado del cabello.',
          description:'Puedes usar el aceite de aguacate, no solo para cuidados de la piel, sino también para el cabello, sus propiedades hidratantes y nutricionales permiten reparar un cabello reseco y maltratado, mejora las puntas abiertas, favorece al brillo, al crecimiento y fortalecimiento de tu cabello.'
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
      // console.log(contenedor)
        if (contenedor && contenedor!=null) contenedor.style.left = '-' + left + '%'

    },
    // build controls to slider
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
    // console.log(this.modal_buttons)
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
