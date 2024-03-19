import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, desc, image, demo, prolink }) => {
  return (
    <Col size={12} sm={6} md={4} className="h-full w-full">
      <div className="proj-imgbx ">
        <img src={image} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
          <div>
            {" "}
            <a
              className="inline-block bg-blue-500 no-underline text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600"
              href={demo}
              target="_blank"
            >
              Demo
            </a>
            <a
              className="inline-block bg-blue-500 no-underline text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600"
              href={prolink}
              target="_blank"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
