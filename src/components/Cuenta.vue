<template>
    <div>
        <Registro/>
        <Login/>
        <router-view/>
    </div>
</template>

<script>
import Registro from './Registro.vue'
import Login from './Login.vue'
export default {
    components: {
        Login,
        Registro,
    }
}

</script>

<style lang="scss" scoped>

</style>