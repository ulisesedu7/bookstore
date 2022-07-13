import { v4 } from 'uuid';

const initialData = {
  books: [
    {
      title: 'The Lion, the Witch and the Wardrobe',
      author: 'C. S. Lewis',
      id: v4(),
    },
    {
      title: 'La Sombra del Viento',
      author: 'Carlos Ruiz Zafón',
      id: v4(),
    },
    {
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      id: v4(),
    },
  ],
  categories: [],
};

export default initialData;
