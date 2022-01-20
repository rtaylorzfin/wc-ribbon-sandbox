import logo from './logo.svg';
import './App.css';
import useFetch from 'use-http';
import React, { useState, useEffect } from 'react';

function App() {
  const [ribbon, setRibbon] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const dataSource = "https://cell-mac.zfin.org:8080/action/api/marker/ZDB-GENE-010320-2/go/ribbon-summary";
  const { get, post, response, loading, error } = useFetch(dataSource);

  useEffect(() => { loadInitialRibbon() }, []); // componentDidMount

  function loadInitialRibbon() {
    get()
        .then(data => {
            console.log('ribbon load');
            console.log(data);
            console.log(response);

            if (response.ok) {
              // setRibbon({ribbonSummary: data});
              setRibbon(data);
              setIsReady(true);
            }
          }
        );
  }

  const compareOrthologs = true;
  console.log("ribbon object", ribbon);
  return (
    <div className="App">
      <h2>
        Testing Ribbon
      </h2>
        {!isReady && <div>Loading...</div>}
        {isReady &&
          <wc-ribbon-strips
              category-all-style='1'
              color-by='0'
              data={JSON.stringify(ribbon)}
              fire-event-on-empty-cells={false}
              group-clickable={false}
              group-open-new-tab={false}
              id='go-ribbon'
              new-tab={false}
              selection-mode='0'
              show-other-group
              subject-base-url='/gene/'
              subject-open-new-tab={false}
              subject-position={compareOrthologs ? '1' : '0'}
          />}
    </div>
  );
}

export default App;
