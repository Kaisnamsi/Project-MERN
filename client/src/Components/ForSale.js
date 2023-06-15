import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { houseForSaleAction } from "../store/Actions/HouseFetchAction";

const ForSale = () => {
  const dispatch = useDispatch();
  const { loading, error, houseForSaleList } = useSelector(
    (state) => state.houseForSale
  );

  useEffect(() => {
    dispatch(houseForSaleAction());
  }, [dispatch]);

  return (
    <div className="Houses_container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        houseForSaleList.map((house) => (
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

export default ForSale;
