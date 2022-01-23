import React from "react";
import { Link } from "react-router-dom";
import Default from "./layout/Default";

export default function Home() {
  return (
    <Default >
      <div>
        <Link to="member">
          <div>MAKAN DI SINI</div>
        </Link>
        <Link to="member">
          <div>DIBAWA PULANG</div>
        </Link>
      </div>
    </Default>
  );
}
