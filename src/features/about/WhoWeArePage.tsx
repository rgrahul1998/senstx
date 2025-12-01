import Card from "../../components/common/Card";

const WhoWeArePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Who We Are</h1>
      <Card className="p-8 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We are a premier consulting firm dedicated to transforming businesses
          through innovative technology solutions. Our team of experts
          specializes in AI, cloud computing, and digital transformation.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With a proven track record of success, we help organizations navigate
          the complexities of the modern digital landscape and achieve
          sustainable growth.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">200+</h3>
          <p className="text-gray-600">Projects Delivered</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
          <p className="text-gray-600">Expert Consultants</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;
