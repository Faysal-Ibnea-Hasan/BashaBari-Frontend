<template>
<div class="hero min-h-screen bg-base-200">
    
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center ms-4 lg:text-left">
            <h1 class="text-5xl font-bold">Login please!</h1>

        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover:-translate-y-1 hover:scale-110 duration-500">
            <div class="card-body">
              <div class="form-control">
                    <label class="label">
                        <span class="label-text">Mobile Number</span>
                    </label>
                    <input type="text" placeholder="Mobile number" v-model="mobile" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" v-model="password" class="input input-bordered" required />

                </div>
                <div class="form-control mt-6">
                    <button v-on:click="login" class="btn btn-primary">Login</button>
                </div>
            </div>
                
            
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "LoginComponentOwner",
    data() {
        return {
          mobile:'',
          password:''
        }
    },
    methods: {
        async login() {
            let result = await axios.post(
                `http://127.0.0.1:8000/api/Api/Owner/Check`,{
                    mobile: this.mobile,
                    password: this.password
                }
                )
                


             
            if (result.data.status == true) {
                localStorage.setItem("users-info", JSON.stringify(result.data.data));
                this.$router.push({
                    name: 'HomePageOwner'
                })
            }
            else if(result.data.status == false) {
              this.$router.push({
                    name: 'HelloWorld'
                })
            }
        }
    },
   
}
</script>
