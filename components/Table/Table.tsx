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
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
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
                  <th className="bg-gray-100 dark:bg-gray-800" onClick={() => onClickChain(item.chain)}>
                    <label htmlFor="my-drawer-4" className="drawer-button">
                      {item.chain}
                    </label>
                  </th>
                  <td>${item.vm}{`${item.vm} ${item.vmVersion}`}</td>
                  <td>{item.type}</td>
                  <td>{`${item.consensus} ${item.consensusVersion}`}</td>
                  <td><a href={item.url} target="_blank" rel="noreferrer">{item.url}</a></td>
                </tr>
                  {
                    item.open ? <tr className="w-auto">
                      <th colSpan="3" className="animate-fade" style={{width: '160px'}}>
                        <p style={{wordWrap: 'break-word', width: '60px'}} className="flex">
                          fdsvvd{'\n'}svddsfsdsvdsvdfdsvvdsvddsfsdsvdsvdfdsvvdsv
                          <br/>ddsfsdsvdsvdfdsvvdsvddsfsdsvdsvdfdsvvdsvddsfsdsvdsvd
                          <br/>fdsvvdsvddsfsdsvdsvdfdsvvdsvddsfsdsvdsvdfdsvvdsvddsfsdsvdsvd</p>
                        <br/>
                        <p className="row-details">
                          ddsfsdsvdsvdfdsvvdsvddsfsdsvdsvdfdsvvdsvddsfsdsvdsvddds<br/>
                        </p>
                      </th>
                    </tr> : null
                  }
                </>
              })
            }
            </tbody>
          </table>

        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 bg-transparent/80 text-base-content">
          <li><a>ddsfsdsvdsvdfdsvvdsvddsfsdsvdsvdfdsvvdsvddsfsdsvdsvddds Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
    </div>

}
