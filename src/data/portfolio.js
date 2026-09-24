// ─────────────────────────────────────────────────────────────
//  Everything on the site comes from this file. Edit here only.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ansh Dankhara",
  initials: "AD",
  roles: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "M.Sc. Data Science Student"],
  tagline:
    "I turn raw data into models and dashboards people can use, and I take them all the way to a deployed API.",
  study: "M.Sc. Data Science, UE Potsdam",
  location: "Berlin, Germany",
  email: "ansh.dankhara.74@gmail.com",
  phone: "+49 155 10828618",
  linkedin: "https://www.linkedin.com/in/ansh-dankhara-852a62326/",
  github: "https://github.com/AnshD109",
  resume: "./Ansh-Dankhara-CV.pdf",  // put the PDF in /public
  photo: "./profile-picture.jpg",    // put your photo in /public, or leave it out for initials
  available: "Looking for data science and ML internships or working student roles",
};

export const about = {
  summary: [
    "I'm an M.Sc. Data Science student in Berlin who takes machine learning from raw data to a deployed API: feature engineering, time-aware validation, FastAPI services and drift monitoring.",
    "I care as much about evaluating a model as training it, and I'm looking for an internship or working student role in data science or ML engineering.",
  ],
  facts: [
    { value: "9.28M", label: "Trips modelled", note: "NYC taxi data, end-to-end pipeline" },
    { value: "−10%", label: "Lower ETA error", note: "MAE 5.72 → 5.17 min vs baseline" },
    { value: "3", label: "Deployed ML APIs", note: "FastAPI services with drift checks" },
    { value: "5", label: "Certificates", note: "Microsoft, Google and AWS" },
  ],
};

export const featured = {
  title: "Urban Mobility ML Suite",
  subtitle: "ETA, pricing, maintenance risk and NLP triage on real NYC taxi data",
  blurb:
    "An end-to-end pipeline on 9.28 million NYC TLC trips from Q1 2024, joined with hourly weather and taxi-zone data. I simulated delivery orders from the trips, trained regression models from a linear baseline up to Random Forest with time-aware cross-validation, and broke the error down by hour to see where congestion and long trips were being underestimated. The models run as three FastAPI microservices with a Streamlit dashboard and Evidently drift monitoring.",
  metrics: [
    { value: "9.28M", label: "trips" },
    { value: "−10%", label: "MAE vs baseline, 5.72 to 5.17 min" },
    { value: "3", label: "FastAPI services" },
  ],
  stack: ["Python", "scikit-learn", "pandas", "FastAPI", "Streamlit", "Evidently"],
  links: { code: "https://github.com/AnshD109/Urban-Mobility", demo: "" },
};

// tags drive the filter buttons
export const projects = [
  {
    title: "Document Intelligence Pipeline",
    blurb:
      "A RAG system for questions over financial reports. PDFs are chunked and embedded into a FAISS index; a LangChain chain answers with the source document and page cited. Served through FastAPI with a Streamlit UI, Evidently tracking query drift, and Docker Compose for setup.",
    tags: ["NLP & LLMs", "MLOps"],
    stack: ["LangChain", "FAISS", "OpenAI", "FastAPI", "Docker"],
    links: { code: "https://github.com/AnshD109/doc-intelligence-pipeline", demo: "" },
  },
  {
    title: "Demand Forecasting with an LSTM",
    blurb:
      "Weekly demand forecasts for 20 SKUs, testing whether a PyTorch LSTM earns its complexity against Random Forest and a naive baseline. It wins on MAE and RMSE but loses on MAPE, which means it favours high-volume SKUs. The write-up covers what that trade-off would mean for inventory.",
    tags: ["Deep Learning", "Time Series"],
    stack: ["PyTorch", "scikit-learn", "pandas"],
    results: [
      { label: "Naive", value: "18.87" },
      { label: "Random Forest", value: "16.96" },
      { label: "LSTM", value: "16.69" },
    ],
    resultsCaption: "Test MAE, chronological hold-out",
    links: { code: "https://github.com/AnshD109/demand-forecasting-lstm", demo: "" },
  },
  {
    title: "Empathetic Response AI",
    blurb:
      "Detects emotion and urgency in a message and routes it to a fitting response. Two TF-IDF and Logistic Regression models trained on ISEAR and FinancialPhraseBank with class balancing, thresholds tuned for the precision–recall trade-off, and a real-time REST API with joblib-persisted models.",
    tags: ["NLP & LLMs", "Machine Learning"],
    stack: ["scikit-learn", "TF-IDF", "FastAPI", "joblib"],
    links: { code: "https://github.com/AnshD109/Empathetic-Response-AI-project", demo: "" },
  },
  {
    title: "AutoAI: Vehicle Health Monitoring",
    blurb:
      "Predicts component failures from streaming vehicle sensor data. Readings are published and consumed over MQTT, scored by an XGBoost model, and shown on a Flask dashboard. Built during my M.Sc. at UE.",
    tags: ["Machine Learning"],
    stack: ["XGBoost", "MQTT", "Flask", "pandas"],
    links: { code: "https://github.com/AnshD109/AutoAI-Smart-Vehicle-Health-Monitoring-Failure-Prediction", demo: "" },
  },
  {
    title: "Credit Card Fraud Detection",
    blurb:
      "My B.Sc. thesis, a team project. We compared Logistic Regression, Random Forest and SVM on 284,807 transactions where only 0.17% are fraud, so the evaluation leans on precision, recall and ROC-AUC rather than accuracy alone.",
    tags: ["Machine Learning"],
    stack: ["scikit-learn", "pandas", "Matplotlib"],
    links: { code: "https://github.com/AnshD109/Fraud-Detection-Using-ML", demo: "" },
  },
  {
    title: "Loan Approval and Amount Prediction",
    blurb:
      "A classifier for loan approval and a regressor for the approved amount, compared across several models and wrapped in a small Tkinter app for entering an application and getting both predictions.",
    tags: ["Machine Learning"],
    stack: ["scikit-learn", "pandas", "Tkinter"],
    links: { code: "https://github.com/AnshD109/Loan-Approval-and-Loan-Amount-Prediction", demo: "" },
  },
  {
    title: "BI Dashboards",
    blurb:
      "Power BI and Tableau reports on finance, HR attrition, retail and sales data, plus a Netflix catalogue analysis. Each one starts from a business question and keeps the page to the numbers that answer it.",
    tags: ["Analytics"],
    stack: ["Power BI", "Tableau", "SQL", "Excel"],
    links: { code: "https://github.com/AnshD109/PowerBI-Projects", demo: "" },
  },
];

// icon names come from src/components/icons.jsx
export const skills = [
  { group: "Programming", icon: "code", items: ["Python", "SQL", "PostgreSQL", "MySQL", "pandas", "NumPy"] },
  { group: "Machine learning", icon: "brain", items: ["scikit-learn", "XGBoost", "Feature engineering", "Hyperparameter tuning", "Cross-validation", "Imbalanced data"] },
  { group: "Modelling", icon: "model", items: ["Regression", "Classification", "Time series", "NLP (TF-IDF)", "Statistical modelling", "A/B testing"] },
  { group: "Evaluation", icon: "target", items: ["ROC-AUC", "PR-AUC", "Precision, recall, F1", "MAE and RMSE", "Threshold tuning"] },
  { group: "Analytics and BI", icon: "chart", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "ETL pipelines", "Jupyter"] },
  { group: "MLOps and cloud", icon: "cloud", items: ["FastAPI", "Streamlit", "Evidently", "Docker", "AWS (EC2, S3, RDS, IAM)", "Git"] },
];

export const learning = ["PyTorch", "MLflow", "Hugging Face Transformers", "LangChain"];

export const education = [
  {
    degree: "M.Sc. Data Science",
    school: "University of Europe for Applied Sciences",
    location: "Potsdam, Germany",
    period: "2025 – 2027 (expected)",
    details: "Coursework: Machine Learning, Time Series Analysis, Statistical Learning, Data Engineering, Cloud Computing (AWS)",
  },
  {
    degree: "B.Sc. Information Technology",
    school: "GLS University",
    location: "India",
    period: "2021 – 2024",
    details: "Thesis: Credit Card Fraud Detection (Logistic Regression, Random Forest, SVM). CGPA 8.5/10, German equivalent 1.6.",
  },
];

// Ordered by relevance for data science, ML engineering and analyst roles.
export const certifications = [
  {
    name: "Foundations of AI and Machine Learning",
    issuer: "Microsoft",
    via: "Coursera",
    date: "Jun 2026",
    focus: "Machine learning",
    verify: "https://coursera.org/verify/HOWDP50IUH2M",
  },
  {
    name: "AI Fundamentals",
    issuer: "Google",
    via: "Coursera",
    date: "Jul 2026",
    focus: "Artificial intelligence",
    verify: "https://coursera.org/verify/62GRQXWE5UJD",
  },
  {
    name: "Data Engineering Essentials",
    issuer: "AWS",
    via: "Credly",
    date: "2024",
    focus: "Data engineering",
    verify: "",
  },
  {
    name: "Cloud Foundations",
    issuer: "AWS",
    via: "Credly",
    date: "2024",
    focus: "Cloud",
    verify: "",
  },
  {
    name: "Web Application Builder",
    issuer: "AWS",
    via: "Credly",
    date: "2024",
    focus: "Deployment",
    verify: "",
  },
];

export const languages = [
  { name: "English", level: "C1, fluent" },
  { name: "German", level: "A2" },
  { name: "Hindi", level: "Native" },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
