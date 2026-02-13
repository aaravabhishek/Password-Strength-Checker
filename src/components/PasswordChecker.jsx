import { useState } from "react";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  function checkStrength(value) {
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 2) return "Weak";
    if (score <= 4) return "Medium";
    return "Strong";
  }

  function handleChange(e) {
    const val = e.target.value;
    setPassword(val);
    setStrength(checkStrength(val));
  }

  const barClass =
    strength === "Weak"
      ? "w-1/3 bg-red-500"
      : strength === "Medium"
      ? "w-2/3 bg-yellow-500"
      : "w-full bg-green-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow w-96">
      <h1 className="text-xl font-bold mb-4 text-center">
        Password Strength Checker
      </h1>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        className="w-full p-2 border rounded mb-3"
      />

      {password && (
        <>
          <div className="h-3 bg-gray-300 rounded mb-2">
            <div className={`h-3 rounded ${barClass}`}></div>
          </div>

          <p className="text-sm font-semibold text-center">
            Strength:{" "}
            <span
              className={
                strength === "Weak"
                  ? "text-red-600"
                  : strength === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }
            >
              {strength}
            </span>
          </p>
        </>
      )}
    </div>
  );
}