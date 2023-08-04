<template>
    <div class="col-xl-8 xl-50 col-md-7" v-if="activeData">
        <div class="tab-content" id="v-pills-tabContent" :style="!this.display ? { display: 'none' } : ''">
            <div class="tab-pane contact-tab-0 tab-content-child fade show" :class="item.activeTab === this.activeTab ? 'active' : ''" id="v-pills-user" role="tabpanel" aria-labelledby="v-pills-user-tab" v-for="(item, index) in menu" :key="index">
                <div class="profile-mail" v-if="this.activeTab == item.activeTab">
                    <div class="media">
                        <div id="mapsize">
                            <l-map ref="map" :zoom="zoom" :center="center">
                                <l-tile-layer
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                  layer-type="base"
                                  name="OpenStreetMap"
                                  :options="{ maxZoom: 40 }"
                                ></l-tile-layer>
                                <l-marker v-for="(check, index) in activeData.checked" 
                                          :lat-lng="[check.latitude, check.longitude]" 
                                          :key="index">
                                    <l-popup>
                                        <div class="custom-popup">
                                            <span>{{ check.isCheckedout ? 'Checkout: ' : 'Checkin: ' }} {{ check.checkedTime }}</span>
                                        </div>
                                    </l-popup>
                                </l-marker>
                            </l-map>
                        </div>
                    </div>
                    <div class="email-general">
                        <h4 class="mb-3">General</h4>
    
                        <ul class="nested-list">
                            <li>Name <span class="font-primary first_name_0">{{ activeData.employeeName }}</span></li>
                            <li>Employee ID <span class="font-primary">{{ activeData.employeeId }}</span></li>
                            <li>Checked Date<span class="font-primary">{{ activeData.checkedDate }}</span></li>
                            <li>Total Hours<span class="font-primary">{{ activeData.totalHours }}</span></li>
                            <li>Is Early Leave<span class="font-primary">{{ activeData.isEarlyLeave ? 'Yes' : 'No' }}</span></li>
                            <li v-if="activeData.checked && activeData.checked.length">
                                <!-- <ul class="nested-list"> -->
                                <li v-for="(check, index) in activeData.checked" :key="index">
                                    <!-- <ul class="nested-list"> -->
                                    <li v-if="check.isCheckedout">Checkout Time<span class="font-primary"> <a :href="'https://www.google.com/maps/search/?api=1&query='+check.latitude+','+check.longitude" target="_blank" class="font-primary">{{ check.checkedTime }}</a></span></li>
                                    <li v-else>Checkin Time <span class="font-primary"><a :href="'https://www.google.com/maps/search/?api=1&query='+check.latitude+','+check.longitude" target="_blank" class="font-primary">{{ check.checkedTime }}</a></span></li>
                                    <!-- </ul> -->
                                </li>
                                <!-- </ul> -->
                            </li>
                        </ul>
    
                    </div>
                </div>
            </div>
        </div>
        <editPage />
    </div>
</template>

<script>

import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

import data from '@/data/contact.json'
import historyPage from './historyPage.vue'
import editPage from './editPage.vue'
import { mapGetters } from 'vuex'

export default {

    props: {
        activeData: {
            type: Object,
            required: true,
        },
    },
    components: {
        historyPage,
        editPage,
    LMap,
    LTileLayer,
    LMarker,
    LPopup
    },
    watch: {
        activeData: {
            handler: function (val) {
                if (!val || !val.checked || !Array.isArray(val.checked)) {
                    console.warn('Invalid activeData: ', val);
                    return;
                }

                const validChecks = val.checked.filter(check => 
                    typeof check.latitude === 'number' && typeof check.longitude === 'number'
                );

                if (validChecks.length === 0) {
                    console.warn('No valid checks: ', val.checked);
                    return;
                }

                const { latSum, lngSum, count } = validChecks.reduce((acc, check) => {
                    return {
                        latSum: acc.latSum + check.latitude,
                        lngSum: acc.lngSum + check.longitude,
                        count: acc.count + 1
                    };
                }, { latSum: 0, lngSum: 0, count: 0 });

                this.center = [latSum / count, lngSum / count];
            },
            deep: true,
            immediate: true
        }
    },

    data() {
        return {
            data: data,
            url: null,
            map: null,
            tileLayer: null,
            markers: [],
            zoom: 8,
            center: [47.41322, -1.219482],
        }
    },

    // mounted() {
    //     this.$nextTick(() => {
    //         this.initMap();
    //         this.map.invalidateSize();
    //     });
    // },
    computed: {
        ...mapGetters({
            display: 'contact/display',
            activeTab: 'contact/activeTab',
        }),
        menu() {
            return this.data.data
        }
    },
    methods: {
        readURL(e, item) {
            var files = e.target.files[0];
            this.url = URL.createObjectURL(files)
            item.imgUrl = this.url
        },
        printContact(item) {
            this.$store.commit('contact/print', item)
        },
        getImgUrl(path) {
            // return require('../../assets/images/' + path)
        },
        editContact() {
            this.$store.dispatch('contact/change')
        },
        deleteContact: function(items) {
            this.$swal({
                icon: 'warning',
                title: "Are you sure?",
                text: 'Once deleted, you will not be able to recover this imaginary file!',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#e64942',
                cancelButtonText: 'Cancel',
                cancelButtonColor: '#efefef',
            }).then((result) => {
                if (result.value) {
                    this.menu.splice(items, 1)
                    this.$store.dispatch('contact/active', this.menu[items].activeTab)
                    this.$swal({
                        icon: 'success',
                        text: 'Poof! Your imaginary file has been deleted!',
                        type: 'success',
                    });
                } else {
                    this.$swal({ text: 'Your imaginary file is safe!' });
                }
            });
        },
        // initMap() {
        //     this.map = L.map('map').setView([51.505, -0.09], 13);
        //     this.tileLayer = L.tileLayer(
        //         'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //             maxZoom: 19,
        //         },
        //     );
        //     this.tileLayer.addTo(this.map);
        //     this.markers.push(L.marker([51.5, -0.09]).addTo(this.map));
        //     this.markers.push(L.marker([51.495, -0.083]).addTo(this.map));
        //     this.markers.push(L.marker([51.49, -0.1]).addTo(this.map));
        // },
    }
}
</script>



<style scoped>
#mapsize {
    height: 250px;
    width: 100%;
}
.custom-popup {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>