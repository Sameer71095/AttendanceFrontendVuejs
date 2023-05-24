<template>
    <div class="card mb-0" v-if="this.attendanceResponse.data">
        <div class="card-header d-flex">
            <h5>Employee Details</h5>
            <span class="f-14 pull-right mt-0" v-if="this.attendanceResponse.data">{{this.attendanceResponse.data[0].employeeName}} - {{this.attendanceResponse.data[0].employeeId}}</span>
        </div>
        <div class="card-body p-0">
            <div class="row list-persons" id="addcon">
                <div class="col-xl-4 xl-50 col-md-5">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div class="scrollable-div">
                            <a class="nav-link" :class="index==activeIndex ? 'active show' : ''" id="v-pills-user-tab" data-bs-toggle="pill" @click="activeDiv(index)" href="#v-pills-user" role="tab" aria-controls="v-pills-user" aria-selected="index==activeIndex" v-for="(item,index) in this.attendanceResponse.data"
                                :key="index">
                                <div class="media">
                                    <div class="media-body">
                                        <h6>Date: <span class="first_name_0">{{item.checkedDate}} </span></h6>
                                        <p>Total Hours: {{item.totalHours}}</p>
                                        <p>Is Early Leave: {{item.isEarlyLeave ? 'Yes' : 'No'}}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <AttendanceDetailMap :active-data="activeData" />
            </div>
        </div>
    </div>
</template>

<script>
import AttendanceDetailMap from './AttendanceDetailMap.vue'
import historyPage from './historyPage.vue'
import editPage from './editPage.vue'
import {
    mapGetters
} from 'vuex'
export default {

    props: ['attendanceResponse'],
    components: {
        historyPage,
        editPage,
        AttendanceDetailMap
    },
    data() {
        return {
            // data: data,
            activeIndex: 0
        }
    },
    computed: {
        ...mapGetters({
            activeTab: 'contact/activeTab',
        }),
        menu() {
            return this.data.data
        },
        detailsAvailable() {
            return this.attendanceResponse &&
                this.attendanceResponse.data &&
                this.attendanceResponse.data.length > 0 &&
                this.attendanceResponse.data[0].employeeId;
        },
        activeData() {
            if(this.attendanceResponse &&
                this.attendanceResponse.data &&
                this.attendanceResponse.data.length > 0 &&
                this.attendanceResponse.data[0].employeeId){
            return this.attendanceResponse.data[this.activeIndex];
        }else{

        }
        },
    },

    methods: {
        activeDiv(index) {
            this.activeIndex = index;
        },
        getImgUrl(path) {
            // return require('../../assets/images/' + path)
        },

    }
}
</script>


<style scoped>
.scrollable-div {
    overflow-y: auto !important;
    max-height: 595px;
    display: flex;
    flex-direction: column;
}
</style>