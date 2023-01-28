<template>
    <div class="logeo">
        <form @submit.prevent="check">
            <p>Username: <input type="text" v-model="username"/></p>
            <p>Password: <input type="password" v-model="password"/></p>
            <button>Inicia Sesión</button>          
        </form>
        <h3>{{ mensaje }}</h3>
    </div>
</template>

<script>
import { escribeLocalStorage,  } from "../shared/LocalStorage/LocalStorage";
import axios from 'axios'
export default {
    data() {
        return {
            username: "",
            password: "",
            mensaje: ""
        }
    },
    methods: {
        check(){
            this.logeo(this.username, this.password)
            this.username = "",
            this.password = ""
        },
        async logeo(user, pass){
            
            const { data } = await axios.get(`http://localhost:3000/usuarios?username=${user}&password=${pass}`)
            data ? this.mensaje = 'Conectado' : this.mensaje = 'No encontrado'
            escribeLocalStorage('permitido', 'Sí')
            console.log(data[0])
            const usuario = data[0]
            this.$router.push({
                name: 'user',
                params: { user: usuario.username },
                query: {
                     password: usuario.password,
                     level: usuario.level
                 }
            })
            
        },
    }
}


</script>

<style>
.logeo{
  float: right;
  border: 1px solid rgb(10, 215, 252);
  text-align: right;
  background-color: rgb(87, 125, 230);
}
</style>