import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Clock, Activity } from "lucide-react";

const StatusPage = () => {
  const services = [
    {
      name: "API Service",
      status: "operational",
      uptime: "99.9%",
      response: "45ms"
    },
    {
      name: "File Processing",
      status: "operational",
      uptime: "99.8%",
      response: "2.3s"
    },
    {
      name: "AI Analysis",
      status: "operational",
      uptime: "99.7%",
      response: "30s"
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.9%",
      response: "12ms"
    }
  ];

  const incidents = [
    {
      date: "2024-01-15",
      title: "Scheduled Maintenance",
      status: "resolved",
      description: "Routine system maintenance completed successfully"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">System Status</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time status of all Home Cover GPT services and systems.
          </p>
        </div>

        {/* Overall Status */}
        <Card className="card-elevated mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-success" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">All Systems Operational</h2>
                  <p className="text-muted-foreground">Last updated: Just now</p>
                </div>
              </div>
              <Badge className="bg-success/10 text-success">99.9% Uptime</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Service Status */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-success" />
                      <h3 className="font-semibold text-foreground">{service.name}</h3>
                    </div>
                    <Badge variant="secondary">{service.status}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Uptime:</span>
                      <div className="font-medium">{service.uptime}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Response:</span>
                      <div className="font-medium">{service.response}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Recent Incidents</h2>
          {incidents.map((incident, index) => (
            <Card key={index} className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">{incident.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                      <p className="text-xs text-muted-foreground">{incident.date}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{incident.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatusPage;