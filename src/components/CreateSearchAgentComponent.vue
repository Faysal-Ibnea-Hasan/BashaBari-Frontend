<template>
<body>
    <NavComponent />
    <div>

        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">
                        <p class="max-w-xl text-2xl font-bold mb-3">
                            Create Search Agent
                        </p>
                        <p class="max-w-xl text-lg">
                            Send a request to our agents and they will find you your required home according to you desire.
                        </p>

                        <div class="mt-8">

                            <p class="max-w-xl text-base font-medium">
                                You will be notified via email once we have found your required home!
                            </p>

                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form @submit.prevent="send_request" class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Full Name*</label>
                                <input v-model="create_search_agent.name" class="w-full rounded-lg border p-3 text-sm" placeholder="Full Name*" type="text" id="name" required />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="email">Email*</label>
                                    <input v-model="create_search_agent.email" class="w-full rounded-lg border p-3 text-sm" placeholder="Email address*" type="email" id="email" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="mobile">Phone</label>
                                    <input v-model="create_search_agent.mobile" class="w-full rounded-lg border p-3 text-sm" placeholder="Phone Number" type="text" id="mobile" required />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="city">City*</label>
                                    <input v-model="create_search_agent.city" class="w-full rounded-lg border p-3 text-sm" placeholder="Where would you like to live?*" type="text" id="city" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="rent_value">Rent (max)</label>
                                    <input v-model="create_search_agent.rent_value" class="w-full rounded-lg border p-3 text-sm" placeholder="Enter your desired rent value" type="text" id="rent_value" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <div>
                                    <label class="sr-only" for="room">Number of rooms you want (min)*</label>
                                    <input v-model="create_search_agent.room" class="w-full rounded-lg border p-3 text-sm" placeholder="Number of rooms you want (min)*" type="number" id="room" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <select v-model="create_search_agent.rent_type" class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option disabled>Select your rent type</option>
                                    <option value="Family">Family</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Sublet">Sublet</option>
                                </select>

                                <select v-model="create_search_agent.rent_package" class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option disabled>Select your package</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Yearly">Yearly</option>
                                    <option value="Unlimited">Unlimited</option>
                                </select>

                                <select v-model="create_search_agent.rent_month" class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option disabled>Which month you want get the rent?</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>

                            <div>
                                <label class="sr-only" for="additional ">Additional Requirements</label>

                                <textarea v-model="create_search_agent.additional_requirements" class="w-full rounded-lg border-2 p-3 text-sm" placeholder="Additional Requirements" rows="8" id="additional "></textarea>
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

import NavComponent from './NavComponent.vue'

export default {
    name: 'CreateSearchAgentComponent',
    components: {
        NavComponent
    },
    data() {
        return {
            create_search_agent: {
                email: '',
                mobile: '',
                name: '',
                city: '',
                room: '',
                rent_value: '',
                rent_type: 'Select your rent type',
                rent_package: 'Select your package',
                rent_month: 'Which month you want get the rent?',
                additional_requirements: '',
                status: 'Incomplete',
            }
        }
    },
    methods: {
        async send_request() {
            let create_search_agent = await axios.post("https://shomadhan.top/admin/api/Api/Create-Search-Agent", {
                email: this.create_search_agent.email,
                mobile: this.create_search_agent.mobile,
                name: this.create_search_agent.name,
                city: this.create_search_agent.city,
                room: this.create_search_agent.room,
                rent_value: this.create_search_agent.rent_value,
                rent_type: this.create_search_agent.rent_type,
                rent_package: this.create_search_agent.rent_package,
                rent_month: this.create_search_agent.rent_month,
                additional_requirements: this.create_search_agent.additional_requirements,
                status: this.create_search_agent.status,
            })
            if (create_search_agent.data.status == true) {
                Swal.fire({
                    title: "Success!",
                    text: "Your request has been registered!",
                    icon: "success"
                });
            }
        }
    }
}
</script>

<style>

</style>
