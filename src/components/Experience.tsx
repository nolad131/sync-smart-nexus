
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted/5">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 gradient-text">Work Experience</h2>
        <div className="space-y-8">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <CardTitle>Owner & Technical Manager</CardTitle>
                  <p className="text-muted-foreground">Embedded Systems Company – Italy & Arab Region</p>
                </div>
                <Badge>2018 – Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Managed telecom infrastructure maintenance projects</li>
                <li>Oversaw power systems for telecom sites</li>
                <li>Built custom embedded systems for equipment monitoring</li>
                <li>Led a team across multiple regions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <CardTitle>Fullstack & Mobile App Developer</CardTitle>
                  <p className="text-muted-foreground">Freelance</p>
                </div>
                <Badge>2019 – Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Built scalable fullstack apps with React and Node.js</li>
                <li>Developed mobile apps using Ionic and React Native</li>
                <li>Implemented real-time communication systems</li>
                <li>Designed local-first architectures with sync logic</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
