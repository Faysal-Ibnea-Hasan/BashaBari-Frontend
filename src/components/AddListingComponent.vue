<template>
<body>
    <NavComponent />
    <div>

        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 bg-slate-300 rounded-lg">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12 ">
                        <p class="max-w-xl text-2xl font-bold mb-3">
                            Add Listing
                        </p>
                        <p class="max-w-xl text-lg">
                            Create your property listing with proper and detailed information.
                        </p>

                        <div class="mt-8">

                            <p class="max-w-xl text-base font-medium">
                                You can manage your property once you have created.
                            </p>

                        </div>
                        <div class="flex items-center">
                            <div class="inline-flex rounded-lg shadow-sm">
                                <button @click="building_form" type="button" :class="defaultBtn">
                                    Building
                                </button>
                                <button @click="flat_form" type="button" :class="defaultBtn">
                                    Flat
                                </button>
                                <button @click="shop_form" type="button" :class="defaultBtn">
                                    Shop
                                </button>
                                <button @click="office_form" type="button" :class="defaultBtn">
                                    Office
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- BUILDING -->
                    <div v-if="isBuilding" class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form @submit.prevent="" class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Building Name*</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Building Name*" type="text" id="name" required />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="address">Building Address*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="Building Address*" type="text" id="address" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="developer">Developer</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="Developer Name" type="text" id="developer" required />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="date">Date</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Developer Name" type="date" id="date" required />
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="area">Area*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the area?*" type="text" id="area" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="city">City*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the city?*" type="text" id="city" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="district">District</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the district" type="text" id="district" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="postal_code">Postal Code</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the postal code of the area" type="text" id="postal_code" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <div>
                                    <label class="sr-only" for="price_range">Price Range*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the avg price range of the flats of the building?*" type="text" id="price_range" required />
                                </div>
                            </div>
                            <div class="flex flex-row gap-12">
                                <div>
                                    <input type="checkbox" value="Gas (Line)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Gas (Line)</label>
                                </div>
                                <div>
                                    <input type="checkbox" value="Electricity (DESCO)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Electricity (DESCO)</label>
                                </div>
                                <div>
                                    <input type="checkbox" value="Lift (Available)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Lift (Available)</label>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <select class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option>Is parking available?</option>
                                    <option value="Available">Yes</option>
                                    <option value="Not Available">No</option>
                                </select>

                            </div>

                            <div>
                                <label class="sr-only" for="image">Additional Requirements</label>

                                <input class="w-full rounded-lg border-2 p-3 text-sm" placeholder="Image" type="file" id="image">
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- FLAT -->
                    <div v-if="isFlat" class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form @submit.prevent="" class="space-y-4">
                            <div>
                                <label class="sr-only" for="unit_name">Unit Name*</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Unit Name*" type="text" id="unit_name" required />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="floor">Floor*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="Which floor is your flat?" type="number" id="floor" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="area">Area*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="How much square feet is your flat?" type="text" id="area" required />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="building_Id">Building ID*</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Your building ID* (If you don't have your building listed please list first)" type="text" id="building_Id" required />
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="room">Room*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="How many rooms exist in the flat?*" type="number" id="room" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="washroom">Washroom*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="How many washrooms exist in the flat?*" type="number" id="washroom" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="balconi">Balconi</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="How many balconi exist in the flat?*" type="number" id="balconi" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="rent_value">Rent Value</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="How much is the rent value of the flat?*" type="text" id="rent_value" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <div>
                                    <label class="sr-only" for="price_range">Price Range*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the avg price range of the flats of the building?*" type="text" id="price_range" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <select class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option>Is your flat available for rent?</option>
                                    <option value="Available">Yes</option>
                                    <option value="Not Available">No</option>
                                    <option value="Will Be Available">Will be available</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <select class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option>What is the type of your flat?</option>
                                    <option value="Family">Family</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Sublet">Sublet</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <select class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option>What is the rent package of the flat?</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Yearly">Yearly</option>
                                    <option value="Unlimited">Unlimited</option>
                                </select>
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- SHOP -->
                    <div v-if="isShop" class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form @submit.prevent="" class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Shop Name*</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Shop Name*" type="text" id="name" required />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="address">Building Address*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="Building Address*" type="text" id="address" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="developer">Developer</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="Developer Name" type="text" id="developer" required />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="date">Date</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Developer Name" type="date" id="date" required />
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="area">Area*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the area?*" type="text" id="area" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="city">City*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the city?*" type="text" id="city" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="district">District</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the district" type="text" id="district" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="postal_code">Postal Code</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the postal code of the area" type="text" id="postal_code" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <div>
                                    <label class="sr-only" for="price_range">Price Range*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the avg price range of the flats of the building?*" type="text" id="price_range" required />
                                </div>
                            </div>
                            <div class="flex flex-row gap-12">
                                <div>
                                    <input type="checkbox" value="Gas (Line)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Gas (Line)</label>
                                </div>
                                <div>
                                    <input type="checkbox" value="Electricity (DESCO)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Electricity (DESCO)</label>
                                </div>
                                <div>
                                    <input type="checkbox" value="Lift (Available)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Lift (Available)</label>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <select class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option>Is parking available?</option>
                                    <option value="Available">Yes</option>
                                    <option value="Not Available">No</option>
                                </select>

                            </div>

                            <div>
                                <label class="sr-only" for="image">Additional Requirements</label>

                                <input class="w-full rounded-lg border-2 p-3 text-sm" placeholder="Image" type="file" id="image">
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- OFFICE -->
                    <div v-if="isOffice" class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form @submit.prevent="" class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Office Name*</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Office Name*" type="text" id="name" required />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="address">Building Address*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="Building Address*" type="text" id="address" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="developer">Developer</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="Developer Name" type="text" id="developer" required />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="date">Date</label>
                                <input class="w-full rounded-lg border p-3 text-sm" placeholder="Developer Name" type="date" id="date" required />
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="area">Area*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the area?*" type="text" id="area" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="city">City*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the city?*" type="text" id="city" required />
                                </div>

                                <div>
                                    <label class="sr-only" for="district">District</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the name of the district" type="text" id="district" required />
                                </div>
                                <div>
                                    <label class="sr-only" for="postal_code">Postal Code</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the postal code of the area" type="text" id="postal_code" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <div>
                                    <label class="sr-only" for="price_range">Price Range*</label>
                                    <input class="w-full rounded-lg border p-3 text-sm" placeholder="What is the avg price range of the flats of the building?*" type="text" id="price_range" required />
                                </div>
                            </div>
                            <div class="flex flex-row gap-12">
                                <div>
                                    <input type="checkbox" value="Gas (Line)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Gas (Line)</label>
                                </div>
                                <div>
                                    <input type="checkbox" value="Electricity (DESCO)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Electricity (DESCO)</label>
                                </div>
                                <div>
                                    <input type="checkbox" value="Lift (Available)" v-model="facilities" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox">
                                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Lift (Available)</label>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                <select class="w-full rounded-lg border-2 p-3 text-sm">
                                    <option>Is parking available?</option>
                                    <option value="Available">Yes</option>
                                    <option value="Not Available">No</option>
                                </select>

                            </div>

                            <div>
                                <label class="sr-only" for="image">Additional Requirements</label>

                                <input class="w-full rounded-lg border-2 p-3 text-sm" placeholder="Image" type="file" id="image">
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Add
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
import NavComponent from './NavComponent.vue';
export default {
    name: 'AddListingComponent',
    data() {
        return {
            isBuilding: true,
            isFlat: false,
            isShop: false,
            isOffice: false,
            defaultBtn:'py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 active:bg-black active:text-white',
            clickBtn:'py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-black  text-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none',
            
        }
    },
    components: {
        NavComponent
    },
    methods: {
        building_form() {
            this.isBuilding = true;
            this.isFlat = false;
            this.isShop = false;
            this.isOffice = false;
            
        },
        flat_form() {
            this.isBuilding = false;
            this.isFlat = true;
            this.isShop = false;
            this.isOffice = false;
        },
        shop_form() {
            this.isBuilding = false;
            this.isFlat = false;
            this.isShop = true;
            this.isOffice = false;
        },
        office_form() {
            this.isBuilding = false;
            this.isFlat = false;
            this.isShop = false;
            this.isOffice = true;
        }
    }

}
</script>

<style>

</style>
