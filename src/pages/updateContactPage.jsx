import { Link } from "react-router-dom";

const UpdateContactPage = () => {
    return (
   <main className="py-5">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header card-title">
            <strong>Add New Contact</strong>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group row">
                  <label
                    htmlFor="first_name"
                    className="col-md-3 col-form-label"
                  >
                    First Name
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="last_name"
                    className="col-md-3 col-form-label"
                  >
                    Last Name
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-md-3 col-form-label">
                    Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="phone" className="col-md-3 col-form-label">
                    Phone
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-md-3 col-form-label">
                    Address
                  </label>
                  <div className="col-md-9">
                    <textarea
                      name="address"
                      id="address"
                      rows={3}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <hr />
                <div className="form-group row mb-0">
                  <div className="col-md-9 offset-md-3">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    <Link to="/" className="btn btn-outline-secondary">
                      Cancel
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    )}
export default UpdateContactPage;
