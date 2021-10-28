<template>
    <b-container class="pt-5">
        <b-row class="justify-content-center">
            <b-col cols="12">
                <footer>
                    <b-row class="align-items-center">

                        <b-col cols="12" class="pt-5 pt-md-3">
                            <b-row>
                                <b-col cols="12" sm="5">
                                    <p>All Rights Reserved</p>
                                </b-col>

                                <b-col cols="12" sm="7">
                                    <div class="footer-nav float-right">
                                        <router-link :to="{ name: 'imprint', params: { locale: this.$i18n.locale }}">{{ $t('Demo.Imprint') }}</router-link>
                                        <router-link :to="{ name: 'privacy', params: { locale: this.$i18n.locale }}">{{ $t('Demo.Privacy') }}</router-link>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>

                        <b-col cols="12" class="my-5" v-if="size <= 576">
                            <!-- spacer for smartphones -->
                            <p class="color-white">spacer</p>
                        </b-col>
                    </b-row>
                </footer>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            size: this.$store.state.windowWidth,
        }
    },
    watch: {
        '$store.state.windowWidth'(val) {
            this.size = val
        },
    },
}
</script>