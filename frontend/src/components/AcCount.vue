
<template>
    <section id="profile">
        <div class="fixed">
            <div id="profileImg">
                <img src="../../images/icon.png">
            </div>
            <div id="flex">
                <h3>name here</h3>
                <h4>job title here</h4>
            </div>
            <p id="descript">description here</p>
            <div id="accountBtns">
                <button class="deleteBtn" id="post">Delete Profile</button>
                <button class="deleteBtn" id="post">Log Out</button>
            </div>
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
        img {
            width: 200px;
        }
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
    .deleteBtn {
        text-align: center;
        margin-left: 45px;
        width: 120px;
        height: 50px;
        padding: 15px;
        cursor: pointer;
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
    #accountBtns {
        display: flex;
    }
</style>
