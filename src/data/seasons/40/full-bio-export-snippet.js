// Snippet for full cast bio https://www.cbs.com/shows/survivor/cast/216305/
(function () {
  let item = $('.cast-bio');
  const name = $('.cast-title').text().trim().replace('"', '').replace('"', '');
  const description = item.text().trim().split('\n').filter(line => !!line).map(line => line.trim()).slice(0, 8);
  const hometown = description[0].replace('Hometown: ', '');
  const currentResidence = description[1].replace('Current residence: ', '');
  const previousSeasons = description[2].replace('Previous seasons: ', '').replace('Previous season: ', '');
  const occupation = description[3].replace('Occupation: ', '');
  const hobbies = description[4].replace(/^Hobbies\ /i, 'XXXXXXXXXXXX');
  const petPeeves = description[5].replace('Pet peeves: ', '').replace('Pet peeve: ', '');
  const threeWords = description[6].replace('Three words to describe you: ', '');
  console.log(JSON.stringify({
    name,
    hometown,
    currentResidence,
    previousSeasons,
    occupation,
    hobbies,
    petPeeves,
    threeWords,
    description: [
      [description[7], description[8]].join('\n'),
      [description[9], description[10]].join('\n'),
      [description[11], description[12]].join('\n'),
      [description[13], description[14]].join('\n'),
      [description[15], description[16]].join('\n'),
      [description[17], description[18]].join('\n'),
      [description[19], description[20]].join('\n'),
    ].join('\n')
  }, null, 2));
})()

// --------------------------------------------------------------------


// Snippet for https://www.cbs.com/shows/survivor/photos/1008880/who-s-in-the-cast-of-survivor-season-40-winners-at-war-
Array.from($('.grid-view-item').slice(1, 21)).map(item => {
  const name = $(item).find('h2').text().trim().replace('"', '').replace('"', '');
  const description = $(item).find('.description').text().trim().split('\n').filter(line => !!line).map(line => line.trim()).slice(0, 8);
  const hometown = description[0].replace('Hometown: ', '');
  const currentResidence = description[1].replace('Current residence: ', '');
  const previousSeasons = description[2].replace('Previous seasons: ', '').replace('Previous season: ', '');
  const occupation = description[3].replace(/occupation\:/gi, '');
  return { name, hometown, currentResidence, previousSeasons, occupation, description: `${description[4]}\n${description[5]}\n\n${description[6]}\n${description[7]}` };
});