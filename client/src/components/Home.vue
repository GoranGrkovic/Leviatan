<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="row mt-4">
          <div class="col-md-2">
            <label for="" class="mt-1">User</label>
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" v-model="firstName" placeholder="First Name" />
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" v-model="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2">
            <label for="" class="mt-1">Age</label>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Age" v-model="age" />
            <br>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2">
            <button class="btn btn-primary" @click="register" :disabled="disableButton">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  name: "Home",
  data() {
    return {
      firstName: "",
      lastName: "",
      age: "",
    }
  },
  computed: {
    disableButton() {
      return !this.firstName || !this.lastName || !this.age
    }
  },
  methods: {
    register: function () {
      axios.post("http://localhost:3000/api", {
        firstName: this.firstName,
        lastName: this.lastName,
        age: +this.age,

      }).then((res) => {
        if (res.status === 201)
          location.reload();
      }).catch((error) => {
        alert(error.response.data.message);
        console.log("Something Went Wrong", error);
      })
    }
  }
};
</script>
  
<style scoped>
img {
  height: 500px;
}
</style>