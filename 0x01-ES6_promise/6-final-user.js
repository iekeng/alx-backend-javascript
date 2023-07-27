import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const regPromise = signUpUser(firstName, lastName);
  const upPromise = uploadPhoto(fileName);

  return Promise.allSettled([regPromise, upPromise])
    .then((result) => result);
}
