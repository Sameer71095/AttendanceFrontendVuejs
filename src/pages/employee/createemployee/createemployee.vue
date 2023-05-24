<!-- <template>
  <div v-if="steps.length > 0">
    <Breadcrumbs title="Sample Page" main="Page" />
    <div>
      <el-steps :active="activeStep" finish-status="success" simple style="margin-top: 20px">
        <el-step v-for="(step, index) in steps" :key="index" :title="step.title" />
      </el-steps>

      <transition name="fade">
        <div v-if="activeStep > 0" class="step-content">
          <div v-for="(step, index) in steps" :key="index" v-show="activeStep === step.id">
            <div class="form-group" v-for="(field, fIndex) in step.fields" :key="fIndex">
              <label :for="field.id">{{ field.label }}</label>
              <input :type="field.type" class="form-control" :id="field.id" :placeholder="field.placeholder" />
            </div>
            <button v-if="index > 0" @click="prevStep" class="btn btn-secondary">Previous</button>
            <button v-if="index < steps.length - 1" @click="nextStep" class="btn btn-primary">Next</button>
            <button v-if="index === steps.length - 1" @click="submitForm" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'

export default {
  data() {
    return {
      activeStep: 1,
      steps: [
        {
          id: 1,
          title: 'Step 1',
          fields: [
            {
              id: 'exampleInput1',
              label: 'Input 1',
              type: 'text',
              placeholder: 'Enter input 1',
            },
          ],
        },
        {
          id: 2,
          title: 'Step 2',
          fields: [
            {
              id: 'exampleInput2',
              label: 'Input 2',
              type: 'text',
              placeholder: 'Enter input 2',
            },
          ],
        },
        {
          id: 3,
          title: 'Step 3',
          fields: [
            {
              id: 'exampleInput3',
              label: 'Input 3',
              type: 'text',
              placeholder: 'Enter input 3',
            },
          ],
        },
      ],
    };
  },
  methods: {
    nextStep() {
      if (this.activeStep < this.steps.length) {
        this.activeStep += 1;
      }
    },
    prevStep() {
      if (this.activeStep > 1) {
        this.activeStep -= 1;
      }
    },
    submitForm() {
      // Implement form submission logic here
    },
  },
};
</script>


<style scoped>
.step-content {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style> -->
