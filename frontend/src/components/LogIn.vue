
<template>
    <main>
        <!-- <Header /> -->
        <section id="login">
            <h2 id="loginTitle">Login</h2>
            <form id="loginForm">
                <label for="email">Email:</label><br>
                <input type="text"><br>
                <label for="password">Password:</label><br>
                <input type="text"><br>
                <button id="submit" type="submit">Submit</button>
            </form>
            <router-link to="/signup">Create New Account</router-link>
        </section>
    </main>
    <router-view/>
</template>

<script>
// import Header from './components/children/Header.vue'

// export default {
//   components: {
//     Header
//   }
// }
</script>

<style lang="scss">
    #login {
        text-align: center;
    }
    #loginForm {
        width: 200px;
        height: 150px;
        padding: 10px;
        margin: auto;
        margin-bottom: 20px;
        border-style: solid;
        border-color: red;
        label, input {
            margin: 10px;
        }
    }
    #submit {
        // margin-left: 50px;
    }
</style>
