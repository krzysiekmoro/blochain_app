// @ts-nocheck

const url =
  'https://cors-anywhere.herokuapp.com/https://api.tokenguard.io/db-api/growth-index/basic-timeline-data';
const config = {
  method: 'POST',
  body: {
    chainName: 'ethereum',
    period: 'last year',
    metric: 'tg_growth_index',
    compareWith: ['solana'],
  },
};

export const loadData = async (): Promise<Response> => {
  const response = await fetch(url, config);
  return await response.json();
};
