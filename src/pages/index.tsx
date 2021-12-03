import BasicLayout from "../layouts/BasicLayout";
import Column from "../components/Column";
import Columns from "../components/Columns";
import Container from "../components/Container";
import { Link } from "gatsby";
import React from "react";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage(): JSX.Element {
  return (
    <BasicLayout>
      <Seo title="Top" />
      <div className="hero hero-lg bg-primary">
        <div className="hero-body">
          <Container className="grid-xl">
            <h1>{"放置少女ツール"}</h1>
            <p>{"放置少女用のツールです"}</p>
          </Container>
        </div>
      </div>
      <Container className="grid-xl">
        <div className="p-2">
          <Columns>
            <Column>
              <Link to="/strategist-tools">
                <div className="card">
                  <div className="card-image">
                    <StaticImage src={"../images/thumbnail-strategist-tools.png"} alt="thumbnail strategist tools" className="img-responsive" />
                  </div>
                  <div className="card-header">
                    <div className="card-title h5">{"軍師ツール"}</div>
                    <div className="card-subtitle text-gray">{"軍師用のツールです。"}</div>
                  </div>
                  <div className="card-body">
                  </div>
                </div>
              </Link>
            </Column>
            <Column>
              {/* <Link to="/onigiri-manager">
                {"おにぎりマネージャー"}
              </Link> */}
            </Column>
          </Columns>
        </div>
      </Container>
    </BasicLayout>
  );
}
