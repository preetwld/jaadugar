'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Instagram, Twitter, Mail, User, Settings, Heart, Book, Utensils, Smartphone, Users } from "lucide-react"

export function Page() {
  return (
    <div className="min-h-screen bg-white text-[#4A5A8F] flex flex-col">
      <nav className="bg-[#C4D7FF] py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-[#4A5A8F]">ComfortTech</div>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/contribute" className="text-[#4A5A8F] hover:text-[#87A2FF] transition-colors">Contribute</Link>
            <Link href="/research" className="text-[#4A5A8F] hover:text-[#87A2FF] transition-colors">Research</Link>
            <Link href="/news" className="text-[#4A5A8F] hover:text-[#87A2FF] transition-colors">News</Link>
            <Link href="/contact" className="text-[#4A5A8F] hover:text-[#87A2FF] transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#4A5A8F] hover:text-[#87A2FF] transition-colors">
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
            <Button variant="outline" className="bg-[#FFD7C4] text-[#4A5A8F] hover:bg-[#FFC4A8] border-[#4A5A8F]">Sign In</Button>
            <Button className="bg-[#87A2FF] text-white hover:bg-[#7691EE]">Sign Up</Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4A5A8F]">What would you like to do?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-24 text-lg bg-[#87A2FF] hover:bg-[#7691EE] text-white flex flex-col items-center justify-center">
              <Book className="h-8 w-8 mb-2" />
              Notes
            </Button>
            <Button className="h-24 text-lg bg-[#87A2FF] hover:bg-[#7691EE] text-white flex flex-col items-center justify-center">
              <Utensils className="h-8 w-8 mb-2" />
              Order Food
            </Button>
            <Button className="h-24 text-lg bg-[#87A2FF] hover:bg-[#7691EE] text-white flex flex-col items-center justify-center">
              <Smartphone className="h-8 w-8 mb-2" />
              Hire for Service
            </Button>
            <Button className="h-24 text-lg bg-[#87A2FF] hover:bg-[#7691EE] text-white flex flex-col items-center justify-center">
              <Users className="h-8 w-8 mb-2" />
              Private Chats
            </Button>
          </div>
        </section>

        <section className="mb-12 bg-[#C4D7FF] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4A5A8F]">User Feedback</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Name" className="w-full bg-white border-[#87A2FF]" />
            <Input placeholder="Email" type="email" className="w-full bg-white border-[#87A2FF]" />
            <Input placeholder="Phone Number" className="w-full bg-white border-[#87A2FF]" />
            <Select>
              <SelectTrigger className="bg-white border-[#87A2FF]">
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
              className="w-full col-span-2 p-2 bg-white border border-[#87A2FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#87A2FF]"
              rows={4}
            ></textarea>
            <Button type="submit" className="w-full col-span-2 bg-[#87A2FF] text-white hover:bg-[#7691EE]">Submit Feedback</Button>
          </form>
        </section>
      </main>

      <footer className="bg-[#87A2FF] py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">Email: info@comforttech.com</p>
              <p className="text-sm">Support: support@comforttech.com</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-[#C4D7FF] transition-colors"><Instagram /></Link>
                <Link href="#" className="text-white hover:text-[#C4D7FF] transition-colors"><Twitter /></Link>
                <Link href="#" className="text-white hover:text-[#C4D7FF] transition-colors"><Mail /></Link>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <form className="flex">
                <Input placeholder="Enter your email" className="rounded-l-md bg-white border-[#C4D7FF] text-[#4A5A8F]" />
                <Button type="submit" className="rounded-r-md bg-[#C4D7FF] hover:bg-[#A3B6EE] text-[#4A5A8F]">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}