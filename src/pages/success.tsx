import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import { useAppSelector } from '../hooks';

const Success: React.FC = () => {
  const data = useAppSelector((state) => state.data);
  const selectedCountry = useAppSelector((state) => state.selection.country);
  const selectedOperator = useAppSelector((state) => state.selection.operator);
  const selectedProduct = useAppSelector((state) => state.selection.product);
  const settedPhoneNumber = useAppSelector((state) => state.selection.phone);

  const renderOperatorName = () => {
    const chosenOperator = data.operators.filter((operator) => operator.id === selectedOperator);

    if (chosenOperator.length === 0) return null;

    return chosenOperator[0].name;
  };

  const renderCountryName = () => {
    const chosenCountry = data.countries.filter((country) => country.iso === selectedCountry);

    if (chosenCountry.length === 0) return null;

    return chosenCountry[0];
  };

  return (
    <>
      <Head>
        <title>Top-up Successful</title>
      </Head>

      <main className="h-screen flex items-stretch relative">
        <div className="bg-phone-topup flex-1 bg-cover" />
        <div className="absolute bg-gray-100 text-blue-800 w-screen md:w-1/2 h-4/5 md:inset-x-1/4 top-9 min-w-max-content flex flex-col justify-evenly items-center">
          <IoMdCheckmarkCircleOutline className="text-green-400 w-36 h-36" />
          <strong>Success!</strong>
          <p>You succesfully done a mobile top-up!</p>
          <div>
            <span className="block">
              <strong>Country: </strong>
              {renderCountryName()?.name}
            </span>
            <span className="block">
              <strong>Phone: </strong>
              {`${renderCountryName()?.prefix} ${settedPhoneNumber}`}
            </span>
            <span className="block">
              <strong>Operator: </strong>
              {renderOperatorName()}
            </span>
            <span className="block">
              <strong>Product: </strong>
              {selectedProduct}
            </span>
          </div>
          <strong>Do you want to make another top-up?</strong>
          <Link href="/">
            <button
              type="submit"
              className="py-3 px-8 text-gray-100 bg-blue-800 hover:bg-blue-900 rounded block"
            >
              Click here
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Success;
