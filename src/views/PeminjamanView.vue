<template>
  <div>
    <h1 class="card-header">Status Peminjaman</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <select class="form-control" @change="getPeminjamanList" v-model="status">
            <option value="DIPINJAM">DIPINJAM</option>
            <option value="DIKEMBALIKAN">DIKEMBALIKAN</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row mt-5 justify-content-center">
      <div class="col-lg-4 col-md-6" v-for="(data, index) in peminjaman" :key="data.id">
        <div class="card mb-3">
          <div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Status: {{ data.status_peminjaman }}</li>
              <li class="list-group-item">Nama Anggota: {{ data.nomor_anggota}}</li>
              <li class="list-group-item">Tanggal Peminjaman: {{ data.tanggal_peminjaman }}</li>
            </ul>
          </div>
        </div>
        <div class="card mb-3">
          <div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Tanggal Pengembalian: {{ data.tanggal_pengembalian }}</li>
              <li class="list-group-item">Durasi Keterlambatan: {{ data.durasi_keterlambatan }}</li>
              <li class="list-group-item">
                <router-link class="button-edit" :to="`/peminjaman-detail/`+data.id">Detail</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';

export default {
  data() {
    return {
      peminjaman: ref([]),
      status: ref('DIPINJAM'),
    };
  },
  mounted() {
    this.getPeminjamanList();
  },
  methods: {
    getPeminjamanList() {
      axios
          .get('https://mhdrmaulana.my.id/library/daftar_peminjaman_buku.php?status=' + this.status)
          .then(response => {
            this.peminjaman = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style>

.card-header{
  text-align: center;
  margin-bottom: 50px;
  margin-top: 70px;
  text-align: center;
}

.button {
  display: inline-flex;
  justify-content: center;
  padding: 8px;
  border-radius: 24px;
  font-weight: 600;
  background-color: #5bc0eb;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}

.button:hover {
  background-color: #53aed4;
}

.button-add {
  align-items: center;
  margin-top: 50px;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  margin-bottom: 50px;

}

.button-add:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-add:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-add:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>