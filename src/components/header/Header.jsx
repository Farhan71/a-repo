import "./header.css";
import header from "../../images/header.jpg"

export default function Header() {
  return (
    <div className="header container">
      <div className="headerTitles">

      {/* <!--Carousel Wrapper--> */}
  <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

    {/* <!--Indicators--> */}
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
      <li data-target="#carousel-example-1z" data-slide-to="1"></li>
      <li data-target="#carousel-example-1z" data-slide-to="2"></li>
    </ol>
    {/* <!--/.Indicators--> */}

    {/* <!--Slides--> */}
    <div className="carousel-inner" role="listbox">

      {/* <!--First slide--> */}
      <div className="carousel-item active">
        <div className="view" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

          {/* <!-- Mask & flexbox options--> */}
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

            {/* <!-- Content --> */}
            <div className="text-center white-text mx-5 wow fadeIn">
              <h1 className="mb-4">
                <strong>Learn Bootstrap 4 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                  available. Create your own, stunning website.</strong>
              </p>

              <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" className="btn btn-outline-white btn-lg">Start free tutorial
                <i className="fa fa-graduation-cap ml-2"></i>
              </a>
            </div>
            {/* <!-- Content --> */}

          </div>
          {/* <!-- Mask & flexbox options--> */}

        </div>
      </div>
      {/* <!--/First slide--> */}

      {/* <!--Second slide--> */}
      <div className="carousel-item">
        <div className="view" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/47.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

          {/* <!-- Mask & flexbox options--> */}
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

            {/* <!-- Content --> */}
            <div className="text-center white-text mx-5 wow fadeIn">
              <h1 className="mb-4">
                <strong>Learn Bootstrap 4 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                  available. Create your own, stunning website.</strong>
              </p>

              <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" className="btn btn-outline-white btn-lg">Start free tutorial
                <i className="fa fa-graduation-cap ml-2"></i>
              </a>
            </div>
            {/* <!-- Content --> */}

          </div>
          {/* <!-- Mask & flexbox options--> */}

        </div>
      </div>
      {/* <!--/Second slide--> */}

      {/* <!--Third slide--> */}
      <div className="carousel-item">
        <div className="view" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/79.jpg')", backgroundRepeat: "no-repeat",  backgroundSize: "cover"}}>
{/* 
          <!-- Mask & flexbox options--> */}
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

            {/* <!-- Content --> */}
            <div className="text-center white-text mx-5 wow fadeIn">
              <h1 className="mb-4">
                <strong>Learn Bootstrap 4 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and written versions
                  available. Create your own, stunning website.</strong>
              </p>

              <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" className="btn btn-outline-white btn-lg">Start free tutorial
                <i className="fa fa-graduation-cap ml-2"></i>
              </a>
            </div>
            {/* <!-- Content --> */}

          </div>
          {/* <!-- Mask & flexbox options--> */}

        </div>
      </div>
      {/* <!--/Third slide--> */}

    </div>
    {/* <!--/.Slides--> */}

    {/* <!--Controls--> */}
    <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
    {/* <!--/.Controls--> */}

  </div>
        {/* <span classNameName="headerTitleSm">One Stop Solution</span>
        <span classNameName="headerTitleLg">Student's Helpline</span> */}
      </div>
      {/* <img
        classNameName="headerImg"
        src={header}
        alt=""
      /> */}
    </div>
  );
}
