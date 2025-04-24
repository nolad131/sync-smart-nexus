
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Get in Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Open to Opportunities</CardTitle>
            <CardDescription>
              Available for freelance, contract, or remote positions in embedded systems, web, and mobile development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="space-x-2" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </Button>
              <Button variant="outline" className="space-x-2" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" className="space-x-2" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
