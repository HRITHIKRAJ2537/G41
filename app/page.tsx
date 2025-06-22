"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { ArrowRight, Wallet, BadgeDollarSign, TrendingUp, Users } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section with Background Boxes */}
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <h1 className={cn("md:text-6xl text-3xl font-bold text-white relative z-20 text-center px-4")}>
            Campus Points System
          </h1>
          <p className="text-center mt-4 text-neutral-300 relative z-20 max-w-2xl px-4">
            The digital currency platform designed exclusively for campus transactions.
            Manage payments, track spending, and unlock special student discounts.
          </p>
          <div className="flex gap-4 mt-8 relative z-20">
            <Button className="bg-white text-slate-900 hover:bg-neutral-200">
              Get Started
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-slate-800">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Users</p>
                    <p className="text-3xl font-bold mt-1">2,500+</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Transactions</p>
                    <p className="text-3xl font-bold mt-1">14,320</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-full">
                    <Wallet className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Volume</p>
                    <p className="text-3xl font-bold mt-1">₹158K</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-full">
                    <BadgeDollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Growth</p>
                    <p className="text-3xl font-bold mt-1">+24%</p>
                  </div>
                  <div className="p-3 bg-orange-100 rounded-full">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Button variant="ghost" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600"></div>
              <CardHeader>
                <CardTitle>Navaraas</CardTitle>
                <CardDescription>October 15-24, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Join us for the vibrant celebration of Navaraas! Experience nine nights of music, dance, and cultural festivities. Use your Campus Points for special discounts on event tickets and refreshments.</p>
                <Button className="w-full">Get Tickets</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <CardHeader>
                <CardTitle>KMIT Evening</CardTitle>
                <CardDescription>December 5, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Don't miss the annual KMIT Evening! Enjoy performances by talented students, faculty, and guest artists. Redeem your Campus Points for exclusive seating and merchandise.</p>
                <Button className="w-full">Get Tickets</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-400"></div>
              <CardHeader>
                <CardTitle>Tech Symposium</CardTitle>
                <CardDescription>February 10-12, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Explore the latest innovations at our Tech Symposium. Network with industry professionals and attend workshops on blockchain, AI, and more. Special point rewards for active participation!</p>
                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto py-12 px-4 mb-12">
          <h2 className="text-3xl font-bold mb-8">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all text-center cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <Wallet className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Transfer Points</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white hover:shadow-lg transition-all text-center cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <BadgeDollarSign className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Check Balance</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white hover:shadow-lg transition-all text-center cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Merchant Directory</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500 to-blue-700 text-white hover:shadow-lg transition-all text-center cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold">View Analytics</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Campus Points</h3>
              <p className="text-gray-400">The digital currency solution for modern campus life.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Merchants</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">© 2023 Campus Points System. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}