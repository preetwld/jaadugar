'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Instagram, Twitter, Mail, User, Settings, Heart } from "lucide-react"

export function HomepageComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <nav className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">Logo</div>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/contribute" className="text-gray-600 hover:text-blue-600 transition-colors">Contribute</Link>
            <Link href="/research" className="text-gray-600 hover:text-blue-600 transition-colors">Research</Link>
            <Link href="/news" className="text-gray-600 hover:text-blue-600 transition-colors">News</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Preferences</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="text-blue-600 hover:bg-blue-50">Sign In</Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">What would you like to do?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 text-lg bg-blue-600 hover:bg-blue-700 text-white">Notes</Button>
            <Button className="h-20 text-lg bg-blue-600 hover:bg-blue-700 text-white">Order Food</Button>
            <Button className="h-20 text-lg bg-blue-600 hover:bg-blue-700 text-white">Hire for Service</Button>
            <Button className="h-20 text-lg bg-blue-600 hover:bg-blue-700 text-white">Private Chats</Button>
          </div>
        </section>

        <section className="mb-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">User Feedback</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Name" className="w-full" />
            <Input placeholder="Email" type="email" className="w-full" />
            <Input placeholder="Phone Number" className="w-full" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select feedback type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feedback">User Feedback</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
                <SelectItem value="dispute">Dispute Resolution</SelectItem>
                <SelectItem value="college">College Help</SelectItem>
              </SelectContent>
            </Select>
            <textarea
              placeholder="Your message"
              className="w-full col-span-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <Button type="submit" className="w-full col-span-2 bg-blue-600 text-white hover:bg-blue-700">Submit Feedback</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Contact Us</h3>
              <p className="text-sm text-gray-600">Email: info@techsite.com</p>
              <p className="text-sm text-gray-600">Support: support@techsite.com</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><Instagram /></Link>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><Twitter /></Link>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><Mail /></Link>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <form className="flex">
                <Input placeholder="Enter your email" className="rounded-l-md" />
                <Button type="submit" className="rounded-r-md bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}