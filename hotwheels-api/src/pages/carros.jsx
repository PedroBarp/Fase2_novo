import React from 'react';
import useHoteheelsApi from '../hooks/useHotwheelsApi';
import useHotwheels from '../hooks/useHotwheels';
import NavBar from '../components/navBar/navbar';
import ListCar from '../components/CarroLista/listCar';

function AddCar() {
  const { data } = useHotwheels('http://localhost:5000/cars');
  const { deleteCar } = useHoteheelsApi();

  const handleDelete = async (id) => {
    try {
      await deleteCar(id);
      window.location.reload();
    } catch (error) {
      console.log('Erro ao deletar carro', error);
    }
  };

  return (
    <>
      <NavBar />
      <ListCar data={data} handleDelete={handleDelete} />
    </>
  );
}

export default AddCar;
