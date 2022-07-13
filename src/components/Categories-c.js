import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const statusCheck = () => {
    dispatch(checkingStatus());
  };

  return (
    <div>
      <button type="button" onClick={statusCheck}>Check Status</button>
      <div>{categories}</div>
    </div>
  );
};

export default Categories;
