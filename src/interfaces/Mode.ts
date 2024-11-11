import Cell from '@/types/Cell';

interface Mode {
  name: string;
  generate(): Array<Cell>;
}

export default Mode;
