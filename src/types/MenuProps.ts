type MenuProps = {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  newGame: () => void;
};

export default MenuProps;
