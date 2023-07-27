export default function uploadPhoto(filename) {
  const promise = new Promise((reject) => reject(Error(`${filename} cannot be processed`)));
  return promise;
}
