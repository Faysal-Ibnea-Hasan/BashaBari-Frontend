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
                            <li><a>Login</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>
                            Tenant
                        </summary>
                        <ul class="w-48 p-2 bg-base-100">
                            <li><a>Search Rentals</a></li>
                            <li><a>Create Search Agent</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </details>
                </li>
                <li><a>Create Search Agent</a></li>
                <li><a>Blog</a></li>
                <li><a>Search Properties</a></li>
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
