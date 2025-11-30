import React, { useRef } from "react";

export default function HomePage() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  const sampleCars = [
    {
      id: 1,
      title: "2021 Porsche 911 Carrera",
      price: "$129,900",
      km: "12,400 km",
      year: 2021,
      img: "https://images.unsplash.com/photo-1549921296-3d6ccf7b5d93?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 2,
      title: "2020 Tesla Model 3 Long Range",
      price: "$48,300",
      km: "32,100 km",
      year: 2020,
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 3,
      title: "2019 BMW M3",
      price: "$67,500",
      km: "21,500 km",
      year: 2019,
      img: "https://images.unsplash.com/photo-1511398592260-5f8b3f9e1f1b?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 4,
      title: "2018 Mercedes-Benz C-Class",
      price: "$35,900",
      km: "45,300 km",
      year: 2018,
      img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 5,
      title: "2022 Ford Mustang GT",
      price: "$54,200",
      km: "8,700 km",
      year: 2022,
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 6,
      title: "2023 Audi Q5",
      price: "$44,800",
      km: "6,400 km",
      year: 2023,
      img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header ref={navRef} className="sticky top-0 z-40 backdrop-blur-md bg-white/60 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            
            <div>
              <h1 className="font-semibold">CarLink</h1>
              <p className="text-xs text-gray-500 -mt-1">Buy & Sell premium cars</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm hover:text-indigo-600">Buy</a>
            <a className="text-sm hover:text-indigo-600">Sell</a>
            <a className="text-sm hover:text-indigo-600">Financing</a>
            <a className="text-sm hover:text-indigo-600">Contact</a>
            <button className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow-lg">Sign in</button>
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-gray-100">Menu</button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section ref={heroRef} className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div data-anim className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">Featured</div>

            {/* FIXED HERE */}
            <h2
              data-anim
              className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Find your dream car — <span className="text-indigo-600">fast</span> &amp; trusted
            </h2>

            <p data-anim className="mt-4 text-gray-600 max-w-xl">
              Browse thousands of verified listings, compare prices, schedule test drives and get financing — all from a single beautiful marketplace.
            </p>

            <div data-anim className="mt-6 flex gap-3 flex-wrap">
              <input aria-label="search" className="flex-1 min-w-[200px] px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="Search by make, model or city" />
              <select className="px-4 py-3 rounded-lg border border-gray-200 outline-none">
                <option>Any year</option>
                <option>2023+</option>
                <option>2020-2022</option>
                <option>2015-2019</option>
              </select>
              <button className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow">Search</button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 max-w-md text-sm text-gray-600">
              <div>
                <div className="text-xs text-gray-400">Verified Sellers</div>
                <div className="font-semibold">1,240+</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Active Listings</div>
                <div className="font-semibold">8,450</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Financing Partners</div>
                <div className="font-semibold">12</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=60" alt="car" className="w-full h-[420px] object-cover" />
            </div>

            <div className="-mt-16 relative z-20">
              <div className="bg-white rounded-xl p-5 shadow-md max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="text-xs text-gray-400">Top Pick</div>
                    <div className="font-semibold">2022 Lamborghini Huracán</div>
                  </div>
                  <div className="text-indigo-600 font-bold">$299,000</div>
                </div>

                <div className="mt-3 text-xs text-gray-500">Low mileage • Single owner • Certified</div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg border border-gray-200">Details</button>
                  <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAR GRID */}
        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Latest Listings</h3>
            <a className="text-sm text-indigo-600">View all</a>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCars.map((car, i) => (
              <article
                key={car.id}
                ref={(el) => (cardsRef.current[i] = el)}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative">
                  <img src={car.img} alt={car.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-lg text-xs font-medium">{car.year}</div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold">{car.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{car.km}</p>
                    </div>
                    <div className="text-indigo-600 font-bold">{car.price}</div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button className="px-3 py-2 text-sm rounded-lg border border-gray-200">Save</button>
                    <button className="px-3 py-2 text-sm rounded-lg bg-indigo-600 text-white">Contact</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between" ref={ctaRef}>
          <div>
            <h3 className="text-2xl font-bold">Sell your car — reach thousands</h3>
            <p className="mt-2 text-sm opacity-90">List easily, get financing offers, and connect with verified buyers.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold shadow">Create a listing</button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 py-10 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div>
              <div className="font-semibold">CarMarket</div>
              <div className="text-xs">© {new Date().getFullYear()} CarMarket. All rights reserved.</div>
            </div>

            <div className="flex gap-6 items-center">
              <a>Terms</a>
              <a>Privacy</a>
              <a>Help</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
