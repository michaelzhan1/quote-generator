export async function fetchQuote(queryParams) {
  const queryString = new URLSearchParams(queryParams).toString()
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes?${queryString}&limit=1`, {
      headers: {
        'X-Api-Key': process.env.QUOTE_API_KEY,
      },
      cache: 'no-store',
  });
  const data = await response.json()
  return data;
}


export async function fetchImage(queryParams) {
  const queryString = new URLSearchParams(queryParams).toString()
  const response = await fetch(`https://api.unsplash.com/photos/random?${queryString}`, {
    headers: {
      'Accept-Version': 'v1',
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    }
  });
  const data = await response.json()
  return data;
}