<template>
<div id="tableSurround">
  <table border="1">
    <tbody>
    <th>Name</th>
    <th>Age</th>
    <tr>
      <td>{{usr.name}}</td>
      <td>{{usr.age}}</td>
    </tr>
    </tbody>
  </table>
  <h1> </h1>
</div>
</template>

<script>
export default {
  name: "AllClientsPage",
  props : {
    usr : Object
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'ABeeZee', sans-serif;
}

#tableSurround {
  padding-top: 5%;
  max-width: 20%;
  margin: auto;
}

div h1 {
  font-family: 'ABeeZee', sans-serif;
  padding-top: 50px;
}
</style>