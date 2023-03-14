
<template>
    <section id="profile">
        <div class="fixed">
            <div id="profileImg">
                <img src="profileImg">
            </div>
            <div id="flex">
                <h3>name here</h3>
                <h4>job title here</h4>
            </div>
            <p id="descript">description here</p>
            <button id="deleteBtn" class="post">Delete Profile</button>
        </div>
        <section id="posts">
            <p id="none">'Name' does not have any posts</p>
            <div id="postImgs">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </section>
    </section>
</template>

<style lang="scss">
    #profile {
        margin: 70px;
        display: flex;
        justify-content: space-between;
    }
    #profileImg {
        border-style: solid;
        width: 200px;
        height: 200px;
    }
    #flex {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 200px;
        position: absolute;
        top: 200px;
        left:350px;
    }
    #descript {
        margin: 30px;
    }
    #deleteBtn {
        text-align: center;
        margin-left: 45px;
        width: 120px;
        height: 50px;
        padding: 15px;
    }
    .post {
        display: block;
        border-color: black;
        border-style: inset;
        border-width: 2px;
        background: radial-gradient(red 65%, black);
        color: white;
        border-radius: 50%;
        text-decoration: none;
    }
    #none {
        display: none;
    }
    #posts {
        width: 65%;
    }
    #postImgs {
        display: flex;
        flex-wrap: wrap;
    }
    .box {
        border-style: solid;
        height: 210px;
        width: 210px;
        margin: 30px;
    }
    .fixed {
        margin-top: 30px;
    }
</style>
