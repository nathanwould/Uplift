export const config = {
  method: 'GET',
  headers: {
    "api_key": "972878c238fd414fb48e31dcbd009035"
  },
  // mode: "cors",
  body: JSON.stringify(),
};

const params = { "api_key": "972878c238fd414fb48e31dcbd009035" };

export const trainPositions = `https://api.wmata.com/TrainPositions/TrainPositions?contentType="json"`;