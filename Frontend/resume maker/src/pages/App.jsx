export default function App() {
  const initialData = {
    personalInformation: {
      fullName: "John Doe",
      email: "john.doe@email.com",
      phoneNumber: "+1234567890",
      location: "New York, USA",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      github: "https://github.com/johndoe",
      portfolio: "https://john-doe.portfolio.website",
    },
    summary: "Experienced Java Developer...",
    skills: {
      programmingLanguages: ["Java", "Hindi", "English"],
      frameworks: ["Spring Boot", "React.js"],
      databases: ["MySQL", "PostgreSQL", "MongoDB"],
      cloud: ["AWS"],
      devOpsTools: ["Docker", "Kubernetes", "Ansible"],
      otherSkills: ["RESTful APIs", "Microservices"],
    },
    experience: [
      {
        jobTitle: "Senior Software Developer",
        company: "XYZ Solutions",
        location: "New York, USA",
        duration: "Jan 2017 – Present",
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 text-base-content">
      <DynamicForm initialData={initialData} />
    </div>
  );
}