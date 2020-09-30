import { NEW_QUOTE } from "../constants";

const createRandomNumber = () => Math.floor(Math.random() * 256);

const createColors = () => {
  let red = createRandomNumber();
  let green = createRandomNumber();
  let blue = createRandomNumber();

  return `rgb(${red}, ${green}, ${blue})`;
};

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const initialState = {
  index: 0,
  quotes: [],
  color: createColors(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      let { index, quotes } = state;
      if (index === quotes.length - 1) {
        shuffleArray(quotes);
        index = 0;
      } else {
        index++;
      }
      let quote = quotes[index];
      let color = createColors();
      return {
        ...state,
        index,
        quote,
        color,
      };
    default:
      return state;
  }
};

export default reducer;
