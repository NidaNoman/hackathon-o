import Image from "next/image";
import { PiNotMemberOfFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 shadow-md">
        <h1 className="text-2xl font-extrabold text-blue-600">Bandago</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Product
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-600 font-semibold">
            Login
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Become a Member
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="px-8 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800">ABOUT US</h2>
            <p className="text-gray-600">
              We know how larger objects will act, but things on a small scale.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Quote Now
            </button>
          </div>
          <div className="relative w-full h-64 lg:h-96 lg:w-1/2">
            <Image
              src="/dif.png"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-extrabold text-gray-800">15K</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-gray-800">150K</h3>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-gray-800">15</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-gray-800">100+</h3>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-8 py-16">
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src="/video.png"
            alt="Video Section"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <button className="absolute inset-center w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
            ▶
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["team1.jpg", "team2.jpg", "team3.jpg"].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-64 mx-auto">
                <Image
                  src={`/team1.jpg/${member}.jpg`}
                  alt="Team Member"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Username
              </h3>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Logos */}
      <section className="px-8 py-12 bg-gray-100">
        <h2 className="text-center text-xl font-bold text-gray-800 mb-8">
          Big Companies Are Here
        </h2>
        <div className="flex items-center justify-center space-x-8">
          {["logo1", "logo2", "logo3", "logo4", "logo5"].map((logo, index) => (
            <img
              key={index}
              src={`/images/${logo}.png`}
              alt={logo}
              className="h-10"
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center px-8 py-16">
        <h2 className="text-3xl font-extrabold mb-6">Now Let's Grow Yours</h2>
        <p className="mb-6">
          The greatest performance of Bandage about classical and quantum
          mechanics driving the first quantum mechanics driving.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 bg-gray-800 text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-2">Company Info</h3>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Resources</h3>
            <ul>
              <li>Support</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Contact</h3>
            <p>Subscribe to get updates</p>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
