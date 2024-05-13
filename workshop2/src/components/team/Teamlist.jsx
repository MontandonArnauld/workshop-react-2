function Teamlist() {
  const playersList = [
    {
      id: 1,
      name: "LEBRON JAMES",
      image: "/public/images/lebron-james.png",
      poste: "Ailier Fort",
      numero: "23",
    },
    {
      id: 2,
      name: "ANTHONY DAVIS",
      image: "/public/images/anthony-davis.png",
      poste: "Pivot",
      numero: "3",
    },
    {
      id: 3,
      name: "D'ANGELO RUSSEL",
      image: "/public/images/dangelo-russell.png",
      poste: "Meneur",
      numero: "1",
    },
    {
      id: 4,
      name: "AUSTIN REAVES",
      image: "/public/images/austin-reaves.png",
      poste: "Arrière",
      numero: "15",
    },
    {
      id: 5,
      name: "RUI HACHIMURA",
      image: "/public/images/rui-hachimura.png",
      poste: "Ailier",
      numero: "26",
    },
    {
      id: 6,
      name: "TAUREAN PRINCE",
      image: "/public/images/taurean-prince.png",
      poste: "Ailier",
      numero: "12",
    },
    {
      id: 7,
      name: "CHRISTIAN WOOD",
      image: "/public/images/christian-wood.png",
      poste: "Pivot",
      numero: "35",
    },
    {
      id: 8,
      name: "CAM REDDISH",
      image: "/public/images/cam-reddish.png",
      poste: "Ailier",
      numero: "5",
    },
    {
      id: 9,
      name: "JARRED VANDERBILT",
      image: "/public/images/jarred-vanderbilt.png",
      poste: "Ailier Fort",
      numero: "2",
    },
    {
      id: 10,
      name: "GABE VINCENT",
      image: "/public/images/rui-hachimura.png",
      poste: "Arrière",
      numero: "7",
    },
  ];

  return (
    <div>
      {playersList.map((player) => (
        <div key={player.id}>
          <img src={player.image} alt={player.name} />
          <h2>{player.name}</h2>
          <p>Poste : {player.poste}</p>
          <p>Numéro : {player.numero}</p>
        </div>
      ))}
    </div>
  );
}

export default Teamlist;
