const express = require('express');
const fs = require('fs');



var router = express.Router();
const filePath = './data/carsData.json'

/// Rota para o endpoint GET que lê os dados do arquivo JSON
router.get('/', (req, res) => {
  fs.readFile('./data/carsData.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao ler arquivo JSON' });
    }

    try {
      const cars = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      res.json(cars); // Retorna os dados como JSON na resposta
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao analisar arquivo JSON' });
    }
  });
});

  // Rota para o endpoint POST que adiciona dados ao arquivo JSON
router.post('/', (req, res) => {
  // Lê o conteúdo atual do arquivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao ler arquivo JSON' });
    }

    try {
      const cars = JSON.parse(data); // Transforma o conteúdo em um objeto JavaScript
      const newCar = req.body; // Obtém o novo objeto de carro a partir do corpo da requisição

      // Adiciona o novo carro ao array de carros
      cars.push(newCar);

      // Escreve o novo conteúdo no arquivo JSON
      fs.writeFile(filePath, JSON.stringify(cars), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Erro ao escrever arquivo JSON' });
        }

        res.json(newCar); // Retorna o novo carro como resposta
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao analisar arquivo JSON' });
    }
  });
});

// Rota DELETE para remover um carro pelo ID
router.delete('/:id', (req, res) => {
  const carId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    let carsData = JSON.parse(data);

    // Procura o carro pelo ID
    const carIndex = carsData.findIndex(car => car.id === carId);
    if (carIndex === -1) {
      return res.status(404).json({ message: 'Car not found' });
    }

    // Remove o carro do array
    carsData.splice(carIndex, 1);

    // Reorganiza os IDs dos carros restantes
    carsData.forEach((car, index) => {
      car.id = index + 1; // IDs começam de 1, não de 0
    });

    // Escreve os dados atualizados no arquivo JSON
    fs.writeFile(filePath, JSON.stringify(carsData), err => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }

      res.json({ message: 'Car removed successfully' });
    });
  });
});

// Rota para lidar com solicitações GET para carros individuais com um ID específico
router.get('/:id', (req, res) => {
  const carId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    let carsData = JSON.parse(data);

    // Procura o carro pelo ID
    const car = carsData.find(car => car.id === carId);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json(car); // Retorna os dados do carro com o ID especificado
  });
});

// Rota PUT para atualizar os dados de um carro pelo ID
router.put('/:id', (req, res) => {
  const carId = parseInt(req.params.id);

  // Lê o arquivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    try {
      let carsData = JSON.parse(data);

      // Procura o carro pelo ID
      const carIndex = carsData.findIndex(car => car.id === carId);
      if (carIndex === -1) {
        return res.status(404).json({ message: 'Car not found' });
      }

      const updatedCar = req.body; // Dados atualizados do carro fornecidos no corpo da requisição

      // Atualiza os dados do carro no array
      carsData[carIndex] = { ...carsData[carIndex], ...updatedCar };

      // Escreve os dados atualizados no arquivo JSON
      fs.writeFile(filePath, JSON.stringify(carsData), err => {
        if (err) {
          return res.status(500).json({ message: 'Internal server error' });
        }

        res.json({ message: 'Car updated successfully', car: carsData[carIndex] });
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error parsing JSON file' });
    }
  });
});

module.exports = router;
