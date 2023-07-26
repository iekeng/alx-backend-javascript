export default function getResponseFromAPI(){
  const promise = new Promise((resolve, reject) => 
    resolve('resolved')
  );
  return promise;
}
