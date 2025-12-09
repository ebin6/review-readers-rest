import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { categories, books } from "@/data/mockData";

const Categories = () => {
  const getBookCount = (categoryId: string) => {
    return books.filter((book) => book.category.id === categoryId).length;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Browse by Category
          </h1>
          <p className="text-muted-foreground">
            Find your next read organized by genre and subject.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const bookCount = getBookCount(category.id);
            return (
              <Link
                key={category.id}
                to={`/books?category=${category.id}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="group bg-card hover:shadow-elegant transition-elegant cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-elegant">
                        {category.name}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-elegant" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <Badge variant="secondary">
                      {bookCount} {bookCount === 1 ? "book" : "books"}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
