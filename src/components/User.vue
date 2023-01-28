<template>
    <div>
    <!--<h1> Bienvenido/a {{  user.name  }}, esta es tu página de inicio</h1>-->
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { escribeLocalStorage,  } from "../shared/LocalStorage/LocalStorage";
export default {
    data() {
        return{
            usuario: this.user

        }
    },
    props: {
        username: String,
        password: String,
        level: String
    },
    methods: {
        logout() {
            this.$router.push('/')
            escribeLocalStorage('permitido', 'No')
        }
    },
    mounted() {
        console.log(this.username, this.password, this.level)
    }
}

</script>

<style lang="scss" scoped>

</style>