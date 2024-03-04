import React from "react";
import Banner from "../../components/Banner";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Banner name="Faq" />
      <div className="flex flex-col lg:flex-row items-center justify-around my-10">
        <div className="w-6/12">
          <Accordion
            className="mb-5"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                How secure is my financial data within the system?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We take data security seriously. Our financial system employs
                robust encryption and security measures to safeguard your
                sensitive information. Your data is stored securely and is
                accessible only to you.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="mb-5"
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Can I access my financial information from different devices?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, our financial system is designed for convenience and
                accessibility. You can access your financial data from desktop
                computers, smartphones, and tablets, ensuring you have real-time
                insights into your finances on the go.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="mb-5"
            expanded={expanded === "panel17"}
            onChange={handleChange("panel17")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel17bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                What types of financial transactions can I perform using this
                system?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our system supports a wide range of financial transactions,
                including payments, fund transfers, investment management,
                budget tracking, and more. You can efficiently manage your
                entire financial portfolio within the platform.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="mb-5"
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Are there any fees associated with using the financial system?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We believe in transparent pricing. Our fee structure is
                straightforward, and we offer various pricing plans to suit your
                needs. You can find detailed information about fees and plans on
                our website or within the system itself.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="mb-5"
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Is customer support available for assistance and
                troubleshooting?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, our dedicated customer support team is here to help you. If
                you encounter any issues, have questions about the system's
                features, or need assistance with your financial tasks, our
                support team is just a message or call away. We're committed to
                ensuring you have a smooth experience with our financial system.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="w-[500px] h-80">
          <img className="w-full h-full object-cover" src="https://i.imgur.com/Vp4RZcK.jpg" alt="aboutUs" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
