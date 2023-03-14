<template>
    <div id="singlePostView">
        <section id="singlepost">
            <img id="postImg" src="postImg"/>
            <div id="description"></div>
            <router-link id="post" class="edit" to="/editpost">Edit</router-link>
        </section>
        <section id="comments">
            <div id="otherComments" class="comment"></div>
            <div id="userComment">
                <textarea class="comment" type="text" placeholder="Input comment here ..." cols="50" rows="10"></textarea><br/>
                <button id="post" class="commentBtn">Comment</button>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    #singlePostView {
        margin: 100px;
        display: flex;
        justify-content: space-between;
    }
    #postImg {
        height: 500px;
        width: 500px;
        border-style: solid;
    }
    .edit {
        position: absolute;
        top: 210px;
        left: 443px;
        height: 20px;
        width: 60px;
        padding: 10px;
    }
    #otherComments {
        border-style: solid;
        height: 300px;
        border-radius: 10px 10px 0 0;
    }
    #userComment {
        // border-radius: 0 0 10px 10px;
    }
    .comment {
        width: 600px;
        padding: 10px;
        border-radius: 0 0 10px 10px;
        border-style: inset;
        border-width: 2px;
    }
    .commentBtn {
        position: absolute;
        right: 110px;
        top: 653px;
        width: 90px;
        height: 40px;
        padding: 10px;
    }
    #description {
        border-style: solid;
        height: 100px;
        width: 500px;
        position: absolute;
        left: 100px;
        bottom: 60px;
    }
</style>
