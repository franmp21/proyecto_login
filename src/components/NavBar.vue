<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/account">Login</router-link>
        <router-link to="/about">About Us</router-link>
        <!--No se accederá, puesto que no está logeado.-->
        <router-link :to="{ name: 'user', params:{ user: 'saludos'}}">User</router-link>
    </div>
</template>

<script>

</script>

<style scoped>
a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

</style>