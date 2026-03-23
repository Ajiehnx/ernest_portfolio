import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { InsightCard } from "@/components/insights/InsightCard";
import { insights, insightCategories, InsightCategory } from "@/data/insights";
import { cn } from "@/lib/utils";
import { Reveal } from "@/hooks/useScrollReveal";

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory | null>(null);

  const filteredInsights = selectedCategory
    ? insights.filter((i) => i.category === selectedCategory)
    : insights;

  return (
    <Layout>
      <PageHeader
        title="Insights"
        description="Reflections on business analysis practice, drawing from real project experience. No invented stories—just practical lessons learned."
      />

      {/* Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95",
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                All
              </button>
              {insightCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95",
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, index) => (
              <Reveal key={insight.id} delay={index * 80}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <Reveal>
              <div className="text-center py-16">
                <p className="text-muted-foreground">No insights in this category yet.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
