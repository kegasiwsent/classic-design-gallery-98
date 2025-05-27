
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";

const About = () => {
  const studioAddress = "B123 Gopinath Industrial Hub Durganagar Near Punitnagar Railway Crossing Vatva Ahmedabad Gujarat India 380050";
  const meetingAddress = "5B, New York corner, opp. Rajpath club, b/h. Kiran Motors, S.G Highway, Ahmedabad";
  const studioGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studioAddress)}`;
  const meetingGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meetingAddress)}`;

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 mt-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-blue-navy">
                PASSIONATELY CREATING DESIGNER HOMES SINCE 2009
              </h1>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <Avatar className="w-64 h-64 border-4 border-blue-medium shadow-xl rounded-lg">
                  <AvatarImage src="/lovable-uploads/3dd21959-ead7-403a-8f15-b1c499c1a273.png" alt="Bhrugesh Mewada" className="object-cover" />
                  <AvatarFallback>BM</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="font-serif text-2xl font-semibold mb-4 text-center md:text-left text-blue-medium">
                  A man behind your dreams
                </h2>
                
                <p className="text-gray-dark mb-6 leading-relaxed">JB Design is a leading bespoke luxury interior design firm, born out of a philosophy and experience that has spanned 16 years of pan India presence. Founded by Bhrugesh Mewada, we bring more than a decade of national design experience to the table. JB design's has worked with more than 200 clients for different divisions such as Bungalows, Apartments, Farmhouse, Resort, Showrooms.</p>
                
                <blockquote className="border-l-4 border-blue-medium pl-4 italic text-gray-dark">
                  "Our passion is to design and deliver inspiring and practical spaces for all our clients, 
                  by really understanding their needs, dreams and means, and to re-create any blank space into 
                  a jaw dropping one."
                </blockquote>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-lightest p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-semibold mb-3 text-blue-navy">Our Vision</h3>
                <p className="text-gray-dark">To transform spaces into exceptional environments that enhance 
                the quality of life and reflect the unique personality of each client.</p>
              </div>
              
              <div className="bg-gray-lightest p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-semibold mb-3 text-blue-navy">Our Mission</h3>
                <p className="text-gray-dark">To consistently deliver outstanding interior design solutions that 
                exceed client expectations while maintaining the highest standards of quality and service.</p>
              </div>
              
              <div className="bg-gray-lightest p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-semibold mb-3 text-blue-navy">Our Values</h3>
                <p className="text-gray-dark">Integrity, creativity, excellence, and client satisfaction are at the 
                core of everything we do at JB Design.</p>
              </div>
            </div>

            {/* Studio Address Section */}
            <section className="py-16 bg-gray-lightest rounded-lg mb-8">
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold mb-8 text-blue-navy">
                  Studio Address
                </h2>
                <div className="max-w-2xl mx-auto">
                  <a href={studioGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                    <MapPin className="text-blue-medium mt-1 flex-shrink-0 group-hover:text-blue-dark transition-colors" size={24} />
                    <div className="text-left">
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        B123 Gopinath Industrial Hub Durganagar<br />
                        Near Punitnagar Railway Crossing<br />
                        Vatva Ahmedabad Gujarat India<br />
                        Pincode: 380050
                      </p>
                      <p className="text-blue-medium text-sm mt-2 group-hover:text-blue-dark transition-colors">
                        Click to view on Google Maps
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Meeting Address Section */}
            <section className="py-16 bg-gray-lightest rounded-lg">
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold mb-8 text-blue-navy">
                  Meeting Address
                </h2>
                <div className="max-w-2xl mx-auto">
                  <a href={meetingGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                    <MapPin className="text-blue-medium mt-1 flex-shrink-0 group-hover:text-blue-dark transition-colors" size={24} />
                    <div className="text-left">
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        5B, New York corner, opp. Rajpath club,<br />
                        b/h. Kiran Motors, S.G Highway,<br />
                        Ahmedabad
                      </p>
                      <p className="text-blue-medium text-sm mt-2 group-hover:text-blue-dark transition-colors">
                        Click to view on Google Maps
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
