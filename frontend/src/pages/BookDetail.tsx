import { useParams } from 'react-router-dom';
import { books } from '../data/books';
import { Book } from '../types/Book';
import { BookOpen } from 'lucide-react';

interface BookDetailProps {
  onAddToCart: (book: Book) => void;
}

export const BookDetail = ({ onAddToCart }: BookDetailProps) => {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/book-placeholder.png';
    e.currentTarget.onerror = null;
  };

  if (!book) {
    return <div className="text-center py-8">Book not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-[400px] object-cover rounded-lg"
              onError={handleImageError}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-24 h-24 text-gray-300" />
            </div>
            {!book.inStock && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md text-lg font-medium">
                Out of Stock
              </div>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              ${book.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6">{book.description}</p>
            <button
              onClick={() => onAddToCart(book)}
              className={`w-full px-6 py-3 rounded-md transition-colors ${
                book.inStock 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!book.inStock}
            >
              {book.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};