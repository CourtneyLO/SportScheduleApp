import mongoose from 'mongoose';
import Tournament from './models/Tournament.js';

const sportTournaments = [
  {
    title: "Super Rugby",
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/SupeRugby_Logo.svg/1024px-SupeRugby_Logo.svg.png',
    dates: "23 February 2017 - 5 August 2017"
  },
  {
    title: "Rugby Championship",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyyGx5bsEdlRKP8xqJkyUFYXBA_g59qXwIM8jqcB-k87kTLIRW",
    dates: "19 August 2017 - 16 September 2017"
  },
  {
    title: "Springboks",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/South_Africa_national_rugby_union_team.svg/1280px-South_Africa_national_rugby_union_team.svg.png",
    dates: "10 June 2017 - 25 November 2017"
  },
  {
    title: "Curry Cup Rugby",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Currie_cup_logo.jpg/250px-Currie_cup_logo.jpg",
    dates: "5 August 2017 - 15 October 2017"
  },
  {
    title: "Sevens Rugby",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f3/World_Rugby_Sevens_Series_logo.png",
    dates: "28 January 2017 - 21 May 2017"
  },
];

mongoose.connect("mongodb://localhost/tournament")

sportTournaments.map(data => {
  const tournament = new Tournament(data);
  tournament.save();
});
