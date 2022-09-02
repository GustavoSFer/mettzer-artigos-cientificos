const key = 'WR13FAo0gcLvO5h2eKwrs7j8PXyHdktV';

const RequestApi = async (search) => {
  const respons = await fetch(`https://core.ac.uk:443/api-v2/search/${search}?apiKey=${key}`);
  const result = await respons.json();
  return result.data;
};

export default RequestApi;
