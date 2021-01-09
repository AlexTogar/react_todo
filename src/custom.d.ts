module '*.svg' {
  const content: any;
  export default content;
}

interface Category {
  name: string;
  icon: string;
  selected: boolean;
  deletable: boolean;
  id: string;
}

interface Task {
  text: string;
  categoryId: string;
  completed: boolean;
  important: boolean;
  id: string;
}

interface Store {
  tasks: {
    id: string;
    text: string;
    important: boolean;
    completed: boolean;
    categoryId: string;
  }[];
  categories: {
    id: string;
    name: string;
    deletable: boolean;
    icon: string;
    selected: boolean;
  }[];
}

type Theme = 'light' | 'dark';
