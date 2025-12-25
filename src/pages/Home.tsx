import Header from '../components/Header';
import Hero from '../components/Hero';
import ArticleGrid from '../components/ArticleGrid';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ArticleGrid />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
