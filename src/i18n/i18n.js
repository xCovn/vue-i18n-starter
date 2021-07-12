/*=========================================================================================
  File Name: i18n.js
  Description: i18n configuration file. Imports i18n data.
==========================================================================================*/

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import i18nText from "@/i18n/i18nText";


Vue.use(VueI18n)

export default new VueI18n({
    locale: 'de',
    fallbackLocale: 'en',
    formatFallbackMessages: true,
    messages: i18nText
})