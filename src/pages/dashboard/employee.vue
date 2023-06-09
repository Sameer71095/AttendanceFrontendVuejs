<template>
    <Breadcrumbs main="Dashboard" title="employee" />
    
    <div class="container-fluid search-page">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
    
                    <div class="card-header">
                        <form class="theme-form">
                            <div class="row">
                                <!-- Add row class here -->
                                <!-- <div class="col-6"> Add col-3 class here -->
                                <WelcomeCard />
                                <!-- </div> -->
                                <div class="col-12 col-md-6 col-lg-4">
                                    <!-- Responsive classes -->
                                    <!-- Add col-3 class here -->
                                    <div>
                                        <!-- <div class="input-group m-0 flex-nowrap">
                                                                                    <input class="form-control-plaintext" type="search" placeholder="Sameer ..">
                                                                                    <span class="btn btn-primary input-group-text">Search</span>
                                                                                </div> -->
    
    
                                        <div class="mb-2">
                                            <label class="col-form-label ">Name</label>
                                            <multiselect v-model="value" :options="options1" :searchable="true" group-values="libs" group-label="language" :group-select="false" :close-on-select="true" track-by="name" label="name" placeholder="Pick an employee">
                                            </multiselect>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="col-12 col-md-6 col-lg-4">
                                    <!-- Responsive classes -->
                                    <div class="input-group m-0 flex-nowrap">
                                        <VCalendar :attributes="attributes" expanded transparent borderless title-position="left" show-weeknumbers>
                                            <template #day-popover="{ dayTitle, attributes }">
                                                    <div class="px-2">
                                                        <div
                                                            class="text-xs text-gray-700 dark:text-gray-300 font-semibold text-center">
                                                            {{ dayTitle }}
                                                        </div>
                                                        <ul>
                                                            <li v-for="{ key, customData } in attributes" :key="key"
                                                                class="block text-xs text-gray-700 dark:text-gray-300 bg-red-100">
                                                                {{ customData.description }}
                                                            </li>
                                                        </ul>
                                                    </div>
                                            </template>
                                        </VCalendar>


                                    </div>
                                </div>
                            </div>
                            <!-- Close row div -->
                        </form>
                    </div>

                    <div class="card-body">
                        <div class="text-center">
                            <ul class="nav nav-tabs search-list" id="top-tab" role="tablist">
                                <li class="nav-item" v-on:click="changetab('all')">
                                    <a class="nav-link " :class="{'show active': showtab == 'all' }" id="top-all"
                                        data-bs-toggle="tab" role="tab" aria-controls="all" aria-selected="false"><i
                                            class="icon-target"></i>All</a>
                                </li>
                                <li class="nav-item" v-on:click="changetab('images')">
                                    <a class="nav-link" :class="{'show active': showtab == 'images' }" id="top-images"
                                        data-toggle="tab" role="tab" aria-controls="images" aria-selected="false"><i
                                            class="icon-image"></i>Basic Info </a>
                                </li>
                                <li class="nav-item" v-on:click="changetab('videos')">
                                    <a class="nav-link" :class="{'show active': showtab == 'videos' }" id="top-videos"
                                        data-toggle="tab" role="tab" aria-controls="videos" aria-selected="false"><i
                                            class="icon-video-clapper"></i>Attendance</a>
                                </li>
                                <li class="nav-item" v-on:click="changetab('audio')">
                                    <a class="nav-link" :class="{'show active': showtab == 'audio' }" id="audios-link"
                                        data-toggle="tab" role="tab" aria-controls="maps" aria-selected="false"><i
                                            class="icon-map-alt"> </i>Payroll</a>
                                </li>
                                <li class="nav-item bg-light-success" v-on:click="changetab('settings')">
                                    <a class="nav-link txt-success" :class="{'show active': showtab == 'settings' }"
                                        id="setting-link" data-toggle="tab" role="tab" aria-controls="settings"
                                        aria-selected="false">Leaves</a>
                                </li>
                                <li class="nav-item bg-light-secondary" v-on:click="changetab('tools')"><a
                                        class="nav-link txt-secondary" :class="{'show active': showtab == 'settings' }"
                                        id="setting-link" data-bs-toggle="tab" href="#tools-links" role="tab"
                                        aria-selected="false">Policy</a></li>
                            </ul>
                        </div>
                        <div class="tab-content" id="top-tabContent">
                            <div class="search-links tab-pane fade" :class="{'show active': showtab == 'all' }"
                                id="all-links" role="tabpanel" aria-labelledby="all">
                                <allView />
                            </div>
                            <div class="tab-pane fade" :class="{'show active': showtab == 'images' }" id="about"
                                role="tabpanel" aria-labelledby="images">
                                <imagesView />
                            </div>
                            <div class="tab-pane fade" :class="{'show active': showtab == 'videos' }" id="friends"
                                role="tabpanel" aria-labelledby="videos">
                                <videoView />
                            </div>
                            <div class="tab-pane fade" :class="{'show active': showtab == 'audio' }" id="friends"
                                role="tabpanel" aria-labelledby="maps">
                                <videoView />
                            </div>
                            <div class="tab-pane fade" :class="{'show active': showtab == 'settings' }" id="photos"
                                role="tabpanel" aria-labelledby="settings">
                                <videoView />
                            </div>
                            <div class="tab-pane fade" :class="{'show active': showtab == 'tools' }" id="photos"
                                role="tabpanel" aria-labelledby="settings">
                                <videoView />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WelcomeCard from "./default/WelcomeCard.vue";
import allView from "./employee/allView.vue"
import imagesView from "./employee/imagesView.vue"
import videoView from "./employee/videoView.vue"
import {
    DatePicker
} from 'v-calendar';
import axios from 'axios';

import {
    ref,
    computed
} from 'vue';


export default {
    components: {
        WelcomeCard,
        DatePicker,
        allView,
        // imagesView,
        // videoView
    },

    created() {
        axios.post('/Employee/GetAllEmployeesbyEmployerId')
            .then(response => {
                if (response.data.isSuccess) {
                    this.options1 = response.data.data.map(locationData => {
                        return {
                            language: locationData.location,
                            libs: locationData.employees.map(employee => {
                                return {
                                    name: employee.name,
                                    category: employee.department
                                };
                            })
                        };
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    },
    data() {
        const todos = [{
            description: 'Take Noah to basketball practice.',
            isComplete: false,
            // dates: { weekdays: 1 }, // Every Sunday
            color: 'red',
        }];

        const attributes = [
            // Attributes for todos
            ...todos.map(todo => ({
                dates: {
                    start: new Date(2023, 4, 13),
                    repeat: {
                        every: [2, 'weeks'],
                        weekdays: 7,
                    },
                },
                dot: {
                    color: todo.color,
                    class: todo.isComplete ? 'opacity-75' : '',
                },
                // highlight: true,  // Boolean, String, Object
                dot: true, // Boolean, String, Object
                // bar: true,        
                popover: true,
                customData: todo,

            })),
        ];
        const range = ref({
            start: new Date(2020, 9, 12),
            end: new Date(2020, 9, 16),
        });

        return {
            showtab: 'all',
            attributes, // Add attributes to the data
            range,
            options1: [],
            value: [],

            // value: [{ name: 'Sameer', category: 'Front-end' }, ]

        }
    },
    methods: {
        changetab(tab) {
            this.showtab = tab;
        }
    }
}
</script>