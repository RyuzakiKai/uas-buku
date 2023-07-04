<template>
  <div>
    <div class="card-title">
      <h1>Buku List</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form class="d-flex">
            <router-link class="button button-add" :to="`/insert-kategori/`">Tambah Kategori</router-link>
          </form>
        </div>
      </div>
    </div>

    <div class="card-container">
      <div class="card" v-for="(data, index) in category" :key="data.id">

        <p class="title">{{ data.kode }}</p>
        <div class="card-hidden">
          <p class="title-in">Kode: {{ data.kode }}</p>
          <p>{{ data.kategori }}</p>
          <div class="card-body">
            <router-link class="button-edit" :to="`/edit-kategori/`+data.id">Edit</router-link>
            <button class="button-delete" role="button" @click="hapusKategori(data.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  data() {
    return {
      category: ref([]),
    };
  },
  mounted() {
    this.getKategoriList();
  },
  methods: {
    getKategoriList() {
      axios
          .get('https://mhdrmaulana.my.id/perpustakaan/select_kategori.php')
          .then(response => {
            this.category = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    hapusKategori(id) {
      axios
          .delete(`https://mhdrmaulana.my.id/perpustakaan/delete_kategori.php?id=${id}`)
          .then(response => {
            console.log(response.data);
            this.getKategoriList();
          })
          .catch(error => {
            console.log(error);
          });
    },
  },
};
</script>

<style>
.container {
  position: relative;
  width: 190px;
  height: 254px;
}

.card {
  top: -90px;
  position: relative;
  height: 420px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #232323;
  padding: 16px;
  border: 1px solid #232323;
  transition: all .5s ease-in-out;
  overflow: hidden;
  bottom: 40px;
}

.card-hidden {
  display: flex;
  transform: translateY(200%);
  flex-direction: column;
  gap: .1rem;
  transition: transform .5s ease-in, opacity .3s ease-in;
  opacity: 0;
  backdrop-filter: blur(10px);
}

/*Hovers*/
.card:hover {
  border-color: #5bc0eb;
}

.card:hover .card-hidden {
  transform: translateY(0);
  opacity: 1;
}

.card:hover .title {
  transform: translateY(200%);
}

/*Text*/
.title {
  position: absolute;
  bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  transition: transform .25s ease-out;
}

.title-in {
  font-weight: 700;
  font-size: 1.25rem;
}

.img-card{
  position: absolute;
  transition: transform .25s ease-out;
}


/*Button*/
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

.button-edit {
  align-items: center;
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
  margin-left: 10px;
  margin-right: 35%;
}

.button-edit:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-edit:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-edit:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

.button-delete {
  align-items: center;
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
}

.button-delete:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-delete:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-delete:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
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

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  margin-left: 200px;
  margin-right: 200px;
}

.card {
  flex-basis: calc(33.33% - 1rem);
}
</style>

