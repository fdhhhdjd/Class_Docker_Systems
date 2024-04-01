import React from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = React.useState({
    fullname: "",
    phone: 0,
    reward: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, phone, reward } = formData;

    const formGoogle = {
      "entry.1959784626": fullname,
      "entry.1685977733": phone,
      "entry.139056902": reward,
    };

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/${token}/formResponse";

    try {
      fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formGoogle),
      });
      setFormData({
        fullname: "",
        phone: 0,
        reward: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Ho va Ten</label> &nbsp;
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChangeInput}
          />
        </div>
        <br />
        <div>
          <label htmlFor="phone">So dien thoai</label>&nbsp;
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChangeInput}
          />
        </div>
        <br />
        <div>
          <label htmlFor="phone">Giai thuong</label>&nbsp;
          <input
            type="text"
            name="reward"
            value={formData.reward}
            onChange={handleChangeInput}
          />
        </div>
        <br />
        <div>
          <button>Gui</button>
        </div>
      </form>
    </>
  );
};

export default App;
