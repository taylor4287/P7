<template>
  <section id="profile">
    <div id="profileImg">
      <img src="../../images/icon.png" />
    </div>
    <div id="flex">
      <div class="name">
        <h2>{{ firstName }}</h2>
        <h2>{{ lastName }}</h2>
      </div>
      <h3>{{ jobTitle }}</h3>
    </div>
    <div id="accountBtns">
      <button
        v-on:click="deleteAccount"
        type="button"
        class="post deleteBtn"
      >
        Delete Profile
      </button>
      <button v-on:click="logout" type="button" class="post deleteBtn">
        Log Out
      </button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  beforeCreate () {
    // making sure user is logged in
    const userId = localStorage.getItem('userId')
    if (!userId) {
      this.$router.push({ path: '/login' })
    }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      jobTitle: ''
    }
  },
  async created () {
    const token = JSON.parse(localStorage.getItem('token'))
    const userId = JSON.parse(localStorage.getItem('userId'))
    // grabbing user information
    const load = await axios.get('http://localhost:3000/users/' + userId, {
      headers: {
        // eslint-disable-next-line
        Authorization: `Bearer ${token}`,
      }
    })
    this.firstName = load.data.user.firstname
    this.lastName = load.data.user.lastname
    this.jobTitle = load.data.user.position
  },
  methods: {
    // handling deletion of account
    deleteAccount () {
      const token = JSON.parse(localStorage.getItem('token'))
      const userId = JSON.parse(localStorage.getItem('userId'))
      axios
        .delete(`http://localhost:3000/users/${userId}`, {
          headers: {
            // eslint-disable-next-line
            Authorization: `Bearer ${token}`,
          }
        })
        .then(() => {
          localStorage.clear()
          this.$router.push({ name: 'login' })
          console.log('Account deleted')
        })
    },
    // handling logout
    async logout () {
      localStorage.clear()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
#profile {
  margin: 70px;
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
  left: 350px;
  .name {
    display: flex;
    h2 {
      margin-right: 10px;
    }
  }
}
.deleteBtn {
  text-align: center;
  margin-left: 30px;
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
  margin-top: 20px;
}
@media screen and (max-width: 768px) {
  #profile {
    margin: -10px 20px 20px 20px;
  }
  #flex {
    left: 200px;
    top: 300px;
  }
  #profileImg {
  width: 150px;
  height: 150px;
  z-index: 1;
  img {
    width: 150px;
  }
}
}
</style>
