import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useState } from "react";

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Biotech", "AI & Technology", "Clinical Research", "Sustainability"];

  const articles = [
    {
      id: 1,
      category: "AI & Technology",
      title: "The Future of AI in Laboratory Automation",
      excerpt:
        "Explore how artificial intelligence is revolutionizing laboratory workflows, from automated sample processing to predictive analytics that accelerate scientific discovery.",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: true,
    },
    {
      id: 2,
      category: "Biotech",
      title: "CRISPR Advances in Gene Therapy",
      excerpt:
        "Latest developments in CRISPR technology are opening new possibilities for treating genetic disorders...",
      date: "March 10, 2024",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    },
    {
      id: 3,
      category: "Sustainability",
      title: "Green Chemistry: Lab Sustainability",
      excerpt:
        "How laboratories are adopting sustainable practices to reduce environmental impact while maintaining research quality...",
      date: "March 8, 2024",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    },
    {
      id: 4,
      category: "Clinical Research",
      title: "Digital Transformation in Clinical Trials",
      excerpt:
        "The role of digital technologies in modernizing clinical trial processes and improving patient outcomes...",
      date: "March 5, 2024",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    },
    {
      id: 5,
      category: "AI & Technology",
      title: "Machine Learning in Drug Discovery",
      excerpt:
        "How machine learning algorithms are accelerating the identification of potential drug compounds...",
      date: "March 3, 2024",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    },
    {
      id: 6,
      category: "Biotech",
      title: "Protein Folding Breakthroughs",
      excerpt:
        "Recent advances in understanding protein folding mechanisms and their implications for drug development...",
      date: "February 28, 2024",
      image:
        "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    },
  ];

  const filteredArticles = articles.filter(
    (article) => selectedCategory === "All" || article.category === selectedCategory
  );

  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Biotech":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "AI & Technology":
        return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300";
      case "Clinical Research":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Sustainability":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest scientific breakthroughs, industry trends,
            and innovative research from our expert team.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    <span className="text-muted-foreground text-sm ml-4">
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                  <Button variant="ghost" className="text-primary p-0 h-auto">
                    Read Full Article →
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-12 justify-center"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`category-${category.toLowerCase().replace(" & ", "-")}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularArticles.map((article) => (
            <motion.div key={article.id} variants={fadeInUp}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Badge className={`${getCategoryColor(article.category)} text-xs`}>
                      {article.category}
                    </Badge>
                    <span className="text-muted-foreground text-sm ml-2">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-primary text-sm p-0 h-auto"
                    data-testid={`article-read-more-${article.id}`}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
