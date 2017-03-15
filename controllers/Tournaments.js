import Tournament from './models/Tournaments';

export const index = (req, res, next) => {
  Tournament.find().lean().exec(err, tournaments) => res.json(
    {tournaments: tournaments.map(tournament =>
      ...tournaments
    }))}
  })
};
