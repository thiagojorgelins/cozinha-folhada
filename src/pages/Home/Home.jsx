import { CContainer, CRow, CCol } from "@coreui/react";
import { Link } from "react-router-dom";
import "./styles.css"

const Home = () => {
  return (
    <div style={style}>
      <CContainer>
        <CRow>
          <CCol xs={6} style={colStyle}>
            <div>
              <img src="/logo.png" alt="" style={imgStyle} />
            </div>
          </CCol>
          <CCol xs={6} style={colStyle}>
            <section style={menu}>
              <div style={menuItem}>
                <Link to="/cardapio" className="link-style">
                  Cardápio
                </Link>
              </div>
              <div style={menuItem}>
                <Link to="/pratosdaestacao" className="link-style">
                  Pratos da estação
                </Link>
              </div>
              <div style={menuItem}>
                <Link to="/espaco" className="link-style">
                  O espaço
                </Link>
              </div>
              <div style={menuItem}>
                <Link to="/FAQ" className="link-style">
                  FAQ de delivery
                </Link>
              </div>
              <div style={menuItem}>
                <Link to="/sobre" className="link-style">
                  Sobre nós
                </Link>
              </div>
            </section>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

const style = {
  backgroundImage: 'url("/wallpaper.png")',
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const menu = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2em",
  padding: "1em",
  backgroundColor: "#F0EBE4",
};

const menuItem = {
  border: "solid 1px black",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  fontWeight: "700"
};

const imgStyle = {
  width: "100%",
  height: "auto",
};

const colStyle = {
  minHeight: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export { Home };
