import React, { useState } from 'react';
export const Table: React.FC = () => {

  const [wallet, setWallets] = useState(undefined);

  return <div className="md:px-20 lg:px-40"
    >
    <h1>Sidechains list</h1>
    <div role="region" aria-labelledby="caption" tabIndex="0" style={{maxHeight: '600px'}}>
      <table className="bg-transparent rounded-xl" >
        <thead className="bordered">
        <tr >
          <th className="bg-gray-200 dark:bg-gray-900">Teams</th>
          <th className="bg-gray-200 dark:bg-gray-900">1</th>
          <th className="bg-gray-200 dark:bg-gray-900">2</th>
          <th className="bg-gray-200 dark:bg-gray-900">3</th>
          <th className="bg-gray-200 dark:bg-gray-900">4</th>
          <th className="bg-gray-200 dark:bg-gray-900">5</th>
          <th className="bg-gray-200 dark:bg-gray-900">6</th>
          <th className="bg-gray-200 dark:bg-gray-900">7</th>
          <th className="bg-gray-200 dark:bg-gray-900">8</th>
          <th className="bg-gray-200 dark:bg-gray-900">9</th>
          <th className="bg-gray-200 dark:bg-gray-900">Runs</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Milwaukee Brewers</th>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>4</td>
          <td>0</td>
          <td>2</td>
          <td>0</td>
          <td>3</td>
          <td>1</td>
          <td>16</td>
        </tr>
        <tr>
          +info
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Los Angles Dodgers</th>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>2</td>
          <td>4</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>13</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">New York Mets</th>
          <td>0</td>
          <td>1</td>
          <td>4</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>3</td>
          <td>20</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">St. Louis Cardinals</th>
          <td>0</td>
          <td>3</td>
          <td>4</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>3</td>
          <td>2</td>
          <td>17</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Houston Astros</th>
          <td>1</td>
          <td>4</td>
          <td>4</td>
          <td>0</td>
          <td>2</td>
          <td>1</td>
          <td>0</td>
          <td>3</td>
          <td>3</td>
          <td>18</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Toronto Blue Jays</th>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>4</td>
          <td>9</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Boston Red Sox</th>
          <td>1</td>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>0</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
          <td>0</td>
          <td>18</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Chicago Cubs</th>
          <td>0</td>
          <td>3</td>
          <td>3</td>
          <td>0</td>
          <td>4</td>
          <td>0</td>
          <td>0</td>
          <td>3</td>
          <td>3</td>
          <td>16</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Philadelphia Phillies</th>
          <td>2</td>
          <td>1</td>
          <td>4</td>
          <td>4</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>3</td>
          <td>1</td>
          <td>20</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Chicago White Sox</th>
          <td>0</td>
          <td>3</td>
          <td>4</td>
          <td>0</td>
          <td>1</td>
          <td>4</td>
          <td>3</td>
          <td>4</td>
          <td>3</td>
          <td>22</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">San Diego Padres</th>
          <td>4</td>
          <td>4</td>
          <td>1</td>
          <td>3</td>
          <td>2</td>
          <td>3</td>
          <td>1</td>
          <td>0</td>
          <td>3</td>
          <td>21</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Cleveland Indians</th>
          <td>4</td>
          <td>2</td>
          <td>2</td>
          <td>3</td>
          <td>0</td>
          <td>3</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>16</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">San Francisco Giants</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>1</td>
          <td>3</td>
          <td>4</td>
          <td>2</td>
          <td>18</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Cincinatti Reds</th>
          <td>0</td>
          <td>0</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>4</td>
          <td>1</td>
          <td>4</td>
          <td>16</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Minnesota Twins</th>
          <td>2</td>
          <td>4</td>
          <td>2</td>
          <td>3</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>2</td>
          <td>18</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Tampa Bay Rays</th>
          <td>4</td>
          <td>4</td>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>4</td>
          <td>21</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Miami Marlins</th>
          <td>3</td>
          <td>0</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>1</td>
          <td>17</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Oakland Athletics</th>
          <td>3</td>
          <td>3</td>
          <td>4</td>
          <td>2</td>
          <td>4</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>4</td>
          <td>26</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Detroit Tigers</th>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>0</td>
          <td>2</td>
          <td>0</td>
          <td>4</td>
          <td>2</td>
          <td>18</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Pittsburgh Pirates</th>
          <td>0</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>4</td>
          <td>2</td>
          <td>22</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Seattle Mariners</th>
          <td>2</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>2</td>
          <td>20</td>
        </tr>
        <tr>
          <th className="bg-gray-100 dark:bg-gray-800">Atlanta Braves</th>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>3</td>
          <td>1</td>
          <td>3</td>
          <td>4</td>
          <td>21</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>

}
