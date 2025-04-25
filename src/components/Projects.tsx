
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "smart-alarm",
    title: "Smart Alarm & Monitoring System",
    description: "IoT-based monitoring system with real-time alerts via MQTT and SMS",
    tech: ["Raspberry Pi", "MQTT", "SQLite", "React", "Ionic"],
    features: [
      "Real-time alarm notifications",
      "Cross-platform sync",
      "User access management",
      "GSM integration"
    ]
  },
  {
    id: "esp32-dashboard",
    title: "ESP32 Smart Dashboard",
    description: "LED Matrix display with Telegram integration and advanced power management",
    tech: ["ESP32", "Telegram API", "LED Matrix", "C++"],
    features: [
      "WiFi auto setup",
      "RTC timekeeping",
      "Low power optimization",
      "Custom sprite support"
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 gradient-text">Notable Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="card-hover">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.features.slice(0, 2).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link to={`/project/${project.id}`}>
                      View Details
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
