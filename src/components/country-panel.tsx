import type { ICountry } from '../types/api';
import ContinueButton from './continue-button';

interface CountryPanelProps {
  countries: ICountry[];
  selectedCountry: string;
  handleSelection: (arg0: string) => void;
  onClick: () => void;
}

const CountryPanel: React.FC<CountryPanelProps> = ({
  countries,
  selectedCountry,
  handleSelection,
  onClick,
}) => {
  const defaultSetting = selectedCountry === '';
  const renderOptions = () => {
    return countries.map((country) => (
      <option key={country.iso} value={country.iso}>
        {country.name}
      </option>
    ));
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-32 w-96 min-w-full">
      <strong>Select the country you want to topup a number</strong>
      <label htmlFor="country">
        <select
          id="country"
          data-testid="country-select"
          value={selectedCountry}
          placeholder="Select a country"
          className="rounded-lg bg-gray-100"
          onChange={(e) => handleSelection(e.target.value)}
        >
          <option disabled value="">
            Select a country
          </option>
          {renderOptions()}
        </select>
      </label>
      <ContinueButton onClick={onClick} disabled={defaultSetting} />
    </section>
  );
};

export default CountryPanel;
