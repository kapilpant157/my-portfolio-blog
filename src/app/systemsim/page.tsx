"use client"
// import { 
//   useState, 
//   useEffect 
// } from "react";
import {
  FaCube,
  FaGlobe,
  FaSitemap,
  FaListOl,
  FaBalanceScale,
  FaProjectDiagram,
  FaBook,
  FaCheckDouble,
  FaPuzzlePiece,
  FaExchangeAlt,
  FaBorderStyle,
  FaSignInAlt,
  FaSignOutAlt,
  FaLightbulb,
  FaThumbsUp,
  FaThumbsDown,
  FaBriefcase,
  FaIndustry,
  FaHeartbeat,
  FaFighterJet,
  FaUniversity,
  FaRoad,
  FaFlask,
  FaWaveSquare,
  FaGripLinesVertical,
  FaPause,
  FaChartLine,
  FaDice,
  FaEquals,
  FaShieldAlt,
  FaCoins,
  FaClock,
  FaSyncAlt,
  FaDollarSign,
  FaUserGraduate,
  FaCompressArrowsAlt,
  FaArrowCircleRight,
  FaCubes,
  FaBrain,
  FaFileAlt,
  FaCalculator,
  FaSearch,
  FaLink,
  FaLayerGroup,
  FaClipboardCheck,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUsers,
  FaInfoCircle,
} from "react-icons/fa";

export default function SimulationModeling() {
  return (
    <div className="space-y-12 pb-12">
      {/* Slide 1: Introduction */}
      <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative">
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

        <div className="p-8 md:p-12 h-full z-10 relative flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-900">
            Introduction to Simulation and Modeling
          </h1>

          <div className="bg-blue-50/60 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8 mx-auto w-full max-w-4xl">
            <h3 className="text-2xl text-blue-800 mb-6">Topics Covered:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4  text-gray-800">
              {[
                { icon: FaCube, text: "1.1 System and its concept" },
                { icon: FaGlobe, text: "1.2 System Environment" },
                { icon: FaSitemap, text: "1.3 Types of System" },
                { icon: FaListOl, text: "1.4 Steps of Simulation" },
                {
                  icon: FaBalanceScale,
                  text: "1.5 Advantage, disadvantage and application",
                },
                {
                  icon: FaProjectDiagram,
                  text: "1.6 System Modeling and types",
                },
                { icon: FaBook, text: "1.7 Principles of Modeling" },
                {
                  icon: FaCheckDouble,
                  text: "1.8 Verification and validation",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8 text-center text-gray-600">
            <p>Understanding systems and models to solve complex problems</p>
          </div>
        </div>
        {/* </div> */}

        {/* Slide 2: System Concept */}
        {/* <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative"> */}
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

        <div className="p-8 md:p-12 h-full z-10 relative">
          <div className="text-blue-800 border-b-2 border-blue-500 pb-3 mb-8">
            <h1 className="text-3xl font-bold">1.1 System and its Concept</h1>
          </div>

          <div className="bg-blue-50/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl text-blue-800 mb-3">What is a System?</h2>
            <p className="text-lg text-gray-800">
              A system is a collection of interacting components or elements
              organized to form a functional whole and achieve a specific
              purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
            {[
              {
                icon: FaPuzzlePiece,
                title: "Components",
                text: "Systems consist of interconnected parts that work together. These components can be physical entities, processes, or even abstract concepts.",
              },
              {
                icon: FaExchangeAlt,
                title: "Interactions",
                text: "Components interact with each other through various relationships, data flows, and dependencies to fulfill the system's purpose.",
              },
              {
                icon: FaBorderStyle,
                title: "Boundaries",
                text: "Systems have defined boundaries that separate them from their environment. These boundaries determine what is included within the system.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm h-full transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100/10 text-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl text-blue-800 mb-4">Why Study Systems?</h2>
            <ul className="list-disc pl-6 space-y-2">
              {[
                "To understand complex phenomena by breaking them down into manageable parts",
                "To analyze how changes in one component affect the entire system",
                "To predict system behavior under various conditions through simulation",
                "To design more efficient and effective solutions to real-world problems",
              ].map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* </div> */}

        {/* Slide 3: System Environment */}
        {/* <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative"> */}
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

        <div className="p-8 md:p-12 h-full z-10 relative">
          <div className="text-blue-800 border-b-2 border-blue-500 pb-3 mb-8">
            <h1 className="text-3xl font-bold">1.2 System Environment</h1>
          </div>

          <div className="bg-blue-50/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl text-blue-800 mb-3">
              What is a System Environment?
            </h2>
            <p className="text-lg text-gray-800">
              The system environment encompasses everything outside the system
              boundary that interacts with or influences the system. It provides
              context, inputs, and constraints that affect system behavior.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100/10 text-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaSignInAlt className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-blue-700">Inputs</h3>
                <p className="text-gray-700">Resources, information, energy</p>
              </div>

              <div className="text-center border-2 border-blue-500 rounded-lg py-4 px-6 my-4 md:my-0 md:mx-4">
                <h3 className="text-xl font-bold text-blue-800">SYSTEM</h3>
                <p className="text-gray-700">
                  Processes, components, interactions
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100/10 text-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaSignOutAlt className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-blue-700">Outputs</h3>
                <p className="text-gray-700">Products, services, waste</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h2 className="text-xl text-blue-800 mb-3">
                Environment Characteristics
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {[
                  "Creates boundaries for the system",
                  "Provides context for system operation",
                  "Presents constraints and limitations",
                  "May contain other interacting systems",
                ].map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl text-blue-800 mb-3">
                Environment Modeling
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {[
                  "Identifies interactive objects the system will encounter",
                  "Simulates external factors that influence system behavior",
                  "Helps understand system adaptability",
                  "Essential for realistic system testing",
                ].map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-8">
            <div className="flex items-start">
              <FaLightbulb className="text-blue-600 mt-1 mr-2" />
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Key Insight
                </h3>
                <p className="text-gray-700">
                  In simulation and modeling, accurately representing the system
                  environment is crucial for creating realistic models that can
                  predict system behavior under various conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Slide 4: Types of System */}
        {/* <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative"> */}
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

        <div className="p-8 md:p-12 h-full z-10 relative">
          <div className="text-blue-800 border-b-2 border-blue-500 pb-3 mb-8">
            <h1 className="text-3xl font-bold">1.3 Types of System</h1>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Continuous vs Discrete */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold mb-4 text-center">
                Continuous vs. Discrete Systems
              </div>
              <div className="flex flex-col md:flex-row relative">
                <div className="md:w-1/2 md:pr-4 pb-4 md:pb-0">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100/10 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      <FaWaveSquare />
                    </div>
                    <h3 className="font-semibold text-blue-700">
                      Continuous Systems
                    </h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>State variables change continuously over time</li>
                    <li>Represented by differential equations</li>
                    <li>Example: Temperature change in a room</li>
                    <li>Often modeled using analog techniques</li>
                  </ul>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
                  VS
                </div>
                <div className="md:w-1/2 md:pl-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100/10 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      <FaGripLinesVertical />
                    </div>
                    <h3 className="font-semibold text-blue-700">
                      Discrete Systems
                    </h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>State changes occur at specific points in time</li>
                    <li>Countable number of states</li>
                    <li>Example: Queue at a checkout counter</li>
                    <li>Often modeled using event-based simulation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Static vs Dynamic */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold mb-4 text-center">
                Static vs. Dynamic Systems
              </div>
              <div className="flex flex-col md:flex-row relative">
                <div className="md:w-1/2 md:pr-4 pb-4 md:pb-0">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100/10 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      <FaPause />
                    </div>
                    <h3 className="font-semibold text-blue-700">
                      Static Systems
                    </h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Output depends only on current input</li>
                    <li>No memory of past states</li>
                    <li>Time-independent behavior</li>
                    <li>Example: Simple calculator</li>
                  </ul>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
                  VS
                </div>
                <div className="md:w-1/2 md:pl-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100/10 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      <FaChartLine />
                    </div>
                    <h3 className="font-semibold text-blue-700">
                      Dynamic Systems
                    </h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Output depends on current and past inputs</li>
                    <li>Has memory of previous states</li>
                    <li>Time-dependent behavior</li>
                    <li>Example: Weather system, traffic flow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stochastic vs Deterministic */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold mb-4 text-center">
                Stochastic vs. Deterministic Systems
              </div>
              <div className="flex flex-col md:flex-row relative">
                <div className="md:w-1/2 md:pr-4 pb-4 md:pb-0">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100/10 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      <FaDice />
                    </div>
                    <h3 className="font-semibold text-blue-700">
                      Stochastic Systems
                    </h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Contains random or probabilistic elements</li>
                    <li>Output cannot be precisely predicted</li>
                    <li>Requires statistical analysis</li>
                    <li>Example: Stock market, customer arrivals</li>
                  </ul>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
                  VS
                </div>
                <div className="md:w-1/2 md:pl-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100/10 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      <FaEquals />
                    </div>
                    <h3 className="font-semibold text-blue-700">
                      Deterministic Systems
                    </h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>No random elements or uncertainty</li>
                    <li>Output can be precisely predicted</li>
                    <li>Same input always produces same output</li>
                    <li>Example: Simple pendulum, computer algorithm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Slide 5: Steps of Simulation */}
        {/* <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative"> */}
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

        <div className="p-8 md:p-12 h-full z-10 relative">
          <div className="text-blue-800 border-b-2 border-blue-500 pb-3 mb-8">
            <h1 className="text-3xl font-bold">1.4 Steps of Simulation</h1>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-lg text-gray-800">
              A systematic approach to simulation involves several key steps
              that ensure accuracy, validity, and usefulness of the simulation
              model.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {[
              {
                number: 1,
                title: "Problem Formulation",
                description:
                  "Define the problem scope, objectives, and questions to be answered. Establish the boundaries and level of detail needed.",
              },
              {
                number: 2,
                title: "Model Conceptualization",
                description:
                  "Develop the abstract model that represents key system components, variables, and their relationships. Determine model logic and structure.",
              },
              {
                number: 3,
                title: "Data Collection",
                description:
                  "Gather relevant data to define model parameters, input variables, and validate outputs. Analyze and prepare data for model use.",
              },
              {
                number: 4,
                title: "Model Translation",
                description:
                  "Convert the conceptual model into a computerized format using appropriate simulation software or programming languages.",
              },
              {
                number: 5,
                title: "Verification & Validation",
                description:
                  "Ensure the model behaves as intended (verification) and accurately represents the real system (validation).",
              },
              {
                number: 6,
                title: "Experimentation",
                description:
                  "Design and conduct simulation experiments to explore scenarios, sensitivities, and optimization opportunities.",
              },
              {
                number: 7,
                title: "Analysis & Implementation",
                description:
                  "Interpret results, draw conclusions, document findings, and implement solutions or changes based on simulation insights.",
              },
            ].map((step, index) => (
              <div key={index} className="relative mb-6 pl-6">
                <div className="absolute -left-8 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded mt-5 flex items-start">
            <FaInfoCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
            <p className="text-blue-800">
              The simulation process is typically iterative, with refinements
              made through multiple cycles.
            </p>
          </div>
        </div>
        {/* </div> */}

        {/* Slide 6: Advantages, Disadvantages and Applications */}
        {/* <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative"> */}
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

        <div className="p-8 md:p-12 h-full z-10 relative">
          <div className="text-blue-800 border-b-2 border-blue-500 pb-3 mb-8">
            <h1 className="text-3xl font-bold">
              1.5 Advantages, Disadvantages and Applications of Simulation
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Advantages Column */}
            <div>
              <div className="flex items-center text-blue-800 font-semibold mb-3">
                <FaThumbsUp className="text-blue-600 mr-2" />
                <h2>Advantages of Simulation</h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: FaShieldAlt,
                    title: "Safety",
                    description:
                      "Test risky scenarios without endangering people, equipment, or environment",
                  },
                  {
                    icon: FaCoins,
                    title: "Cost Reduction",
                    description:
                      "Identify problems and optimize designs before physical implementation",
                  },
                  {
                    icon: FaClock,
                    title: "Time Compression",
                    description:
                      "Study long-term behavior in accelerated timeframes",
                  },
                  {
                    icon: FaSyncAlt,
                    title: "Repeatability",
                    description:
                      "Create consistent experimental conditions for multiple tests",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <item.icon className="text-blue-600 mr-2" />
                      <h3 className="font-semibold text-blue-700">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disadvantages Column */}
            <div>
              <div className="flex items-center text-red-800 font-semibold mb-3">
                <FaThumbsDown className="text-red-600 mr-2" />
                <h2>Disadvantages of Simulation</h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: FaDollarSign,
                    title: "Development Cost",
                    description:
                      "Creating detailed simulation models requires significant time and expertise",
                  },
                  {
                    icon: FaUserGraduate,
                    title: "Expertise Required",
                    description:
                      "Proper interpretation of results demands specialized knowledge",
                  },
                  {
                    icon: FaCompressArrowsAlt,
                    title: "Simplification Issues",
                    description:
                      "Models are inherently simplified versions of reality",
                  },
                  {
                    icon: FaExclamationTriangle,
                    title: "Validation Challenges",
                    description:
                      "Ensuring model accurately represents real system can be difficult",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <item.icon className="text-red-600 mr-2" />
                      <h3 className="font-semibold text-red-700">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div>
            <div className="flex items-center text-green-800 font-semibold mb-3">
              <FaBriefcase className="text-green-600 mr-2" />
              <h2>Applications of Simulation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: FaIndustry,
                  title: "Manufacturing",
                  description:
                    "Process optimization, layout planning, supply chain",
                },
                {
                  icon: FaHeartbeat,
                  title: "Healthcare",
                  description:
                    "Patient flow, emergency room operations, epidemiology",
                },
                {
                  icon: FaFighterJet,
                  title: "Defense",
                  description:
                    "Military training, warfare scenarios, logistics",
                },
                {
                  icon: FaUniversity,
                  title: "Finance",
                  description:
                    "Risk analysis, market behavior, investment strategies",
                },
                {
                  icon: FaRoad,
                  title: "Transportation",
                  description: "Traffic management, vehicle design, logistics",
                },
                {
                  icon: FaFlask,
                  title: "Scientific Research",
                  description: "Weather prediction, climate change, physics",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-start"
                >
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <item.icon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Slide 7: System Modeling and Types of Models */}
        {/* <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative"> */}
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
        <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

        <div className="p-8 md:p-12 h-full z-10 relative">
          <div className="text-blue-800 border-b-2 border-blue-500 pb-3 mb-8">
            <h1 className="text-3xl font-bold">
              1.6 System Modeling and Types of Models
            </h1>
          </div>

          <div className="bg-blue-50/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-xl text-blue-800 mb-2">
              What is System Modeling?
            </h2>
            <p className="text-lg text-gray-800">
              System modeling is the process of developing abstract
              representations of a system, with each model presenting a
              different perspective. Models help us understand, analyze,
              predict, and control complex system behavior.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Physical vs Abstract */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                    <FaCubes />
                  </div>
                  <h3 className="font-semibold text-blue-700">
                    Physical Models
                  </h3>
                </div>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Tangible representation of the system</li>
                  <li>Scale models, prototypes, mockups</li>
                  <li>Used for visual demonstration</li>
                  <li>Example: Aircraft wind tunnel model</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs">
                  VS
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                    <FaBrain />
                  </div>
                  <h3 className="font-semibold text-blue-700">
                    Abstract Models
                  </h3>
                </div>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Conceptual or mathematical representation</li>
                  <li>Equations, algorithms, diagrams</li>
                  <li>Used for analysis and computation</li>
                  <li>Example: Differential equations model</li>
                </ul>
              </div>
            </div>

            {/* Descriptive vs Analytical */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                    <FaFileAlt />
                  </div>
                  <h3 className="font-semibold text-blue-700">
                    Descriptive Models
                  </h3>
                </div>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Explain system structure and behavior</li>
                  <li>Focus on what the system is</li>
                  <li>Often use diagrams or flowcharts</li>
                  <li>Example: System architecture diagram</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs">
                  VS
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                    <FaCalculator />
                  </div>
                  <h3 className="font-semibold text-blue-700">
                    Analytical Models
                  </h3>
                </div>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Mathematically analyze system performance</li>
                  <li>Focus on how the system functions</li>
                  <li>Often use equations and formulas</li>
                  <li>Example: Queuing theory model</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 pb-12">
          {/* Principles of Modeling Section */}
          <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative">
            <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
            <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

            <div className="p-8 md:p-12 h-full z-10 relative flex flex-col justify-center">
              <div className="header border-b-2 border-blue-500 pb-2 mb-6">
                <h1 className="text-3xl font-bold text-blue-900">
                  1.7 Principles of Modeling
                </h1>
              </div>

              <div className="bg-blue-50/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-xl text-blue-800 mb-2">
                  What are Modeling Principles?
                </h2>
                <p className="text-lg text-gray-700">
                  Modeling principles are fundamental guidelines that ensure
                  models are effective, appropriate, and valuable for
                  understanding and analyzing systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                {[
                  {
                    number: 1,
                    title: "Model Choice Matters",
                    description:
                      "The choice of what models to create has a profound influence on how a problem is approached and how solutions are shaped. Choose models that highlight the most critical aspects of the system.",
                    icon: <FaLightbulb className="mr-2" />,
                    tip: "Select models appropriate to the problem domain",
                  },
                  {
                    number: 2,
                    title: "Variable Precision Levels",
                    description:
                      "Every model may be expressed at different levels of precision. The appropriate level depends on the purpose of the model and stage of development. Start simple and add complexity only when needed.",
                    icon: <FaSearch className="mr-2" />,
                    tip: "Match precision to purpose",
                  },
                  {
                    number: 3,
                    title: "Connection to Reality",
                    description:
                      "The best models are connected to reality. Models should be grounded in real-world observations and validated against actual system behavior. A model disconnected from reality has limited value.",
                    icon: <FaLink className="mr-2" />,
                    tip: "Ensure models reflect real-world behavior",
                  },
                  {
                    number: 4,
                    title: "Multiple Perspectives",
                    description:
                      "No single model is sufficient. Complex systems require multiple models, each focusing on different aspects or viewpoints. Different stakeholders may need different models to understand the same system.",
                    icon: <FaLayerGroup className="mr-2" />,
                    tip: "Use complementary models for comprehensive understanding",
                  },
                ].map((principle) => (
                  <div
                    key={principle.number}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold mr-3">
                        {principle.number}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="mb-4 flex-grow">{principle.description}</p>
                    <div className="text-blue-600 mt-auto pt-3 flex items-center">
                      {principle.icon}
                      <span>{principle.tip}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="italic text-gray-600 bg-gray-100 rounded-lg p-4 text-center mt-8">
              &quot;All models are wrong, but some are useful.&quot; — George E. P. Box,
                statistician
              </div>
            </div>
          </div>

          {/* Verification and Validation Section */}
          <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative mt-12">
            <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
            <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>

            <div className="p-8 md:p-12 h-full z-10 relative flex flex-col justify-center">
              <div className="header border-b-2 border-blue-500 pb-2 mb-6">
                <h1 className="text-3xl font-bold text-blue-900">
                  1.8 Verification and Validation of Model
                </h1>
              </div>

              <div className="bg-blue-50/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-xl text-blue-800 mb-2">
                  What are Verification and Validation?
                </h2>
                <p className="text-lg text-gray-700">
                  Verification and validation (V&V) are complementary processes
                  used to assess model quality and ensure it meets its intended
                  purpose:
                </p>
                <div className="flex flex-wrap mt-2 text-gray-700">
                  <div className="mr-8 ">
                    <strong>Verification:</strong> &quot;Are we building the model
                    right?&quot;
                  </div>
                  <div>
                    <strong>Validation:</strong> &quot;Are we building the right
                    model?&quot;
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm w-full md:w-[48%] relative">
                  <div className="flex items-center mb-3">
                    <FaClipboardCheck className="text-blue-600 mr-2 text-xl" />
                    <h3 className="text-xl font-semibold text-blue-900">
                      Verification
                    </h3>
                  </div>
                  <p className="mb-3 text-gray-700">
                    Confirms that the model implementation correctly represents
                    the conceptual model and is free from errors.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-blue-800">Focus:</div>
                    <p className="text-gray-700">
                      Model debugging and correctness of programming,
                      mathematics, and logic.
                    </p>
                  </div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full text-blue-600 hidden md:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm w-full md:w-[48%]">
                  <div className="flex items-center mb-3">
                    <FaCheckCircle className="text-blue-600 mr-2 text-xl" />
                    <h3 className="text-xl font-semibold text-blue-900">
                      Validation
                    </h3>
                  </div>
                  <p className="mb-3 text-gray-700">
                    Confirms that the model accurately represents the real
                    system for the intended purpose.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-blue-800">Focus:</div>
                    <p className="text-gray-700">
                      Comparison with real-world data and confirmation of model
                      usefulness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="bg-blue-600 text-white text-left p-3 rounded-l-lg">
                        Aspect
                      </th>
                      <th className="bg-blue-600 text-white text-left p-3">
                        Verification Techniques
                      </th>
                      <th className="bg-blue-600 text-white text-left p-3 rounded-r-lg">
                        Validation Techniques
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      {
                        aspect: "Static Testing",
                        verification: "Code review, walkthrough, desk checking",
                        validation:
                          "Expert opinion, review of model assumptions",
                      },
                      {
                        aspect: "Dynamic Testing",
                        verification: "Unit testing, debugging, trace analysis",
                        validation:
                          "Comparison with historical data, field tests",
                      },
                      {
                        aspect: "Statistical Methods",
                        verification: "Consistency checking, boundary testing",
                        validation: "Hypothesis testing, regression analysis",
                      },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="bg-white p-3 font-semibold text-blue-900 border-b border-gray-200">
                          {row.aspect}
                        </td>
                        <td className="bg-white p-3 border-b border-gray-200">
                          {row.verification}
                        </td>
                        <td className="bg-white p-3 border-b border-gray-200">
                          {row.validation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    V&V Challenges
                  </h3>
                  {[
                    {
                      icon: <FaExclamationTriangle />,
                      title: "Data Availability",
                      description:
                        "Limited or poor-quality real-world data makes validation difficult",
                    },
                    {
                      icon: <FaProjectDiagram />,
                      title: "System Complexity",
                      description:
                        "Complex systems require more sophisticated V&V techniques",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start mb-4">
                      <div className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-3 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    Best Practices
                  </h3>
                  {[
                    {
                      icon: <FaSyncAlt />,
                      title: "Iterative Process",
                      description:
                        "V&V should be continuous throughout model development",
                    },
                    {
                      icon: <FaUsers />,
                      title: "Stakeholder Involvement",
                      description:
                        "Include diverse perspectives in validation activities",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start mb-4">
                      <div className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-3 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative">
      <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
      <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>
      
      <div className="p-8 md:p-12 h-full z-10 relative flex flex-col">
        <div className="header border-b-2 border-blue-500 pb-2 mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Summary and Conclusion</h1>
        </div>
        
        <div className="bg-blue-50/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
          <h2 className="text-xl text-blue-800 mb-3">Key Concepts Covered</h2>
          <p className="text-gray-700">We &apos;ve explored the fundamentals of simulation and modeling, building a foundation for understanding how to represent and analyze complex systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {[
            {
              icon: <FaCube className="text-blue-600" />,
              title: "System Concepts",
              description: "Systems as collections of interacting components with defined boundaries and purposes"
            },
            {
              icon: <FaGlobe className="text-blue-600" />,
              title: "System Environment",
              description: "External factors influencing system behavior and establishing context for operations"
            },
            {
              icon: <FaSitemap className="text-blue-600" />,
              title: "System Classifications",
              description: "Continuous/discrete, static/dynamic, and stochastic/deterministic system types"
            },
            {
              icon: <FaListOl className="text-blue-600" />,
              title: "Simulation Process",
              description: "Systematic approach from problem formulation to implementation of simulation results"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-start">
              <div className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-3 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: <FaBalanceScale className="text-blue-600" />,
              title: "Pros & Cons",
              description: "Benefits like risk reduction and time compression balanced against costs and limitations"
            },
            {
              icon: <FaProjectDiagram className="text-blue-600" />,
              title: "Model Types",
              description: "Physical/abstract, descriptive/analytical, static/dynamic, and deterministic/stochastic models"
            },
            {
              icon: <FaBook className="text-blue-600" />,
              title: "Modeling Principles",
              description: "Guidelines for model choice, precision, reality-connection, and using multiple perspectives"
            },
            {
              icon: <FaCheckDouble className="text-blue-600" />,
              title: "V&V Practices",
              description: "Techniques to ensure models are correctly implemented and accurately represent reality"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-start">
              <div className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-3 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 mt-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Next Steps</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="mr-6 mb-4 md:mb-0">
              <FaArrowCircleRight className="text-3xl text-blue-600" />
            </div>
            <div>
              <p className="text-gray-700">Apply these concepts to real-world problems through hands-on exercises and projects. Next units will cover advanced simulation techniques, specialized modeling approaches, and practical applications across different domains.</p>
            </div>
          </div>
        </div>
        
        <div className="italic text-gray-600 text-center mt-8">
        &quot;Simulation is the imitation of the operation of a real-world process or system over time.&quot;
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
// Optimized by extracting repeated components and data into reusable structures

// Reusable Section Component
// const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
//     <div className="flex flex-col w-full max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-50 to-slate-200 shadow-lg rounded-xl overflow-hidden relative">
//         <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full top-0 right-0 translate-x-20 -translate-y-20"></div>
//         <div className="absolute w-48 h-48 bg-blue-100/10 rounded-full bottom-0 left-0 -translate-x-20 translate-y-20"></div>
//         <div className="p-8 md:p-12 h-full z-10 relative">{children}</div>
//     </div>
// );

// Reusable Card Component
// const Card = ({ icon: Icon, title, description }: { icon: React.ComponentType; title: string; description: string }) => (
//     <div className="bg-white rounded-lg p-4 shadow-sm flex items-start">
//         <div className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-3 mt-1">
//             <Icon />
//         </div>
//         <div>
//             <h3 className="font-semibold text-blue-900">{title}</h3>
//             <p className="text-sm text-gray-600">{description}</p>
//         </div>
//     </div>
// );

// Reusable List Component
// const List = ({ items }: { items: string[] }) => (
//     <ul className="list-disc pl-6 space-y-2">
//         {items.map((item, index) => (
//             <li key={index} className="text-gray-700">
//                 {item}
//             </li>
//         ))}
//     </ul>
// );

// Example Usage of Optimized Components
{/* <Section title="Optimized Section">
    <div className="header border-b-2 border-blue-500 pb-2 mb-6">
        <h1 className="text-3xl font-bold text-blue-900">Optimized Section</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
            { icon: FaCube, title: "Example 1", description: "Description 1" },
            { icon: FaGlobe, title: "Example 2", description: "Description 2" },
        ].map((item, index) => (
            <Card key={index} {...item} />
        ))}
    </div>
</Section>; */}

// Removed duplicate function declaration to resolve the error