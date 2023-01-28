<template>
    <div class="registro">
        <form @submit.prevent="check">
            <p>Username: <input type="text" v-model="username"/></p>
            <p>Level: <input type="text" v-model="level"/></p>
            <p>Password: <input type="text" v-model="password"/></p>
            <p>Confirm password: <input type="text" v-model="passwordconfirm"/></p>
            <button type="submit">¡Registrate!</button>
        </form>
        <h3>{{ mensaje }}</h3>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            username: "",
            level: "",
            password: "",
            passwordconfirm: "",
            mensaje: ""
        }
    },
    methods: {
        check(){
            if(this.password === this.passwordconfirm){
                this.registro(this.username, this.level, this.password)
                this.mensaje = 'Registrado!'
                this.password=''
                this.passwordconfirm = ''
                this.username = ''
                this.level = ''
            }else{
                this.mensaje='Contraseña incorrecta'
                this.password=''
                this.passwordconfirm = ''
                this.username = ''
                this.level = ''
            }
        },
        async registro(username, level, password){
         try{
            const res = await axios.post(`http://localhost:3000/usuarios`,{
            usernamename: username,
            password: password,
            level: level,
            })
        }catch(err){
            this.mensaje = 'Error al registrar usuario. ERR002'
            //ERR002 = No hay conexion a base de datos, usa json-server --watch db.json
        }
        
    }
    }
}

</script>

<style>
.registro{
  float: left;
  border: 1px solid rgb(10, 215, 252);
  text-align: right;
  background-color: rgb(87, 125, 230);
}
</style>