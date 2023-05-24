<template>
    <li class="nav-item">
        <button class="badge-light-primary btn-block btn-mail w-100" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <vue-feather class="me-2" type="users"></vue-feather> Search Employee
                                                                </button>
        <Teleport to="body">
            <div class="modal fade modal-bookmark" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">Search Employee</h3>
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="form-bookmark needs-validation" id="bookmark-form" novalidate>
                                <div class="row g-2">
                                    <div class="mb-3 col-md-12 mt-0">
                                        <label for="con-name">Name</label>
                                        <div class="row">
                                            <multiselect v-model="value" :options="options1" :searchable="true" group-values="libs" group-label="language" :group-select="false" :close-on-select="true" track-by="name" label="name" placeholder="Pick an employee">
                                            </multiselect>
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-12 mt-0">
    
    
                                        <DatePicker v-model="range" is-range/>
                                    </div>
                                </div>
                                <input id="index_var" type="hidden" value="5">
                                <button class="btn btn-success" type="button" @click="search()">Search</button>
                                <button class="btn btn-primary  ms-2" type="button" @click="generateExcel()">Generate Excel</button>
                                <button class="btn btn-secondary ms-2" type="button" data-bs-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    
    </li>
</template>

<script>
import data from '@/data/contact.json'
import axios from 'axios';

import { ref } from 'vue';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { Modal } from 'bootstrap';



export default {

    components: {
        Calendar,
        DatePicker,
    },
    data() {
        const lastMonthLastDate = new Date();
        lastMonthLastDate.setDate(0);
        const lastMonthFirstDate = new Date(lastMonthLastDate.getFullYear(), lastMonthLastDate.getMonth(), 1);

        return {
            name: '',
            lastName: '',
            email: '',
            mobile: '',
            menu: data.data,
            popover: ref(true),
            range: ref({
                start: lastMonthFirstDate,
                end: lastMonthLastDate,
            }),
            options1: [],
            value: [],
        }
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
                                    employeeId: employee.employeeId,
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

    methods: {
        hideModal(modalId) {
            // get the modal element by its id
            let modalElement = document.getElementById(modalId);
            let modalInstance = Modal.getInstance(modalElement);
            if (!modalInstance) {
                modalInstance = new Modal(modalElement);
            }

            // setup an event listener for the 'hidden.bs.modal' event
            let handleModalHidden = function(event) {
                // This function will be called once the modal is completely hidden

                // Now it should be safe to remove the backdrop
                let backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.parentNode.removeChild(backdrop);
                }

                // Remove the event listener to avoid memory leaks
                modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
            };

            modalElement.addEventListener('hidden.bs.modal', handleModalHidden);

            // hide the modal
            modalInstance.hide();
            // // remove the backdrop after a short delay
            // setTimeout(() => {
            //     let backdrop = document.querySelector('.modal-backdrop');
            //     if (backdrop) {
            //         backdrop.parentNode.removeChild(backdrop);
            //     }
            // }, 400);
        },
        search() {
            console.log(this.value); // Log the value array
            console.log(this.range)
            if (this.value.length == 0) {
                alert('Please select an employee.');
                return;
            }
            if (!this.range.start || !this.range.end) {
                alert('Please select a date range.');
                return;
            }

            var selectedEmployee = this.value; // Assuming you are selecting only one employee at a time.

            console.log(selectedEmployee.employeeId); // Log the employeeId
            axios.post('/Attendance/GetAttendanceHistoryDetail', {
                    EmployeeId: selectedEmployee.employeeId,
                    StartDate: this.range.start,
                    EndDate: this.range.end
                })
                .then(response => {


                    // Emit the response to the parent
                    this.$emit('attendanceGenerated', response.data);
                    // this.hideModal('exampleModal');




                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        },
        generateExcel() {
            console.log(this.value); // Log the value array
            console.log(this.range)
            if (this.value.length == 0) {
                alert('Please select an employee.');
                return;
            }
            if (!this.range.start || !this.range.end) {
                alert('Please select a date range.');
                return;
            }

            var selectedEmployee = this.value; // Assuming you are selecting only one employee at a time.

            console.log(selectedEmployee.employeeId); // Log the employeeId
            axios.post('/Attendance/ExportAttendanceHistory', {
                    EmployeeId: selectedEmployee.employeeId,
                    StartDate: this.range.start,
                    EndDate: this.range.end
                }, {
                    responseType: 'blob', // Important
                })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'AttendanceHistory.xlsx'); // Set the Excel file name here
                    document.body.appendChild(link);
                    link.click();


                    // this.hideModal('exampleModal');
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    }
}
</script>
