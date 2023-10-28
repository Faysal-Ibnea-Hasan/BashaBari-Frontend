<template>
<body>
    <NavComponentOwner />
    <!-- Announcement Banner -->
    <div class="max-w-[85rem] mt-5 mb-5 px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="bg-blue-600 bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
            <p class="mr-2 inline-block text-white">
                Want to Give Notice To Your Building Residents?
            </p>
            <button onclick="my_modal_2.showModal()" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:bg-white/[.1] hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm" href="../figma.html">
                Click Here
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
        </div>
    </div>
    <!-- End Announcement Banner -->
    <div class="h-auto">
        <div>
            <!-- Open the modal using ID.showModal() method -->

            <dialog id="my_modal_2" class="modal">

                <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-1">

                    <div class="p-4 -mt-10 text-center sm:p-6 md:col-span-2 lg:p-8">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" hidden placeholder="Owner Name" v-model="owner_Id" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" placeholder="Building ID" v-model="post_notice.building_Id" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" placeholder="Title" v-model="post_notice.title" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>

                        <p class="text-sm mt-2 font-semibold uppercase tracking-widest">
                            <textarea class="textarea textarea-bordered textarea-lg w-full max-w-xs" v-model="post_notice.description" placeholder="Description"></textarea>
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="date" v-model="post_notice.date" placeholder="Date" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>

                        <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button v-on:click="create_notice" class="btn mt-2 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">Create</button>
                        </form>
                    </div>
                </section>
            </dialog>
            <dialog id="my_modal_3" class="modal">

                <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-1">

                    <div class="p-4 -mt-10 text-center sm:p-6 md:col-span-2 lg:p-8">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" hidden placeholder="Owner Name" v-model="owner_Id" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" name="building_Id" placeholder="Building ID" v-model="put_notice.building_Id" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" name="title" placeholder="Title" v-model="put_notice.title" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>

                        <p class="text-sm mt-2 font-semibold uppercase tracking-widest">
                            <textarea name="description" class="textarea textarea-bordered textarea-lg w-full max-w-xs" v-model="put_notice.description" placeholder="Description"></textarea>
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="date" name="date" v-model="put_notice.date" placeholder="Date" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>

                        <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button v-on:click="update_notice" class="btn mt-2 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">Update</button>
                        </form>
                    </div>
                </section>
            </dialog>
        </div>

        <div class="overflow-x-auto">
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead class="ltr:text-left rtl:text-right">
                    <tr>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Building ID
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Title
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Description
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Date
                        </th>
                        <th class="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200" v-for="item in notice" :key="item.id">
                    <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {{ item.building_Id }}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ item.title }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ item.description }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ item.date }}</td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a onclick="my_modal_3.showModal()" v-on:click="get_notice_by_Id(item.id)" href="#" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                Update
                            </a>
                            <a v-on:click="remove_notice(item.id)" href="#" class="inline-block rounded bg-indigo-600 ms-2 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    
</body>
</template>

<script>
import NavComponentOwner from './NavComponentOwner.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';

export default {
    name: "NoticeComponentOwner",
    data() {
        return {
            owner_Id: '',
            notice: [],
            post_notice: {
                building_Id: '',
                title: '',
                description: '',
                date: '',
            },
            put_notice: {
                id: '',
                building_Id: '',
                title: '',
                description: '',
                date: '',
            }
        }
    },
    components: {
        NavComponentOwner,
        FooterComponent
    },
    methods: {
        check_owner() {
            let users = localStorage.getItem('users-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageOwner'
                })
            } else {
                this.owner_Id = JSON.parse(users).id;
            }
            // console.warn(this.owner_Id);
        },
        async get_notice_by_owner_Id() {
            const get_notice_by_owner_Id = await axios.get("http://127.0.0.1:8000/api/Api/Notice/TableByOwnerID/" + this.owner_Id);
            let responseData = get_notice_by_owner_Id.data.data
            this.notice = responseData
            console.warn(this.notice);
        },
        async get_notice_by_Id(id) {
            const get_notice_by_owner_Id = await axios.get("http://127.0.0.1:8000/api/Api/Notice/Table/" + id);
            let responseData = get_notice_by_owner_Id.data.data
            this.put_notice.id = responseData.id
            this.put_notice = responseData

        },
        async create_notice() {
            const create_notice = await axios.post("http://127.0.0.1:8000/api/Api/Notice/Create_Form_Post", {
                owner_Id: this.owner_Id,
                building_Id: this.post_notice.building_Id,
                title: this.post_notice.title,
                description: this.post_notice.description,
                date: this.post_notice.date
            });
            if (create_notice.data.status == true) {
                this.get_notice_by_owner_Id();
            }
            const create_notice_log = await axios.post("http://127.0.0.1:8000/api/Api/NoticeLog/Create_Form_Post", {
                owner_Id: this.owner_Id,
                building_Id: this.post_notice.building_Id,
                title: this.post_notice.title,
                description: this.post_notice.description,
                date: this.post_notice.date
            });
            

            setTimeout(async () => {
                let truncateData = await axios.delete("http://127.0.0.1:8000/api/Api/DeleteNoticeAfterTime/" + this.owner_Id)
            }, 86400000);
            

        },
        async remove_notice(id) {
            let remove_notice = await axios.delete("http://127.0.0.1:8000/api/Api/DeleteNotice/" + id)
            if (remove_notice.status == 200) {
                this.get_notice_by_owner_Id();
            }

        },
        async update_notice() {
            let update_notice = await axios.put("http://127.0.0.1:8000/api/Api/Notice/Updated/" + this.put_notice.id, {
                owner_Id: this.owner_Id,
                building_Id: this.put_notice.building_Id,
                title: this.put_notice.title,
                description: this.put_notice.description,
                date: this.put_notice.date

            });

            if (update_notice.data.status == true) {
                this.get_notice_by_owner_Id();
            }
        },

    },
    mounted() {
        this.check_owner();
        this.get_notice_by_owner_Id();
    }

}
</script>

<style>

</style>
