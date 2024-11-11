import { EnumModes } from '@/interfaces/Modes';

type MenuProps = {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  middlewareInit: (selected: keyof typeof EnumModes) => void;
};

export default MenuProps;
