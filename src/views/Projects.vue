<template>
  <div class="home">
    <h1>Experience</h1>
    <hr>
    <div class="card-container">
      <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO0LLIN0Scw0v76c4LJr5ubz9fKk8b39gHw&usqp=CAU" alt="Image 1">
        <h2>Sandwich artist Subway</h2>
        <ul>
        <li>Maintained high quality of customer service while working a fast-paced operation </li> 
        <li>Assisted to collect payment from customers and provided change. </li>
        <li> Resolved complaints promptly and professionally</li>
        <li>Maintained clean place to prepare food with high sanitary standards</li>
        </ul>
      </div>


      <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtP_wLuPQHHiJAfsYQMkIxA3aEZ3djyZBHTA&usqp=CAU" alt="Image 1">
        <h2>Administraction Assistant</h2>
        <ul>
        <li>Keep records data entry </li> 
        <li>Assisting at open inspections </li>
        <li> September 2019 to November 2019</li>
        <li>Sales administration duties, preparation of marketing material for new listings</li>
        <li>Letter box dropping</li>
        </ul>
      </div>
       
       
    </div>
  </div>
</template>

<script>
export default {
  // Component logic here
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
@media (min-width: 1100px) {
   .card-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
}

  .card-container {
  margin-top: 20px;
}


.card {
    margin-top: 20px !important;
   margin: auto; 
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-top: 0;
}
</style>




