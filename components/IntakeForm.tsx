"use client";

import { FormEvent, useState } from "react";
import { treatments } from "@/data/treatments";

export function IntakeForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="lede">
        Chart received. A coordinator will confirm a room and time. Do not
        discontinue prescribed medication while you wait.
      </p>
    );
  }

  return (
    <form className="intake" onSubmit={onSubmit}>
      <label>
        Full name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Protocol of interest
        <select name="protocol" defaultValue="">
          <option value="">Consult only — assign later</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.code}>
              {t.code} {t.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Field / concern
        <textarea
          name="notes"
          placeholder="Abdomen, face, swelling after a procedure…"
        />
      </label>
      <button type="submit">File intake</button>
    </form>
  );
}
