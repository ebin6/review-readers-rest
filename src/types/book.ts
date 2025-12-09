export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  photo: string;
  birthDate?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Book {
  id: string;
  title: string;
  author: Author;
  category: Category;
  description: string;
  coverImage: string;
  publishedDate: string;
  isbn: string;
  pages: number;
  averageRating: number;
}

export interface Review {
  id: string;
  book: Book;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}
