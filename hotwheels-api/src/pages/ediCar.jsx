import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useHoteheelsApi from '../hooks/useHotwheelsApi';
import useHotwheels from '../hooks/useHotwheels';
import EditaCarro from '../components/editCar/editcars';

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateCar } = useHoteheelsApi();
  const { data, error } = useHotwheels(
    `http://localhost:5000/cars/ ${parseInt(id)}`,
  );
  const [car, setCar] = useState({
    name: '',
    brand: '',
    color: '',
    year: '',
  });

  useEffect(() => {
    if (!data || error) {
      navigate('/carros');
    } else {
      setCar(data);
    }
  }, [data, error, navigate]);

  const handleSaveCarro = async (car) => {
    try {
      console.log(car);
      await updateCar(car);
      navigate('/carros');
    } catch (e) {
      console.log('Error ao salvar:', e);
    }
  };

  const checkDados = () => {
    if (
      !car.name ||
      !car.brand ||
      !car.color ||
      !car.year ||
      car.year < 1886 ||
      car.year > anoAtual()
    ) {
      return true;
    }
  };

  const anoAtual = () => {
    return new Date().getFullYear();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const trimValue = value.trim();
    setCar((prevState) => ({
      ...prevState,
      [name]: trimValue,
    }));
  };

  return (
    <EditaCarro
      name={car.name}
      brand={car.brand}
      color={car.brand}
      year={car.year}
      car={car}
      handleInputChange={handleInputChange}
      handleSaveCarro={handleSaveCarro}
      anoAtual={anoAtual()}
      checkDados={checkDados()}
    />
  );
}

export default EditCar;
