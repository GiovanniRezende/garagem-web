<template>
  <div>

    <header>
      <h1>Garagem</h1>
    </header>


    <main>

      <div class="card-container">
        <!-- Exemplo de um cartão de veículo -->
        <div class="card">
          <img src="caminho_da_imagem" alt="Imagem do Veículo" />
          <h2>Veículo</h2>
          <div class="details">
            <div><strong>Categoria:</strong> Categoria do Veículo</div>
            <div><strong>Marca:</strong> Marca do Veículo</div>
            <div><strong>Modelo:</strong> Modelo do Veículo</div>
            <div><strong>Cor:</strong> Cor do Veículo</div>
            <div><strong>Acessório:</strong> Acessório do Veículo</div>
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
  flex-basis: calc(33.33% - 20px); 
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

img {
  max-width: 100%;
}

.details {
  margin-top: 10px;
}
</style>
