const data = {
  languages: [
    { id: 1, alt: "C++", img: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
    { id: 2, alt: "Python", img: "https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white" },
    { id: 3, alt: "JavaScript", img: "https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" },
    { id: 28, alt: "TypeScript", img: "https://img.shields.io/badge/TypeScript-%232F73A6.svg?style=for-the-badge&logo=typescript&logoColor=white" },
    { id: 4, alt: "HTML5", img: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
    { id: 5, alt: "CSS3", img: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
  ],
  lib: [
    { id: 10, alt: "React JS", img: "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { id: 11, alt: "Redux", img: "https://img.shields.io/badge/Redux-%23593D88.svg?style=for-the-badge&logo=redux&logoColor=white" },
    { id: 29, alt: "Tailwind CSS", img: "https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" },
    { id: 30, alt: "Node.js", img: "https://img.shields.io/badge/Node.js-%2361DAFB.svg?style=for-the-badge&logo=node.js&logoColor=white" },
    { id: 12, alt: "Express.js", img: "https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" },
    { id: 41, alt: "PyTorch", img: "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=pytorch&logoColor=white" },
    { id: 42, alt: "TensorFlow", img: "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=tensorflow&logoColor=white" },
    { id: 43, alt: "LangChain", img: "https://img.shields.io/badge/LangChain-%2300A67E.svg?style=for-the-badge&logo=chainlink&logoColor=white" },
    { id: 44, alt: "NumPy", img: "https://img.shields.io/badge/NumPy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" },
    { id: 45, alt: "Pandas", img: "https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" },
    { id: 46, alt: "Scikit-learn", img: "https://img.shields.io/badge/Scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikitlearn&logoColor=white" },
    { id: 47, alt: "Seaborn", img: "https://img.shields.io/badge/Seaborn-%23157DAB.svg?style=for-the-badge&logo=plotly&logoColor=white" },
    { id: 48, alt: "LLM", img: "https://img.shields.io/badge/LLM-%23006BA6.svg?style=for-the-badge&logo=openai&logoColor=white" },
  ],
  design: [
    { id: 19, alt: "MySQL", img: "https://img.shields.io/badge/MySQL-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
    { id: 15, alt: "MongoDB", img: "https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
    { id: 36, alt: "Vector Database", img: "https://img.shields.io/badge/Vector%20DB-%230084FF.svg?style=for-the-badge&logo=databricks&logoColor=white"},
    { id: 37, alt: "AWS", img: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazonaws&logoColor=white" },
    { id: 38, alt: "Docker", img: "https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" },
    { id: 39, alt: "Kubernetes", img: "https://img.shields.io/badge/Kubernetes-%23326CE5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" },
    { id: 40, alt: "DevOps", img: "https://img.shields.io/badge/DevOps-%230078D7.svg?style=for-the-badge&logo=azuredevops&logoColor=white" },
  ],
  tools: [
    { id: 18, alt: "Bash", img: "https://img.shields.io/badge/Bash-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" },
    { id: 22, alt: "Linux", img: "https://img.shields.io/badge/Linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black" },
    { id: 14, alt: "Visual Studio Code", img: "https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white" },
    { id: 16, alt: "Figma", img: "https://img.shields.io/badge/Figma-%23324E71.svg?style=for-the-badge&logo=figma&logoColor=white" },
    { id: 56, alt: "Power BI", img: "https://img.shields.io/badge/Power%20BI-%23F2C811.svg?style=for-the-badge&logo=powerbi&logoColor=black" },
    { id: 57, alt: "ETL", img: "https://img.shields.io/badge/ETL-%230075A8.svg?style=for-the-badge&logo=databricks&logoColor=white" },
    { id: 58, alt: "Git", img: "https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
    { id: 59, alt: "GitHub", img: "https://img.shields.io/badge/GitHub-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" },
  ],
  project1: [
    
    { id: 10, alt: "React JS", img: "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { id: 29, alt: "Tailwind CSS", img: "https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" },
    { id: 30, alt: "Node.js", img: "https://img.shields.io/badge/Node.js-%2361DAFB.svg?style=for-the-badge&logo=node.js&logoColor=white" },
    { id: 12, alt: "Express.js", img: "https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" },
    { id: 15, alt: "MongoDB", img: "https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
    { id: 51, alt: "OpenAI API", img: "https://img.shields.io/badge/OpenAI%20API-%2300A67E.svg?style=for-the-badge&logo=openai&logoColor=white" },
    { id: 52, alt: "Cloudinary", img: "https://img.shields.io/badge/Cloudinary-%233776AB.svg?style=for-the-badge&logo=cloudinary&logoColor=white" },

    
  ],
  project2: [
    { id: 2, alt: "Python", img: "https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white" },
    { id: 43, alt: "LangChain", img: "https://img.shields.io/badge/LangChain-%2300A67E.svg?style=for-the-badge&logo=chainlink&logoColor=white" },
    { id: 36, alt: "Vector Database", img: "https://img.shields.io/badge/Vector%20DB-%230084FF.svg?style=for-the-badge&logo=databricks&logoColor=white"},
    { id: 45, alt: "Hugging Face", img: "https://img.shields.io/badge/Hugging%20Face-%23FFDD66.svg?style=for-the-badge&logo=huggingface&logoColor=black"},
    { id: 46, alt: "Scikit-learn", img: "https://img.shields.io/badge/Scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikitlearn&logoColor=white" },
    { id: 45, alt: "Pandas", img: "https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" },
    { id: 46, alt: "Gradio", img: "https://img.shields.io/badge/Gradio-%2365C0FF.svg?style=for-the-badge&logo=gradio&logoColor=white" },
  ],
  project3: [
    { id: 2, alt: "Python", img: "https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white" },
    { id: 46, alt: "Scikit-learn", img: "https://img.shields.io/badge/Scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikitlearn&logoColor=white" },
    { id: 47, alt: "Streamlit", img: "https://img.shields.io/badge/Streamlit-%FF4B4B.svg?style=for-the-badge&logo=streamlit&logoColor=white" },
    { id: 48, alt: "Pickle", img: "https://img.shields.io/badge/Pickle%20(Python)-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white"},
  ],
  project4: [
    { id: 10, alt: "React JS", img: "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { id: 29, alt: "Tailwind CSS", img: "https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" },
    { id: 30, alt: "Node.js", img: "https://img.shields.io/badge/Node.js-%2361DAFB.svg?style=for-the-badge&logo=node.js&logoColor=white" },
    { id: 12, alt: "Express.js", img: "https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" },
    { id: 11, alt: "Redux", img: "https://img.shields.io/badge/Redux-%23593D88.svg?style=for-the-badge&logo=redux&logoColor=white" },
    { id: 49, alt: "RESTful APIs", img: "https://img.shields.io/badge/RESTful%20APIs-%23007EC6.svg?style=for-the-badge&logo=fastapi&logoColor=white"},
    { id: 50, alt: "Next.js", img: "https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white" },
    { id: 37, alt: "AWS", img: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazonaws&logoColor=white" },
    
    
    
  ],
  card1: [
    { id: 4, alt: "HTML5", img: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
    { id: 5, alt: "CSS3", img: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
    { id: 10, alt: "React JS", img: "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" },
  ],
  card2: [
    { id: 53, alt: "Machine Learning", img: "https://img.shields.io/badge/Machine%20Learning-%23FF6F00.svg?style=for-the-badge&logo=python&logoColor=white" },
    { id: 54, alt: "Google Colab", img: "https://img.shields.io/badge/Google%20Colab-%23F9AB00.svg?style=for-the-badge&logo=googlecolab&logoColor=white" },

  ],
  card3: [
    { id: 53, alt: "Machine Learning", img: "https://img.shields.io/badge/Machine%20Learning-%23FF6F00.svg?style=for-the-badge&logo=python&logoColor=white" },
    { id: 19, alt: "MySQL", img: "https://img.shields.io/badge/MySQL-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
  ],
  card4: [
    { id: 56, alt: "Power BI", img: "https://img.shields.io/badge/Power%20BI-%23F2C811.svg?style=for-the-badge&logo=powerbi&logoColor=black" },
    { id: 57, alt: "ETL", img: "https://img.shields.io/badge/ETL-%230075A8.svg?style=for-the-badge&logo=databricks&logoColor=white" },
    
    
   
  ],
};

export default data;
