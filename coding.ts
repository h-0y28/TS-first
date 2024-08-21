type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

type Player = {
  nickname: string;
  team: Team;
  health: Health;
};

const nico: Player = {
  nickname: "nico",
  team: "blue",
  health: 5,
};
