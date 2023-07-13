import React from "react";
import UpdateProjetoForm from "../../../components/oportunidades/projetos/updateProjeto";
import Navbar from "../../../components/sidebar/sidebar";
import Footer from "../../../components/footer";

const UpdateProjeto = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <UpdateProjetoForm />
      </div>
    </div>
  );
};

export default UpdateProjeto;
