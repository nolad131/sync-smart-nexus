
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/10 pointer-events-none" />
      
      <div className="container relative">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Work Experience</h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="card-hover border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <CardTitle>Owner & Technical Manager</CardTitle>
                    <p className="text-muted-foreground">Embedded Systems Company – Italy & Arab Region</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">2018 – Present</Badge>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="card-hover border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <CardTitle>Fullstack & Mobile App Developer</CardTitle>
                    <p className="text-muted-foreground">Freelance</p>
                  </div>
                  <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30">2019 – Present</Badge>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
