import { Link } from "react-router-dom";
import ContactFrom from "../components/ContactFrom";
const AddContactPage = () => {
    return (
   <main className="py-5">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header card-title">
            <strong>Add New Contact</strong>
          </div>
          <ContactFrom/>
        </div>
      </div>
    </div>
  </div>
</main>

    )}
export default AddContactPage;
