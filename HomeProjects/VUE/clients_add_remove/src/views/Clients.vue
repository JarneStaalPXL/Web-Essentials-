<template>
<div>
  <h1>All Clients</h1>
  <h3>Import CSV here</h3>
  <!--TODO: Read CSV File-->
  <input @change="csvToJson" id="selectedFile" type="file"
         accept=".csv">

  <div v-for="usr in user" :key="usr.name">
    <AllClientsPage :usr="usr"/>
  </div>
  <ClientsAdd/>
</div>
</template>

<script>
/*
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles(){
  const fileList = this.files; /* now you can work with the file list
}
*/
import AllClientsPage from "../components/Clients/AllClientsPage";
import ClientsAdd from "../components/Clients/ClientsAdd";
export default {
  name: "Clients",
  components: {ClientsAdd, AllClientsPage},
  data(){
    return {
      user : [{name : 'Jarne', age : 19}]
    }
  },
  methods : {
    csvToJson(){
      const filePath = document.getElementById('selectedFile').files[0];
      console.log(filePath);

      // require csvtojson module
      const CSVToJSON = require('csvtojson');

      // convert users.csv file to JSON array
      CSVToJSON().fromFile(filePath)
          .then(users => {

            // users is a JSON array
            // log the JSON array
            console.log(users);
          })
          .catch(err => {
            // log error if any
            console.log(err);
          });
    }
  },
  mounted() {
    if (this.$store.state.loggedin === false){
      this.$router.push('/login?req=login');
    }
  }
}
</script>

<style scoped>
h1, h3 {
  font-family: 'ABeeZee', sans-serif;
  padding-top: 50px;
}

h3 {
  padding-bottom: 20px;
}
</style>