// React modules

// Context

// Components
import PageHeader from "../../components/header/PageHeader";

// Assets

const CreateVenuePage = () => {
  return (
    <section>
      <PageHeader page_name="Create Venue" />

      <div
        className="d-flex justify-content-center align-items-start row"
        style={{ height: "90vh" }}
      >
        {/* Form */}
        <form className="p-2 col-lg-5 col-sm-6 col-11">
          {/* Building Name (Select field) */}
          <div className="mb-3">
            <select
              required
              className="form-select form-select-lg"
              name="buildingName"
              id="buildingName"
            >
              <option value="">Select Building Name</option>
              {/* Add options for building names here */}
              <option value="BuildingA">Building A</option>
              <option value="BuildingB">Building B</option>
            </select>
          </div>

          {/* Room Name */}
          <div className="form-floating mb-3">
            <input
              required
              type="text"
              className="form-control"
              name="roomName"
              id="roomName"
              placeholder=""
            />
            <label htmlFor="roomName">Room Name</label>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between mb-3">
            {/* Buttons on top */}
            <button type="button" className="btn btn_primary_dark_1 col-5">
              Point 1
            </button>
            <button type="button" className="btn btn_primary_dark_1 col-5">
              Point 2
            </button>
          </div>
          <div className="d-flex justify-content-between mb-4">
            {/* Buttons on bottom */}
            <button type="button" className="btn btn_primary_dark_1 col-5">
              Point 3
            </button>
            <button type="button" className="btn btn_primary_dark_1 col-5">
              Point 4
            </button>
          </div>

          <div className="mb-3 row justify-content-center border">
            <button type="submit" className="btn btn_primary_dark_2 col-12">
              Create Venue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateVenuePage;
