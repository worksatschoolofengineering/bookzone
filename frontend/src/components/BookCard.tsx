import { Book } from '../types/Book';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

export const BookCard = ({ book, onAddToCart }: BookCardProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/book-placeholder.png';
    e.currentTarget.onerror = null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/book/${book.id}`}>
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
          <img 
            src={book.coverImage} 
            alt={book.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-gray-300 dark:text-gray-600" />
          </div>
          {!book.inStock && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              Out of Stock
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/book/${book.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{book.title}</h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{book.author}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 dark:text-blue-400 font-bold">${book.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(book)}
            className={`px-4 py-2 rounded-md transition-colors ${
              book.inStock 
                ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
            disabled={!book.inStock}
          >
            {book.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};