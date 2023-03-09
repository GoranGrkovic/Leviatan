<template>
    <div>
        <b-table striped hover :items="profiles"></b-table>
    </div>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="profile in profiles" :key="profile.id">
                    <td>{{ profile.id }}</td>
                    <td><input v-model="profile.firstName" placeholder="edit me"></td>
                    <td><input v-model="profile.lastName" placeholder="edit me"></td>
                    <td><input v-model="profile.age" placeholder="edit me"></td>
                    <div class="col-md-2">
                        <button class="btn btn-primary" @click="updateProfile(profile)">Update</button>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary" @click="deleteProfile(profile.id)">Delete</button>
                    </div>
                </tr>
                <br>
                <div class="row mt-4">
                    <div class="col-md-2">
                        <button class="btn btn-primary" @click="deleteAll()">Delete All</button>
                    </div>
                </div>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "Show",
    data() {
        return {
            profiles: {}
        }
    },
    mounted() {
        this.loadProfilesTable();
    },
    methods: {
        deleteProfile: function (id) {
            axios.delete("http://localhost:3000/api/" + id, {
            }).then((res) => {
                location.reload();
            })
                .catch((error) => {
                    console.log("Something Went Wrong", error);
                })
        },
        updateProfile: function (value) {
            this.profiles.id = value.id;
            this.profiles.firstName = value.firstName;
            this.profiles.lastName = value.lastName;
            axios.put("http://localhost:3000/api/" + value.id , {
                firstName: value.firstName,
                lastName: value.lastName,
                age: +value.age,
            }).then((res) => {
                  alert("Updated profile");
            })
                .catch((error) => {
                    console.log("Something Went Wrong", error);
                })
        },
        deleteAll: function () {
            axios.delete("http://localhost:3000/api/", {
            }).then((res) => {
                location.reload();
            }).catch((error) => {
                console.log("Something Went Wrong", error);
            })
        },
        loadProfilesTable: function () {
            axios.get("http://localhost:3000/api").then((res) => {
                this.profiles = res.data;
            }).catch((error) => {
                console.log("Something Went Wrong", error);
            })
        }
    }
};
</script>