import * as React from 'react';
import Table from 'react-bootstrap/Table';
import PortfolioStocks from './PortfolioStocks';
import { Stock } from '../models/stockModel';
import { PortfolioStock } from '../models/portfolioStockModel';

interface IPortfolioTableProps {
    portfolioStocks: PortfolioStock[],
    stockRatings: Stock[]
}

const PortfolioLists: React.FunctionComponent<IPortfolioTableProps> = ({portfolioStocks, stockRatings }) => {
    console.log('portfolioStocks: ', portfolioStocks)
    
    return ( 
            <Table striped>
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Company Name</th>
                        <th>Current Stock Price</th>
                        <th>Number Stock Shares</th>
                        <th>Transaction Total Value</th>
                        <th>Transaction Type</th>
                        <th>Transaction Time</th>
                        <th>Environment Rating</th>
                        <th>Social Rating</th>
                        <th>Governance Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolioStocks.map((portfolioStock) => (<PortfolioStocks stockRatings={stockRatings} portfolioStock={portfolioStock} {...portfolioStock}/>))}
                </tbody>
            </Table>
    );
};

export default PortfolioLists;
