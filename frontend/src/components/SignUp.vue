
<template>
    <section id="signUp">
        <h2>Sign Up</h2>
        <form id="signUpForm">
            <input type="text" placeholder="First Name"><br>
            <input type="text" placeholder="Last Name"><br>
            <input type="text" placeholder="Email"><br>
            <input type="text" placeholder="Create Password"><br>
            <input type="text" placeholder="Job Role"><br>
            <router-link to="/">Sign Up</router-link>
        </form>
    </section>
</template>

<script></script>

<style lang="scss">
    #signUp {
        text-align: center;
    }
    #signUpForm {
        width: 200px;
        margin: auto;
        padding:10px;
        border-style: solid;
        border-color: red;
        input {
            margin: 5px;
        }
    }
</style>
