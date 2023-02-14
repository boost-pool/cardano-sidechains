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
    <p className="text-2xl text-center pb-8 font-bold text-black dark:text-white">Cardano Sidechains</p>
    {/* @ts-ignore*/}
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
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
                  <th className="bg-gray-100 dark:bg-gray-800 text-center">
                    <label onClick={() => onClickChain(item)} htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
                      <p>{item.chain}</p>
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu p-4 bg-white dark:bg-black dark:border-t-gray-900 border-t-8 dark:border-l-gray-900 border-l-8 border-b-2 dark:border-b-gray-900 border-content text-base-content w-72 md:w-2/3">
          {/* @ts-ignore*/}
          <p className="text-2xl md:text-center pb-4 font-bold text-base-content">{selectedChain.chain}</p>
          <p className="w-80 font-black">Description:</p>
          {/* @ts-ignore*/}
          <p className="pr-12 mr-2 md:pr-2 md:mr-4">{selectedChain.description}</p>
          <div className="w-80 font-black">
            <div className="tooltip tooltip-right" data-tip="hello">
              Goal
            </div>
          </div>
          {/* @ts-ignore*/}
          <p className="pr-12 mr-2 md:pr-2 md:mr-4">{selectedChain.goal}</p>
          <div className="w-80 font-black">
            <div className="tooltip tooltip-right" data-tip="hello">
              USPs
            </div>
          </div>
          {/* @ts-ignore*/}
          <p className="pr-12 mr-2 md:pr-2 md:mr-4">{selectedChain.USPs}</p>
          {/* @ts-ignore*/}
          <div className="w-80 font-black">
            <div className="tooltip tooltip-right" data-tip="hello">
              Wallets
            </div>
          </div>
          {/* @ts-ignore*/}
          <p className="pr-12 mr-2 md:pr-2 md:mr-4">{JSON.stringify(selectedChain.wallets)}</p>
          {/* @ts-ignore*/}
          <div className="w-80 font-black">
            <div className="tooltip tooltip-right" data-tip="hello">
              {/* @ts-ignore*/}
              Projects using {selectedChain.chain}
            </div>
          </div>
          <p className="pr-12 mr-2 md:pr-2 md:mr-4">[...]</p>
        </div>
      </div>



    </div>
    </div>

}
