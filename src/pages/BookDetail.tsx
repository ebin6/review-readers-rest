import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { StarRating } from "@/components/books/StarRating";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, BookOpen, Hash } from "lucide-react";
import { books, reviews } from "@/data/mockData";
import { format } from "date-fns";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const book = books.find((b) => b.id === id);
  const bookReviews = reviews.filter((r) => r.book.id === id);
  
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");

  if (!book) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Book Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The book you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/books">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Books
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Review submitted!",
      description: "Thank you for sharing your thoughts.",
    });
    setNewRating(0);
    setNewComment("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/books">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Books
          </Link>
        </Button>

        {/* Book Details */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Cover */}
          <div className="md:col-span-1">
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <Badge variant="secondary" className="mb-3">
              {book.category.name}
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              {book.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              by{" "}
              <Link
                to={`/authors/${book.author.id}`}
                className="text-primary hover:underline"
              >
                {book.author.firstName} {book.author.lastName}
              </Link>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={book.averageRating} size="lg" />
              <span className="font-display text-xl font-semibold">
                {book.averageRating.toFixed(1)}
              </span>
              <span className="text-muted-foreground">
                ({bookReviews.length} {bookReviews.length === 1 ? "review" : "reviews"})
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              {book.description}
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-card rounded-lg">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Published</p>
                  <p className="text-sm font-medium">
                    {format(new Date(book.publishedDate), "MMM d, yyyy")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Pages</p>
                  <p className="text-sm font-medium">{book.pages}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Hash className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">ISBN</p>
                  <p className="text-sm font-medium">{book.isbn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Reviews Section */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-display text-xl font-semibold mb-4">
                Write a Review
              </h2>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Rating
                  </label>
                  <StarRating
                    rating={newRating}
                    size="lg"
                    interactive
                    onRatingChange={setNewRating}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Review
                  </label>
                  <Textarea
                    placeholder="Share your thoughts about this book..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Review
                </Button>
              </form>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold mb-6">
              Reader Reviews ({bookReviews.length})
            </h2>
            {bookReviews.length > 0 ? (
              <div className="space-y-4">
                {bookReviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card rounded-lg">
                <p className="text-muted-foreground">
                  No reviews yet. Be the first to share your thoughts!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
