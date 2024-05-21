import Link from 'next/link';

const ChatbotisListening = () => {
    return (
        <>
            {/* XXX Chatbot is Listening - Talk to Your PDF AI Assistant */}
            <div className="bg-[#050f1f]">
                <div className="container max-w-screen-xl text-center mx-auto py-[152px]">

                    <div className="max-w-[968px] mx-auto">
                        <h2 className="text-[48px] capitalize leading-[65px] text-[#ffffff] font-[600] pb-[20px]">XXX Chatbot is Listening - Talk to Your PDF AI Assistant</h2>
                        <p className="text-[18px] capitalize text-[#C8CBCC]">Streamline your PDF workflow with our PDF AI Chat tool. Talk to it, ask it what you need, and watch the answers roll in.</p>
                    </div>

                    <div className="flex justify-center mt-[40px]">
                        <Link href={'/dashboard'}>
                            <button className="flex items-center bg-[#1d56e5] text-center rounded-full text-[#fff] hover:text-[#ffffff9c] text-[20px] font-[700] px-[30px] py-[10px] ">
                                Get Started for Free
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ChatbotisListening;
