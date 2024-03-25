import axios from 'axios';

const useHoteheelsApi = () => {
  const getAllCarHotwheels = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getCar = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateCar = async (car) => {
    try {
      console.log(car.id);
      await axios.put(`http://localhost:5000/cars/${car.id}`, car);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getAllCarHotwheels, getCar, updateCar, deleteCar };
};

export default useHoteheelsApi;
