import {
  Hero,
  PhotoGrid,
  Timeline,
  Skills,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PhotoGrid />
      <Timeline />
      <Skills />
      <Footer />
    </main>
  );
}
