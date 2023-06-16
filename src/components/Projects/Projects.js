import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import denoising from "../../Assets/Projects/denoising.jpg";
import CustomerChurn from "../../Assets/Projects/CustomerChurn.png";
import Health from "../../Assets/Projects/Health.jpg";
import forgeryDetection from "../../Assets/Projects/forgeryDetection.jpg";
import RealEstate from "../../Assets/Projects/RealEstate.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Agri-Net"
              description="Designing a CNN model to predict diseases in plants This project employs deep learning techniques to predict and classify crop diseases. The objectives include detecting unhealthy plant leaf regions, analyzing them, and accurately classifying diseases using various features. To enhance accuracy, the project emphasizes training the algorithm on large datasets. The goal is to provide a valuable tool for early disease detection in crops, enabling improved agricultural practices and higher crop yields."
              ghLink="https://github.com/ShivamKabra/Multiple-Disease-Prediction-in-Plants.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denoising}
              isBlog={false}
              title="Denoisify"
              description="I've built a deep-learning model utilizing autoencoders to enhance noisy images by generating clear, noise-free counterparts. With extensive training and optimization, my model transforms noisy inputs into visually appealing, crisp images. This innovative solution has the potential to significantly improve image quality across domains such as photography, medical imaging, and computer vision applications."
              ghLink="https://github.com/ShivamKabra/Image-Denoising-Using-CNN.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RealEstate}
              isBlog={false}
              title="PropPrice+"
              description="This project develops a real estate price prediction model using linear regression and EDA techniques. It involves analyzing the real estate dataset through EDA methods to understand the relationships between property features and prices. A linear regression model is then built and trained on the dataset to predict property prices. The model's performance is evaluated using metrics such as MSE, MAE, and R-squared."
              ghLink="https://github.com/ShivamKabra/Real-Estate-Price-predictor.git"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Health}
              isBlog={false}
              title="Parlinson Detector"
              description="This Machine learning model aims to predict Parkinson's disease amongst individuals based on certain parameters. This project utilizes machine learning algorithms to predict Parkinson's disease based on specific parameters. It involves preprocessing the data and applying various algorithms such as SVM, KNN, logistic regression, decision trees, and random forests to build predictive models. The performance of each model is evaluated, and the most accurate model is selected. The project aims to contribute to early detection and diagnosis of Parkinson's disease, potentially improving patient care and treatment strategies."
              ghLink="https://github.com/ShivamKabra/Parkinson-Disease-detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forgeryDetection}
              isBlog={false}
              title="ForgeryGuard"
              description="This project involves the development and implementation of a deep learning model for image forgery detection. The model utilizes a combination of convolutional neural networks (CNNs), autoencoders, and spatial attention mechanisms to enhance its performance in detecting forged regions in images. The model architecture consists of an encoder network that captures high-level features and a decoder network that reconstructs the input image."
              ghLink="https://github.com/ShivamKabra/Document-Forgery-Detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CustomerChurn}
              isBlog={false}
              title="CustomerChurn-AI"
              description="Description: Analysis the customer satisfaction with the facilities. Using Artificial neural network to predict Whether the customer will be discontinuing the Banks’ services. "
              ghLink="https://github.com/ShivamKabra/Banking-Customer-Churn-Model.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
