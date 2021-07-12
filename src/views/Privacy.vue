<template>
    <b-container>

        <b-row class="full-width-bar text-center py-5">
            <b-col cols="12" class="">
                <h1 class="pb-2" v-html="$t('Privacy.Privacy')"></h1>
            </b-col>
        </b-row>

        <b-row class="py-5 word-break">
            <b-col cols="12">
                <b-row class="pb-3" v-for="n in 3" :key="'1-'+n">
                    <b-col cols="12" sm="3">
                        <strong>Title {{n}}</strong>
                    </b-col>
                    <b-col cols="12" sm="9">
                        Content {{n}}
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

    </b-container>
</template>


<script>

export default {
    metaInfo() {
        return {
            title: this.$t('Demo.Privacy'),
            meta: [
                { name: 'description', content: this.$t('MetaDescription.Privacy')}
            ],
        }
    },
    data() {
        return {
            size: this.$store.state.windowWidth,
            language: this.$i18n.locale
        }
    },
    watch: {
        '$store.state.windowWidth'(val) {
            this.size = val
        },
        '$i18n.locale'(val) {
            this.language = val
        }
    },
}
</script>