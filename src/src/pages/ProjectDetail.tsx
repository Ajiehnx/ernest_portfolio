import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Clock, Download, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, Domain } from "@/data/projects";
import { cn } from "@/lib/utils";

const domainStyles: Record<Domain, string> = {
  Banking: "domain-banking",
  "Public Sector": "domain-public-sector",
  Consulting: "domain-consulting",
  "Data/BI": "domain-data",
  LMS: "domain-lms",
  Automation: "domain-automation",
  Change: "domain-change",
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-wide">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          
          <Badge className={cn("mb-4", domainStyles[project.domain])}>
            {project.domain}
          </Badge>
          
          <h1 className="text-display font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mb-8">
            {project.summary}
          </p>

          {/* Quick facts chips */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
              <Users className="h-4 w-4" />
              {project.role}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
              <Calendar className="h-4 w-4" />
              {project.dates}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
              <Clock className="h-4 w-4" />
              {project.duration}
            </span>
            {project.teamSize && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
                Team: {project.teamSize}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem / Opportunity */}
              <div>
                <h2 className="text-title font-bold mb-4">Problem / Opportunity</h2>
                <p className="prose-content">{project.problem}</p>
              </div>

              {/* Objectives & Success Measures */}
              <div>
                <h2 className="text-title font-bold mb-4">Objectives & Success Measures</h2>
                <div className="space-y-3">
                  {project.objectives.map((obj, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium">{obj.objective}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          <strong>Measure:</strong> {obj.measure}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Role & Responsibilities */}
              <div>
                <h2 className="text-title font-bold mb-4">My Role & Responsibilities</h2>
                <ul className="prose-content">
                  {project.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Discovery & Research */}
              <div>
                <h2 className="text-title font-bold mb-4">Discovery & Research</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Stakeholders</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.discovery.stakeholders.map((stakeholder) => (
                        <span key={stakeholder} className="chip">{stakeholder}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Workshops & Engagement</h3>
                    <p className="text-muted-foreground">{project.discovery.workshops}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Pain Points Identified</h3>
                    <ul className="prose-content">
                      {project.discovery.painPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Sources</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.discovery.dataSources.map((source) => (
                        <span key={source} className="chip">{source}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Process / Service Journey */}
              <div>
                <h2 className="text-title font-bold mb-4">Process / Service Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">As-Is State</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{project.approach.asIs}</p>
                      <div className="mt-4 p-8 bg-muted rounded-lg text-center text-sm text-muted-foreground border-2 border-dashed">
                        Process visual available on request
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">To-Be State</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{project.approach.toBe}</p>
                      <div className="mt-4 p-8 bg-muted rounded-lg text-center text-sm text-muted-foreground border-2 border-dashed">
                        Future-state visual available on request
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Requirements & Design */}
              <div>
                <h2 className="text-title font-bold mb-4">Requirements & Design</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Prioritisation Approach</h3>
                    <p className="text-muted-foreground">{project.approach.prioritisation}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Deliverables</h3>
                    <ul className="prose-content">
                      {project.deliverables.map((deliverable, index) => (
                        <li key={index}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Delivery & Governance */}
              <div>
                <h2 className="text-title font-bold mb-4">Delivery & Governance</h2>
                <p className="text-muted-foreground">{project.approach.governance}</p>
              </div>

              {/* Outcomes & Impact */}
              <div>
                <h2 className="text-title font-bold mb-4">Outcomes & Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.outcomes.map((outcome, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <p className="text-2xl font-bold text-accent">{outcome.value}</p>
                        <p className="font-medium mt-1">{outcome.metric}</p>
                        {outcome.context && (
                          <p className="text-sm text-muted-foreground mt-2">{outcome.context}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What I'd Improve */}
              <div>
                <h2 className="text-title font-bold mb-4">What I'd Improve Next</h2>
                <ul className="prose-content">
                  {project.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tools & Methods */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Tools & Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-muted px-2 py-1 rounded">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium mb-2">Methods</p>
                    <div className="flex flex-wrap gap-2">
                      {project.methods.map((method) => (
                        <span key={method} className="text-xs bg-muted px-2 py-1 rounded">{method}</span>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Artefacts Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle>Artefacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.artefacts.map((artefact, index) => (
                    <div key={index} className="p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-medium text-sm">{artefact.name}</p>
                          <Badge variant="outline" className="mt-1 text-xs">{artefact.type}</Badge>
                        </div>
                        {artefact.downloadUrl ? (
                          <a href={artefact.downloadUrl} className="shrink-0">
                            <Download className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                          </a>
                        ) : (
                          <span className="shrink-0 text-xs text-muted-foreground">Available on request</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{artefact.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t py-8">
        <div className="container-wide flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Projects
            </Link>
          </Button>
          <Button asChild>
            <Link to="/contact">
              Discuss This Project
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
