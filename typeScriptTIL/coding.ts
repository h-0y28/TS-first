type Player = {
  name: string;
  age?: number;
};

function PlayerMaker(name: string) {
  return {
    name,
  };
}
