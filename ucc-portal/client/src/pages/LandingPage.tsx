import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle, BadgeCheck, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

const LandingPage = () => {
  const quickLinks = [
    { title: 'Senate Proceedings', href: '/senate' },
    { title: 'Games Schedule', href: '/games' },
    { title: 'Public Services', href: '/services' },
    { title: 'Citizen Portal', href: '/citizen' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="mb-8 text-center pt-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            United Corgi Commonwealth
          </h1>
          <p className="text-xl text-muted-foreground">Official Portal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BadgeCheck className="mr-2 text-primary" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
                  <span className="font-medium">Treasury Balance:</span>
                  <span className="ml-2">96 Pawnds</span>
                </li>
                <li className="flex items-center text-sm">
                  <BadgeCheck className="mr-2 h-4 w-4 text-green-500" />
                  <span className="font-medium">Financial Systems:</span>
                  <span className="ml-2">Operating Normally</span>
                </li>
                <li className="flex items-center text-sm">
                  <BadgeCheck className="mr-2 h-4 w-4 text-green-500" />
                  <span className="font-medium">Games Ticket System:</span>
                  <span className="ml-2">Available</span>
                </li>
                <li className="flex items-center text-sm">
                  <AlertCircle className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="font-medium">Token Exchange:</span>
                  <span className="ml-2">Coming Soon</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ExternalLink className="mr-2 text-primary" />
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="flex items-center text-sm hover:text-primary transition-colors">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Maintained by the Office of Digital Infrastructure</p>
          <p className="mt-1">Last Updated: Today (Probably)</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
