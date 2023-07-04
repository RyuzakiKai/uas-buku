import { createRouter, createWebHistory } from 'vue-router'
// import BookView from '../views/BukuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BukuView',
      component: () => import('../views/BukuView.vue')
    },
    {
      path: '/kategori',
      name: 'KategoriView',
      component: () => import('../views/kategoriView.vue')
    },
    {
      path: '/anggota',
      name: 'AnggotaView',
      component: () => import('../views/AnggotaView.vue')
    },
    {
      path: '/edit-buku/:id',
      name: 'EditBuku',
      component: () => import('../components/UpdateBuku.vue')
    },
    {
      path: '/edit-anggota/:id',
      name: 'EditAnggota',
      component: () => import('../components/UpdateAnggota.vue')
    },
    {
      path: '/edit-kategori/:id',
      name: 'EditKategori',
      component: () => import('../components/UpdateKategori.vue')
    },
    {
      path: '/insert-buku',
      name: 'InsertBuku',
      component: () => import('../components/InsertBuku.vue')
    },
    {
      path: '/insert-anggota',
      name: 'InsertAnggota',
      component: () => import('../components/InsertAnggota.vue')
    },
    {
      path: '/insert-kategori',
      name: 'InsertKategori',
      component: () => import('../components/InsertKategori.vue')
    },
    {
      path: '/peminjaman-master',
      name: 'PeminjamanMaster',
      component: () => import('../components/PeminjamanMaster.vue')
    },
    {
      path: '/peminjaman-view',
      name: 'PeminjamanView',
      component: () => import('../views/PeminjamanView.vue')
    },
    {
      path: '/peminjaman-detail/:id',
      name: 'PeminjamanDetail',
      component: () => import('../views/PeminjamanDetailView.vue')
    }
  ]
})

export default router
