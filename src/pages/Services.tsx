
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Palette, Sofa, Clock, Shield, DollarSign, Sparkles, Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="pt-40 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-blue-navy">
              Our Services
            </h1>
            <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer comprehensive interior design services to transform your space into a dream environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="w-10 h-10 text-blue-medium mb-4" />
                <CardTitle className="font-serif text-xl text-blue-navy">Residential Interior</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete home interior design solutions from concept to completion, creating personalized living spaces.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Palette className="w-10 h-10 text-blue-medium mb-4" />
                <CardTitle className="font-serif text-xl text-blue-navy">Commercial Interior</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional office and commercial space design that enhances productivity and brand image.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Sofa className="w-10 h-10 text-blue-medium mb-4" />
                <CardTitle className="font-serif text-xl text-blue-navy">Furniture Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Custom furniture design and manufacturing to perfectly fit your space and style preferences.</p>
              </CardContent>
            </Card>
          </div>

          {/* Turnkey Project Section */}
          <div className="bg-gray-lightest rounded-lg p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4 text-blue-navy">
                Turnkey Project
              </h2>
              <div className="w-16 h-1 bg-interior-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete interior solutions from design to execution with our comprehensive turnkey services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-8 h-8 text-blue-medium mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-blue-navy">End-to-End Solutions</h3>
                <p className="text-gray-600 text-sm">Complete project handling from initial design to final handover</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-8 h-8 text-blue-medium mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-blue-navy">Stress-Free Experience</h3>
                <p className="text-gray-600 text-sm">Professional project management ensuring smooth execution</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <DollarSign className="w-8 h-8 text-blue-medium mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-blue-navy">Time & Cost Control</h3>
                <p className="text-gray-600 text-sm">Efficient resource management and timeline adherence</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Sparkles className="w-8 h-8 text-blue-medium mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-blue-navy">Consistent Quality & Aesthetic</h3>
                <p className="text-gray-600 text-sm">Maintaining design integrity throughout the project</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Zap className="w-8 h-8 text-blue-medium mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-blue-navy">Faster Project Completion</h3>
                <p className="text-gray-600 text-sm">Streamlined processes for efficient project delivery</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold mb-8 text-blue-navy">Why Choose JB Design?</h2>
            <div className="w-16 h-1 bg-interior-gold mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-medium" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-blue-navy">15+ Years Experience</h3>
                <p className="text-gray-600">Bringing over a decade of expertise in creating exceptional spaces</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-blue-medium" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-blue-navy">Creative Excellence</h3>
                <p className="text-gray-600">Innovative design solutions tailored to your unique vision and needs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-medium" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-blue-navy">Timely Delivery</h3>
                <p className="text-gray-600">Committed to delivering projects on time without compromising quality</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
