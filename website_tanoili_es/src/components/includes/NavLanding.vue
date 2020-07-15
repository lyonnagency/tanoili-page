<template lang="pug">
  header.landing_nav
    .column
      nav.nav-landing-c
        ul
          li
            .dropdown_language.dropdown_language-land
              span.dropdown_define.fs-12.ct-primary(@click.stop="handleClickLang") ESP
                i
                  ico_down.r-0(icoColor="#615d24" width="14" height="14")
              ul.dropdown_menu
                li.dropdown_menu-item: a(:href="'https://tanoili.com' + path" alt="Español").fs-12.ct-light ESP
                li.dropdown_menu-item: a(:href="'https://en.tanoili.com' + path" alt="English").fs-12.ct-light ENG
          li.ml-2
            a(@click.stop.prevent="comeBack" alt="Come Back").back-ico
          li.dropdown_language-land
            router-link(to="/#home" alt="Go to Home").fs-12.ct-primary.fix-home HOME
        router-link(to="/" alt="Tanoili").logo
          img(src="../../assets/img/icons/TanoiliLogo.svg")
        .contactar.contactar-landing
          a(href="https://wa.me/524435372225" alt="Go to Contact" target="_blank").fs-11.fw-500
            p.contactar-nxt.color-base-txt + 52 (443) 537 2225
</template>

<script>
  import IcoDown from '@/components/icons/ico-down'

  export default {
    name: 'include_navLanding',
    components: {
      ico_down: IcoDown
    },
    data() {
      return {
        lang_isOpen: false,
        path: this.$route.path
      }
    },
    methods: {
      comeBack() {
        this.$router.go(-1)
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
      }
    }
  }
</script>
