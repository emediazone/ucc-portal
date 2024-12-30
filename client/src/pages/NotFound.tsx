import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Link } from 'wouter';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <AlertCircle className="h-12 w-12 text-destructive mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">404 - Page Not Found</h1>
            <p className="text-muted-foreground mb-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/">
              <a className="text-primary hover:underline">Return to Homepage</a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
