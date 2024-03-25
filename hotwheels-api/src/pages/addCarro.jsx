import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar/navbar';
import AddCar from '../components/addCar/addCar';
import useHotwheels from '../hooks/useHotwheels';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCarro() {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { data } = useHotwheels(`http://localhost:5000/cars`);
  const [car, setCar] = useState(
    data || {
      name: '',
      brand: '',
      color: '',
      year: '',
    },
  );

  useEffect(() => {
    axios
      .get('http://localhost:5000/cars')
      .then((response) => {
        const lastCar = response.data[response.data.length - 1];
        const newId = lastCar ? lastCar.id + 1 : 1;
        setCar((prevState) => ({
          ...prevState,
          id: newId,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const handleSaveClick = () => {
    if (checkDados()) return;
    axios
      .post('http://localhost:5000/cars', car)
      .then(() => {
        setIsSaved(true);
        navigate('/carros');
      })
      .catch((error) => {
        console.log(isSaved);
      });
    setIsSaved(true);
    navigate('/carros');
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
    <>
      <NavBar />
      <AddCar
        name={car.name}
        brand={car.brand}
        color={car.color}
        year={car.year}
        handleInputChange={handleInputChange}
        anoAtual={anoAtual()}
        checkDados={checkDados()}
        handleSaveClick={handleSaveClick}
      />
    </>
  );
}

export default AddCarro;
