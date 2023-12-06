<template>
<div class="navbar sticky top-0 z-40  drop-shadow-xl rounded-xl bg-base-100">
    <div class="navbar-start">
        
        <router-link to="/"><a class="btn btn-ghost normal-case text-xl">BashaBari</a></router-link>
    </div>
    

    <!-- Profile button -->
    <div class="navbar-end">

        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                
                <li>
                    <details>
                        <summary>
                            Owner
                        </summary>
                        <ul class="w-32 p-2 bg-base-100">
                            <li><a>Add Listing</a></li>
                            <li><a>How It Works</a></li>
                            <li><router-link to="/login-owner">Login</router-link></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>
                            Tenant
                        </summary>
                        <ul class="w-48 p-2 bg-base-100">
                            <li><router-link to="/find-buildings">Search Rentals</router-link></li>
                            <li><router-link to="/create-search-agent">Create Search Agent</router-link></li>
                            <li><a>FAQ</a></li>
                            <li><router-link to="/login-tenant">Login</router-link></li>
                        </ul>
                    </details>
                </li>
                <li><router-link to="/create-search-agent">Create Search Agent</router-link></li>
                <li><a>Blog</a></li>
                <li><router-link class="hover:bg-green-400" to="/find-buildings">Search Properties</router-link></li>
            </ul>
        </div>
    </div>
    <!-- Profile button -->
</div>
</template>

<script>
export default {
    name: 'NavComponent'
}
</script>
