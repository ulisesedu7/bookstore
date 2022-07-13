import { v4 as uuidv4, v4 } from "uuid";

const initialData = {
  books: [
    {
      title: 'The Lion, the Witch and the Wardrobe',
      author: 'C. S. Lewis',
      genre: 'Fantasy',
      id: v4(),
    },
    {
      title: 'La Sombra del Viento',
      author: 'Carlos Ruiz Zafón',
      genre: 'Novel',
      id: v4(),
    },
    {
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      genre: 'Novel',
      id: v4(),
    }
  ],
  categories: [],
}

export default initialData;