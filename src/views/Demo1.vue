<template>
    <b-container>
        <b-row class="py-5 app-show">
            <b-col cols="12" sm="4">
                <b-row class="text-center">
                    <b-col cols="12">
                        <h1>Test</h1>
                    </b-col>
                    <b-col cols="12">
                        asd
                    </b-col>
                    <b-col cols="12" class="font22 pt-3">

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
            title: this.$t('Demo.Link1'),
            meta: [
                {name: 'description', content: this.$t('Demo.Meta1')}
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
