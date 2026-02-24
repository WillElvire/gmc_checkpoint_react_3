import Card from "react-bootstrap/Card";

export const players = [
  {
    name: "Messi",
    team: "PSG",
    nationality: "Argentina",
    jerseyNumber: 10,
    age: 35,
    image:
      "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg",
  },
  {
    name: "Ronaldo",
    team: "Man United",
    nationality: "Portugal",
    jerseyNumber: 7,
    age: 37,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg/299px-Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg",
  },
  {
    name: "Neymar",
    team: "PSG",
    nationality: "Brazil",
    jerseyNumber: 11,
    age: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_04_%28cropped%29.jpg",
  },
  {
    name: "Mbappe",
    team: "PSG",
    nationality: "France",
    jerseyNumber: 10,
    age: 23,
    image:
      "https://i.pinimg.com/originals/44/9f/3d/449f3d1bfda41a78379e2052a85cd9fa.jpg",
  },
];

export function PlayerComponent({ player }) {
  const { name, team, nationality, jerseyNumber, age, image } = player;

  return (
    <Card className="mb-3" style={{ width: "18rem", height: "30rem" }}>
      <Card.Body>
        <Card.Title>Player {name}</Card.Title>
        <Card.Img
          src={image}
          alt={name}
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <div className="mt-2 text-start">
          <p>Team: {team ?? "Unknown"}</p>
          <p>Nationality: {nationality ?? "Unknown"}</p>
          <p>Jersey Number: {jerseyNumber ?? "Unknown"}</p>
          <p>Age: {age ?? "Unknown"}</p>
        </div>
      </Card.Body>
    </Card>
  );
}
