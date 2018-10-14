// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './ui'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.config.productionTip = false

Vue.use(VueTextareaAutosize)


Vue.filter('userLabel', (u) => u.name || u.username || u.handle || u.email || u.ID)
