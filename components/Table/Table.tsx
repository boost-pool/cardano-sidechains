import React, { useState } from 'react';

import list from '../../data/list.json';
import { truncate } from '../../utils'

export const Table: React.FC = () => {

  const updatedList = list.map(item => {
    return {...item, open: false}
  });
  const [chains, setChains] = useState(updatedList);
  const [selectedChain, setSelectedChain] = useState({});

  const onClickChain = (chain: any) => {
    setSelectedChain(chain);
  }

  return <div className="md:px-20 lg:px-40"
    >
    <h1>Sidechains list</h1>
    {/* @ts-ignore*/}
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* @ts-ignore*/}
        <div role="region" aria-labelledby="caption" tabIndex="0" style={{maxHeight: '600px'}}>
          <table className="bg-transparent rounded-xl" >
            <thead className="bordered">
            <tr >
              <th className="bg-gray-200 dark:bg-gray-900">Chain</th>
              <th className="bg-gray-200 dark:bg-gray-900">VM</th>
              <th className="bg-gray-200 dark:bg-gray-900">Type</th>
              <th className="bg-gray-200 dark:bg-gray-900">Consensus</th>
              <th className="bg-gray-200 dark:bg-gray-900">Url</th>
            </tr>
            </thead>
            <tbody>
            {
              chains.map((item, index) => {
                return <> <tr key={index} className="hover:opacity-70">
                  <th className="bg-gray-100 dark:bg-gray-800" onClick={() => onClickChain(item)}>
                    <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
                      {item.chain}
                    </label>
                  </th>
                  <td>${item.vm}{`${item.vm} ${item.vmVersion}`}</td>
                  <td>{item.type}</td>
                  <td>{`${item.consensus} ${item.consensusVersion}`}</td>
                  <td><a href={item.url} target="_blank" rel="noreferrer">{item.url}</a></td>
                </tr>
                </>
              })
            }
            </tbody>
          </table>

        </div>
      </div>
      <div className="drawer-side bg-transparent/8">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu p-4 bg-transparent/80 text-base-content w-72 md:w-2/3">
          <p className="w-80">Description:</p>
          {/* @ts-ignore*/}
          <p className="pr-12 mr-2 md:pr-2 md:mr-4">{selectedChain.description}</p>
          <br/>
          {/* @ts-ignore*/}
          <p className="w-80">Projects using {selectedChain.chain}: []</p>
        </div>
      </div>
    </div>
    </div>

}
