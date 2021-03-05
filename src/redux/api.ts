function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{name: 'Mist', date: '12.05.2004'}, {name: '1408', date: '8.11.2016'}, {name: 'Alien', date: '22.09.1978'}]);
    }, 5000);
  });
}

export default getList;
