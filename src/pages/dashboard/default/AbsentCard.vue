<template>
    <div class="col-xxl-4 col-xl-5 col-md-6 col-sm-7 notification box-col-6">
        <div class="card height-equal">
            <div class="card-header card-no-border">
                <div class="header-top">
                    <h5 class="m-0">Absent</h5>
                    <div class="card-header-right-icon">
                        <DropDown2 />
                    </div>
                </div>
            </div>
            <div class="card-body pt-0 custom-scroll">
                <ul>
                    <li class="d-flex" v-for="employee in absentEmployees" :key="employee.employeeId">
                        <div :class="getRandomClass()"></div>
                        <div class="w-100 ms-3">
                            <p class="d-flex justify-content-between mb-2">
                                <span class="date-content light-background">{{ employee.jobTitle }}</span><span></span>
                            </p>
                            <h6>
                                {{ employee.name }}<span class="dot-notification"></span>
                            </h6>
                            <p class="f-light">
                                {{ employee.email }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown2 from "../base/dropdown/DropDown2.vue";
import {
    apexDashboard
} from "../../../data/comon";
export default {
    components: {
        DropDown2
    },
    props: {
        absentEmployees: Array,
    },
    methods: {
        getRandomClass() {
            const classes = ['activity-dot-primary', 'activity-dot-warning', 'activity-dot-secondary'];
            return classes[Math.floor(Math.random() * classes.length)];
        },
    },
    data() {
        return {
            apexDashboard: apexDashboard,
        };
    },
}
</script>

<style scoped>
.custom-scroll {
    max-height: 360px;
    overflow-y: auto;
    scrollbar-width: none;
    /* For Firefox */
}

.custom-scroll::-webkit-scrollbar {
    display: none;
    /* For Chrome, Safari, and Opera */
}
</style>