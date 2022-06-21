export const config = {
  method: 'GET',
  headers: {
    "api_key": `${process.env.REACT_APP_API_KEY}`,
  },
  body: JSON.stringify(),
};

export const trainPositions = `${process.env.REACT_APP_TRAIN_POSITIONS_ENDPOINT}`;