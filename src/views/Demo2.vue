<template>
    <b-container>
        <!--  app show area  -->
        <b-row class="py-5 app-show">

            <b-col cols="12" sm="4">
                <b-row class="text-center">
                    <b-col cols="12">
                        asd
                    </b-col>
                    <b-col cols="12" class="font22 pt-3">
                        <p><strong class="d-block f-w-700">{{ $t('Home.AppShowHeadline1') }}</strong>
                            {{ $t('Home.AppShowSubline1') }}
                        </p>
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
            title: this.$t('Demo.Link2'),
            meta: [
                {name: 'description', content: this.$t('Demo.Meta2')}
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
