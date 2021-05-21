import { ButtonHTMLAttributes } from 'react';
import { VscLoading } from 'react-icons/vsc';

interface ContinueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ onClick, loading = false, ...rest }) => (
  <button
    type="button"
    className="py-3 px-8 text-gray-100 bg-blue-800 hover:bg-blue-900 disabled:opacity-50 rounded"
    onClick={onClick}
    data-testid="continue-button"
    {...rest}
  >
    {loading ? <VscLoading className="animate-spin" data-testid="loading" /> : 'Continue'}
  </button>
);

export default ContinueButton;
