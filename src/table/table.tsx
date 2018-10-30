import * as React from 'react';
import './table.scss';
import { MyName } from './interface';

class MyTable extends React.Component<React.Props<MyName[]>> {

    constructor(props: any) {
        super(props);
        console.log(props);
    }


    render() {
        const char = this.props.children;
        return (
            <table className="uk-table uk-table-divider">
                <TableHeader />
                <TableBody>{char}</TableBody>
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="uk-text-center">Name</th>
                <th className="uk-text-center">Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props: any) => {
    const rows = props.children.map((row: MyName, index: number) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


export default MyTable;