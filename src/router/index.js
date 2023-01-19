import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue';
import CallView from '@/views/CallView.vue';
import HistoryView from '@/views/HistoryView.vue';

const routes = [
  {
    path: '/',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/call',
    name: 'call',
    component: CallView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
