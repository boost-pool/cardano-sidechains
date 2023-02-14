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
    <p className="text-2xl text-center pb-8 font-bold">
      Cardano Sidechains</p>
    <fieldset className="w-full space-y-1 my-2">
      <label htmlFor="Search" className="hidden">Search</label>
      <div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2 mr-8">
			<button type="button" title="search" className="mr-4 focus:outline-none ">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
					<path
            d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
        <input type="text" name="Search" placeholder="Search..."
               className=" py-2 pl-10 text-lg rounded-t-md w-full focus:outline-none bg-gray-200 dark:bg-gray-900 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
      </div>
    </fieldset>
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
