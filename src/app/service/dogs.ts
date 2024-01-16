export type Dog = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
  img: string;
};

export async function getDogs(): Promise<Dog[]> {
  const response = await fetch('https://api.thedogapi.com/v1/breeds');
  const data = await response.json();

  const dogs = data.map((dog: any) => {
    return {
      id: dog.id,
      name: dog.name,
      temperament: dog.temperament,
      origin: dog.origin,
      description: dog.description,
      life_span: dog.life_span,
      img: dog.image.url,
    };
  });

  return dogs;
}

export async function getDog(id: string): Promise<Dog | undefined> {
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
  const data = await response.json();

  const dog = {
    id: data.id,
    name: data.name,
    temperament: data.temperament,
    origin: data.origin,
    description: data.description,
    life_span: data.life_span,
    img: data.image.url,
  };

  return dog;
}
