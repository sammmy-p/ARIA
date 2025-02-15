"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Users, ArrowRight, MessageCircle, Cpu } from "lucide-react";

const ARIALogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
    <defs>
      <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8E8E8" />
        <stop offset="50%" stopColor="#C0C0C0" />
        <stop offset="100%" stopColor="#A8A8A8" />
      </linearGradient>
    </defs>
    <text x="50" y="60" fontFamily="Arial" fontSize="60" fontWeight="bold" fill="url(#metallicGradient)">ARIA</text>
    <text x="350" y="60" fontFamily="Arial" fontSize="60" fontWeight="bold" fill="url(#metallicGradient)" transform="scale(-1,1)">ARIA</text>
  </svg>
);

const ARIAWebpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-48">
              <ARIALogo />
            </div>
            <nav className="space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Modules</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-200 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Attitude Roots Interview Approach
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Like an aria in classical music - a solo voice supported by an orchestra - 
              ARIA provides a focused 40-minute training program where you are the soloist, 
              supported by our AI orchestra of learning tools.
            </p>
            <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white px-8 py-3 rounded-lg hover:from-gray-800 hover:via-gray-900 hover:to-gray-800 transition-all duration-300 flex items-center mx-auto">
              Begin Your Journey <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            The Four Movements of ARIA
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Attitude Root Identification",
                description: "Learn to identify underlying attitude roots through analysis of real-world conversation transcripts from our research studies. Practice with interactive exercises based on actual conversations.",
                icon: <BookOpen className="h-12 w-12 text-gray-700" />
              },
              {
                title: "Empathic Affirmation",
                description: "Master the art of acknowledging concerns while avoiding misinformation validation. Study comparative analyses of AI-human and human-human conversations, with guided practice to refine your approach.",
                icon: <MessageCircle className="h-12 w-12 text-gray-700" />
              },
              {
                title: "Tailored Refutation",
                description: "Develop skills in replacing misconceptions while preserving attitude roots. Analyze real conversations, practice crafting refutations, and receive AI evaluation of your approach.",
                icon: <BookOpen className="h-12 w-12 text-gray-700" />
              },
              {
                title: "AI-Guided Practice",
                description: "Engage in two practice conversations with AI confederates presenting Epistemically Suspect Beliefs. Receive detailed feedback from a separate AI analyst on your implementation of ARIA techniques.",
                icon: <Cpu className="h-12 w-12 text-gray-700" />
              }
            ].map((module, index) => (
              <Card key={index} className="bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <CardHeader className="flex flex-row items-center space-x-4">
                  {module.icon}
                  <div>
                    <CardTitle className="text-xl text-gray-800">
                      Movement {index + 1}: {module.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Orchestra Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Your AI Orchestra</h3>
            <p className="text-lg text-gray-600 mb-8">
              ARIA condenses traditional motivational interviewing into a focused 40-minute program, 
              with AI technology serving as your supporting orchestra. From providing real-time 
              feedback to simulating practice conversations, our AI suite ensures a comprehensive 
              and personalized learning experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Practice AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Engage with AI confederates trained to present various Epistemically Suspect Beliefs, 
                    allowing you to practice ARIA techniques in a safe environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Feedback AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Receive detailed analysis and personalized feedback on your implementation 
                    of each ARIA component after practice sessions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-gray-300">© 2025 ARIA Training. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ARIAWebpage;
