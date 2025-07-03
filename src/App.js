import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-orange-500 to-yellow-400 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Spread Light This Diwali</h1>
        <p className="text-lg">Donate to help us provide food boxes to the needy</p>
      </header>

      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About the Initiative</h2>
        <p className="max-w-xl mx-auto">
          Every Diwali, while we celebrate with lights and sweets, many families go hungry. Our mission is to collect donations and distribute food boxes to those in need.
        </p>
      </section>

      <section className="p-8 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Donate Now</h2>
        <p className="mb-4">Scan the QR code below to donate via UPI</p>
        <div className="flex justify-center">
          <img src="/qr-code.png" alt="Donate QR Code" className="w-48 h-48 border rounded shadow" />
        </div>
        <p className="mt-4 text-sm text-gray-600">Your contribution will help us distribute food this Diwali</p>
      </section>

      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Email: help@diwalidaan.org</p>
        <p>Phone: +91 98765 43210</p>
      </section>

      <footer className="bg-orange-100 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Diwali Donation Drive. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
