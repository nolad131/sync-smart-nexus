
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C/C++"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Ionic (React)", "Expo Router"]
  },
  {
    title: "Backend",
    skills: ["Node.js (Express)", "MQTT", "SQLite", "Supabase"]
  },
  {
    title: "Embedded Systems",
    skills: ["ESP32", "Raspberry Pi", "RTOS", "GPIO", "UART", "GSM"]
  },
  {
    title: "Security & Tools",
    skills: ["bcryptjs", "JWT", "TLS", "Git", "Linux (Arch)", "VS Code"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 gradient-text">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
