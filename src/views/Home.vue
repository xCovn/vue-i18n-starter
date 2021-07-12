<template>
    <b-container>
        <b-row>

            <b-col cols="12">
                <img src="@/assets/images/header-img.jpg" alt="">
            </b-col>

            <b-col cols="12" class="pt-5">
                <b-row class="text-center">
                    <b-col cols="12" md="4">
                        <h2>Headline</h2>
                        <p>Subtext lorem ipsum</p>
                    </b-col>
                    <b-col cols="12" md="4">
                        <h2>Headline</h2>
                        <p>Subtext lorem ipsum</p>
                    </b-col>
                    <b-col cols="12" md="4">
                        <h2>Headline</h2>
                        <p>Subtext lorem ipsum</p>
                    </b-col>
                </b-row>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>

export default {
    components: {
    },
    metaInfo() {
        return {
            title: this.$t('Page.Home'),
            meta: [
                {name: 'description', content: this.$t('MetaDescription.Home')}
            ],
        }
    },
    data() {
        return {
            size: this.$store.state.windowWidth,
        }
    },
    methods: {},
    watch: {
        '$store.state.windowWidth'(val) {
            this.size = val
        },
    },
}
</script>
