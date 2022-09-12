import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import Box from "./Box";
import BoxDescription from "./BoxDescription";
import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import logo from "./airfly.jpg";

function App() {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const passangerArray = [
    {
      id: "Name",
      content: "Petru",
    },
    {
      id: "Surname",
      content: "Ivanov",
    },
    {
      id: "Sex",
      content: "M",
    },
    {
      id: "Birthday",
      content: "21.09.1998",
    },
    {
      id: "Document",
      content: "RUS765750",
    },
    {
      id: "Citizenship",
      content: "RUS",
    },
  ];

  const departureArray = [
    {
      id: "Airline",
      content: "FlyOne",
    },
    {
      id: "Flight nr",
      content: "3F 4334",
    },
    {
      id: "Departure",
      content: "DME DOMODEDOVO 27.09.2022 16:30",
    },
    {
      id: "Landing",
      content: "KIV DOMODEDOVO 27.09.2022 16:30",
    },
    {
      id: "The duration of the flight",
      content: "6h 20min",
    },
    {
      id: "Hand baggage",
      content: "8kg",
    },
    {
      id: "Baggage",
      content: "20kg",
    },
  ];

  const stopsArray = [
    {
      id: "Airport",
      content: "EREVAN",
    },
    {
      id: "Airline",
      content: "FlyOne",
    },
    {
      id: "Stops details",
      content: "Fara schimb de airport",
    },
    {
      id: "Stop duration",
      content: "2h",
    },
  ];

  const payInfoArray = [
    {
      id: "Reserved",
      content: "2022-09-11 16:51",
    },
    {
      id: "Payment method",
      content: "ASTEPTARE",
    },
    {
      id: "Person",
      content: "LUKYANOVA MARIA ",
    },
    {
      id: "Status",
      content: "REZERVAT",
    },
    {
      id: "Total paid (EUR)",
      content: " EUR",
    },
  ];

  const contactInfoArray = [
    {
      id: "To receive the check-in",
      content: "+37362 15 27 15",
    },
    {
      id: "Email",
      content: "sales@airfly.md",
    },
    {
      id: "Call Center",
      content: "+37362 15 27 15",
    },
    {
      id: "Oficiu",
      content: "or. Chisinau str. Calea Iesilor 10",
    },
  ];

  return (
    <PDFExport ref={pdfExportComponent} paperSize="A4">
      <div className="container">
        <img
          className="logo"
          onClick={handleExportWithComponent}
          src={logo}
          alt=""
        />
        <Box array={passangerArray} label={"Pasager / Passanger"} />
        <Box array={departureArray} label={"Informatii zbor / Flight details"} />
        <Box array={stopsArray} label={"Escala / Stops"} />
        <Box array={payInfoArray} label={"Informatii de plata / Payment information"} />
        <Box array={contactInfoArray} label={"Informatii de contact / Contact information"} />
        <BoxDescription label={"Regulile de utilizare ale biletului / Rules of use of the ticket"} />
      </div>
    </PDFExport>
  );
}

export default App;
