import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInsightBySlug, InsightCategory } from "@/data/insights";
import { getProjectBySlug } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryStyles: Record<InsightCategory, string> = {
  "AI & Automation": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  "Business Analysis": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Digital Transformation": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "Process Improvement": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Data & Analytics": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
};

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsightBySlug(slug) : undefined;

  if (!insight) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Insight not found</h1>
          <Button asChild>
            <Link to="/insights">Back to Insights</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedProjects = insight.relatedProjects
    ?.map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-narrow">
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>
          
          <Badge className={cn("mb-4", categoryStyles[insight.category])}>
            {insight.category}
          </Badge>
          
          <h1 className="text-title-lg md:text-display font-bold mb-4">{insight.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {insight.readTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {insight.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <div className="prose-content max-w-none space-y-6">
            {insight.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          <Card className="mt-12 bg-secondary/30 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-accent" />
                Key Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {insight.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Related Projects */}
          {relatedProjects && relatedProjects.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">Related Case Studies</h2>
              <div className="flex flex-wrap gap-3">
                {relatedProjects.map((project) => (
                  project && (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                    >
                      {project.title}
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t py-8">
        <div className="container-narrow flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Insights
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default InsightDetail;
