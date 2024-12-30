import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle, BadgeCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">United Corgi Commonwealth</h1>
        <p className="text-xl text-gray-600">Official Portal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BadgeCheck className="mr-2" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <AlertCircle className="mr-2 text-amber-500" />
                Treasury Balance: 96 Pawnds
              </li>
              <li>Financial Systems: Operating Normally</li>
              <li>Games Ticket System: Available</li>
              <li>Token Exchange: Coming Soon</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Senate Proceedings</li>
              <li>Games Schedule</li>
              <li>Public Services</li>
              <li>Citizen Portal</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Maintained by the Office of Digital Infrastructure</p>
        <p>Last Updated: Today (Probably)</p>
      </div>
    </div>
  );
};

export default Home;
