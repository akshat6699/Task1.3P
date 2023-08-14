<template>
  <div class="intro">
    <h1>Akshat</h1>
    <hr>
<h5>Career Profile</h5>
<p>Aresults-oriented, positive, self-motivated professional with experience in customer service, retail &
administration with proven ability to operate complex POS systems to process cash and credit card transactions
and hands-on experience in assisting supervisors in controlling customer flow & backed up fines to reduce
waiting time.</p>

<div class="table-container">
    <table>
      <thead>
        
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>

   

  </div>
  <h1>Skills</h1>
  <hr>
  <ul>
  <li>Outstanding customer service</li>
  <li>Retail sales</li>
  <li>Advanced computer skills</li>
  <li> Multi-tasking</li>
  <li>strong interpersonal skills</li>
  <li>Innovative and creative</li>
  <li>Work Ethic</li>
  <li>Excellent communication skis</li>
  <li>Positive outlook</li>
  <li>Time management</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: "Age", name: 21 },
      { id: "Gmail", name: "akshatku@gmail.com" },
 { id: "University", name: "Deakin University" }
      ]
    };
  }
};
</script>

<style scoped>

.table-container {
  margin: auto;
}
table {
    margin: auto;
  width: 40%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f0f0f0;
}

 

</style>




