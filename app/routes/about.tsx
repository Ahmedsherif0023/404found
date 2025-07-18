
import '../app.css'
import Navbar from "~/components/navbar/Navbar";

export default function About() {
  return (
    <main>
      <Navbar />
      <h1 className="text-4xl font-bold mt-8">Our About</h1>
      <p className="mt-4">This is the About page.</p>
    </main>
  );
}
