<template>
    <b-container class="pb-5">

        <b-row class="justify-content-center text-center">

            <b-col cols="12">
                <h1 class="pb-4 color-bodyColor">{{ $t('Demo.Error404') }}</h1>
            </b-col>

            <b-col cols="12">
                <div class="pb-5 font-weight-600">{{ $t('Demo.Error404') }}</div>
            </b-col>

            <b-col cols="12" md="6">
                <b-button variant="link" class="btn-demo" @click="toDashboard()">
                    <span>{{ $t('Demo.ButtonToDashboard') }}</span>
                </b-button>
            </b-col>

        </b-row>

    </b-container>
</template>


<script>

import router from "../router";

export default {
    components: {},
    metaInfo() {
        return {
            title: this.$t('Page.Error404'),
            meta: [
                { name: 'description', content: this.$t('MetaDescription.Error404')}
            ],
        }
    },
    data() {
        return {
            size: this.$store.state.windowWidth,
        }
    },
    methods: {
        toDashboard(){
            router.push({ name: 'dashboard', params: { locale: this.$i18n.locale } })
        }
    },
    watch: {
        '$store.state.windowWidth'(val) {
            this.size = val
        },
    },
}
</script>