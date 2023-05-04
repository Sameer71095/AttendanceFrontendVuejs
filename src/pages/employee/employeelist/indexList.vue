<template>
    <Breadcrumbs main="Project" title="Employee List" />

    <div class="container-fluid">
        <div class="row project-cards">
            <topMenu />
        </div>
    </div>
</template>

<script>
import topMenu from '../employeelist/topMenu.vue'
export default {
    name: 'indexList',
    components: {
        topMenu
    },

}

</script>
