/**
 * Created by Peter on 31/08/15.
 */
export const twitterResultsSimple = [
  {
    id: 2,
    image: 'https://pbs.twimg.com/profile_images/615392662233808896/EtxjSSKk_normal.jpg',
    author: 'Irfan',
    text: 'RT @VersatileStaff: #versatilestaff #frontendDeveloper #London #javaScript #ember #reactjs #angularjs ' +
          'Frontend Developer required for L…htt…',
    completed: true
  },
  {
    id: 1,
    image: 'http://pbs.twimg.com/profile_images/544034757730779136/-jOL7GnN_normal.jpeg',
    author: 'Javascript Digest',
    text: 'RT @LondonNewsUK: JavaScript Developer AngularJS - Start-up http://t.co/mg84kIifFx #London #UK #News',
    completed: false

  },
  {
    id: 0,
    image: 'http://pbs.twimg.com/profile_images/481334978161029120/iu3zZFEk_normal.png',
    author: 'Mean Magazine Bot',
    text: 'RT @23business: #startup #jobs : JavaScript Developer AngularJS - Start-up: London-London, JavaScript ' +
          'Developer / Programmer (... http://t.…',
    completed: false
  }
];

export const twitterResultsAll = [];

export function randomResponse() {
  const maxRowsUpto10 = Math.floor((Math.random() * 10) +1 );
  let i = 0;
  const response = [];
  while (i !== maxRowsUpto10){
    const indexBetween0to2 = Math.floor((Math.random() * 10) % 3);
    response.push(twitterResultsSimple[indexBetween0to2]);
    i++;
  }
  return response
}

