import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <h1 className="px-2" style ={{color: "#56a8d0", lineHeight: 2}}>Home</h1>
          <h3 className="px-3">Classes</h3>
          <div className="fluid-container">
            <div className="row px-3">
              <div className="col-sm-6">
                <div className="card px-3">
                  <div className="card-body">
                    <Link to="/Cosc2100" className="btn btn-outline-success ">COSC2100</Link>
                    <Link to="/Cosc3810" className="btn btn-outline-success">COSC3810</Link>
                    <Link to="/Cosc4920" className="btn btn-outline-success">COSC4920</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };

  export default Home;