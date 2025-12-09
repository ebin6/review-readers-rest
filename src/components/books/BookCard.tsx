import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Book } from "@/types/book";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link to={`/books/${book.id}`}>
      <Card className="group overflow-hidden bg-card hover:shadow-elegant transition-elegant cursor-pointer h-full">
        <div className="aspect-[2/3] overflow-hidden relative">
          <img
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2 text-xs">
            {book.category.name}
          </Badge>
          <h3 className="font-display text-lg font-semibold leading-tight mb-1 group-hover:text-primary transition-elegant line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            by {book.author.firstName} {book.author.lastName}
          </p>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="text-sm font-medium">{book.averageRating.toFixed(1)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
