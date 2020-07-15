<template>
  <layout_landing>
    <section class="section comunbg height-full pb-5">
      <div class="column">
        <div class="container-slider">
          <div class="slider-fran slider-products">
            <div class="container-fran">
              <div class="contenedor-products" v-for="(item,index) in someList" :key="index">
                <div class="cont-flex justify-center column-reverse-sm nowrap-slid-prod ">
                  <div class="f-basis-60 justify-center ">
                    <div class="cont-titulo">
                      <div class="titulo-r2 titulo-producto colo-base-process">
                        <h2 class="ff-georgia-italic fw-700 fs-74" data-aos="just-fade" data-aos-duration="1000">
                          {{item.capacidad}}</h2>
                        <h3 class="ff-intelo fw-700 fs-20 ml-2 txt-center space-letter-200" data-aos="just-fade"
                            data-aos-duration="1300" v-html="item.contenedor"></h3>
                      </div>
                    </div>
                    <div class="color-base-process table-responsive">
                      <table class="table-product" :id="index" data-aos="just-fade" data-aos-duration="2000"
                             data-aos-delay="500">
                        <thead>
                        <tr class="ff-georgia-italic fw-700 fs-16 head">
                          <th>Tanoili</th>
                          <th>{{item.container}}</th>
                          <th>Dimensiones</th>
                          <th>Peso Total</th>
                          <th>Pallet/Tarima</th>
                          <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="ff-intelo fw-400 fs-13">
                          <td width="20%">Aceite de Aguacate Extra Virgen</td>
                          <td>{{item.cardBoardA}}</td>
                          <td>{{item.dimensionsA}}</td>
                          <td>{{item.totalWeightA}}</td>
                          <td><p>{{item.palletA_1}}</p>
                            <p>{{item.palletA_2}}</p></td>
                          <td><p>{{item.emptyA_1}} </p>
                            <p>{{item.emptyA_2}}</p></td>
                        </tr>
                        <tr class="ff-intelo fw-400 fs-13">
                          <td>Aceite de Aguacate Refinado</td>
                          <td>{{item.cardBoardB}}</td>
                          <td>{{item.dimensionsB}}</td>
                          <td>{{item.totalWeightB}}</td>
                          <td><p>{{item.palletB_1}}</p>
                            <p>{{item.palletB_2}}</p></td>
                          <td><p>{{item.emptyB_1}}</p>
                            <p>{{item.emptyB_2}}</p></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="f-basis-30 f-basis-sm-40">
                    <div :class="item.clase" class="img-product" data-aos="just-fade" data-aos-duration="2000">
                      <img class="imagen-prod" :class="item.claseImg" v-bind:width="item.width"
                           :src="require('../../assets/img/'+item.nomImg)"
                           alt="Products">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="under-products">
              <div data-aos="new-animation" data-aos-duration="2000" data-aos-delay="1500"
                   class="amazon amazon-products f-basis-20 ff-georgia fsty-italic fw-700 fs-14 color-tabla">
                <p>Disponible en</p>
                <img src="../../assets/img/icons/amazon-ico.svg" alt="Tanoili en amazon" class="Amazon ico">
              </div>
              <div class="controls">
                <ul class="ul-controls"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="circle-text">
        <div>1</div>
      </div>
    </section>
  </layout_landing>
</template>

<script>
  import Landing from '@/components/layouts/Landing'
  import {slider, slideritem} from 'vue-concise-slider'

  export default {
    name: "Products",
    data() {
      return {
        slider_fran: document.querySelector('.slider-fran'),
        interval: null,
        contador: 0,
        itemsCount: 0,
        //data list [array]
        someList: [
          {
            capacidad: '250 ml',
            nomImg: 'TresBotellas-250ml.png',
            contenedor: 'BOTELLA',
            cardBoardA: '12 Botellas por caja',
            cardBoardB: '12 Botellas por caja',
            dimensionsA: '24 x 20 x 25.5 cms',
            dimensionsB: '24 x 20 x 25.5 cms',
            totalWeightA: '6.2 K Aprox',
            totalWeightB: '6.2 K Aprox',
            palletA_1: '+ 25 Cajas por piso',
            palletA_2: '+ 6 Pisos',
            palletB_1: '+ 25 Cajas por piso',
            palletB_2: '+ 6 Pisos',
            emptyA_1: '+ 150 Cajas',
            emptyA_2: '+ 930 K Aprox',
            emptyB_1: '+ 150 Cajas',
            emptyB_2: '+ 930 K Aprox',
            container: 'Caja',
            width: 350,
            clase: '',
            claseImg: 'img-sm'
          },
          {
            capacidad: '500 ml',
            nomImg: 'botellas.png',
            contenedor: 'BOTELLA',
            cardBoardA: '12 Botellas por caja',
            cardBoardB: '12 Botellas por caja',
            dimensionsA: '29.5 x 23.5 x 31 cms',
            dimensionsB: '29.5 x 23.5 x 31 cms',
            totalWeightA: '11.1 K Aprox',
            totalWeightB: '11.1 K Aprox',
            palletA_1: '+ 17 Cajas por piso',
            palletA_2: '+ 5 Pisos',
            palletB_1: '+ 17 Cajas por piso',
            palletB_2: '+ 5 Pisos',
            emptyA_1: '+ 85 Cajas',
            emptyA_2: '+ 943.5 K Aprox',
            emptyB_1: '+ 85 Cajas',
            emptyB_2: '+ 943.5 K Aprox',
            container: 'Caja',
            width: 410,
            clase: '',
            claseImg: 'img-md'
          },
          {
            capacidad: '1 lt',
            nomImg: 'TresBotellas-1lt.png',
            contenedor: 'BOTELLA',
            cardBoardA: '12 Botellas por caja',
            cardBoardB: '12 Botellas por caja',
            dimensionsA: '32 x 25.5 x 33.8 cms',
            dimensionsB: '32 x 25.5 x 33.8 cms',
            totalWeightA: '20.4 K Aprox',
            totalWeightB: '20.4 K Aprox',
            palletA_1: '+ 11 Botellas por piso',
            palletA_2: '+ 4 Pisos',
            palletB_1: '+ 11 Cajas por piso',
            palletB_2: '+ 4 Pisos',
            emptyA_1: '+ 44 Cajas',
            emptyA_2: '+ 897 K Aprox',
            emptyB_1: '+ 44 Cajas',
            emptyB_2: '+ 897 K Aprox',
            container: 'Caja',
            width: 460,
            clase: '',
            claseImg: 'img-bg'
          },
          {
            capacidad: '5 lts',
            nomImg: '5lts.png',
            contenedor: 'BOTELLA PET',
            cardBoardA: '12 Botellas por Caja',
            cardBoardB: '12 Botellas por Caja',
            dimensionsA: '45 x 15 x 33 cms',
            dimensionsB: '45 x 15 x 33 cms',
            totalWeightA: '16 K Aprox',
            totalWeightB: '16 K Aprox',
            palletA_1: '+ 14 Cajas por piso',
            palletA_2: '+ 4 Pisos',
            palletB_1: '+ 14 Cajas por piso',
            palletB_2: '+ 4 Pisos',
            emptyA_1: '+ 56 Cajas',
            emptyA_2: '+ 896 K Aprox',
            emptyB_1: '+ 56 Cajas',
            emptyB_2: '+ 896 K Aprox',
            container: 'Caja',
            width: 450,
            clase: 'back-circle',
            claseImg: ''
          },
          {
            capacidad: '200 lts',
            nomImg: '200lts.png',
            contenedor: 'TAMBO',
            cardBoardA: 'Tambo de Polietileno de 200 lt',
            cardBoardB: 'Tambo de Polietileno',
            dimensionsA: '',
            dimensionsB: '',
            totalWeightA: '800 K Aprox',
            totalWeightB: '16 K Aprox',
            palletA_1: '+ 4 Contenedores',
            palletA_2: '',
            palletB_1: '+ 4 Contenedores',
            palletB_2: '',
            emptyA_1: '+ 896 K Aprox',
            emptyA_2: '',
            emptyB_1: '+ 896 K Aprox',
            emptyB_2: '',
            container: 'Contenedor',
            width: 450,
            clase: 'back-circle',
            claseImg: ''
          },
          {
            capacidad: '1000 lts',
            nomImg: '1000lts.png',
            titulo: 'Filtrado',
            contenedor: 'TANQUE',
            cardBoardA: '1,000 lts (33,814 FL OZ)',
            cardBoardB: '1,000 lts (33,814 FL OZ)',
            dimensionsA: '',
            dimensionsB: '',
            totalWeightA: '930 K (2,050.3 lb)',
            totalWeightB: '930 K (2,050.3 lb)',
            palletA_1: '+ 1 Contenedor (1,000 L)',
            palletA_2: '',
            palletB_1: '+ 1 Contenedor (1,000 L)',
            palletB_2: '',
            emptyA_1: '1,000 K Approx',
            emptyA_2: '',
            emptyB_1: '1,000 K Approx',
            emptyB_2: '',
            container: 'Contenedor',
            width: 380,
            clase: 'back-circle back-circle-bigger',
            claseImg: ''
          }
        ],
        //Slider configuration [obj]
        options: {
          pagination: true,
          currentPage: 0,
          thresholdDistance: 500,
          renderPagination: (h, index) => {
            console.log(h)
            return h('span', {
              class: 'swiper-pagination-bullet',
              parentNode: 'a'
            }, [index])
          }
        }
      }
    },
    components: {
      layout_landing: Landing,
      slider,
      slideritem
    },
    mounted() {
      /*          let a = document.getElementsByClassName('slider-pagination-bullets')
                a[0].classList.add('slider-pagination-bullets-b')*/

      this.slider_fran = document.querySelector('.slider-products')
      this.itemsCount = this.slider_fran.querySelectorAll('.container-fran >*').length
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
        document.querySelector('.container-fran').style.left = '-' + left + '%'
      },
      buildControls() {
        for (let i = 0; i < this.itemsCount; i++) {

          let control = document.createElement('li')

          if (i == 0) control.classList.add('active-slider')
          let div = document.createElement('div')

          let numberSilide = document.createTextNode(i + 1);
          div.appendChild(numberSilide)
          control.appendChild(div)
          this.slider_fran.querySelector('.controls> ul').appendChild(control)
        }
      }
    }
  }
</script>

<style>

</style>
