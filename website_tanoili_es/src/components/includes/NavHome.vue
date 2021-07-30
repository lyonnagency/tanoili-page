<template lang="pug">
  header.main_nav
    .pattern
    .column
      nav.show-logo.nav-landing-c
        .btn-desplegable
          img(v-on:click='hideShowMenu' v-show="!openMenu" src="../../assets/img/icons/burger-tanoili-1.svg")
          img(v-on:click='hideShowMenu' width="32" height="20" v-show="openMenu" src="../../assets/img/icons/close.svg")
        ul#menu.menu-hide
          li.li-res
            .logo-responsive
              img(src="../../assets/img/icons/TanoiliLogo.svg")
          li(data-menuanchor="home").active
            a(href="#home" alt="Go to Home").link.center_marker.fs-11.fw-500: span Inicio
          li(data-menuanchor="benefits")
            a(href="#benefits" alt="Go to Benefits").link.center_marker.fs-11.fw-500: span Beneficios
          li(data-menuanchor="process")
            router-link(to="/process" alt="Go to Process").link.center_marker.fs-11.fw-500: span Proceso
          li
            .logo
              img(src="../../assets/img/icons/TanoiliLogo.svg")
          li(data-menuanchor="contact")
            router-link(to="/products" alt="Go to Process").link.center_marker.fs-11.fw-500: span Productos
          li(data-menuanchor="about")
            router-link(to="/about" alt="Go to About").link.center_marker.fs-11.fw-500: span Nosotros
          li(data-menuanchor="contact")
            router-link(to="/contact" alt="Go to Contact").link.center_marker.fs-11.fw-500: span Contacto

      .dropdown_language
        span.dropdown_define.fs-11.ct-primary(@click.stop="handleClickLang") ESP
          i
            ico_down.r-0(icoColor="#615d24" width="14" height="14")
        ul.dropdown_menu
          li.dropdown_menu-item: a(href="https://tanoili.com" alt="Español").fs-11.ct-light ESP
          li.dropdown_menu-item: a(href="https://en.tanoili.com" alt="English").fs-11.ct-light ENG
      a(href="#home" alt="Contacta a Tanoili en Whatsapp").logo-min
      .contactar.hide#contactar
        a(href="https://wa.me/5214432285228" alt="Go to Contact" target="_blank").fs-12.fw-500
          p.contactar-nxt +52 1 (443) 228 5228

</template>

<script>
  import IcoDown from '@/components/icons/ico-down'

  export default {
    components: {
      ico_down: IcoDown
    },
    name: 'include_navHome',
    data() {
      return {
        lang_isOpen: false,
        openMenu: false
      }
    },
    methods: {
      addScrollClass() {
        this.$el.classList.add("scroll")
      },
      removeScrollClass() {
        setTimeout(() => {
          this.$el.classList.remove("scroll")
        }, 400)
      },
      handleClickLang() {
        let dropdown = this.$el.querySelector(".dropdown_language")
        if (this.lang_isOpen) {
          dropdown.classList.remove("active")
          document.removeEventListener('click', this.handleClickLang)
        } else {
          dropdown.classList.add("active")
          document.addEventListener('click', this.handleClickLang)
        }
        this.lang_isOpen = !this.lang_isOpen
      },
      hideShowMenu() {
        let menu = document.querySelector('#menu')
        let contactar = document.querySelector('#contactar')
        let nav = document.querySelector('.logo-min')
        if (menu.className == 'menu-show') {
          menu.className = 'menu-hide'
          contactar.className = 'hide contactar'
          nav.className = 'show logo-min'
          this.openMenu = false
        } else {
          menu.className = 'menu-show'
          contactar.className = 'show contactar'
          nav.className = 'hide logo-min'
          this.openMenu = true
        }
      },
      isMobile() {
        const userAgent = navigator.userAgent
        return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i)
          || userAgent.match(/Android/i)
          || userAgent.match(/BlackBerry/i)
          || userAgent.match(/iPhone|iPad|iPod/i)
          || userAgent.match(/Opera Mini/i)
      }
    },
    beforeMount() {
      if (!this.isMobile()) {
        this.menuResponsive = true
      }
    },
    mounted() {
      // let externalScript = document.createElement('script')
      // externalScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=AW-642731809');
      // externalScript.async=true;
      // document.head.appendChild(externalScript)
      //
      //
      // window.dataLayer = window.dataLayer || [];
      //
      // function gtag() {
      //   dataLayer.push(arguments);
      // }
      //
      // gtag('js', new Date());
      // gtag('config', 'AW-642731809');
    }
  }
</script>
