<script>
import api from '@/plugins/axios';

export default {
  data() {
    return {
      veiculos: [],
      modelos: [],
      cores: [],
      acessorios: [],
      categorias: [],
      imagens: [],
    };
  },
  mounted() {
    this.carregarVeiculos();
    this.carregarCores();
    this.carregarAcessorios();
    this.carregarCategorias();
    this.carregarModelos();
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

    async carregarImagemVeiculo(veiculoId) {
      try {
        const response = await api.get(`/api/veiculos/${veiculoId}/imagem/`);
        return response.data.image_url;
      } catch (error) {
        console.error(`Erro ao carregar imagem do veículo ${veiculoId}`, error);
        return ''; 
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
    async carregarModelos() {
      try {
        const response = await api.get('/api/modelos/');
        this.modelos = response.data;
      } catch (error) {
        console.error('Erro ao carregar modelos', error);
      }
    },
    async carregarCategorias() {
      try {
        const response = await api.get('/api/categorias/');
        this.categorias = response.data;
      } catch (error) {
        console.error('Erro ao carregar categorias', error);
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
      <div class="card-container">
        <div v-for="veiculo in veiculos" :key="veiculo.id" class="card">
          <img :src="veiculo.image[0].file" alt="Imagem do Veículo" />

          <div><strong>Descrição:</strong> {{ veiculo.descricao }}</div>
          <div><strong>Categoria:</strong>
            <div v-for="veiculo in veiculos" :key="veiculo.id">
              {{ veiculos.categoria}}
            </div>
          </div>
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