import React, { useEffect, useState } from 'react';

interface IEvent<TObj extends object = Record<any, any>, TValue = unknown> {
  type: string;
  observableKind: string;
  debugObjectName: string;
  object: TObj;
  name: string;
  newValue: TValue;
  spyReportStart: boolean;
}

const App = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [state, setState] = useState({});

  const handleClear = () => {
    setState({});
    setEvents([]);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    chrome.runtime.onMessage.addListener((request: { event: IEvent }) => {
      if (request.event) {
        const { type, debugObjectName, object } = request.event;

        if (type === 'add') {
          setState((prevState) => ({
            ...prevState,
            [debugObjectName]: object,
          }));
        }

        if (type === 'remove') {
          setState((prevState) => {
            delete prevState[debugObjectName];

            return prevState;
          });
        }

        setEvents((prevState) => [...prevState, request.event]);
      }
    });
  }, []);

  return (
    <div>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
      <h3>State: </h3>
      {Object.entries(state).map(([id, values]) => (
        <ul key={id}>
          {id}
          {Object.entries(values ?? {}).map(([key, value]) => (
            <li key={key}>
              <span>{key}: </span>
              <span>{JSON.stringify(value)}</span>
            </li>
          ))}
        </ul>
      ))}
      <p>----------------------------</p>
      <h3>Events:</h3>
      <div>
        {events.map((event, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ul key={i}>
            {Object.entries(event).map(([key, value], index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <span>{key}: </span>
                <span>{JSON.stringify(value)}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
