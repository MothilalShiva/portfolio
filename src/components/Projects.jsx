import { default as Hurairah } from "../assets/hurairah.jpg";
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.jpg";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import predictt from "../assets/predictt.png";
import m from "../assets/m.jpg";
import MiniProjectCard from "./ui/MiniProjectCard";
import { default as blob } from "../assets/blob.svg";
import data from "../data";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* RECENT PROJECTS */}
      <ProjectCard
        title="Book Recommender"
        subtitle="Personalized AI-Powered Book Recommendations for Every Reader"
        description="Developed an LLM-powered Book Recommender System using Python, LangChain,
Hugging Face Transformers, Scikit-learn, Pandas, and Gradio, integrating vector search, zero-shot text classification, and
sentiment analysis for personalized recommendations."
        picture={p5}
        github="https://github.com/MothilalShiva/LLM_Book_Recommender"
       
        tools={data.project2}
      />
      <ProjectCard
        title="Prediction of Disease Outbreaks"
        subtitle="Leveraging Data and AI for Early Detection and Prevention"
        description="Created a Machine Learning-based Disease Prediction System using Python, Streamlit,
Scikit-Learn, and Pickle, enabling users to predict Diabetes, Heart Disease, and Parkinson's Disease through a user-friendly
interface."
        picture={predictt}
        github="https://github.com/MothilalShiva/Prediction_of_Disease_Outbreaks"
  
        tools={data.project3}
        isImageOnLeft={true}
      />
 <ProjectCard
  title="Restaurant Data Analysis and Insights"
  subtitle="Extracting Actionable Insights with Python, ETL, and Power BI"
  description="Utilized Python for web scraping to extract restaurant data and leveraged ETL processes to clean and transform the dataset. Designed interactive dashboards in Power BI to visualize trends in restaurant ratings, cuisines, and locations, enabling data-driven decision-making."
  picture={p4}
  
  tools={data.card4}
/>

      <ProjectCard
        title="AI Image Generation Application"
        subtitle="AI-Powered Text-to-Image Generation with Optimized Storage and Delivery"
        description="A full-stack application using the MERN stack, integrating OpenAIs DALL-E API for text-to-image generation, building a responsive interface with React.js and Tailwind CSS, and optimizing image storage and delivery through Cloudinary."
        picture={Hurairah}
        github="https://github.com/MothilalShiva/dalle_clone"
        tools={data.project1}
        isImageOnLeft={true}
      />
      {/* OTHER PROJECTS */}
      <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2 lg:grid-cols-4">
        {/* PROJECT CARD */}
        <MiniProjectCard
  github="https://github.com/MothilalShiva/inventory-management"
  picture={p6}
  title="Inventory Management Dashboard Application"
  description="Built and deployed a full-stack inventory management dashboard
  using Next.js, Redux Toolkit, Node.js, and Tailwind CSS, and AWS services (RDS, EC2, API Gateway, Amplify, S3),
  enabling real-time inventory tracking, data analytics, and secure user authentication."
>
  {data.project4.map((tool) => {
    return <img key={tool.id} alt={tool.alt} src={tool.img} />;
  })}
</MiniProjectCard>

        <MiniProjectCard
          github="https://github.com/MothilalShiva/CraveIt-Swiggy-clone"
          picture="https://github-production-user-asset-6210df.s3.amazonaws.com/104366720/366116375-087a02fc-a52e-4bf2-94f7-7da74e6ea446.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250211T155524Z&X-Amz-Expires=300&X-Amz-Signature=dc557b961323ac83940caea4e02cd6bd2b84e56f3d1b41b7228b09e8ef6517b0&X-Amz-SignedHeaders=host"
          title="Craveit (Swiggy Clone)"
          description="Redesigned core features of an online food delivery platform, enhancing restaurant browsing, cart management, and user authentication with a responsive and user-friendly interface."
          
        >
          {data.card1.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/MothilalShiva/Machine-Learning"
          picture={m}
          title="Machine Learning Implementations"
          description="Implemented various Machine Learning algorithms using Google Colab, covering classification, clustering, and regression techniques. Built structured notebooks leveraging TensorFlow, Scikit-learn, and Python libraries to apply KNN, Naive Bayes, SVM, Neural Networks, K-Means, PCA, and regression models."
        >
          {data.card2.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
         
         
          picture={p3}
          title="Thermal Facial Recognition for Automated Attendance"
          description="Designed an AI-driven thermal image processing system for automated student attendance, integrating machine learning for real-time face recognition with enhanced accuracy and efficiency."
        >
          {data.card3.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
       
      </div>
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
