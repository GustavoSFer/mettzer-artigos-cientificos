const key = 'WR13FAo0gcLvO5h2eKwrs7j8PXyHdktV';

const RequestApi = async (search, page) => {
  const respons = await fetch(`https://core.ac.uk:443/api-v2/search/${search}?page=${page}&pageSize=10&apiKey=${key}`);
  const result = respons.json();
  console.log(result);
};

export default RequestApi;
