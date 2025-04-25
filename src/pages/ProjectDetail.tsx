
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Extended project data with more details
const projectsData = {
  "smart-alarm": {
    title: "Smart Alarm & Monitoring System",
    description: "IoT-based monitoring system with real-time alerts via MQTT and SMS",
    tech: ["Raspberry Pi", "MQTT", "SQLite", "React", "Ionic"],
    features: [
      "Real-time alarm notifications",
      "Cross-platform sync",
      "User access management",
      "GSM integration"
    ],
    longDescription: "A comprehensive IoT monitoring system that combines hardware sensors with cloud connectivity. The system uses Raspberry Pi as the central hub, processing inputs from various sensors and delivering notifications through multiple channels including MQTT and SMS.",
    challenges: [
      "Optimizing power consumption for battery-operated sensors",
      "Implementing reliable wireless communication",
      "Managing concurrent connections"
    ],
    implementation: "Built using React and Ionic for cross-platform compatibility, with a SQLite database for local storage and MQTT for real-time messaging. The hardware layer uses custom PCBs with various sensors connected to a Raspberry Pi."
  },
  "esp32-dashboard": {
    title: "ESP32 Smart Dashboard",
    description: "LED Matrix display with Telegram integration and advanced power management",
    tech: ["ESP32", "Telegram API", "LED Matrix", "C++"],
    features: [
      "WiFi auto setup",
      "RTC timekeeping",
      "Low power optimization",
      "Custom sprite support"
    ],
    longDescription: "An intelligent LED matrix display powered by ESP32, featuring seamless Telegram integration for remote control and message display. The system includes sophisticated power management and an intuitive interface for custom animations.",
    challenges: [
      "Optimizing memory usage for animations",
      "Implementing efficient power saving modes",
      "Managing wireless connectivity"
    ],
    implementation: "Developed using C++ on the ESP32 platform, incorporating custom LED matrix drivers and the Telegram Bot API. Features include deep sleep modes, real-time clock synchronization, and a sprite animation engine."
  }
};

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project not found</h2>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <Button asChild className="mb-8">
          <Link to="/">
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </Button>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">{project.title}</CardTitle>
            <CardDescription className="text-lg">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-muted-foreground">{project.longDescription}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Challenges</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-muted-foreground">{project.implementation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
