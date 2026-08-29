import React from 'react';

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-stone-100 via-olive-50 to-olive-200 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/40 bg-white/35 p-8 shadow-lg shadow-olive-200/30 backdrop-blur-sm md:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-olive-700">Portfolio</p>
        <h1 className="text-4xl font-black tracking-tight text-stone-900 md:text-6xl">Welcome</h1>
        <p className="mt-6 max-w-xl text-lg text-stone-700">
          Building thoughtful digital experiences with a clean, modern, and approachable style.
        </p>
      </div>
    </main>
  );
};

export default Home;
