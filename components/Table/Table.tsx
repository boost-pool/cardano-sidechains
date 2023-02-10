import React, { useState } from 'react';

import list from '../../data/list.json';
import { truncate } from '../../utils'

export const Table: React.FC = () => {

  const updatedList = list.map(item => {
    return {...item, open: false}
  });
  const [chains, setChains] = useState(updatedList);

  const onClickChain = (chainName: string) => {

    const upds = chains.map(c => {
      if (c.chain === chainName){
        c.open = !c.open;
      }
      return c;
    });
    setChains(upds);
  }

  return <div className="md:px-20 lg:px-40"
    >
    <h1>Sidechains list</h1>
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
              <th className="bg-gray-100 dark:bg-gray-800" onClick={() => onClickChain(item.chain)}>{item.chain}</th>
              <td>${item.vm}{`${item.vm} ${item.vmVersion}`}</td>
              <td>{item.type}</td>
              <td>{`${item.consensus} ${item.consensusVersion}`}</td>
              <td><a href={item.url} target="_blank" rel="noreferrer">{item.url}</a></td>
            </tr>
              {
                item.open ? <tr className="w-auto">
                  <th className="bg-gray-100 dark:bg-gray-800"/>
                  {/* @ts-ignore*/}
                  <td colSpan="4" className="animate-fade container" style={{maxWidth: '500px'}}>
                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{item.chain}</span>
                      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{item.goal}</h2>
                      <p className="leading-relaxed mb-8 ">{item.USPs}</p>
                      <p className="leading-relaxed mb-8" >{item.description}</p>
                    </div>

                  </td>
                </tr> : null
              }
            </>
          })
        }
        </tbody>
      </table>
    </div>
    </div>

}
