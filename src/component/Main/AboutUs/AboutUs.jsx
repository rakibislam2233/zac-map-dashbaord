import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import CustomButton from "../../../utils/CustomButton";

const AboutUs = () => {
  // Demo About Us content as fallback
  const demoAboutUs = `
    <div className="prose max-w-none">
      <h2>Welcome to Our Company</h2>
      <p>
        We are a passionate team dedicated to delivering innovative solutions that empower our users. 
        Established in 2020, our mission is to create meaningful impact through technology and exceptional user experiences.
      </p>
      <h3>Our Vision</h3>
      <p>
        To be a global leader in transformative digital solutions, fostering creativity and collaboration.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Innovation: Pushing boundaries with cutting-edge technology</li>
        <li>Integrity: Maintaining transparency and trust</li>
        <li>Excellence: Striving for the highest quality in everything we do</li>
      </ul>
    </div>
  `;

  return (
    <section className="w-full h-full px-5 pb-5">
      {/* Header with navigation and edit button */}
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-4 items-center">
          {/* Back button to settings page */}
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">About Us</h1>
        </div>
        {/* Edit button linking to edit page */}
        <Link to={"/settings/edit-about-us"}>
          <CustomButton border>
            <TbEdit className="size-5" />
            <span>Edit</span>
          </CustomButton>
        </Link>
      </div>

      {/* Render About Us content from API or demo content as fallback */}
      <div
        dangerouslySetInnerHTML={{
          __html: demoAboutUs,
        }}
      />
    </section>
  );
};

export default AboutUs;
