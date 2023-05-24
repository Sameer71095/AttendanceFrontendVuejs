<template>
    <div>
        <Breadcrumbs main="Dashboard" title="default" />
    
        <div class="container-fluid">
            <div class="row widget-grid">
                <WelcomeCard />
                <EmployeeSummaryCard :total-employees="totalEmployees" :absent-employees="absentCount" :present-employees="presentCount" :late-employees="lateCount" />
                <LocationDepartmentCard :location-count="locationCount" :department-count="departmentCount" />
                <PresentCard :present-employees="presentEmployees" />
                <AbsentCard :absent-employees="absentEmployees"/>
                <AttendanceSummaryChart :total-employees="totalEmployees" :absent-employees="absentCount" :present-employees="presentCount" :late-employees="lateCount" />
             
            </div>
        </div>
    
    </div>
</template>

<script>
import WelcomeCard from "./default/WelcomeCard.vue";
import EmployeeSummaryCard from "./default/EmployeeSummary.vue";
import LocationDepartmentCard from "./default/LocationDepartmentCard.vue";
import PresentCard from "./default/PresentCard.vue";
import AbsentCard from "./default/AbsentCard.vue";
import AttendanceSummaryChart from "./default/AttendanceSummaryChart.vue"
import axios from 'axios';

export default {
    components: {
        WelcomeCard,
        EmployeeSummaryCard,
        LocationDepartmentCard,
        PresentCard,
        AbsentCard,
        AttendanceSummaryChart,
    },
    data() {
        return {
            absentCount: 0,
            presentCount: 0,
            lateCount: 0,
            departmentAttendances: {},
            absentEmployees: [],
            lateEmployees: [],
            presentEmployees: [],
            totalEmployees: 0,
            locationCount: 0,
            departmentCount: 0,
        };
    },
    methods: {
        async fetchAttendanceSummary() {
            try {
                const response = await axios.post("/Attendance/GetDetailedAttendanceSummaryToday");

                if (response.data) {
                    this.absentCount = response.data.absentCount;
                    this.presentCount = response.data.presentCount;
                    this.lateCount = response.data.lateCount;
                    this.departmentAttendances = response.data.departmentAttendances;
                    this.absentEmployees = response.data.absentEmployees;
                    this.lateEmployees = response.data.lateEmployees;
                    this.presentEmployees = response.data.presentEmployees;
                    this.totalEmployees = response.data.totalEmployees;
                    this.locationCount = response.data.locationCount;
                    this.departmentCount = response.data.departmentCount;

                } else {
                    console.error("Failed to fetch attendance summary.");
                }
            } catch (error) {
                console.error("An error occurred while fetching attendance summary:" + error);
            }
        },
    },
    mounted() {
        this.fetchAttendanceSummary();
    },
};
</script>
