<template>
    <!-- <div class="row">
        <div class="col">
            <div class="mb-3">
                <label>Upload project file</label>
                <DropZone class="text-center" :maxFileSize="Number(60000000)" url="http://localhost:8080"
                    :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="2" />
            </div>
        </div>
    </div> -->
    <div class="row">
        <div class="col">
            <div class="text-end"><a class="btn btn-success me-3" href="javascript:void(0)" @click="$parent.submitForm">Add</a>
                <a class="btn btn-danger"
                    href="javascript:void(0)">Cancel</a></div>
        </div>
    </div>
</template>

<script>
import Datepicker from "vue3-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'

import Swal from 'sweetalert2';
export default {
    name: 'addNewEmployee',
    components: {
        Datepicker
    },
  data() {
    return {
      startingDate: "",
      endDate: "",
    };
  },
};
</script>
