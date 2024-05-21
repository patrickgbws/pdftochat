import Header from '@/components/home/Header';
import KeyFeatures from "@/components/home/KeyFeatures";
import CustomersReview from "@/components/home/CustomersReview";
import FrequentlyAskedQuestions from "@/components/home/FrequentlyAskedQuestions";
import ChatbotisListening from "@/components/home/ChatbotisListening";
import Footer from "@/components/home/Footer";
import {Key} from "lucide-react";



export default async function Home() {
  return (
    <main className="sm:pb-0">
        <Header />
        <KeyFeatures />
        <CustomersReview />
        <FrequentlyAskedQuestions />
        <ChatbotisListening />
        <Footer />
    </main>
  );
}
