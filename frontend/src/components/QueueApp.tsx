import React, { useEffect, useState } from "react";
import { useQueueSystem } from "./useQueueSystem";

const QueueApp: React.FC = () => {
  const { joinQueue, leaveQueue, getQueue } = useQueueSystem();
  const [queue, setQueue] = useState<string[]>([]);

  const fetchQueue = async () => {
    const queueData = await getQueue();
    setQueue(queueData);
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return (
    <div>
      <h1>Queue System</h1>
      <button onClick={joinQueue}>Join Queue</button>
      <button onClick={leaveQueue}>Leave Queue</button>
      <h2>Current Queue</h2>
      <ul>
        {queue.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueueApp;
