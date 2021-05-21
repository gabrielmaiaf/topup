import debounce from 'lodash.debounce';
import { ChangeEvent } from 'react';

import ContinueButton from './continue-button';

interface NumberPanelProps {
  phoneNumber?: number;
  onClick: () => void;
  handleOnChange: (arg0: number) => void;
}

const NumberPanel: React.FC<NumberPanelProps> = ({ phoneNumber, onClick, handleOnChange }) => {
  const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnChange(Number(e.target.value));
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-32 w-96 min-w-full">
      <strong>Enter the phone number that you want to topup</strong>
      <label htmlFor="number">
        <input
          id="number"
          type="number"
          onChange={debounce(handleTyping, 800)}
          placeholder="Phone number"
          defaultValue={phoneNumber}
          className="rounded-lg bg-gray-100 p-2"
        />
      </label>
      <ContinueButton onClick={onClick} disabled={!phoneNumber} />
    </section>
  );
};

export default NumberPanel;
