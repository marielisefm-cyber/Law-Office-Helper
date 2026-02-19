"use client";

import { useState } from "react";

type SavedDeadline = {
  matterName: string;
  triggerDate: string;
  answerDue: string;
};

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString();
}

function addDays(dateString: string, days: number): string {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

export default function Home() {
  const [matterName, setMatterName] = useState("");
  const [triggerDate, setTriggerDate] = useState("");
  const [answerDue, setAnswerDue] = useState<string | null>(null);

  const onGenerate = () => {
    if (!matterName || !triggerDate) {
      return;
    }

    const dueDate = addDays(triggerDate, 30);
    setAnswerDue(dueDate);

    const record: SavedDeadline = {
      matterName,
      triggerDate,
      answerDue: dueDate
    };

    localStorage.setItem("latestDeadline", JSON.stringify(record));
  };

  return (
    <main>
      <section className="card">
        <h1>Law Office Helper</h1>

        <label htmlFor="matterName">Matter name</label>
        <input
          id="matterName"
          type="text"
          value={matterName}
          onChange={(event) => setMatterName(event.target.value)}
          placeholder="Acme v. Smith"
        />

        <label htmlFor="triggerDate">Trigger date</label>
        <input
          id="triggerDate"
          type="date"
          value={triggerDate}
          onChange={(event) => setTriggerDate(event.target.value)}
        />

        <button type="button" onClick={onGenerate}>
          Generate deadlines
        </button>

        {answerDue ? (
          <div className="result">
            <strong>Answer due:</strong> {formatDate(answerDue)}
          </div>
        ) : null}
      </section>
    </main>
  );
}
