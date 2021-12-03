import BasicLayout from "../layouts/BasicLayout";
import Container from "../components/Container";
import { Link } from "gatsby";
import React from "react";

export default function OnigiriManagerPage(): JSX.Element {
  return (
    <BasicLayout>
      <div className="hero bg-secondary">
        <div className="hero-body">
          <Container className="grid-xl">
            <h1>{"おにぎりマネージャー"}</h1>
            <p>
              {
                "おにぎり（残弾数）を管理できるツールです。コピーして使用してください。"
              }
            </p>
          </Container>
        </div>
      </div>
      <Container className="grid-xl">
        <Link to="https://docs.google.com/spreadsheets/d/1pTEGHNZ-Nt5-nNihtO7WQnJkf0j6j-69fK_3WiCW8aA/edit?usp=sharing">
          {"元ファイル"}
        </Link>
        <iframe
          className={"iframe min-height-25rem"}
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRw5VkghGMMyM8YtYUJ_HgbaVZrqARciAnKaBlpmsCzjsErgtn3HcG_N1VW2xTJ1mHVKMl7au0hkVBo/pubhtml?widget=true&amp;headers=false"
        ></iframe>
      </Container>
    </BasicLayout>
  );
}
