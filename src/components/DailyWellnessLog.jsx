import { useState } from 'react';

export default function DailyWellnessLog() {

  const [message, setMessage]  = useState("")

  const [formData, setFormData] = useState({
    sleptWell: false,
    ateHealthy: false,
    exercised: false,
    socialized: false,
    drankEnoughWater : false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.values(formData);
    const score = values.filter(Boolean).length;

    if (score >= 4) {
      setMessage("👏 You're crushing it! Keep up the great work!");
    } else {
      setMessage("💪 You're making progress — keep showing up, you got this!");
    }


  };

  return (
    <form onSubmit={handleSubmit} className="daily-log-form">
      <h2>🗓️ Daily Wellness Check</h2>

      <label>
        <input
          type="checkbox"
          name="sleptWell"
          checked={formData.sleptWell}
          onChange={handleChange}
        />
        Got enough sleep
      </label>

      <label>
        <input
          type="checkbox"
          name="ateHealthy"
          checked={formData.ateHealthy}
          onChange={handleChange}
        />
        Ate healthy food
      </label>

       <label>
        <input
          type="checkbox"
          name="drankEnoughWater"
          checked={formData.drankEnoughWater}
          onChange={handleChange}
        />
        Drank Enough Water
      </label>

      <label>
        <input
          type="checkbox"
          name="exercised"
          checked={formData.exercised}
          onChange={handleChange}
        />
        Did at least 30 mins of exercise
      </label>

      <label>
        <input
          type="checkbox"
          name="socialized"
          checked={formData.socialized}
          onChange={handleChange}
        />
        Had at least 30 mins of social interaction
      </label>

      <button type="submit">Log Today</button>
      {message && (
  <div className="wellness-message">
    {message}
  </div>
)}
    </form>
  );
}
