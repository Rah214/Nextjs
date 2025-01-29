import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FontAwesomeConfig from "./fontawesome";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig/>
      </head>
      <body
      >
        <Header />
      {children}
      <Footer/>
      
      </body>
    </html>
  );
}
