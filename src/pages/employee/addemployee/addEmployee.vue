<template>
    <Breadcrumbs main="Employee" title="Add New Employee" />
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="form theme-form">
    
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label>Name</label>
                                        <input class="form-control" type="text" placeholder="Abc" id="Name" name="Name" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label>Email</label>
                                        <input class="form-control" type="email" placeholder="abc@abc.com" id="Email" name="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label for="Contact">Contact Number</label>
                                        <input class="form-control" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" id="Contact" name="Contact" required>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Unique Id of existing system</label>
                                        <input class="form-control" type="number" placeholder="1" id="UniqueId" name="UniqueId" min="1">
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Week-end Day's</label>
                                        <div class="m-t-15 m-checkbox-inline">
                                            <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                                                <input class="form-check-input" id="monday" type="checkbox" name="days" value="monday">
                                                <label class="form-check-label" for="monday">Monday</label>
                                            </div>
                                            <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                                                <input class="form-check-input" id="tuesday" type="checkbox" name="days" value="tuesday">
                                                <label class="form-check-label" for="tuesday">Tuesday</label>
                                            </div>
                                            <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                                                <input class="form-check-input" id="wednesday" type="checkbox" name="days" value="wednesday">
                                                <label class="form-check-label" for="wednesday">Wednesday</label>
                                            </div>
                                            <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                                                <input class="form-check-input" id="thursday" type="checkbox" name="days" value="thursday">
                                                <label class="form-check-label" for="thursday">Thursday</label>
                                            </div>
                                            <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                                                <input class="form-check-input" id="friday" type="checkbox" name="days" value="friday">
                                                <label class="form-check-label" for="friday">Friday</label>
                                            </div>
                                            <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                                                <input class="form-check-input" id="saturday" type="checkbox" name="days" value="saturday">
                                                <label class="form-check-label" for="saturday">Saturday</label>
                                            </div>
                                            <div class="form-check form-check-inline checkbox checkbox-dark mb-0">
                                                <input class="form-check-input" id="sunday" type="checkbox" checked="" name="days" value="sunday">
                                                <label class="form-check-label" for="sunday">Sunday</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Salary</label>
                                        <input class="form-control" type="number" placeholder="1000" id="salary" name="salary" min="0" required>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Salary Type</label>
                                        <select class="form-select" id="salaryType" name="salaryType" required>
                                                        <option v-for="type in salaryTypes" :key="type.salaryTypeId" :value="type.salaryTypeId">
                                                            {{ type.salaryTypeName }}
                                                        </option>
                                                    </select>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Department</label>
                                        <select class="form-select" id="department" name="department" required>
                                          <option v-for="dept in departments" :key="dept.departmentId" :value="dept.departmentId">
                                              {{ dept.departmentName }}
                                          </option>
                                      </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-4 col-md-6">
                                    <div class="mb-3">
                                        <label>Designation</label>
                                        <input class="form-control" type="text" placeholder="HR Manager" id="designation" name="designation" required>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-sm-6">
                                    <div class="mb-3">
                                        <label>Starting date</label>
                                        <datepicker v-model="startingDate" format="dd/MM/yyyy" class="form-control" id="startingDate" name="startingDate" required></datepicker>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-6">
                                    <div class="mb-3">
                                        <label>Ending date</label>
                                        <datepicker v-model="endDate" format="dd/MM/yyyy" class="form-control" id="endDate" name="endDate" required></datepicker>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Is Overtime Included</label>
                                        <select class="form-select" id="isOvertime" name="isOvertime" required>
                                    <option>No</option>
                                    <option>Yes</option>
                                  </select>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Is Location Bound</label>
                                        <select class="form-select" id="isLocationBound" name="isLocationBound" required>
                                    <option>Yes</option>
                                    <option>No</option>
                                  </select>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Location</label>
                                        <select class="form-select" id="location" name="location" required>
                                                    <option v-for="loc in locations" :key="loc.locationId" :value="loc.locationId">
                                                        {{ loc.name }}
                                                    </option>
                                                </select>
                                    </div>
                                </div>
                            </div>
    
    
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Workday Start</label>
                                        <input class="form-control digits" type="time" v-model="workdayStart" id="workdayStart" name="workdayStart" required>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Workday End</label>
                                        <input class="form-control digits" type="time" v-model="workdayEnd" id="workdayEnd" name="workdayEnd" required>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label>Max Monthly Overtime</label>
                                        <input class="form-control digits" type="number" placeholder="60" id="maxMonthlyOvertime" name="maxMonthlyOvertime">
                                    </div>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label>Enter some Details</label>
                                        <textarea class="form-control" id="description" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <employeeForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { baseApiURL } from '../../../constants/config';
import employeeForm from "./employeeForm.vue";
import Datepicker from "vue3-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';



export default {
    name: "addNewEmployee",
    components: {
        Datepicker,
        employeeForm,
    },
    data() {
        return {
            startingDate: "",
            endDate: "",
            workdayStart: "09:00",
            workdayEnd: "18:00",

            departments: [],
            salaryTypes: [],
            locations: [],
        };
    },
    methods: {
        formatDate(date) {
            const d = new Date(date);
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${month}/${day}/${year}`;
        },
        formatTime(time) {
            const [hours, minutes] = time.split(':');
            return `${hours}:${minutes}:00`;
        },
        async fetchLocations() {
            try {
                const response = await axios.post("/location/GetLocations");

                if (response.data.isSuccess) {
                    this.locations = response.data.data;
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error("An error occurred while fetching locations:", error);
            }
        },
        async fetchSalaryTypes() {
            try {
                const response = await axios.post("/salarytype/getsalarytype");

                if (response.data.isSuccess) {
                    this.salaryTypes = response.data.data;
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error("An error occurred while fetching salary types:", error);
            }
        },
        async fetchDepartments() {
            try {
                const response = await axios.post("/department/getdepartments");

                if (response.data.isSuccess) {
                    this.departments = response.data.data;
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error("An error occurred while fetching departments:", error);
            }
        },
        async submitForm() {

            const selectedDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(e => e.value);
            const payload = {
                name: document.getElementById("Name").value,
                email: document.getElementById("Email").value,
                contact: document.getElementById("Contact").value,
                unique_id: document.getElementById("UniqueId").value,
                weekend_days: selectedDays,
                salary: parseInt(document.getElementById("salary").value),
                salary_type: parseInt(document.getElementById("salaryType").value),
                department: parseInt(document.getElementById("department").value),
                designation: document.getElementById("designation").value,
                starting_date: this.formatDate(this.startingDate),
                end_date: this.formatDate(this.endDate),
                is_overtime: document.getElementById("isOvertime").value === "Yes",
                is_location_bound: document.getElementById("isLocationBound").value === "Yes",
                location: parseInt(document.getElementById("location").value),
                workday_start: this.formatTime(this.workdayStart),
                workday_end: this.formatTime(this.workdayEnd),
                max_monthly_overtime: parseInt(document.getElementById("maxMonthlyOvertime").value),
                description: document.getElementById("description").value,
            };
            try {
                const response = await axios.post("/employee/addemployee", payload);

                if (response.data.isSuccess) {
                    this.$nextTick(() => {
                        this.$router.push({ name: 'employeelist' });
                    });
                } else {
                    // Display the response message using SweetAlert
                    let errorMessage = `<p>${response.data.message}</p><ul>`;
                    response.data.data.forEach(errorItem => {
                        errorMessage += `<li><b>${errorItem.field}:</b> ${errorItem.error}</li>`;
                    });
                    errorMessage += '</ul>';

                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        html: errorMessage,
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'An error occurred',
                    text: 'Please try again.',
                });
            }

        },
    },
    mounted() {
        this.fetchDepartments();

        this.fetchSalaryTypes(); // Add this line

        this.fetchLocations(); // Add this line
    },
};
</script>