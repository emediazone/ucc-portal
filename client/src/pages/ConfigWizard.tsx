import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { Loader2 } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WizardStep {
  id: string;
  title: string;
  description: string;
}

const WIZARD_STEPS: WizardStep[] = [
  {
    id: "s3",
    title: "S3 Configuration",
    description: "Configure S3 bucket for static website hosting"
  },
  {
    id: "cloudfront",
    title: "CloudFront Setup",
    description: "Set up CloudFront distribution for content delivery"
  },
  {
    id: "waf",
    title: "WAF Rules",
    description: "Configure Web Application Firewall rules"
  }
];

export function ConfigWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    // Simulate configuration saving
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, WIZARD_STEPS.length - 1));
      setLoading(false);
    }, 1000);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>AWS Configuration Wizard</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Progress Visualization */}
          <div className="mb-8">
            <ChartContainer
              config={{
                completed: { color: "hsl(var(--primary))" },
                pending: { color: "hsl(var(--muted))" },
              }}
              className="h-12"
            >
              <div className="flex justify-between">
                {WIZARD_STEPS.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center ${
                      index <= currentStep ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                      ${
                        index <= currentStep
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted bg-background"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="ml-2">{step.title}</span>
                  </div>
                ))}
              </div>
            </ChartContainer>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">
              {WIZARD_STEPS[currentStep].title}
            </h3>
            {currentStep === 0 && (
              <div className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bucket region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                    <SelectItem value="us-east-2">US East (Ohio)</SelectItem>
                    <SelectItem value="us-west-1">US West (N. California)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {currentStep === 1 && (
              <div className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select price class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">Price Class 100</SelectItem>
                    <SelectItem value="200">Price Class 200</SelectItem>
                    <SelectItem value="all">Price Class All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {currentStep === 2 && (
              <div className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select WAF rule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rate-based">Rate-based Rule</SelectItem>
                    <SelectItem value="ip-reputation">IP Reputation</SelectItem>
                    <SelectItem value="custom">Custom Rules</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0 || loading}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {currentStep === WIZARD_STEPS.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ConfigWizard;
