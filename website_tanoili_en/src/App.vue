<template lang="pug">
  #app
    .pattern
    transition(:name="transitionName")
      router-view
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: ""
    }
  },
  methods: {
    isMobile() {
      const userAgent = navigator.userAgent
      return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i)
        || userAgent.match(/Android/i)
        || userAgent.match(/BlackBerry/i)
        || userAgent.match(/iPhone|iPad|iPod/i)
        || userAgent.match(/Opera Mini/i)
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? "page_transition-backward" : "page_transition-forward"
      if (to.name != "home") {
        setTimeout(() => {
          $.fn.fullpage.destroy('all')
        }, 500)
      }
    }
  },
  beforeMount() {
    if (!this.isMobile()) {
      document.body.classList.add("no_touch")
    }
  },
  metaInfo: {
    title: 'Mexican Avocado Oil',
    titleTemplate: '%s | Tanoili',
    meta:[
      {vmid: 'dtn', name:'description', content: '\n' +
        'Aceite de aguacate tanoili, con más de 40 años de experiencia en las mejores tierras y las mejores condiciones para la producción de aguacate'},
      {vmid: 'kw', name:'keywords', content: 'tanoili, aceite de aguacate mexicano, aguacate mexicano, aceite de aguacate, aceite, aguacate, aceite tanoili, beneficios del aceite de aguacate, proceso de aceite de aguacate, aguacate de michoacán, aceite de cocina, aceite saludable, ¿cual es el aceite de cocina mas saludable?, aceite mexicano, eneficios de tanoili, correo de tanoili, tanoili phone number, cualidades nutricionales de tanoili, cualidades nutricionales del aceite de aguacate, comparativo de tanoili, acerca de tanoili'},
      {vmid: 'inm', itemprop:'name', content: 'Aceite de Aguacate Mexicano | Tanoili'},
      {vmid: 'idtn', itemprop:'description', content: 'Aceite de aguacate tanoili, con más de 40 años de experiencia en las mejores tierras y las mejores condiciones para la producción de aguacate'},
      {vmid: 'ptt', property:'og:title', content: 'Aceite de Aguacate Mexicano | Tanoili'},
      {vmid: 'pdtn', property:'og:description', content: 'Aceite de aguacate tanoili, con más de 40 años de experiencia en las mejores tierras y las mejores condiciones para la producción de aguacate'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Aceite de aguacate tanoili, con más de 40 años de experiencia en las mejores tierras y las mejores condiciones para la producción de aguacate'},
      {vmid: 'twtt', name:'twitter:title', content: 'Aceite de Aguacate Mexicano | Tanoili'},
      {itemprop:'image', content:'http://tanoili.com/static/img/social.png'},
      {property:'fb:app_id', content:''},
      {property:'og:site_name', content:'Tanoili'},
      {property:'og:locale', content:'es_ES'},
      {property:'og:type', content:'website'},
      {property:'og:image', content:'http://tanoili.com/static/img/social.png'},
      {name:'twitter:card', content:'summary_large_image'},
      {name:'twitter:site', content:'@Tanoili'},
      {name:'twitter:image', content:'http://tanoili.com/static/img/social.png'}
    ]
  }
}
</script>

<style lang="stylus" src="@/styles/main.styl"/>
