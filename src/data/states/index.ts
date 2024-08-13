import states from './states.json';

export const brazilStates = states.map((state) => {
  return {
    label: state.nome,
    value: state.sigla,
  };
});
