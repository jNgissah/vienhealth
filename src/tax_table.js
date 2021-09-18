import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function AcccessibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        
                        <TableCell align="center">Year</TableCell>
                        <TableCell align="center">2019</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                                         <TableRow >
                           
                            <TableCell align="center">Tax</TableCell>
                            <TableCell align="center">$4,757</TableCell>
                            
                        </TableRow>  <TableRow >
                           
                            <TableCell align="center">Assessment</TableCell>
                            <TableCell align="center">$455,200</TableCell>
                            
                        </TableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}
