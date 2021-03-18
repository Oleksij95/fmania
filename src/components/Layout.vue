<template>
    <div class="layout_wrapper">
       <Header></Header>

      

        <router-view/>
      

       <Footer></Footer>
    </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'

// import HomePage from '../views/HomePage'
// import Auth from '../views/Auth'

export default {
    components: {
        Header,
        Footer,
        // HomePage,
        // Auth
    }
}
</script>

<style scoped>

</style>