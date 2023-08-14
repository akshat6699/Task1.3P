<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" v-model="formData.message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      // Your form submission logic here
      
      console.log("Form submitted:", this.formData);
      // Clear form fields after submission
     this.formData = {
        name: "",
        email: "",
        message: ""
      };
      alert("Submitted Form Successfully")
     
    }
   
  }
}; 
</script>

<style scoped>
/* Component-specific styles here */
.contact-form {
  max-width: 400px;
  margin: 0 auto;
}
form {
  display: grid;
  gap: 10px;
}
label {
  font-weight: bold;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
