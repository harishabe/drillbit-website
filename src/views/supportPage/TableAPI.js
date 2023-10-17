import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {
    SubHeaderTitle
} from './SupportPageStyle';
import {
    Subtitle
} from '../../component/Content/ContentStyles';

const TableAPI = ({
    id,
    headerTitle,
    subTitle,
    tableCell1,
    tableCell2,
    allowedHttpData
}) => {
    return (
        <div style={{ margin: '2rem 0rem 2rem 0rem' }} id={id}>
            <SubHeaderTitle>{headerTitle}</SubHeaderTitle>
            <Subtitle width="100%">
                {subTitle}
            </Subtitle>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{tableCell1}</TableCell>
                            <TableCell>{tableCell2}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allowedHttpData.map((data, i) => (
                            <TableRow key={i}>
                                <TableCell align="left">{data.method}</TableCell>
                                <TableCell align="left">{data.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

TableAPI.propTypes = {
    headerTitle: PropTypes.string,
    subTitle: PropTypes.string,
    tableCell1: PropTypes.string,
    tableCell2: PropTypes.string,
    allowedHttpData: PropTypes.object,
    id:PropTypes.any
};

export default TableAPI;
