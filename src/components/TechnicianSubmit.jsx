import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const [values, setValues] = useState({
    formcode: "",
    section: "",
    machinename: "",
    shift: "",
    operatorname: "",
    formdate: "",
    problemtype: "",
    stopstatus: "",
    stopdate: "",
    startdate: "",
    problemdescription: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/submit",
        values
      );
      navigate("/dashboard");
    } catch (err) {
      alert(Result.data.Error);
    }
  };

  return (
    <div className="d-flex justify-content-center alignt-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Technician Form</h3>
        <form onSubmit={handleSubmit} className="row g-1">
          <div className="col-12">
            <label htmlFor="formcode" className="form-label">
              Form Code
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="formcode"
              placeholder="Enter Form Code"
              onChange={(e) =>
                setValues({ ...values, formcode: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="section" className="form-label">
              Section
            </label>
            <select
              name="section"
              id="section"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, section: e.target.value })
              }
            >
              <option value="chipper">Chipper</option>
              <option value="conveyorline">Conveyor Line</option>
              <option value="dryerairgraider">Dryer Air Grader</option>
              <option value="refiner">Refiner</option>
              <option value="beforepress">Before Press</option>
              <option value="press">Press</option>
              <option value="afterpress">After Press</option>
              <option value="sandingrbs">Sanding</option>
              <option value="coolingsystem">Cooling System</option>
              <option value="steamboiler">Steam Boiler</option>
              <option value="general">General</option>
            </select>
          </div>
          <div>
            <label htmlFor="machinename" className="form-label">
              Machine Name
            </label>
            <input
              className="form-control rounded-0"
              type="text"
              name="machinename"
              placeholder="Enter Machine Name"
              id="machinename"
              onChange={(e) =>
                setValues({ ...values, machinename: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="shift" className="form-label">
              Shift
            </label>
            <select
              name="shift"
              id="shift"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, shift: e.target.value })}
            >
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </div>
          <div>
            <label htmlFor="operatorname" className="form-label">
              Operator Name
            </label>
            <input
              className="form-control rounded-0"
              type="text"
              name="operatorname"
              id="operatorname"
              placeholder="Enter Operator Name"
              onChange={(e) =>
                setValues({ ...values, operatorname: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="formdate" className="form-label">
              Form Date
            </label>
            <input
              className="form-control rounded-0"
              type="datetime-local"
              name="formdate"
              id="formdate"
              onChange={(e) =>
                setValues({ ...values, formdate: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="problemtype" className="form-label">
              Porblem Type
            </label>
            <select
              className="form-control rounded-0"
              name="problemtype"
              id="problemtype"
              onChange={(e) =>
                setValues({ ...values, problemtype: e.target.value })
              }
            >
              <option value="mechanic">Mechanic</option>
              <option value="electric">Electric</option>
              <option value="utility">Utility</option>
              <option value="production">Production</option>
              <option value="metalworking">Metal Working</option>
            </select>
          </div>
          <div>
            <label htmlFor="stopstatus" className="form-label">
              Stop Status
            </label>
            <select
              className="form-control rounded-0"
              name="stopstatus"
              id="stopstatus"
              onChange={(e) =>
                setValues({ ...values, stopstatus: e.target.value })
              }
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="stopdate" className="form-label">
              Stop Date
            </label>
            <input
              className="form-control rounded-0"
              type="datetime-local"
              name="stopdate"
              id="stopdate"
              onChange={(e) =>
                setValues({ ...values, stopdate: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="startdate" className="form-label">
              Start Date
            </label>
            <input
              className="form-control rounded-0"
              type="datetime-local"
              name="startdate"
              id="startdate"
              onChange={(e) =>
                setValues({ ...values, startdate: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="problemdescription" className="form-label">
              Problem Description
            </label>
            <textarea
              className="form-control rounded-0"
              name="problemdescription"
              id="problemdescription"
              cols="30"
              rows="10"
              placeholder="Enter Problem Description"
              onChange={(e) =>
                setValues({ ...values, problemdescription: e.target.value })
              }
            ></textarea>
          </div>
          <div>
            <button type={"submit"} className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;
