import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import JuiceMenu from '@/components/JuiceMenu';
import AppPromo from '@/components/AppPromo';
import OurStory from '@/components/OurStory';
import Partner from '@/components/Partner';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <JuiceMenu />
        <AppPromo />
        <OurStory />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
