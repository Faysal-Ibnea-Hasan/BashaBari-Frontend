<template>
<div class="navbar sticky top-0 z-40  drop-shadow-xl rounded-xl bg-base-100">
    <div class="navbar-start">
        
        <router-link to="/"><a class="btn btn-ghost normal-case text-xl">BashaBari</a></router-link>
    </div>
    

    <!-- Profile button -->
    <div class="navbar-end">

        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a>Link</a></li>
                <li>
                    <details>
                        <summary>
                            Parent
                        </summary>
                        <ul class="p-2 bg-base-100">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                    </details>
                </li>
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
