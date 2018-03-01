<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="wrapper">
        <admin-header></admin-header>
        <left-asider></left-asider>
        <router-view></router-view>
        <right-asider></right-asider>
        <admin-footer></admin-footer>
    </div>
</template>

<script>
    const services = require('services');
    import adminHeader from '@/components/common/admin-header'
    import adminFooter from '@/components/common/admin-footer'
    import leftAsider from '@/components/common/left-asider'
    import rightAsider from '@/components/common/right-asider'

    export default {
        name: 'app',
        components: {
            adminHeader,
            adminFooter,
            leftAsider,
            rightAsider
        }
    }
</script>