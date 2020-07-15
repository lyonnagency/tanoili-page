<template lang="pug">
    main
      include_nav
      slot
      include_footer
</template>

<script>
import Nav from '@/components/includes/NavLanding'
import Footer from '@/components/includes/Footer'

export default {
  name: 'layout_landing',
  components: {
    include_nav: Nav,
    include_footer: Footer
  }
}
</script>