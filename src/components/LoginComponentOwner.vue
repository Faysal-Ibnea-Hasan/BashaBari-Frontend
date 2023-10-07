<template>
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center ms-4 lg:text-left">
      <h1 class="text-5xl font-bold">Login please!</h1>
      
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover:-translate-y-1 hover:scale-110 duration-500">
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" required />
         
        </div>
        <div class="form-control mt-6">
          <router-link to="/home-owner"><button class="btn btn-primary">Login</button></router-link>
        </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
    export default {
        name:"LoginComponentOwner"
    }
</script>