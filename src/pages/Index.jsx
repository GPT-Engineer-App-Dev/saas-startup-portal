import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Star, DollarSign, User } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaSify</h1>
        <p className="text-lg text-muted-foreground">
          The ultimate solution for managing your business efficiently.
        </p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto mt-8" />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Package className="h-8 w-8 text-primary" />
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your tasks efficiently with our intuitive interface.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary" />
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get insights and analytics to make informed decisions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-primary" />
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Save money with our cost-effective plans.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Avatar>
                <img src="https://placehold.co/100x100" alt="Customer 1" />
              </Avatar>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"SaaSify has transformed the way we manage our business. Highly recommend!"</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <img src="https://placehold.co/100x100" alt="Customer 2" />
              </Avatar>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"The features are fantastic and the support is top-notch."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <img src="https://placehold.co/100x100" alt="Customer 3" />
              </Avatar>
              <CardTitle>Bob Johnson</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"We've seen a significant improvement in our productivity since using SaaSify."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
              <p className="text-2xl font-bold">$10/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
              </ul>
              <Button className="mt-4">Sign Up</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
              <p className="text-2xl font-bold">$30/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
                <li>Feature Four</li>
              </ul>
              <Button className="mt-4">Sign Up</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
              <p className="text-2xl font-bold">$50/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
                <li>Feature Four</li>
                <li>Feature Five</li>
              </ul>
              <Button className="mt-4">Sign Up</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-4">
        <Separator />
        <div className="flex justify-center space-x-4">
          <Badge>Facebook</Badge>
          <Badge>Twitter</Badge>
          <Badge>LinkedIn</Badge>
        </div>
        <p className="text-sm text-muted-foreground">© 2023 SaaSify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;