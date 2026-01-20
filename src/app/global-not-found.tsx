"use client";

import "./404.scss";
import "../styles/_all.scss";
import "./layout.scss";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Nav from "@/components/elements/Nav/Nav";
import ExperiencesContextProvider from "@/utils/contexts/context_providers/ExperiencesContextProvider";

export default function Custom404() {

  const router = useRouter();

  return (
    <>
      <ExperiencesContextProvider>
      <html lang="en">
        <body className={`body`}>
        <Nav/>
          
          <main className="not-found">
            <div className="not-found__video__container">
              <video loop autoPlay muted playsInline width="720">
                <source
                  src={`https://moona.dev/senda/wp-content/uploads/2025/10/404vid_.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

            </div>

          <div className="not-found__mountains">
            <Image className='blend-difference' src="https://moona.dev/senda/wp-content/uploads/2025/10/404-dark.svg" alt="top of a mountain illustration" width={1512} height={244}/>
            <Image  src="https://moona.dev/senda/wp-content/uploads/2025/10/404-white.svg" alt="top of a mountain illustration" width={1512} height={241}/>
          </div>

          <div className="not-found__copy">
              <p className="not-found__texts__p" data-animation='paragraph'>{`You’re off route — `}</p>
              <div className="not-found__copy__container">
                <Button
                  copy={`#404`}
                  fnc={() => {
                    router.push('/')
                  }}
                  icon="right_arrow"
                  round={false}
                />
                <p className="not-found__texts__p" data-animation='paragraph'>this path leads nowhere.</p>
              </div>
            </div>
          </main>
        </body>
      </html>
      </ExperiencesContextProvider>
    </>
  );
}