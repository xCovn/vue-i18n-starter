import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '@/i18n/i18n'
import cookies from 'vue-cookies'

Vue.use(VueRouter)

const routes = [
  {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: '/:locale',
    component: () => import('./../layouts/Main.vue'),
    beforeEnter: (to, from, next) => {
      if(to.params.locale && to.params.locale.length !== 2) {
        // /privcay -> /de/privacy
        router.push({ name: to.params.locale, params: {locale: cookies.get('lang')} })
      } else if(to.params.locale !== cookies.get('lang')){
        // check if choosen language is available, if not fallback 'de'
        // change language if user manual switch in url
        const supported_locales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        let currentLang = ''
        if(supported_locales.includes(to.params.locale)){
          currentLang = to.params.locale
        } else {
          currentLang = 'de'
        }

        const html = document.documentElement
        i18n.locale = currentLang
        html.setAttribute('lang', currentLang)
        cookies.set('lang', currentLang)
        router.push({name: to.name, params: {locale: currentLang}})
      } else {
        // handling for adding lang tag
        const locale = to.params.locale
        const supported_locales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        if (!supported_locales.includes(locale)) return next('de')
        if (i18n.locale !== locale) {
          i18n.locale = locale
        }
        return next()
      }
    },

    children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
      {
        path: '/',
        name: 'dashboard',
        component: Home,
      },
      {
        path: 'demo1',
        name: 'demo1',
        component: () => import('./../views/Demo1.vue'),
      },
      {
        path: 'demo2',
        name: 'demo2',
        component: () => import('./../views/Demo2.vue'),
      },
      {
        path: 'demo3',
        name: 'demo3',
        component: () => import('./../views/Demo3.vue'),
      },
      {
        path: 'imprint',
        name: 'imprint',
        component: () => import('./../views/Imprint.vue'),
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: () => import('./../views/Privacy.vue'),
      },
    ],
  },
  // Redirect to 404 page, if no match found
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import('./../views/Error404.vue'),

    // redirect: { name: 'dashboard'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to,from,next)=> {
  let l = router.resolve({name: to.name})
  if( l.resolved.matched.length > 0){

    if(to.params.catchAll === ''){
      // if route is / redirect to /:lang
      if (cookies.isKey('lang')) {
        router.push({ name: 'dashboard', params: { locale: cookies.get('lang') } })
      } else {
        router.push({ name: 'dashboard', params: { locale: i18n.locale } })
      }

    } else {
      next()
    }

  }else{
    //the route does not exists, push to dashboard
    if (cookies.isKey('lang')) {
      router.push({ name: 'dashboard', params: { locale: cookies.get('lang') } })
    } else {
      router.push({ name: 'dashboard', params: { locale: i18n.locale } })
    }
  }
})

export default router
