import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { VscLoading } from 'react-icons/vsc';

// Components
import CountryPanel from '../components/country-panel';
import NumberPanel from '../components/number-panel';
import OperatorPanel from '../components/operator-panel';
import ProductsPanel from '../components/products-panel';
// Helpers
import { convertRemToPixels } from '../helpers/converters';
// Hooks
import { useAppDispatch, useAppSelector } from '../hooks';
// Actions
import fetchData from '../store/modules/data/thunk';
import {
  SelectCountry,
  SelectOperator,
  SelectProduct,
  SetPhoneNumber,
  SetStep,
} from '../store/modules/selection/action';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const data = useAppSelector((state) => state.data);
  const selectedCountry = useAppSelector((state) => state.selection.country);
  const selectedOperator = useAppSelector((state) => state.selection.operator);
  const selectedProduct = useAppSelector((state) => state.selection.product);
  const settedPhoneNumber = useAppSelector((state) => state.selection.phone);
  const currentStep = useAppSelector((state) => state.selection.step);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(SetStep(0));
  }, [dispatch]);

  const handleCountrySelection = (country: string) => {
    dispatch(SelectCountry(country));
    if (selectedOperator !== '') dispatch(SelectOperator(''));
    if (selectedProduct !== '') dispatch(SelectProduct(''));
  };

  const handlePhoneNumberSetting = (phone: number) => {
    dispatch(SetPhoneNumber(phone));
  };

  const handleOperatorSelection = (operator: string) => {
    dispatch(SelectOperator(operator));

    if (selectedProduct !== '') dispatch(SelectProduct(''));
  };

  const handleProductSelection = (product: string) => {
    dispatch(SelectProduct(product));
  };

  const handleContinue = () => {
    const el = document.getElementById('topup');

    if (!el) return;

    el.scrollLeft += convertRemToPixels(24);
    dispatch(SetStep(currentStep + 1));
  };

  const handleNextStepDisabled = () => {
    if (currentStep === 0 && selectedCountry === '') return true;

    if (currentStep >= 1 && !settedPhoneNumber) return true;

    if (currentStep >= 2 && selectedOperator === '') return true;

    if (currentStep >= 3) return true;

    return false;
  };

  const handleStepBack = () => {
    const el = document.getElementById('topup');

    if (!el) return;

    el.scrollLeft -= convertRemToPixels(24);
    dispatch(SetStep(currentStep - 1));
  };

  const handleFinish = () => {
    router.push('success');
  };

  const renderPanel = () => {
    if (data.error) {
      return (
        <div className="w-96 mx-auto h-screen relative flex flex-1 flex-col items-center justify-center">
          <strong className="mb-4">An error happened.</strong>
        </div>
      );
    }

    if (data.isRequesting) {
      return (
        <div className="w-96 mx-auto h-screen relative flex flex-1 flex-col items-center justify-center">
          <strong className="mb-4">Loading...</strong>
          <VscLoading className="animate-spin w-20 h-20" />
        </div>
      );
    }

    return (
      <div className="overflow-hidden w-96 mx-auto h-screen relative">
        <h1 className="text-xl text-center font-bold mt-8 uppercase">Mobile Top-up</h1>
        <div className="flex justify-between align-center mt-24">
          <button
            type="button"
            disabled={currentStep === 0}
            className="disabled:opacity-50"
            onClick={handleStepBack}
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            disabled={handleNextStepDisabled()}
            className="disabled:opacity-50"
            onClick={handleContinue}
          >
            <FaArrowRight />
          </button>
        </div>
        <div
          id="topup"
          className="flex flex-row overflow-x-hidden w-96 absolute top-1/4 h-4/6 panelContainer"
        >
          <CountryPanel
            countries={data.countries}
            selectedCountry={selectedCountry}
            handleSelection={handleCountrySelection}
            onClick={handleContinue}
          />
          <NumberPanel
            phoneNumber={settedPhoneNumber}
            handleOnChange={handlePhoneNumberSetting}
            onClick={handleContinue}
          />
          <OperatorPanel
            operators={data.operators}
            country={selectedCountry}
            selectedOperator={selectedOperator}
            handleSelection={handleOperatorSelection}
            onClick={handleContinue}
          />
          <ProductsPanel
            products={data.products}
            operator={selectedOperator}
            selectedProduct={selectedProduct}
            handleSelection={handleProductSelection}
            onClick={handleFinish}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Top-up</title>
      </Head>

      <main className="h-screen flex items-stretch">
        <div className="bg-phone-topup flex-1 bg-cover" />
        <div className="max-w-lg w-full bg-blue-200 text-blue-900">{renderPanel()}</div>
      </main>
    </>
  );
};

export default Home;
