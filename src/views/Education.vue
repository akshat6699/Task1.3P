<template>
<h1>Education</h1>
<hr>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Bachelor of Information Technology</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td>{{ item.id }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        
        
        { id: "Deakin University (Burwood Campus)" },
        {id: " Major; Software Development"},
        {id: "Awarded Academic Scholarship of 25%"}

      ]
    };
  }
};
</script>

<style scoped>
/* Component-specific styles here */
.table-container {
  width: 100%;
}
table {
  width: 100%;
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
