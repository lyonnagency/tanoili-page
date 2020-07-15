<template lang="pug">
  layout_landing
    section.about.landing
      .column
        .header.headlong.center.wrapper
          h1.headlong-title.ff-alice.fs-40.ct-primary ¡ ERROR 404 !
          h2.headlong-title.ff-alice.fs-40.ct-primary De verdad los sentimos pero no pudimos encontrar la página que buscabas
</template>

<script>
  import Landing from '@/components/layouts/Landing'
    export default {
        name: "404",
      components:{
          layout_landing:Landing
      },
      metaInfo:{
        title:'Página no encontrada'
      }
    }

</script>

