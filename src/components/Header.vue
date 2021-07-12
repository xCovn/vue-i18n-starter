<template>

    <b-container class="py-4 mx-0">

        <b-row class="align-items-center">
            <b-col cols="6" sm="6" md="3">
                <router-link :to="{ name: 'dashboard', params: { locale: this.$i18n.locale }}">
                    <img class="logo" alt="xCovn Logo" src="@/assets/images/logo.png" width="60">
                </router-link>
            </b-col>
            <b-col cols="6" sm="6" md="9">
                <div id="navigation" class="float-right">

                    <div id="nav" v-if="size > 1024">
                        <router-link :to="{ name: 'demo1', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link1')}}</router-link>
                        <router-link :to="{ name: 'demo2', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link2')}}</router-link>

                        <div class="dropdown">
                            <router-link :to="{ name: 'demo3', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link3')}}
                            </router-link>
                            <div class="dropdown-content">
                                <div><router-link :to="{ name: 'demo1', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link1')}}</router-link></div>
                                <div><router-link :to="{ name: 'demo2', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link2')}}</router-link></div>
                                <div><router-link :to="{ name: 'demo3', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link3')}}</router-link></div>
                            </div>
                        </div>

                        <b-dropdown :text="$t('Lang.Language')" id="header-switch" class="lang-switch m-md-2">
                            <b-dropdown-item @click="changeLang($event)" data-lang="de"><img
                                src="@/assets/images/flags/de.png" alt="" width="20" height="20"
                                class="mr-1">{{ $t('Lang.DE') }}
                            </b-dropdown-item>
                            <b-dropdown-item @click="changeLang($event)" data-lang="en"><img
                                src="@/assets/images/flags/us.png" alt="" width="20" height="20"
                                class="mr-1">{{ $t('Lang.EN') }}
                            </b-dropdown-item>
                        </b-dropdown>

                    </div>

                    <!-- mobile nav -->
                    <Slide :closeOnNavigation="true" right noOverlay v-if="size <= 1024">
                        <router-link :to="{ name: 'demo1', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link1')}}</router-link>
                        <router-link :to="{ name: 'demo2', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link2')}}</router-link>
                        <router-link :to="{ name: 'demo3', params: { locale: this.$i18n.locale }}">{{$t('Demo.Link3')}}</router-link>
                        <b-dropdown :text="$t('Lang.Language')" id="header-switch" class="lang-switch m-md-2">
                            <b-dropdown-item @click="changeLang($event)" data-lang="de"><img
                                src="@/assets/images/flags/de.png" alt="" width="20" height="20"
                                class="mr-1">{{ $t('Lang.DE') }}
                            </b-dropdown-item>
                            <b-dropdown-item @click="changeLang($event)" data-lang="en"><img
                                src="@/assets/images/flags/us.png" alt="" width="20" height="20"
                                class="mr-1">{{ $t('Lang.EN') }}
                            </b-dropdown-item>
                        </b-dropdown>
                    </Slide>

                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// hamburger menu
import {Slide} from 'vue-burger-menu'

export default {
    components: {
        Slide
    },
    data() {
        return {
            size: this.$store.state.windowWidth
        }
    },
    mounted() {

    },
    methods: {
        changeLang(item) {
            const html = document.documentElement

            if (this.$i18n.locale !== item.target.getAttribute('data-lang')) {
                const currentLang = item.target.getAttribute('data-lang')

                this.$i18n.locale = currentLang
                html.setAttribute('lang', currentLang)
                this.$cookies.set('lang', currentLang)

                const to = this.$router.resolve({params: {locale: currentLang}})
                this.$router.push(to.location)
            }
        },

    },
    watch: {
        '$store.state.windowWidth'(val) {
            this.size = val
        },
    },
}
</script>