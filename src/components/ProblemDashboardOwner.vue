<template>
<body>
    <NavComponentOwner />
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8"  v-for="item in details" :key="item.id">
        
            <div class="h-32 rounded-lg bg-gray-200 m-3" >
                <div class="h-32 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl -m-1">
                    <div class="p-8 flex">
                        <div class="pr-4">
                            <p class="text-xl font-bold">{{ item.problems.flat_Id }}</p>
                        </div>
                        <div class="ms-5 w-3/4">
                            <div class="uppercase  tracking-wide text-sm text-indigo-500 font-semibold">{{ item.problems.title }}</div>
                            <p class="mt-2 text-start text-gray-500">{{ item.name }}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2 m-3">
                <div class="h-32 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl -m-1">
                    <div class="ms-5 w-3/4">
                        <p class="mt-2 text-start text-gray-500">{{ item.problems.description }}</p>
                        <p class="mt-2 text-gray-500">{{ item.problems.date }}</p>
                    </div>

                </div>
            </div>
        
    </div>

</body>
</template>

<script>
import axios from 'axios';
import NavComponentOwner from './NavComponentOwner.vue';

export default {
    name: "ProblemDashboardOwner",
    components: {
        NavComponentOwner
    },
    data() {
        return {
            owner_Id: '',
            details: [],
        }
    },
    methods: {
        check_owner() {
            let users = localStorage.getItem('users-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageOwner'
                })
            } else {

                const id = JSON.parse(users).id
                this.owner_Id = id
            }

        },
        async get_building() {
            let get_building = await axios.get("http://127.0.0.1:8000/api/Api/Building/OwnerProblem/" + this.owner_Id);
            let response = get_building.data.data
            this.details = response
            console.warn(this.details)
        }

    },
    mounted() {
        this.check_owner();
        this.get_building();
    }
}
</script>

<style>

</style>
