<template>
    <b-container>

        <b-row class="full-width-bar text-center py-5">
            <b-col cols="12" class="">
                <h1 class="pb-2">{{ $t('Demo.Imprint') }}</h1>
            </b-col>
        </b-row>

        <b-row class="py-5 word-break">
            <b-col cols="12">

                <b-row class="pb-3">
                    <b-col cols="12" sm="3">
                        <strong>{{ $t('Demo.Imprint') }}</strong>
                    </b-col>
                    <b-col cols="12" sm="9">
                        xCovn GmbH <br>
                        Modern Street 123 <br>
                        12345 Munich
                    </b-col>
                </b-row>

            </b-col>
        </b-row>

    </b-container>
</template>


<script>

export default {
    components: {},
    metaInfo() {
        return {
            title: this.$t('Demo.Imprint'),
            meta: [
                { name: 'description', content: this.$t('MetaDescription.Imprint')}
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