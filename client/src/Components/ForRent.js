import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { houseForRentAction } from "../store/Actions/HouseFetchAction";

const ForRent = () => {
  const dispatch = useDispatch();
  const { loading, error, houseForRentList } = useSelector(
    (state) => state.houseForRent
  );

  useEffect(() => {
    dispatch(houseForRentAction());
  }, [dispatch]);

  return (
    <div className="Houses_container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        houseForRentList.map((house) => (
          <div className="HouseListing_Container" key={house.id}>
            <p>Price: {house.price}</p>
            <p>City: {house.city}</p>
            <p>Province: {house.province}</p>
            <p>Bedrooms: {house.numOfBedRooms}</p>
            <p>Bathrooms: {house.numOfBathRooms}</p>
            <p>Garages: {house.numOfGarages}</p>
            <p>Sale or Rent: {house.isSaleOrRent}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ForRent;
