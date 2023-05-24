<template>
    <div class="col-xxl-4 col-xl-5 col-md-6 col-sm-7 notification box-col-6">
        <div class="card">
            <div class="card-header card-no-border">
                <h5>Summary</h5>
            </div>
            <div class="card-body pt-0">
                <div class="monthly-profit">
                    <apexchart height="271.3" type="donut" :options="modifiedEcomDashboard.options1" :series="modifiedEcomDashboard.series1"></apexchart>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {
    ecomDashboard
} from "../../../data/comon";

export default {
    props: {
        totalEmployees: Number,
        absentEmployees: Number,
        presentEmployees: Number,
        lateEmployees: Number,
    },
    data() {
        return {
            ecomDashboard: ecomDashboard,
        };
    },
    computed: {
        modifiedEcomDashboard() {
            const updatedEcomDashboard = JSON.parse(JSON.stringify(this.ecomDashboard));
            updatedEcomDashboard.options1.labels = ['Present', 'Absent', 'Late'];
            updatedEcomDashboard.options1.plotOptions.pie.donut.labels.total.label = this.totalEmployees.toString();
            updatedEcomDashboard.options1.plotOptions.pie.donut.labels.total.formatter = () => 'Total Employees';
            updatedEcomDashboard.series1 = [
                this.presentEmployees,
                this.absentEmployees,
                this.lateEmployees,
            ];
            return updatedEcomDashboard;
        },
    },
};
</script>
