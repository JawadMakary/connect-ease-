import React from "react";
import Banner from "../../components/Banner";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import i18n from "../../config/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Header />
      <Banner name={i18n.t("FAQ")} />
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
             {i18n.t("1stFAQTitle")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
             {i18n.t("1stFAQText")}
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
         {i18n.t("2ndFAQTitle")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
             {i18n.t("2ndFAQText")}
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
                {i18n.t("3rdFAQTitle")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {i18n.t("3rdFAQText")}
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
               {i18n.t("4thFAQTitle")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
             {i18n.t("4thFAQText")}
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
               {i18n.t("5thFAQTitle")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               {i18n.t("5thFAQText")}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="w-[500px] h-80">
          <img
            className="w-full h-full object-cover"
            src="https://i.imgur.com/Vp4RZcK.jpg"
            alt="aboutUs"
          />
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Faq;
