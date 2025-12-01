import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const jobs = [
  {
    title: "Senior React Developer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Contract",
  },
];

const CareerPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Join Our Team</h1>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <Card
            key={index}
            className="flex flex-col md:flex-row justify-between items-center p-6 gap-4"
          >
            <div>
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p className="text-gray-600">
                {job.location} • {job.type}
              </p>
            </div>
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
