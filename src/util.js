export const waitTime = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

export const httpGet = async (url) => {
  await waitTime(Math.random() * 2000);
  const response = await fetch(url, {
    method: 'GET',
    mode: 'same-origin',
  });
  try {
    const persons = response.json();
    return persons;
  } catch (e) {
    throw new Error(e);
  }
}