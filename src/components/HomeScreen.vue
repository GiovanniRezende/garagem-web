<script>
import api from '@/plugins/axios';

export default {
  data() {
    return {
      veiculos: [],
      cores: [],
      acessorios: [],
    };
  },
  mounted() {
    this.carregarVeiculos();
    this.carregarCores();
    this.carregarAcessorios();
  },
  methods: {
    async carregarVeiculos() {
      try {
        const response = await api.get('/api/veiculos/');
        this.veiculos = response.data;
      } catch (error) {
        console.error('Erro ao carregar veículos', error);
      }
    },
    async carregarCores() {
      try {
        const response = await api.get('/api/cores/');
        this.cores = response.data;
      } catch (error) {
        console.error('Erro ao carregar cores', error);
      }
    },
    async carregarAcessorios() {
      try {
        const response = await api.get('/api/acessorios/');
        this.acessorios = response.data;
      } catch (error) {
        console.error('Erro ao carregar acessórios', error);
      }
    },
  },
};
</script>

<template>
  <div>
    <header>
      <h1>Garagem do Giovanni Gay</h1>
    </header>
    <main>
      <div v-for="veiculo in veiculos" :key="veiculo.id" class="card-container">
        <div class="card">
          <h2>{{ veiculo.descricao }}</h2>
          <img :src="veiculo.image_url" alt="Imagem do Veículo" />
          <div class="details">
            <div><strong>Categoria:</strong> {{ veiculo.categorias }}</div>
            <div><strong>Descrição:</strong> {{ veiculo.descricao }}</div>
            <div><strong>Modelo:</strong> {{ veiculo.modelo }}</div>
            <div><strong>Cores:</strong>
              <div v-for="cor in cores" :key="cor.id">
                {{ cor.descricao }}
              </div>
            </div>
            <div><strong>Ano:</strong> {{ veiculo.ano }}</div>
            <div><strong>Preço:</strong> R$ {{ veiculo.preco }}</div>
            <div><strong>Acessórios:</strong>
              <div v-for="acessorio in acessorios" :key="acessorio.id">
                {{ acessorio.descricao }}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </main>
  </div>
</template>
<style scoped>
header {
  text-align: center;
  background-color: #333;
  color: white;
  padding: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
  width: 350px;
}

img {
  max-width: 100%;
}

.details {
  margin-top: 10px;
}
</style>
