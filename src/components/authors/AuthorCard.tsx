import { Link } from "react-router-dom";
import { Author } from "@/types/book";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AuthorCardProps {
  author: Author;
  bookCount?: number;
}

export function AuthorCard({ author, bookCount }: AuthorCardProps) {
  const initials = `${author.firstName[0]}${author.lastName[0]}`;

  return (
    <Link to={`/authors/${author.id}`}>
      <Card className="group bg-card hover:shadow-elegant transition-elegant cursor-pointer h-full">
        <CardContent className="p-6 text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-border group-hover:ring-primary transition-elegant">
            <AvatarImage
              src={author.photo}
              alt={`${author.firstName} ${author.lastName}`}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-display">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-elegant">
            {author.firstName} {author.lastName}
          </h3>
          {bookCount !== undefined && (
            <p className="text-sm text-muted-foreground mt-1">
              {bookCount} {bookCount === 1 ? "book" : "books"}
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
            {author.bio}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
