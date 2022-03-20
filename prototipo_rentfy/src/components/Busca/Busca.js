import React from "react";
import "./Busca.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export function Busca() {
  return (
    <div>
      <input
        class="buttonBusca"
        type="search"
        name="input"
        placeholder="Digite aqui"
      ></input>
      <button class="buttonBusca">
        Digite aqui...
        <div class="searchCircle">
          <SearchOutlinedIcon />
        </div>
      </button>
    </div>
  );
}
