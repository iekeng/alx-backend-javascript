function getPaymentTokenFromAPI(success){
  const customPromise = new Promise((resolve, reject)=>{
    if (success == true){
      resolve({data: 'Successful response from the API' });
    }else{
      //do nothing
      resolve();
    }
  });
  return customPromise;
}

module.exports = getPaymentTokenFromAPI;
