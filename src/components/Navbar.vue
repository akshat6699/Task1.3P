<script setup>

</script>

<template>

<div class="navbar">

    <RouterLink to="/"> home</RouterLink>
    <RouterLink to="/Education"> Education</RouterLink>
    <RouterLink to="/Projects"> Projects</RouterLink>
    <RouterLink to="/Contact"> Contact</RouterLink>   
</div>


</template>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

.navbar a {
  color: white;
  text-decoration: none;
}
</style>


