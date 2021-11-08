<template>
<div>
  <h1>Register</h1>
  <div id="rform">
    <input placeholder="Email" v-model="eml" type="text">
    <input placeholder="Username" v-model="usern" type="text">
    <input placeholder="Password" v-model="psw" type="password">
    <button v-if="eml && usern && psw" @click="RegisterUser">Register</button>
  </div>
</div>
</template>

<script>
export default {
  name: "RegisterForm",
  props : {
    eml : '',
    usern : '',
    psw : '',
  },
  methods : {
    RegisterUser(){
      let user =
        {
          email : this.eml,
          username : this.usern,
          password : this.psw
        }
      localStorage.setItem('UserInfo',JSON.stringify(user));

      this.$router.push('/login?req=login');
    }
  }
}
</script>

<style scoped>
* {
  transition: 2s color ;
}

h1 {
  font-family: 'ABeeZee', sans-serif;
  padding-top: 19%;
}


#rform {
  display: grid;
  margin: auto;
  padding-top: 1em;
}

input, button {
  margin: 8px;
  padding: 10px;
  border-radius: 3px 1px 1px 1px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 4px -1px black;
}

button:hover {
  border: 1px solid black;
}

@media only screen and (max-width: 780px){
  #rform {
    width: 60%;
  }
}

@media only screen and (min-width: 800px){
  #rform {
    width: 30%;
  }
}
</style>