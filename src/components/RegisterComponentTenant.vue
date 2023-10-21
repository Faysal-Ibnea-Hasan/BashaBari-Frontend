<template>
    <div :style="{backgroundImage:'url('+backgroundImage+')'}" class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center ms-4 lg:text-left">
      <h1 class="text-5xl font-bold">Register now!</h1>
      <p class="py-6">Already Registered?</p>
      <router-link to="/login-tenant"><button class="btn btn-outline btn-primary">Login</button></router-link>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" v-model="tenants.name" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Mobile</span>
          </label>
          <input type="text" placeholder="Mobile Number" v-model="tenants.mobile" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" v-model="tenants.address" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">NID</span>
          </label>
          <input type="text" placeholder="NID" v-model="tenants.nid" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" v-model="tenants.password" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
         
        </div>
        <div class="form-control mt-6">
          <button v-on:click="registerTenant" class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
    export default {
        name:"RegisterComponentTenant",
        data(){
          return {
            tenants:{
              name:'',
              mobile:'',
              address:'',
              nid:'',
              password:''
            },
            backgroundImage:('src/assets/images/scattered-forcefields.svg')
          }
        },
        methods:{
          async registerTenant(){
            let result = await axios.post("http://127.0.0.1:8000/api/Api/Tenant/Create_Form_Post",{
              name:this.tenants.name,
              mobile:this.tenants.mobile,
              address:this.tenants.address,
              nid:this.tenants.nid,
              password:this.tenants.password
            });
            console.warn(result)
          }
        }
    }
</script>