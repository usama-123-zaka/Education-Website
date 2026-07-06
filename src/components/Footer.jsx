import React from "react";
import footerImage from "../assets/footer.png";

export default function Footer() {
  return (
    <footer
      className="relative bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${footerImage})` }}
    > 
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">School Name</h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors">Online Classes</li>
              <li className="hover:text-white transition-colors">Library Access</li>
              <li className="hover:text-white transition-colors">Certified Teachers</li>
              <li className="hover:text-white transition-colors">24/7 Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors">Email: info@school.com</li>
              <li className="hover:text-white transition-colors">Phone: +123 456 789</li>
              <li className="hover:text-white transition-colors">Address: City, Country</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} School Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}