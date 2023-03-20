<template>
    <section id="createPost">
        <div id="imageInput">
            <input type="file" accept="image/*">
            <img id="uploadImage" src="imagePreview">
        </div>
        <div id="inputText">
            <h3>Change Title:</h3>
            <input type="text" placeholder="Input title here ..."><br/>
            <h4>Change Description:</h4>
            <textarea id="script" type="text" placeholder="Input description here ..." cols="50" rows="10"></textarea><br/>
        <button id="post" class="editPostBtn">Edit Post</button>
        </div>
    </section>
</template>

<script></script>

<style lang="scss">
    #createPost {
        display: flex;
        justify-content: space-around;
        margin-top: 100px;
        height: 400px;
    }
    #imageInput {
        display: flex;
        justify-content: center;
        border-style: solid;
        border-color: black;
        border-style: inset;
        border-width: 2px;
        border-radius: 10px;
        padding: 10px;
        width: 40%;
        height: 100%;
        input {
            margin: auto;
            content: 'Change Image';
            // display: none;
        }
    }
    #inputText {
        width: 40%;
        input, textarea {
            padding: 10px;
            border-radius: 10px;
            border-style: inset;
            border-width: 2px;
            width: 95.5%;
        }
    }
    #script {
        height: 40%;
        margin-bottom: 30px;
    }
    .editPostBtn {
        width: 90px;
        height: 40px;
        padding: 10px;
        cursor: pointer;
    }
</style>
