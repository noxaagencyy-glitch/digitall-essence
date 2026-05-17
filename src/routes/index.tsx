import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold">NOXA FUNCTIONEAZĂ 🚀</h1>
    </main>
  );
}
