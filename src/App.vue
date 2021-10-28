<template>
    <b-container id="app" class="px-4">
        <b-row>
            <b-col cols="12">
                <Header></Header>
                <router-view/>
                <Footer></Footer>
            </b-col>
        </b-row>

        <cookie-law v-on:accept="consentMatomo()" :buttonText="$t('Demo.BtnAccept')" :message="$t('Demo.CookieText')">
          <div slot="props">
              <router-link :to="{ name: 'privacy', params: { locale: this.$i18n.locale }}">{{ $t('Page.Privacy') }}</router-link>
          </div>
        </cookie-law>

    </b-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieLaw from 'vue-cookie-law'

export default {
    components: {
        Header,
        Footer,
        CookieLaw
    },
    metaInfo() {
        return {
            title: 'Default Title',
            titleTemplate: '%s | ' + this.$t('Demo.Starter')
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleWindowResize() {
            this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
        },
        consentMatomo(){
            if(this.$matomo){
                this.$matomo.rememberConsentGiven()
            }
        },
    },
    mounted() {
        if (this.$cookies.isKey('lang')) {
            this.$i18n.locale = this.$cookies.get('lang')
        }
        this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
    },
    async created() {
        window.addEventListener('resize', this.handleWindowResize)
    },
    destroyed() {
        window.removeEventListener('resize', this.handleWindowResize)
    },
}
</script>
