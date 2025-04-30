"use client";
import React, { useEffect, useRef, useState } from 'react';

const ContactMap = () => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const center = {
    lat: 51.5074,
    lng: -0.1278
  };

  useEffect(() => {
    if (typeof window === 'undefined' || window.google?.maps || document.querySelector('script[src*="maps.googleapis.com/maps/api"]')) {
      return;
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    googleMapScript.onload = () => setMapLoaded(true);
    document.head.appendChild(googleMapScript);

    return () => {
      if (googleMapScript.parentNode) {
        googleMapScript.parentNode.removeChild(googleMapScript);
      }
    };
  }, []);


  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 10,
      zoomControl: true,
      mapTypeControl: true,
    });

    const marker = new window.google.maps.Marker({
      position: center,
      map,
      title: 'EDUMART Location',
    });

    const infoContent = `
      <div style="padding: 10px;">
        <h3 style="font-weight: bold;">EDUMART</h3>
        <p>Visit us at our London location!</p>
      </div>
    `;

    const infoWindow = new window.google.maps.InfoWindow({
      content: infoContent,
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

    if (zoomInButton) {
      zoomInButton.addEventListener('click', () => {
        map.setZoom(map.getZoom() + 1);
      });
    }

    if (zoomOutButton) {
      zoomOutButton.addEventListener('click', () => {
        map.setZoom(map.getZoom() - 1);
      });
    }

  }, [mapLoaded, center]);

  return (
    <div className="relative w-full h-screen">
      <div ref={mapRef} className="w-full h-full"></div>

      <div className="absolute top-4 right-4 bg-green-500 text-white p-4 w-64 z-10 rounded shadow-lg">
        <div className="flex items-center mb-3">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <h2 className="text-xl font-bold">EDUMART</h2>
        </div>
        <p className="mb-4 text-sm md:text-base">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p>

        <div className="flex items-center mb-3">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <span>000 0000 000</span>
        </div>

        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <a href="mailto:info@edumart.com" className="underline">info@edumart.com</a>
        </div>

        <div className="flex justify-center space-x-4 py-3 px-2 bg-orange-500 rounded-b mt-2">
          <a href="#" className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.195A4.92 4.92 0 0012.02 7.845a13.94 13.94 0 01-10.114-5.13A4.917 4.917 0 003.01 9.23a4.92 4.92 0 01-2.225-.616 4.918 4.918 0 003.95 4.82 4.908 4.908 0 01-2.23.084 4.924 4.924 0 004.6 3.42A9.89 9.89 0 010 19.293a13.938 13.938 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637a10.086 10.086 0 002.409-2.57"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.223 0h.002z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute top-4 left-4 z-10">
        <a
          href={`https://www.google.com/maps?q=${center.lat},${center.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white px-3 py-1 rounded shadow text-blue-500 text-sm"
        >
          View larger map
        </a>
      </div>

      <div className="absolute bottom-16 right-4 z-10 flex flex-col">
        <button
          id="zoom-in"
          className="bg-white w-8 h-8 flex items-center justify-center rounded-t shadow border-b"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
        <button
          id="zoom-out"
          className="bg-white w-8 h-8 flex items-center justify-center rounded-b shadow"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactMap;
