export const useToggle = (state: false) => {
  let res: boolean = state;
  const toggle = () => {
    res = !state;
  };
  return [res, toggle];
};
