<template>
  <div>
    <div class="container-slider">
      <div class="slider-fran slider-process">
        <div class="container-fran container-process">
          <div class="contenedor-products" v-for="(item,index) in someList" :key="index">
            <div class="container-slide container-in-process">
              <div class="img-slider" data-aos="just-fade" data-aos-duration="2000" data-aos-delay="2000">
                <img :src="require('../../assets/img/'+item.nomImg)" alt="Cosecha">
              </div>
              <div class="offset-10"></div>
              <div class="text-slider txt-left" data-aos="just-fade" data-aos-duration="2000" data-aos-delay="2500">
                <h3 class="titulo-proceso ff-georgia-italic colo-base-process fs-45">
                  {{item.titulo}}
                </h3>
                <p class="descripcion-p mt-2 ff-gotham fw-300 fs-13 color-proc">
                  {{item.html}}
                </p>
                <p class="ff-georgia-italic fs-14 colo-base-process">
                  {{item.spans}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="controls controls-process">
          <ul class="ul-controls"></ul>
        </div>
      </div>
    </div>
    <!-- Using the slider component -->
    <!--<slider ref="slider" :options="options">
      &lt;!&ndash; slideritem wrapped package with the components you need &ndash;&gt;
      <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
        <div class="container-slide">
          <div class="img-slider">
            <img :src="require('../../assets/img/'+item.nomImg)" alt="Cosecha">
          </div>
          <div class="offset-10"></div>
          <div class="text-slider txt-left">
            <h3 class="titulo-proceso ff-georgia-italic colo-base-process fs-45">
              {{item.titulo}}
            </h3>
            <p class="descripcion-p mt-2 ff-gotham fw-300 fs-13 color-proc">
              {{item.html}}
            </p>
            <p class="ff-georgia-italic fs-14 colo-base-process">
              {{item.spans}}
            </p>
          </div>
        </div>
      </slideritem>
      &lt;!&ndash; Customizable loading &ndash;&gt;
      <div slot="loading">loading...</div>
    </slider>-->
  </div>
</template>

<script>
  import {slider, slideritem} from 'vue-concise-slider'

  export default {
    name: "SliderProcess",
    data() {
      return {
        slider_fran: document.querySelector('.slider-fran'),
        interval: null,
        contador: 0,
        itemsCount: 0,
        //data list [array]
        someList: [
          {
            html: 'En el primer paso del procesado, el fruto se somete a estrictos controles de calidad donde nuestros especialistas verifican el PH, el color, la textura, la acidez, la humedad y se asegura que la fruta se encuentre libre de contaminación y materiales extraños como químicos y plaguicidas.',
            nomImg: 'circles-01-op.png',
            titulo: 'Cosechar',
            spans: 'Selección | Limpieza '
          },
          {
            html: `En el segundo paso del procesado, donde se separa la pulpa de la cáscara y la semilla, se machaca y se homogeniza la pulpa de los aguacates.`,
            nomImg: 'circles-02-op.png',
            titulo: 'Proceso',
            spans: 'Extracción | Machacado '
          },
          {
            html: `Finalmente se utiliza una máquina especial para lograr la separación del aceite y la pulpa por medio de la presión en frío.`,
            nomImg: 'circles-03-oo.png',
            titulo: 'Filtrado',
            spans: 'Separación | Filtración | Clarificación '
          }
        ],
        //Slider configuration [obj]
        options: {
          currentPage: 0,
          renderPagination: (h, index) => {
            return h('span', {
              class: 'swiper-pagination-bullet ff-gotham'
            }, [index])
          }
        }
      }
    },
    components: {
      slider,
      slideritem
    },
    mounted(){
      this.slider_fran = document.querySelector('.slider-process')
      this.itemsCount = this.slider_fran.querySelectorAll('.container-process >*').length
      this.moveByButton = this.moveByButton.bind(this)
      //this.start()
      this.buildControls()
      this.bindEvents()
    },
    methods: {
      bindEvents() {
        let controles = this.slider_fran.querySelectorAll(`.controls li`)
        for (let j = 0; j < controles.length; j++) {
          controles[j].addEventListener('click', this.moveByButton)
        }
      },
      restart() {
        if (this.interval) window.clearInterval(this.interval)
        this.start()
      },
      moveByButton(evt) {
        let index = this.indexFosSiblings(evt.currentTarget)
        this.contador = index
        this.moveTo(index)
        //this.restart()
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
        this.interval = window.setInterval(this.move.bind(this), 3000)
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
        this.slider_fran.querySelector(`.controls li:nth-child(${index + 1})`).classList.add('active-slider')
        document.querySelector('.container-process').style.left = '-' + left + '%'
      },
      buildControls() {
        for (let i = 0; i < this.itemsCount; i++) {

          let control = document.createElement('li')
          let div= document.createElement('div')
          if (i == 0) control.classList.add('active-slider')
          let numberSilide = document.createTextNode(i + 1);
          div.appendChild(numberSilide)
          control.appendChild(div)
          control.setAttribute('data-aos', 'just-fade')
          control.setAttribute('data-aos-duration', '2000')
          control.setAttribute('data-aos-delay', ((i*5)+4)+'00')
          this.slider_fran.querySelector('.controls> ul').appendChild(control)
        }
      }
    }
  }
</script>

<style>

</style>
