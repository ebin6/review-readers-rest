import { Review } from "@/types/book";
import { StarRating } from "@/components/books/StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";

interface ReviewCardProps {
  review: Review;
  showBookTitle?: boolean;
}

export function ReviewCard({ review, showBookTitle = false }: ReviewCardProps) {
  const initials = review.userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="bg-card shadow-card">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10 bg-primary text-primary-foreground">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h4 className="font-medium text-sm">{review.userName}</h4>
              <time className="text-xs text-muted-foreground">
                {format(new Date(review.createdAt), "MMM d, yyyy")}
              </time>
            </div>
            {showBookTitle && (
              <p className="text-sm text-muted-foreground mb-2">
                on <span className="font-medium text-foreground">{review.book.title}</span>
              </p>
            )}
            <StarRating rating={review.rating} size="sm" />
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {review.comment}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
