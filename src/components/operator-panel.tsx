import type { IOperator } from '../types/api';
import ContinueButton from './continue-button';

interface OperatorPanelProps {
  operators: IOperator[];
  country: string;
  selectedOperator: string;
  handleSelection: (arg0: string) => void;
  onClick: () => void;
}

const OperatorPanel: React.FC<OperatorPanelProps> = ({
  operators,
  handleSelection,
  country,
  selectedOperator,
  onClick,
}) => {
  const defaultSetting = selectedOperator === '';
  const renderOptions = () => {
    const operatorsOptions = operators.filter((operator) => operator.iso === country);

    if (operatorsOptions.length === 0) return;

    return operatorsOptions.map((operator) => (
      <option key={operator.id} value={operator.id} data-testid="option-operator">
        {operator.name}
      </option>
    ));
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-32 w-96 min-w-full">
      <strong>Select the phone operator</strong>
      <label htmlFor="operator">
        <select
          id="operator"
          value={selectedOperator}
          placeholder="Select an operator"
          data-testid="operator-select"
          className="rounded-lg bg-gray-100"
          onChange={(e) => handleSelection(e.target.value)}
        >
          <option disabled value="" data-testid="option-operator">
            Select an operator
          </option>
          {renderOptions()}
        </select>
      </label>
      <ContinueButton onClick={onClick} disabled={defaultSetting} />
    </section>
  );
};

export default OperatorPanel;
