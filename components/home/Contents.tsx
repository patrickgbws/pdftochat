import Link from 'next/link';
import Image from 'next/image';

const data = [
  {
    title: 'PDF to AI Conversation',
    alt: 'PDF to AI Conversation',
    description: "It's like chatting with someone who knows your document inside and out. Just type in what you need, and get a quick, accurate response.",
    image: '/pen.png',
  },
  {
    title: 'Save Time',
    alt: 'Save Time',
    description: "Don't waste time hunting for information. Ask for any summary or extract key information - all in seconds. ",
    image: '/upload.png',
  },
  {
    title: 'Easy Learning',
    alt: 'Easy Learning',
    description: "We all know how things keep interesting when interacting with your documents while learning. ",
    image: '/chat.png',
  },
];

const UseCase = [
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Book.pdf",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Financial Report.pdf",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Contact.pdf",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "User Manual.pdf",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Invoice.pdf",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Scientific Paper.pdf",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Marketing Brochure.pdf",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Newsletter.pdf ",
  },
  {
    image: '/upload.png',
    alt: 'AI-Powered PDF Interaction for Any Use Case - Book.pdf',
    text: "Research Paper.pdf",
  }
]

const Contents = () => {
  return (
    <>
        {/* iframe */}
        <div className="container max-w-screen-xl xl:mx-auto mt-[-300px] sm:px-4">
          <div className=" " style={{position: "relative", paddingTop: "60%", border:"1px solid #a9a9a9", borderRadius:"10px"}}>
            <iframe 
              src="https://customer-k5rghq683w5sm3cf.cloudflarestream.com/08305713d67ee6e204c0435b7ae5ce7f/iframe?muted=true&amp;preload=true&amp;loop=true&amp;autoplay=true&amp;poster=https%3A%2F%2Fcustomer-k5rghq683w5sm3cf.cloudflarestream.com%2F08305713d67ee6e204c0435b7ae5ce7f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600" 
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
              allowFullScreen 
              style={{
                borderRadius: "10px", 
                position: "absolute", 
                top: 0, 
                left: 0, 
                height: "100%", 
                width: "100%"
              }}>
            </iframe>
          </div>
        </div>
        

        {/* ifarme视频描述 */}
        <div className="container max-w-screen-xl xl:mx-auto pt-[50px] sm:pt-[50px] pb-[50px] sm:pb-[50px] sm:px-4 "> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] sm:gap-[50px] ">  {/*md:mx-20*/}
            {data.map((item, index) => (
            <div key={index} className="border-[3px] border-[#e9e9e9ba] p-[35px] rounded-tl-[30px] rounded-tr-[120px] rounded-bl-[60px] rounded-br-[30px] hover:border-[#1e58eb]">
              <div className="flex items-center pb-[30px] sm:pb-[30px]">     {/* justify-center  */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={62}
                  height={62}
                  className="w-6 sm:w-[62px] h-6 sm:h-[62px]"
                />
              </div>
              <div className="flex flex-col">    {/* items-center gap-2 sm:gap-9*/}
                <h3 className="text-[20px] sm:text-[20px] pb-[10px] sm:pb-[10px] font-[600]">       {/* text-center text-2xl sm:text-5xl tracking-[-1.2px] leading-[34.5px]*/}
                  {item.title}
                </h3>
                <p className="pb-5 sm:pb-0 max-w-sm leading-[22px] sm:leading-[22px] text-[16px] sm:text-[16px] text-[#1e58eb]">{/* text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px]*/}
                  {item.description}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* AI-Powered PDF Interaction for Any Use Case */}
        <div className="container max-w-screen-xl xl:mx-auto pt-[50px] sm:pt-[50px] pb-[50px] sm:pb-[50px] sm:px-4">
          <h2 className="text-center text-[48px] sm:text-[48px] capitalize font-light leading-[72px] sm:leading-[34.5px] font-[500] pb-3 sm:pb-[30px] ">
            AI-Powered PDF Interaction for Any Use Case
          </h2>
          <p className="text-center text-[18px] sm:text-[18px] font-light leading-[25px] sm:leading-[25px] max-w-[968px] mx-auto pb-[18px] sm:pb-11">
            At XXX, we're a team of AI experts who get what it's like to deal with dense, multi-page PDFs. Making it easier for you to find, 
            summarize, and understand all that information is why XXX was created - it works no matter what kind of PDF content you want to explore. 
          </p>
          <div className="flex">
            {UseCase.map((item, index) => (
              <div className="">
                  <p className="flex "><Image src={item.image} alt={item.alt} width={20} height={20} className="w-6 sm:w-[20x] h-6 sm:h-[20px]"/>{item.text}</p>
              </div>
            ))}
          </div>
          <span>
            
          </span>
        </div>


        {/*  */}
        <div>
        <h2>FAQs</h2>
        <h4>What AI model does XXX use, and is it better than ChatPDF?</h4>
        <p>XXX combines a range of AI models, including OpenAI's ChatGPT, Google Gemini, Together AI, Mixtral, Pinecone, and LangChain. It's one of the most versatile Chat PDF tools out there, and some say it's one of the best alternatives to ChatPDF. </p>
        <h4>Is XXX PDFGPT free to use?</h4>
        <p>Yes, at the moment, XXX is completely free to use. You can read PDFs, summarize them, and more without paying a dime. We're doing this to get user feedback and improve the tool, so dive in and give it a try while it's free!</p>
        <h4>What are the limitations of XXX?</h4>
        <p>XXX currently works with PDF files only. We don't support other formats yet, but we're building more features to make working with PDFs even easier, like a PDF compressor, splitter, editor, and other tools, and they are all free! </p>
        <h4>How do I use XXX chatbot?</h4>
        <p>It's super easy. Just drag and drop a PDF file onto the workspace on our site, and you can start chatting with it. </p>
    </div>
    </>

  );
};

export default Contents;
