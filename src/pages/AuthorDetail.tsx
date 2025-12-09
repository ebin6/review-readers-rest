import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BookCard } from "@/components/books/BookCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar } from "lucide-react";
import { authors, books } from "@/data/mockData";
import { format } from "date-fns";

const AuthorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const author = authors.find((a) => a.id === id);
  const authorBooks = books.filter((book) => book.author.id === id);

  if (!author) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Author Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The author you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/authors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Authors
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const initials = `${author.firstName[0]}${author.lastName[0]}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/authors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Authors
          </Link>
        </Button>

        {/* Author Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-12">
          <Avatar className="h-32 w-32 ring-4 ring-border">
            <AvatarImage
              src={author.photo}
              alt={`${author.firstName} ${author.lastName}`}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-display">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              {author.firstName} {author.lastName}
            </h1>
            {author.birthDate && (
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>Born {format(new Date(author.birthDate), "MMMM d, yyyy")}</span>
              </div>
            )}
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Author's Books */}
        <div>
          <h2 className="font-display text-2xl font-semibold mb-6">
            Books by {author.firstName} ({authorBooks.length})
          </h2>
          {authorBooks.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {authorBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg">
              <p className="text-muted-foreground">
                No books available from this author yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AuthorDetail;
