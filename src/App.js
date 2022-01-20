import logo from './logo.svg';
import './App.css';

import useFetch from 'use-http';
import React from "react";

function App() {
  const dataSource = "https://cell-mac.zfin.org:8080/action/api/marker/ZDB-GENE-010320-2/go/ribbon-summary";
  const options = {} // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const { loading, error, ribbon = [] } = useFetch(dataSource, options, []);
  const compareOrthologs = true;

  return (
    <div className="App">
      <h2>
        Testing Ribbon
      </h2>
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
      />
    </div>
  );
}

export default App;
