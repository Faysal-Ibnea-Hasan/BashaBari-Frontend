<template>
<body>
    <NavComponentOwner />
    <!-- <div class="flex place-content-center mt-2 py-5 ">

        <img :src="image" alt="" class="h-28 w-28 rounded-full drop-shadow-xl ">
        <div class="chat mt-5 chat-start">

            <div class="chat-bubble">Welcome {{ name }}, Hope you are doing great!</div>

        </div>
    </div> -->
    <!-- Announcement Banner -->
    <div class="max-w-[65rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
            <p class="me-2 inline-block text-white">
                Welcome {{ name }}, Hope you are doing great!
            </p>
            <!-- <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../figma.html">
                Learn more
                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" /></svg>
            </a> -->
        </div>
    </div>
    <!-- End Announcement Banner -->
    <!-- Icon Blocks -->
    <div class="max-w-[55rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Icon Block -->
            <router-link to="/buildings-owner" class="h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z" />
                    </svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Buildings
                    </h3>
                </div>
            </router-link>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <router-link to="/flat-owner" class="h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999" xml:space="preserve">
                        <path style="fill:#ffffff" d="m488.967 9.256-28.901-.652c-7.568-.173-18.14 4.066-23.496 9.419L280.624 173.972c-5.353 5.353-5.353 14.111 0 19.464l38.24 38.236c5.35 5.353 14.109 5.353 19.461 0l16.852-16.854c.433.182.892.343 1.403.472l11.896 2.979c5.138 1.288 8.291-1.864 7.005-7.004l-2.981-11.899a9.492 9.492 0 0 0-.47-1.4l.425-.424 19.396 4.858c7.34 1.839 11.842-2.664 10.004-10.006L396.998 173l20.414-20.415a9.7 9.7 0 0 0 1.401.472l11.893 2.98c5.14 1.288 8.297-1.864 7.006-7.004l-2.979-11.899a8.947 8.947 0 0 0-.264-.886c.283.096.577.186.89.263l11.891 2.983c5.14 1.288 8.293-1.863 7.005-7.004l-2.978-11.899a9.836 9.836 0 0 0-.263-.886c.282.096.576.186.889.263l11.893 2.979c5.144 1.289 8.293-1.863 7.006-7.004l-2.979-11.899a9.717 9.717 0 0 0-.471-1.399l2.065-2.065 14.282 3.577c7.346 1.84 11.847-2.663 10.009-10.007l-3.58-14.283 4.146-4.146c5.355-5.351 9.593-15.922 9.419-23.491l-.652-28.904c-.174-7.567-6.508-13.898-14.074-14.07z" />
                        <path style="fill:#ffffff" d="M188.901 190.764c-36.619 36.623-36.624 96.003 0 132.629 36.625 36.625 96.008 36.624 132.632.001 36.623-36.624 36.623-96.005 0-132.631-36.625-36.624-96.007-36.623-132.632.001zm41.698 111.118c-5.578 5.574-14.612 5.573-20.184 0-5.578-5.573-5.578-14.608 0-20.184 5.572-5.573 14.608-5.574 20.184 0 5.572 5.574 5.572 14.611 0 20.184z" />
                        <path style="fill:#ffffff" d="M200.579 202.443c-30.174 30.174-30.174 79.096.003 109.272 30.174 30.174 79.096 30.174 109.269 0 30.178-30.174 30.178-79.099.003-109.274-30.175-30.175-79.097-30.174-109.275.002zm28.174 97.594c-4.556 4.554-11.939 4.555-16.495.001-4.554-4.555-4.554-11.94.002-16.494 4.554-4.555 11.937-4.555 16.493 0 4.554 4.554 4.554 11.938 0 16.493z" />
                        <path transform="rotate(134.999 114.538 397.146)" style="fill:#ffffff" d="M39.409 322.022h150.256v150.245H39.409z" />
                        <path transform="rotate(134.999 114.534 397.151)" style="fill:#ffffff" d="M52.684 335.301H176.38v123.696H52.684z" />
                        <path style="fill:#333e48" d="m215.664 303.443-53.68 53.678a4.81 4.81 0 0 1-6.805-.001 4.81 4.81 0 0 1 0-6.811l53.674-53.678a4.816 4.816 0 1 1 6.811 6.812z" />
                        <path style="fill:#1e252b" d="m118.579 356.776-.125-.126c-1.323-1.323-3.025-2.395-5.355-3.718l-8.065-4.41c-2.52-1.387-5.418-1.009-7.372.945-2.27 2.267-2.204 6.111.065 8.38.503.503 1.321 1.072 1.953 1.45l4.283 2.52-30.492 30.493a6.764 6.764 0 0 0-.003 9.579 6.77 6.77 0 0 0 9.577-.001l35.536-35.535a6.77 6.77 0 0 0-.002-9.577zm20.92 22.18c-2.332-2.33-5.985-2.33-8.443-.126l-15.816 14.05c-1.761 1.515-2.52 3.403-2.142 5.672.569 3.34 1.072 4.979 2.458 6.364 1.321 1.325 4.096 1.826 7.813 5.544 4.602 4.6 5.608 10.018 1.829 13.798l-.127.126c-3.906 3.906-9.137 3.088-13.23-1.009-3.088-3.087-4.789-6.552-5.543-11.214-.193-1.323-.63-2.396-1.765-3.529-2.522-2.521-6.745-2.457-9.261.064-1.639 1.637-2.082 3.717-1.767 5.672 1.007 6.047 3.59 11.907 9.705 18.019 9.699 9.704 22.367 10.521 31.691 1.198l.127-.127c9.955-9.954 7.372-20.855-1.326-29.549-2.454-2.458-4.347-3.718-6.554-5.041l8.131-7.12 14.871 14.87c2.332 2.332 6.173 2.395 8.506.064 2.333-2.332 2.333-6.239 0-8.569l-19.157-19.157zM499.324 82.414l.817-.817c6.984-6.978 12.077-19.684 11.851-29.551l-.652-28.906c-.271-11.961-10.223-21.913-22.185-22.184l-28.9-.652c-.21-.004-.425-.007-.64-.007-9.72 0-22.152 5.096-28.917 11.856L283.795 159.059a102.124 102.124 0 0 0-28.582-4.063c-27.267 0-52.902 10.618-72.184 29.898-37.821 37.827-39.673 98.177-5.611 138.242l-9.45 9.451-47.548-47.547a8.301 8.301 0 0 0-11.744 0L2.432 391.283a8.302 8.302 0 0 0 0 11.742L108.673 509.27a8.301 8.301 0 0 0 11.744 0l106.246-106.245a8.302 8.302 0 0 0 0-11.742L179.71 344.33l9.446-9.447c18.433 15.701 41.582 24.282 66.061 24.282 27.268 0 52.904-10.618 72.187-29.9 13.824-13.827 23.339-31.186 27.514-50.204a102.365 102.365 0 0 0-1.682-50.56l4.389-4.389 8.831 2.213c5.873 1.471 11.572-.266 14.822-4.431 2.647-3.391 3.448-7.88 2.255-12.647l-.1-.394 6.394 1.601c1.749.438 3.479.661 5.144.661 5.089 0 9.478-2.034 12.36-5.726 3.092-3.961 4.006-9.292 2.574-15.01l-3.713-14.832 13.666-13.666 8.828 2.212c5.878 1.471 11.578-.267 14.83-4.435 2.516-3.228 3.361-7.451 2.409-11.95 5.625 1.189 11.009-.588 14.132-4.591 2.518-3.227 3.363-7.45 2.411-11.952 5.631 1.187 11.01-.588 14.134-4.59 2.646-3.391 3.445-7.882 2.252-12.644l-.648-2.586 3.474.87c1.749.437 3.481.66 5.144.66h.001c5.09 0 9.48-2.033 12.362-5.725 3.092-3.96 4.006-9.292 2.573-15.016l-2.436-9.72zM209.048 397.152l-94.503 94.502-94.5-94.501 94.501-94.502 41.677 41.677-.803.803a8.301 8.301 0 0 0 .001 11.742c1.621 1.622 3.746 2.432 5.871 2.432s4.25-.81 5.872-2.432l.803-.803 41.081 41.082zm279.353-327.3-4.146 4.146a8.304 8.304 0 0 0-2.182 7.89l3.558 14.195-14.198-3.556a8.306 8.306 0 0 0-7.888 2.182l-2.066 2.066a8.302 8.302 0 0 0-1.798 9.055c.043.105.072.186.084.234l1.955 7.806-7.819-1.96a2.31 2.31 0 0 1-.208-.064 8.303 8.303 0 0 0-10.524 10.584c.018.048.033.099.053.177l1.954 7.806-7.829-1.962c-.073-.019-.142-.042-.209-.064-3.012-1.023-6.319-.163-8.554 2.097-2.234 2.261-2.963 5.671-1.908 8.669l1.955 7.806-7.81-1.957a1.34 1.34 0 0 1-.188-.069 8.307 8.307 0 0 0-9.094 1.781l-20.414 20.415a8.303 8.303 0 0 0-2.183 7.887l4.833 19.307-19.306-4.836a8.3 8.3 0 0 0-7.885 2.18l-.425.424a8.299 8.299 0 0 0-1.779 9.109c.029.071.048.125.063.185l1.956 7.804-7.791-1.952a1.484 1.484 0 0 1-.225-.08 8.298 8.298 0 0 0-9.078 1.788l-11.384 11.386a8.302 8.302 0 0 0-1.971 8.598c10.705 30.788 2.741 65.561-20.287 88.591-16.146 16.144-37.612 25.035-60.445 25.035-20.042 0-39.028-6.854-54.289-19.448l10.606-10.607a22.51 22.51 0 0 0 8.972 1.862c6.028 0 11.697-2.348 15.966-6.613 8.8-8.802 8.8-23.123-.001-31.928-4.266-4.263-9.934-6.612-15.963-6.612a22.427 22.427 0 0 0-15.962 6.612 22.425 22.425 0 0 0-6.616 15.966c0 3.139.65 6.174 1.862 8.971l-10.598 10.599c-27.619-33.544-25.764-83.377 5.58-114.725 16.145-16.143 37.61-25.034 60.442-25.034a85.478 85.478 0 0 1 28.152 4.746 8.306 8.306 0 0 0 8.6-1.972L442.443 23.896c3.663-3.661 11.849-6.994 17.176-6.994l29.165.655c3.104.07 5.888 2.855 5.958 5.957l.652 28.908c.119 5.344-3.212 13.651-6.993 17.43zM214.536 291.791c0-1.593.621-3.092 1.751-4.221a5.927 5.927 0 0 1 4.219-1.748c1.595 0 3.094.622 4.221 1.747 2.327 2.328 2.328 6.116.002 8.441a5.934 5.934 0 0 1-4.224 1.75 5.93 5.93 0 0 1-4.221-1.75 5.927 5.927 0 0 1-1.748-4.219zm101.105-106.88 11.783 11.703L474.517 48.528l-11.783-11.703-147.093 148.086z" /></svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Flats
                    </h3>
                </div>
            </router-link>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <router-link to="" class="h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="h-8 w-8" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2">
                        <path style="fill:none" d="M0 0h64v64H0z" />
                        <path d="M34 34.747c0-.339.275-.614.614-.614h8.772c.339 0 .614.275.614.614V50H34V34.747zM55 34.991a.858.858 0 0 0-.857-.858h-6.352a.858.858 0 0 0-.858.858v6.285c0 .473.384.857.858.857h6.352a.857.857 0 0 0 .857-.857v-6.285zM44 40.356h2.933M44 36.444h2.933M51.2 37.333 50.133 38.4M50.769 13.394a4.5 4.5 0 0 0-4.137-2.727H17.368a4.5 4.5 0 0 0-4.137 2.727L8 25.6h48l-5.231-12.206zM17.067 25.6H9.6v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864c.743 0 1.456-.295 1.981-.821a2.799 2.799 0 0 0 .821-1.981V25.6z" style="fill:none;stroke:#ffffff;stroke-width:2px" />
                        <path d="M24.533 25.6h-7.466v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864a2.8 2.8 0 0 0 2.801-2.802V25.6z" style="fill:none;stroke:#ffffff;stroke-width:2px" />
                        <path d="M32 25.6h-7.467v1.465c0 .743.295 1.456.821 1.981a2.799 2.799 0 0 0 1.981.821h1.864A2.8 2.8 0 0 0 32 27.065V25.6z" style="fill:none;stroke:#ffffff;stroke-width:2px" />
                        <path d="M39.467 25.6H32v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864c.743 0 1.456-.295 1.981-.821a2.799 2.799 0 0 0 .821-1.981V25.6z" style="fill:none;stroke:#fafafa;stroke-width:2px" />
                        <path d="M46.933 25.6h-7.466v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864a2.8 2.8 0 0 0 2.801-2.802V25.6z" style="fill:none;stroke:#ffffff;stroke-width:2px" />
                        <path d="M54.4 25.6h-7.467v1.465c0 .743.295 1.456.821 1.981a2.799 2.799 0 0 0 1.981.821h1.864a2.8 2.8 0 0 0 2.801-2.802V25.6zM51 29.867v4.266M51 45.769v2.408c0 .484-.194.947-.538 1.289a1.847 1.847 0 0 1-1.3.534H29.867M15 50.133h-1.162A1.838 1.838 0 0 1 12 48.295V29.867M14.4 54h11.733L24 41h-7.467L14.4 54zM19.2 46h2.133M19.2 49.067h2.133" style="fill:none;stroke:#ffffff;stroke-width:2px" /></svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Shops
                    </h3>
                </div>
            </router-link>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <router-link to="" class="h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path d="M23 14.49V11.5a.5.5 0 0 0-.5-.5h-2.77a3.26 3.26 0 0 1-.59-1h3.36a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.36a3.26 3.26 0 0 1-.59 1H8V7.5a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V11h-.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 1 0V23h6.5a.5.5 0 0 0 .5-.5V15h12v8.5a.5.5 0 0 0 1 0v-9.01zM22 3v4h-9V3zm-9 5h9v1h-9zm3.89 2h1.22a4.34 4.34 0 0 0 .39 1h-2a4.34 4.34 0 0 0 .39-1zM7 8v3H6V8zM4 7h1v4H4zm5 11H3v-3h6zm-6 4v-3h6v3zm0-8v-2h19v2z" style="fill:#ffffff" /></svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Office
                    </h3>
                </div>
            </router-link>
            <!-- Icon Block -->
            <router-link to="/add-listing" class=" h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#e4eaf8" d="M102.079 136.284H16.568a8.552 8.552 0 0 1-8.551-8.551V42.221a8.552 8.552 0 0 1 8.551-8.551h85.511a8.552 8.552 0 0 1 8.551 8.551v85.511a8.551 8.551 0 0 1-8.551 8.552zM102.079 307.307H16.568a8.552 8.552 0 0 1-8.551-8.551v-85.511a8.552 8.552 0 0 1 8.551-8.551h85.511a8.552 8.552 0 0 1 8.551 8.551v85.511a8.551 8.551 0 0 1-8.551 8.551zM102.079 478.33H16.568a8.552 8.552 0 0 1-8.551-8.551v-85.511a8.552 8.552 0 0 1 8.551-8.551h85.511a8.552 8.552 0 0 1 8.551 8.551v85.511a8.551 8.551 0 0 1-8.551 8.551z"/><path  d="M161.937 221.261h256.534c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM161.937 306.772h153.921c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM503.983 247.983H161.937A8.016 8.016 0 0 0 153.92 256a8.016 8.016 0 0 0 8.017 8.017h342.046A8.016 8.016 0 0 0 512 256a8.016 8.016 0 0 0-8.017-8.017zM161.937 50.238h256.534c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM161.937 135.749h153.921a8.016 8.016 0 0 0 8.017-8.017 8.016 8.016 0 0 0-8.017-8.017H161.937a8.016 8.016 0 0 0-8.017 8.017 8.017 8.017 0 0 0 8.017 8.017zM161.937 92.994h342.046A8.016 8.016 0 0 0 512 84.977a8.016 8.016 0 0 0-8.017-8.017H161.937a8.017 8.017 0 0 0 0 16.034zM102.079 367.699H16.568C7.432 367.699 0 375.131 0 384.267v85.511c0 9.136 7.432 16.568 16.568 16.568h85.511c9.136 0 16.568-7.432 16.568-16.568v-85.511c0-9.136-7.432-16.568-16.568-16.568zm.535 102.08a.536.536 0 0 1-.534.534H16.568a.536.536 0 0 1-.534-.534v-85.511c0-.294.241-.534.534-.534h85.511c.294 0 .534.241.534.534v85.511zM161.937 392.284h256.534c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM315.858 461.762H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.588 8.017 8.017 8.017h153.921c4.428 0 8.017-3.588 8.017-8.017s-3.589-8.017-8.017-8.017zM503.983 419.006H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.588 8.017 8.017 8.017h342.046c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017zM113.698 43.366a8.015 8.015 0 0 0-8.737 1.737l-45.637 45.64L39.34 70.756a8.017 8.017 0 1 0-11.338 11.338l25.653 25.653a8.019 8.019 0 0 0 11.338 0l37.621-37.622v57.607a.536.536 0 0 1-.534.534H16.568a.535.535 0 0 1-.534-.534V42.221c0-.294.241-.534.534-.534h59.858c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H16.568C7.432 25.653 0 33.085 0 42.221v85.511c0 9.136 7.432 16.568 16.568 16.568h85.511c9.136 0 16.568-7.432 16.568-16.568v-76.96a8.015 8.015 0 0 0-4.949-7.406zM113.698 214.389a8.015 8.015 0 0 0-8.737 1.737l-45.637 45.64-19.984-19.985a8.017 8.017 0 1 0-11.338 11.338l25.653 25.653a8.019 8.019 0 0 0 11.338 0l37.621-37.623v57.607a.536.536 0 0 1-.534.534H16.568a.536.536 0 0 1-.534-.534v-85.511c0-.294.241-.534.534-.534h59.858c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H16.568C7.432 196.676 0 204.108 0 213.244v85.511c0 9.136 7.432 16.568 16.568 16.568h85.511c9.136 0 16.568-7.432 16.568-16.568v-76.96a8.015 8.015 0 0 0-4.949-7.406z"/></svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Listing
                    </h3>
                </div>
            </router-link>
            <!-- Icon Block -->
            <router-link to="" class="h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="h-8 w-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path style="fill:#ffffff" d="M64 74.172a5.961 5.961 0 1 0-5.961-5.961A5.967 5.967 0 0 0 64 74.172zm0-8.422a2.461 2.461 0 1 1-2.461 2.461A2.463 2.463 0 0 1 64 65.75z"/><path style="fill:#fefeff" d="M115.64 86.371 96.865 79v-6.362l1.283.794a4.942 4.942 0 0 0 5.2-8.4l-13.257-8.211a28 28 0 0 0 1.083-3.286h6.445a1.75 1.75 0 0 0 1.75-1.75V41.452a1.75 1.75 0 0 0-1.75-1.75h-6.444A27.7 27.7 0 0 0 88.1 32.3l4.56-4.559a1.749 1.749 0 0 0 0-2.475l-7.307-7.307a1.749 1.749 0 0 0-2.475 0l-4.56 4.559a27.68 27.68 0 0 0-7.405-3.07V13a1.75 1.75 0 0 0-1.75-1.75h-10.33a1.75 1.75 0 0 0-1.75 1.75v6.445a27.68 27.68 0 0 0-7.405 3.07l-4.56-4.559a1.749 1.749 0 0 0-2.475 0l-7.307 7.307a1.749 1.749 0 0 0 0 2.475L39.9 32.3a27.7 27.7 0 0 0-3.075 7.4h-6.444a1.75 1.75 0 0 0-1.75 1.75v10.336a1.75 1.75 0 0 0 1.75 1.75h6.445a28 28 0 0 0 1.083 3.285l-13.258 8.207a4.942 4.942 0 0 0 1.469 9.012 4.978 4.978 0 0 0 1.142.133 4.906 4.906 0 0 0 2.592-.742l1.281-.793V79L12.36 86.371A1.749 1.749 0 0 0 11.25 88v27a1.75 1.75 0 0 0 1.75 1.75h102a1.75 1.75 0 0 0 1.75-1.75V88a1.749 1.749 0 0 0-1.11-1.629zm-75.7-34.928a1.749 1.749 0 0 0-1.716-1.408h-6.093V43.2h6.093a1.749 1.749 0 0 0 1.716-1.408 24.288 24.288 0 0 1 3.639-8.775 1.75 1.75 0 0 0-.219-2.208L39.049 26.5l4.832-4.832 4.311 4.31a1.75 1.75 0 0 0 2.208.222 24.278 24.278 0 0 1 8.774-3.637 1.751 1.751 0 0 0 1.408-1.716V14.75h6.834v6.093a1.751 1.751 0 0 0 1.408 1.716A24.278 24.278 0 0 1 77.6 26.2a1.75 1.75 0 0 0 2.209-.218l4.311-4.31 4.831 4.828-4.311 4.31a1.75 1.75 0 0 0-.219 2.208 24.288 24.288 0 0 1 3.639 8.775 1.749 1.749 0 0 0 1.716 1.407h6.093v6.833h-6.093a1.749 1.749 0 0 0-1.716 1.408 24.382 24.382 0 0 1-.988 3.509l-6.457-4a17.168 17.168 0 1 0-33.229 0l-6.458 4a24.378 24.378 0 0 1-.989-3.507zM50.542 49a13.668 13.668 0 1 1 26.917 0L66.6 42.28a4.912 4.912 0 0 0-5.2 0zM28.011 70.456A1.442 1.442 0 0 1 26.493 68l36.748-22.744a1.453 1.453 0 0 1 1.518 0L101.507 68a1.442 1.442 0 0 1 .466 1.984 1.469 1.469 0 0 1-1.984.467L64.921 48.747a1.748 1.748 0 0 0-1.842 0zM14.75 89.193l16.385-6.429v30.486H14.75zm19.885-18.722L64 52.293l29.365 18.179v42.917H77.819V91a1.75 1.75 0 0 0-1.75-1.75H51.931a1.75 1.75 0 0 0-1.75 1.75v22.388H34.635zm39.685 42.917H53.681V92.75h20.638zm38.931-.138H96.865V82.764l16.385 6.429z"/></svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Support
                    </h3>
                </div>
            </router-link>
            <!-- Icon Block -->
            <router-link to="" class="h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path d="M23 14.49V11.5a.5.5 0 0 0-.5-.5h-2.77a3.26 3.26 0 0 1-.59-1h3.36a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.36a3.26 3.26 0 0 1-.59 1H8V7.5a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V11h-.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 1 0V23h6.5a.5.5 0 0 0 .5-.5V15h12v8.5a.5.5 0 0 0 1 0v-9.01zM22 3v4h-9V3zm-9 5h9v1h-9zm3.89 2h1.22a4.34 4.34 0 0 0 .39 1h-2a4.34 4.34 0 0 0 .39-1zM7 8v3H6V8zM4 7h1v4H4zm5 11H3v-3h6zm-6 4v-3h6v3zm0-8v-2h19v2z" style="fill:#ffffff" /></svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Office
                    </h3>
                </div>
            </router-link>
            <!-- Icon Block -->
            <router-link to="" class="h-36 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-lg">
                <!-- Icon -->
                <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path d="M23 14.49V11.5a.5.5 0 0 0-.5-.5h-2.77a3.26 3.26 0 0 1-.59-1h3.36a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.36a3.26 3.26 0 0 1-.59 1H8V7.5a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V11h-.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 1 0V23h6.5a.5.5 0 0 0 .5-.5V15h12v8.5a.5.5 0 0 0 1 0v-9.01zM22 3v4h-9V3zm-9 5h9v1h-9zm3.89 2h1.22a4.34 4.34 0 0 0 .39 1h-2a4.34 4.34 0 0 0 .39-1zM7 8v3H6V8zM4 7h1v4H4zm5 11H3v-3h6zm-6 4v-3h6v3zm0-8v-2h19v2z" style="fill:#ffffff" /></svg>
                </div>
                <!-- End Icon -->

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Office
                    </h3>
                </div>
            </router-link>
            <!-- End Icon Block -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Icon Blocks -->
    <!-- <div class="flex place-content-center mt-2">

        <p>{{ currentDateTime }}</p>
    </div> -->

    <FooterComponent />
</body>
</template>

<script>
import NavComponentOwner from './NavComponentOwner.vue';
import HeroComponent from './HeroComponent.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: "HomePageOwner",
    data() {
        return {
            owner: [],
            name: null,
            mobile: null,
            image: null,
            id: '',
            currentDateTime: '',
        }
    },
    components: {
        NavComponentOwner,
        HeroComponent,
        FooterComponent
    },
    methods: {
        updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            this.currentDateTime = now.toLocaleDateString(undefined, options);
        }
    },
    created() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);

        // Start a timer to increment the count every second
        setInterval(this.incrementCount, 1000);
    },

    async mounted() {
        let users = localStorage.getItem('users-info');

        if (!users) {
            this.$router.push({
                name: 'LoginPageOwner'
            })
        } else {
            this.name = JSON.parse(users).name
            this.mobile = JSON.parse(users).mobile
            this.id = JSON.parse(users).id
        }
        const id = JSON.parse(users).id
        let getData = await axios.get("https://shomadhan.top/admin/api/Api/Owner/Table/" + id);
        this.owner = getData.data.data //fetch all the data in the getData response
        this.image = getData.data.data.image //fetch all the data in the getData response

        // const getApiImages = getData.data.data.image //fetch only images in the getData response
        // let getImage = await axios.get("https://shomadhan.top/admin/api/Api/Owner/Image/" + getApiImages);
        // this.image = getImage.config.url //for getting the image url and use it in the blade
        // console.log(getApiImages);

        // this.showAlart();

    },

    // methods: {
    //     loadData() {
    //         let users = localStorage.getItem('users-info');
    //         this.name = JSON.parse(users).name
    //         this.mobile = JSON.parse(users).mobile

    //         if (!users) {
    //             this.$router.push({
    //                 name: 'HomePageOwner'
    //             });
    //         }

    //         //  await axios.get("https://shomadhan.top/admin/api/Api/Owner/Table")
    //         //     .then(response => {
    //         //         this.items = response.data.data
    //         //     })
    //         //     .catch(error => {
    //         //         console.error('Error loading',error)
    //         //     })
    //     }
    // },
    // mounted() {

    //     this.loadData();
    // }

}
</script>

<style>

  </style>
