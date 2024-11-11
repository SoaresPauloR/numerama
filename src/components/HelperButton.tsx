import Cell from '@/types/Cell';
import HelperButtonProps from '@/types/HelperButtonsProps';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const HelperButton = ({
  collection,
  clicked,
  setClicked,
  checkNumber,
  setCollectionMiddleware,
}: HelperButtonProps) => {
  const [cooldown, setCooldown] = useState(0); // Tempo de cooldown em segundos

  useEffect(() => {
    let intervalo = null;

    if (cooldown > 0) {
      intervalo = setInterval(() => {
        setCooldown((tempoAtual) => tempoAtual - 1);
      }, 1000);
    }

    if (intervalo) {
      return () => clearInterval(intervalo);
    }
  }, [cooldown]);

  const helper = () => {
    let help = true;
    setCooldown(30);

    if (clicked) setClicked(null);

    collection.forEach((a) => {
      if (help && a.status) {
        collection.forEach((b) => {
          if (help && b.status && a.index !== b.index && checkNumber(a, b)) {
            setHelp(a, b);
            help = false;

            return;
          }
        });
      } else {
        return;
      }
    });
  };

  const setHelp = (a: Cell, b: Cell) => {
    const newCollection = [...collection];

    newCollection[a.index] = {
      ...collection[a.index],
      help: true,
    };

    if (b)
      newCollection[b.index] = {
        ...collection[b.index],
        help: true,
      };

    setCollectionMiddleware([...newCollection]);
    setClicked(null);
  };

  return (
    <button
      disabled={cooldown > 0 ? true : false}
      onClick={helper}
      className=""
    >
      {cooldown > 0 ? (
        <Image
          src="/src/images/hourglass.png"
          width={24}
          height={24}
          alt="Plus"
        />
      ) : (
        <Image
          src="/src/images/lightbulb.png"
          width={24}
          height={24}
          alt="Plus"
        />
      )}
    </button>
  );
};
