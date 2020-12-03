import React, {useEffect, useState} from 'react';
import Card from './Card'

function App() {
  let teams = [
    {name: 'Arsenal', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'},
    {name: 'A.C. Milan', badge: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg'},
    {name: 'Bayern Munich', badge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png'},
    {name: 'Manchester United', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png'},
    {name: 'Liverpool', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png'},
    {name: 'Chelsea', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png'},
    {name: 'Manchester City', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png'},
    {name: 'Juventus', badge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/1200px-Juventus_FC_2017_icon_%28black%29.svg.png'},
    {name: 'Inter Milan', badge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/FC_Internazionale_Milano_2014.svg/1200px-FC_Internazionale_Milano_2014.svg.png'},
    {name: 'Borussia Dortmund', badge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png'},
    {name: 'Paris Saint Germain', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png'},
    {name: 'Barcelona', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'},
    {name: 'Real Madrid', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'},
    {name: 'Ajax', badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/1200px-Ajax_Amsterdam.svg.png'},
  ]

  const [cards, setCards] = useState(teams);
  const [correctCards, setCorrectCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function randomize(){
    // document.querySelectorAll('.card').forEach(card=>card.style.order=(Math.floor(Math.random() * (13 - 0) + 0)))
    let newTeams = [];
    let deck = [...teams];
    while(deck.length){
      let i = Math.floor(Math.random()*deck.length);
      if(newTeams.indexOf(deck[i]) === -1){
        newTeams.push(deck[i]);
        deck.splice(i,1);
      }
    }
    return newTeams
  }
  
  function clickCard(event){
    let team = event.currentTarget.id;
    if(correctCards.indexOf(team) === -1){
      setScore(score+1)
      correctCards.push(team);
    }else{
      if(score>highScore)setHighScore(score);
      setScore(0);
      setCorrectCards([]);
    }
    setCards(randomize());
  }

  const teamList = cards.map((team) =>
    <Card
      key ={team.name}
      name={team.name}
      badge={team.badge}
      onClick={clickCard}
  />
  );

  useEffect(()=>{
    setCards(randomize());
  }, []);

  return (
    <div className="App">
      <p>{score}</p>
      <p>{highScore}</p>
      <div className='teamContainer'>
        {teamList}
      </div>
    </div>
  );
}

export default App;
