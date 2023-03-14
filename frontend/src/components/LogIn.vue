
<template>
    <main>
        <section id="login">
            <h2 id="loginTitle">Login</h2>
            <form id="loginForm">
                <label for="email">Email:</label><br>
                <input type="text"><br>
                <label for="password">Password:</label><br>
                <input type="text"><br>
                <button id="post" class="submitBtn" type="submit">Submit</button>
            </form>
            <router-link id="link" to="/signup">Create New Account</router-link>
        </section>
    </main>
    <router-view/>
</template>

<style lang="scss">
    #login {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #loginForm {
        width: 200px;
        height: 170px;
        padding: 10px;
        margin: auto;
        margin-bottom: 20px;
        border-style: solid;
        border-color: red;
        label, input {
            margin: 10px;
            width: 170px;
        }
    }
   .submitBtn {
        margin-left: 60px;
        width: 80px;
        height: 50px;
        padding: 15px;
   }
</style>
