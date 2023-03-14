
<template>
    <section id="signUp">
        <h2>Sign Up</h2>
        <form id="signUpForm">
            <input type="text" placeholder="First Name"><br>
            <input type="text" placeholder="Last Name"><br>
            <input type="text" placeholder="Email"><br>
            <input type="text" placeholder="Create Password"><br>
            <input type="text" placeholder="Job Role"><br>
            <!-- <label>Choose Profile Image</label>
            <input type="file" accept="image/*"><br><br> -->
            <router-link id="post" class="postBtn" to="/">Sign Up</router-link>
            <router-link to="/logIn">Have an account?</router-link>
        </form>
    </section>
</template>

<script></script>

<style lang="scss">
    #signUp {
        text-align: center;
        margin-top: 100px;
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
        .postBtn {
            margin-left: 50px;
            width: 60px;
            height: 17px;
            padding: 15px;
        }
    }
</style>
