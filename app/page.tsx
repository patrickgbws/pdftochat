import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Contents from '@/components/home/Contents';

export default async function Home() {
  return (
    <main className="sm:pb-0">
        <Header />
        <Contents />
    </main>
  );
}
