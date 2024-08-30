// React modules

// Context

// Components
import PageHeader from "../../components/header/PageHeader";

// Assets

const CreateAttendancePage = () => {
  return (
    <section>
      <PageHeader page_name="Create Attendance" />
      <div
        className="d-flex justify-content-center align-items-start row"
        style={{ height: "90vh" }}
      >
        {/* Form */}
        <form className="p-2 col-lg-5 col-sm-6 col-11">
          {/* Program (Select field) */}
          <div className="mb-3">
            <select
              required
              className="form-select form-select-lg"
              name="program"
              id="program"
            >
              <option value="">Select Program</option>
              {/* Add options for programs here */}
              <option value="Program1">Program 1</option>
              <option value="Program2">Program 2</option>
            </select>
          </div>

          {/* Year (Select field) */}
          <div className="mb-3">
            <select
              required
              className="form-select form-select-lg"
              name="year"
              id="year"
            >
              <option value="">Select Year</option>
              {/* Add options for year here */}
              <option value="Year1">Year 1</option>
              <option value="Year2">Year 2</option>
            </select>
          </div>

          {/* Course (Select field) */}
          <div className="mb-3">
            <select
              required
              className="form-select form-select-lg"
              name="course"
              id="course"
            >
              <option value="">Select Course</option>
              {/* Add options for courses here */}
              <option value="Course1">Course 1</option>
              <option value="Course2">Course 2</option>
            </select>
          </div>

          {/* Building (Select field) */}
          <div className="mb-3">
            <select
              required
              className="form-select form-select-lg"
              name="building"
              id="building"
            >
              <option value="">Select Building</option>
              {/* Add options for buildings here */}
              <option value="BuildingA">Building A</option>
              <option value="BuildingB">Building B</option>
            </select>
          </div>

          {/* Room (Select field) */}
          <div className="mb-3">
            <select
              required
              className="form-select form-select-lg"
              name="room"
              id="room"
            >
              <option value="">Select Room</option>
              {/* Add options for rooms here */}
              <option value="Room101">Room 101</option>
              <option value="Room102">Room 102</option>
            </select>
          </div>

          {/* Date */}
          <div className="form-floating mb-3">
            <input
              required
              type="date"
              className="form-control"
              name="date"
              id="date"
            />
            <label htmlFor="date">Date</label>
          </div>

          {/* Start Time */}
          <div className="form-floating mb-3">
            <input
              required
              type="time"
              className="form-control"
              name="startTime"
              id="startTime"
            />
            <label htmlFor="startTime">Start Time</label>
          </div>

          {/* End Time */}
          <div className="form-floating mb-3">
            <input
              required
              type="time"
              className="form-control"
              name="endTime"
              id="endTime"
            />
            <label htmlFor="endTime">End Time</label>
          </div>

          {/* Create Attendance Button */}
          <div className="mb-3 row justify-content-center">
            <button type="submit" className="btn btn_primary_dark_2 col-10">
              Create Attendance
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateAttendancePage;
