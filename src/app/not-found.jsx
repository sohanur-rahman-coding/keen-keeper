import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Page Not Found</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link href={'/'}><button className="btn btn-neutral h-7 "> Go to Home</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
