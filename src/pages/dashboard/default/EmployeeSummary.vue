<template>
    <div class="col-xxl-auto col-xl-3 col-sm-6 box-col-6">
        <div class="row">
            <div class="col-xl-12" v-for="employee in totalAndAbsentEmployees" :key="employee">
                <div class="card widget-1">
                    <div class="card-body">
                        <div class="widget-content">
                            <div :class="employee.widgetClass">
                                <div class="bg-round">
                                    <svg class="svg-fill">
                                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${employee.svgIcon1}`"></use>
                                    </svg>
                                    <svg class="half-circle svg-fill">
                                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${employee.svgIcon2}`"></use>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4>{{ employee.number }}</h4>
                                <span class="f-light">
                                    {{ employee.title }}
                                </span>
                            </div>
                        </div>
                        <div :class="employee.growthClass">
                            <i :class="employee.iconClass"></i><span>{{ employee.growthNumber }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-xxl-auto col-xl-3 col-sm-6 box-col-6">
        <div class="row">
            <div class="col-xl-12" v-for="employee in presentAndLateEmployees" :key="employee">
                <div class="card widget-1">
                    <div class="card-body">
                        <div class="widget-content">
                            <div :class="employee.widgetClass">
                                <div class="bg-round">
                                    <svg class="svg-fill">
                                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${employee.svgIcon1}`"></use>
                                    </svg>
                                    <svg class="half-circle svg-fill">
                                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${employee.svgIcon2}`"></use>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4>{{ employee.number }}</h4>
                                <span class="f-light">
                                    {{ employee.title }}
                                </span>
                            </div>
                        </div>
                        <div :class="employee.growthClass">
                            <i :class="employee.iconClass"></i><span>{{ employee.growthNumber }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    totalEmployees: Number,
    absentEmployees: Number,
    presentEmployees: Number,
    lateEmployees: Number,
  },
  computed: {
  totalAndAbsentEmployees() {
    return [
      {
        widgetClass: "widget-round secondary",
        svgIcon1: "fill-user",
        svgIcon2: "halfcircle",
        number: this.totalEmployees,
        title: "Total Employees",
        growthClass: "font-secondary f-w-500",
        iconClass: "icon-arrow-up icon-rotate me-1",
        growthNumber: "+50%"
      },
      {
        widgetClass: "widget-round primary",
        svgIcon1: "stroke-user",
        svgIcon2: "halfcircle",
        number: this.absentEmployees,
        title: "Absent Today",
        growthClass: "font-primary f-w-500",
        iconClass: "icon-arrow-up icon-rotate me-1",
        growthNumber: "+70%"
      }
    ];
  },
  presentAndLateEmployees() {
    return [
      {
        widgetClass: "widget-round warning",
        svgIcon1: "user-visitor",
        svgIcon2: "halfcircle",
        number: this.presentEmployees,
        title: "Present Today",
        growthClass: "font-warning f-w-500",
        iconClass: "icon-arrow-down icon-rotate me-1",
        growthNumber: "-20%"
      },
      {
        widgetClass: "widget-round success",
        svgIcon1: "clock",
        svgIcon2: "halfcircle",
        number: this.lateEmployees,
        title: "Late Today",
        growthClass: "font-success f-w-500",
        iconClass: "icon-arrow-up icon-rotate me-1",
        growthNumber: "+70%"
      }
    ];
  }
}

}
</script>
