import { Layout } from "@/components/layout/Layout";
import { AuthorCard } from "@/components/authors/AuthorCard";
import { authors, books } from "@/data/mockData";

const Authors = () => {
  const getBookCount = (authorId: string) => {
    return books.filter((book) => book.author.id === authorId).length;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Meet Our Authors
          </h1>
          <p className="text-muted-foreground">
            Discover the talented writers behind the stories you love.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {authors.map((author, index) => (
            <div
              key={author.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AuthorCard author={author} bookCount={getBookCount(author.id)} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Authors;
