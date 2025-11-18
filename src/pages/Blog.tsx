import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: "packing-tips-home-shifting",
      title: "10 Essential Packing Tips for Stress-Free Home Shifting in Sonipat",
      excerpt: "Moving to a new home? Learn expert packing strategies that will save you time, money, and hassle during your relocation in Sonipat.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Packing Tips",
      slug: "packing-tips-home-shifting",
    },
    {
      id: "sonipat-to-delhi-guide",
      title: "Complete Guide to Moving from Sonipat to Delhi: What You Need to Know",
      excerpt: "Planning a move from Sonipat to Delhi? Discover the best routes, estimated costs, timeline, and tips for a smooth relocation.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Moving Guides",
      slug: "sonipat-to-delhi-guide",
    },
    {
      id: "best-areas-sonipat",
      title: "Best Residential Areas in Sonipat: A Complete Neighborhood Guide 2024",
      excerpt: "Explore the top residential neighborhoods in Sonipat with our detailed guide covering amenities, connectivity, and living costs.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Local Guide",
      slug: "best-areas-sonipat",
    },
    {
      id: "moving-checklist",
      title: "Ultimate Moving Checklist: 30 Days Before Your Move",
      excerpt: "Stay organized with our comprehensive month-by-month moving checklist. Never forget an important task again!",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Moving Guides",
      slug: "moving-checklist",
    },
    {
      id: "office-relocation-tips",
      title: "How to Plan an Office Relocation Without Disrupting Business",
      excerpt: "Learn proven strategies to relocate your office in Sonipat while maintaining productivity and minimizing downtime.",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Office Moving",
      slug: "office-relocation-tips",
    },
    {
      id: "vehicle-transport-guide",
      title: "Safe Vehicle Transportation: Everything You Need to Know",
      excerpt: "Planning to transport your car or bike? Here's what you need to know about safe and secure vehicle relocation.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Vehicle Transport",
      slug: "vehicle-transport-guide",
    },
    {
      id: "monsoon-moving-tips",
      title: "Moving During Monsoon Season: Essential Tips for Sonipat Residents",
      excerpt: "Protect your belongings from moisture and damage with these expert tips for moving during the rainy season.",
      date: "February 10, 2024",
      readTime: "4 min read",
      category: "Seasonal Tips",
      slug: "monsoon-moving-tips",
    },
    {
      id: "packing-fragile-items",
      title: "How to Pack Fragile Items: Glass, Electronics, and Antiques",
      excerpt: "Master the art of packing delicate items with our step-by-step guide to ensure they arrive safely at your new home.",
      date: "February 5, 2024",
      readTime: "6 min read",
      category: "Packing Tips",
      slug: "packing-fragile-items",
    },
    {
      id: "cost-saving-moving-tips",
      title: "10 Ways to Save Money on Your Move in Sonipat",
      excerpt: "Discover practical tips to reduce your moving costs without compromising on quality and safety.",
      date: "January 28, 2024",
      readTime: "5 min read",
      category: "Budget Tips",
      slug: "cost-saving-moving-tips",
    },
  ];

  const categories = [
    "All Posts",
    "Packing Tips",
    "Moving Guides",
    "Local Guide",
    "Office Moving",
    "Vehicle Transport",
    "Seasonal Tips",
    "Budget Tips",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Moving Tips & Guides
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert advice on packing, moving, and settling into Sonipat and Delhi NCR
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Posts" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-3 line-clamp-2">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to={post.slug}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Move? Get Your Free Quote Today!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Professional packers and movers in Sonipat with transparent pricing and reliable service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Sonipat">
                  WhatsApp Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+919068662191">Call: +91 90686 62191</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
