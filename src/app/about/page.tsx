import { fetchData } from "@/utils/actions/serverActions/actions";
import "./page.scss";
import { pageElementDataType } from "@/utils/types";

export default async function About() {

  const content = (await fetchData('about')) as pageElementDataType;
  const aboutData = content[0];
  console.log(content)

  return (
   <>
    <main className="about">

      <section className="about__hero">
        <div className="about__hero__container">
          <p className="about__hero__text">
            {}
          </p>
        </div>
      </section>

    </main>
   </>
  );
}
