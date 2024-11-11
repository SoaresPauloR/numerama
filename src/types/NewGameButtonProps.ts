import { EnumModes } from '@/interfaces/Modes';

type NewGameButtonProps = {
  middlewareInit: (selected: keyof typeof EnumModes) => void;
};

export default NewGameButtonProps;
