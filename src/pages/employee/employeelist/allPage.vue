<template>
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="(item, index) in menu" :key="index">
        <div class="project-box">
          <span class="badge badge-primary" :class="badge-info">{{ item.designation }}</span>
          <h6>{{ item.name }}</h6>
          <div class="d-flex mb-3">
            <div class="flex-grow-1 project-box-item">
              <p>{{ item.email }} | {{ item.contact }}</p>
            </div>
          </div>
          <div class="row details">
            <div class="col-6"><span>Department</span></div>
            <div class="col-6 font-primary">{{ item.department }}</div>
            <div class="col-6"><span>Employment Start Date</span></div>
            <div class="col-6 font-primary">{{ item.starting_date }}</div>
            <div class="col-6"><span>Employment End Date</span></div>
            <div class="col-6 font-primary">{{ item.end_date }}</div>
            <div class="col-6"><span>Work Hours</span></div>
            <div class="col-6 font-primary">{{ item.workday_start_formatted }} - {{ item.workday_end_formatted }}</div>
            <div class="col-6"><span>Weekend Days</span></div>
            <div class="col-6 font-primary">{{ item.weekend_days.join(", ") }}</div>
            <div class="col-6"><span>Monthly Salary</span></div>
            <div class="col-6 font-primary">{{ item.salary }}</div>
            <div class="col-6"><span>Max Overtime Hours (Monthly)</span></div>
            <div class="col-6 font-primary">{{ item.max_monthly_overtime }}</div>
            <div class="col-6"><span>Overtime Included</span></div>
            <div class="col-6 font-primary">{{ item.is_overtime ? 'Yes' : 'No' }}</div>
            <div class="col-6"><span>Location Specific</span></div>
            <div class="col-6 font-primary">{{ item.is_location_bound ? 'Yes' : 'No' }}</div>
            <div class="col-6"><span>Work Location</span></div>
            <div class="col-6 font-primary">{{ item.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
import axios from "axios";

import {baseApiURL } from '../../../constants/config';
export default {
  name: "allPage",
  data() {
    return {
      menu: [],
    };
  },
  async created() {
    try {
      const response = await this.fetchEmployees();
      this.menu = response.data.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  },
  methods: {
    async fetchEmployees() {
      const url = baseApiURL+"/Employee/GetAllEmployees?employerId=2";
      const token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,

        },
      };
      return await axios.post(url, config);
    },
  },
};
</script>