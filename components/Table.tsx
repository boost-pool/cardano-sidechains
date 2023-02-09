import React, { useState } from 'react';

export const Table: React.FC = () => {

  const [wallet, setWallets] = useState(undefined);

  return <div className="md:px-20 lg:px-40"
    >
    <div className="overflow-x-auto ">
      <table className="table table-zebra w-full">
        <thead>
        <tr>
          <th>#</th>
          <th className="cursor-pointer" >Name</th>
          <th className="cursor-pointer">Job</th>
          <th className="cursor-pointer">Favorite Color</th>
        </tr>
        </thead>
        <tbody>
        <tr className="hover:opacity-90">
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>
            Rowe-Schoen
            <br/>
            <span className="badge badge-ghost badge-sm">Office Assistant I</span></td>
          <td>Blue</td>
        </tr>
        <div className="collapse-content">
          <tr>
            +info
          </tr>
        </div>
        <tr>
          +info
        </tr>
        <tr className="hover:opacity-90">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <tr className="hover:opacity-90">
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>

}
