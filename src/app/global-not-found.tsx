"use client";

import "./404.scss";
import "../styles/_all.scss";
import "./layout.scss";
import Button from "@/components/ui/Button/Button";

export default function Custom404() {
  return (
    <>
      <html lang="en">
        <body className={`body`}>
          <video loop autoPlay muted playsInline width="720">
            <source src={`https://moona.dev/senda/wp-content/uploads/2025/10/404vid_.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="not__found">
            <div className="not__found__mountains"></div>
            <div className="not__found__texts">
              <p>{`you're off route - `}</p>
              <div>
                <Button/>
                <p>this path leads nowhere.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}